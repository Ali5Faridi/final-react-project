
import Button from "../button/Button"
import { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { getProduct } from "../../services/api";
import {IProduct} from "../../types/server";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";


interface ICartItem {
    id: number
    qty: number
}

function CartItem({id, qty}: ICartItem) {

    const [product, setProduct] = useState<IProduct>();


    const { handleIncreaseProductQty, handleDecreaseProductQty, handleRemoveProduct } = useShoppingCartContext();

  useEffect(() => {
    getProduct(id).then((data) => {
      setProduct(data);
      
    });
  }, []);

  return (
    <div className="flex mt-4 border-b pb-2">
       
     <Link to={`/product/${id}`}>
     <img className="w-56 h-34 rounded p-3" src={product?.image} alt="iphone.png" />
     </Link>


        <div className="p-4">
            <h1>{product?.title}</h1>
          <div className="mt-3 pt-2">
          <Button variant="primary" onClick={() => handleIncreaseProductQty(id)}>+</Button>
           <span className="mx-2">{qty}</span>
           <Button className="" variant="primary" onClick={() => handleDecreaseProductQty(id)}>-</Button>
           <Button className="ml-2" variant="danger" onClick={() => handleRemoveProduct(id)}>Remove</Button>
          </div>
            
        </div>
    </div>
  )
}

export default CartItem
