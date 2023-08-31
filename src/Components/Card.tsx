import { Link } from "react-router-dom";
import { DataType } from "../Api/data";
import { useContext } from "react";
import { Context } from "../App";

type CardProps = {
  data: DataType;
};

function Card({ data }: CardProps) {
  const { state } = useContext(Context);
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
  } = data;
  return (
    <div
      className={`w-full aspect-[3/3] md:aspect-[3/4] rounded-xl overflow-hidden ${
        state.checked
          ? "bg-blue-300/50 border-red-500 border-2"
          : "border border-gray-500"
      }`}
    >
      <Link to={`/${id}`}>
        <div className="w-full h-2/5 sm:h-3/5  overflow-hidden">
          <img src={imageUrl} alt="" className="w-full object-contain" />
        </div>
        <div className="h-full px-3 py-3">
          <div className="w-full flex justify-between">
            <p className="font-bold">{title}</p>
            <p className="font-bold">{price}/-</p>
          </div>
          <p className="text-sm">{address}</p>
          <p className="mt-6">
            <span className="font-bold">Beds :</span>
            {beds} | <span className="font-bold">Baths :</span>
            {bath}
          </p>
          <p>
            <span className="font-bold">Covered Area (Sq Ft)</span> :{" "}
            {coveredAreaSQFT}
          </p>
          <p>
            <span className="font-bold">Property Type :</span>
            {propertyType}
          </p>

          <p>
            <span className="font-bold">Usable for Commercial Purposes :</span>

            {isCommercial ? "Yes" : "No"}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Card;

// q: what was the css property to make the image fill the container?
// a: object-cover
