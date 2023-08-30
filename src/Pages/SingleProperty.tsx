import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { DataType } from "../Api/data";
import { Context } from "../App";

function SingleProperty() {
  const context = useContext(Context);
  const { id } = useParams();
  const [item, setItem] = useState<DataType | undefined>(undefined);

  useEffect(() => {
    // filter data from state.data based on id
    const filteredProperty = context?.state?.data?.find(
      (item: DataType) => item.id === id
    );
    setItem(filteredProperty);
  }, [id, context?.state?.data]);

  return (
    <div className="">
      <div className="max-w-[1300px] mx-auto px-10">
        <div className="grid grid-cols-2 gap-6 mt-[100px]">
          <div className="flex justify-end">
            <img
              src={item?.imageUrl}
              alt="img"
              className="w-1/2 object-cover"
            />
          </div>
          <div>
            <p className="text-2xl font-bold">{item?.title}</p>
            <p className="text-sm">{item?.address}</p>
            <p className="text-sm">
              <span className="font-bold">Beds :</span>
              {item?.beds} | <span className="font-bold">Baths :</span>
              {item?.bath}
            </p>
            <p className="text-sm">
              <span className="font-bold">Covered Area (Sq Ft)</span> :{" "}
              {item?.coveredAreaSQFT}
            </p>
            <p className="text-sm">
              <span className="font-bold">Property Type :</span>
              {item?.propertyType}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProperty;
