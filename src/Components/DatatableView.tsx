import { DataType } from "../Api/data";
import TableHeader from "./TableHeader";
import { callbackParams } from "../Pages/Home";
import { tableHeadTitles } from "../Utils/constants";

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
              <tr key={id}>
                <td>
                  <img
                    src={imageUrl}
                    alt=""
                    className="w-[120px] aspect-square mx-auto my-2 rounded-lg"
                  />
                </td>
                <td>{title}</td>
                <td>{address}</td>
                <td>{beds}</td>
                <td>{bath}</td>
                <td>{coveredAreaSQFT}</td>
                <td>{propertyType}</td>
                <td>{isCommercial ? "Yes" : "No"}</td>
                <td>{price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DatatableView;
