
import { Products } from "../../types/server";

type ProductItem = Products



function ProductItem({title, price, description, image}: ProductItem) {
  return (
    <div className="p-1 shadow border rounded pb-4">
      <img className="rounded-t" src={image} alt="iphone-15" />

      <div className="bg-slate-300 flex justify-between items-center border-b p-4 mt-2 rounded">
        <h1>{title}</h1>
        <span>{price} €</span>
      </div>
      <div className="p-4 bg-orange-200 mt-2 rounded">
        <p className="line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
}

export default ProductItem;
