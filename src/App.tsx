import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SingleProperty from "./Pages/SingleProperty";
import { createContext } from "react";
import { useReducer } from "react";
import { initialState, reducer } from "./Reducer/reducer";
import { filter_data, load_data, paginate_data } from "./Utils/actions";
import { useEffect } from "react";

type ContextType = {
  state: any;
  dispatch: React.Dispatch<any>;
};

export const Context = createContext<ContextType>({} as ContextType);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    try {
      const response = await fetch("../../src/Api/data.json", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const data = await response.json();
      dispatch({
        type: load_data,
        payload: {
          data,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // hit dispatch when state.data and state.filters changes
    dispatch({
      type: filter_data,
    });
    dispatch({
      type: paginate_data,
      payload: {
        page: 1,
      },
    });
  }, [state.data, state.filters]);

  return (
    <BrowserRouter>
      <Context.Provider value={{ state, dispatch }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<SingleProperty />} />
        </Routes>
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
