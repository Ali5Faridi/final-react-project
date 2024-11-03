import React from "react";

function ProductItem() {
  return (
    <div className="p-1 shadow border rounded pb-4">
      <img className="rounded-t" src="./src/assets/iphone-15.jpg" alt="iphone-15" />

      <div className="bg-slate-300 flex justify-between items-center border-b p-4 mt-2 rounded">
        <h1>Product:Apple</h1>
        <span>price:1436$</span>
      </div>
      <div className="p-4 bg-orange-200 mt-2 rounded">
        <p className="line-clamp-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          provident voluptatibus iusto quibusdam illo officia minima harum
          quisquam incidunt aliquam libero repellat exercitationem eos ad culpa
          accusamus, delectus tempora nemo!
        </p>
      </div>
    </div>
  );
}

export default ProductItem;
