import Card from "./Card";
import { DataType } from "../Api/data";
import { callbackParams } from "../Pages/Home";
import SortingComponentForCardView from "./SortingComponentForCardView";

type CardViewProps = {
  data: DataType[] | [];
  sortData: ({}: callbackParams) => void;
};

function CardView({ data, sortData }: CardViewProps) {
  return (
    <div className="w-full flex flex-col items-center">
      <SortingComponentForCardView sortData={sortData} />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 w-full">
        {data?.map((item) => {
          return <Card key={item.id} data={item} />;
        })}
      </div>
    </div>
  );
}

export default CardView;
