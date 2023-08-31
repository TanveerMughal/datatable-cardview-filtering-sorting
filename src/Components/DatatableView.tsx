import { DataType } from "../Api/data";
import TableHeader from "./TableHeader";
import { callbackParams } from "../Pages/Home";
import { tableHeadTitles } from "../Utils/constants";
import { useContext } from "react";
import { Context } from "../App";

type DatatableViewProps = {
  data: DataType[] | [];
  sortData: ({}: callbackParams) => void;
};

function DatatableView({ data, sortData }: DatatableViewProps) {
  return (
    <div className="w-full flex justify-center">
      <table className="w-full">
        <thead>
          <tr>
            {tableHeadTitles.map((item) => {
              const { title, title_key } = item;

              return (
                <th key={title}>
                  {" "}
                  {title === "Image" ? (
                    <TableHeader
                      title={title}
                      title_key={title_key}
                      callback={sortData}
                      className="py-3"
                      controls={false}
                    />
                  ) : (
                    <TableHeader
                      title={title}
                      title_key={title_key}
                      callback={sortData}
                      className="py-3"
                    />
                  )}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => {
            const {
              id,
              imageUrl,
              title,
              address,
              beds,
              bath,
              coveredAreaSQFT,
              propertyType,
              isCommercial,
              price,
            } = item;
            return (
              <TableBody
                key={id}
                imageUrl={imageUrl}
                title={title}
                address={address}
                beds={beds}
                bath={bath}
                coveredAreaSQFT={coveredAreaSQFT}
                propertyType={propertyType}
                isCommercial={isCommercial}
                price={price}
                id={id}
              ></TableBody>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

type TableBodyProps = {
  imageUrl: string;
  title: string;
  address: string;
  beds: number;
  bath: number;
  coveredAreaSQFT: number;
  propertyType: string;
  isCommercial: boolean;
  price: number;
  key: string;
  id: string;
};

function TableBody(props: TableBodyProps) {
  const { state } = useContext(Context);
  return (
    <tr className={`${state.checked ? "bg-blue-300/50" : null}`}>
      <td>
        <img
          src={props.imageUrl}
          alt=""
          className="w-[120px] aspect-square mx-auto my-2 rounded-lg"
        />
      </td>
      <td>{props.title}</td>
      <td>{props.address}</td>
      <td>{props.beds}</td>
      <td>{props.bath}</td>
      <td>{props.coveredAreaSQFT}</td>
      <td>{props.propertyType}</td>
      <td>{props.isCommercial ? "Yes" : "No"}</td>
      <td>{props.price}</td>
    </tr>
  );
}

export default DatatableView;
