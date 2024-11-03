// import { Container } from '@mui/material'
// import { Button } from '@mui/material'
import { useParams } from "react-router-dom";
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";
import { useEffect, useState } from "react";
import { getProduct } from "../../services/api";
import { IProduct } from "../../types/server";
import {useShoppingCartContext} from "../../context/ShoppingCartContext";

function Product() {
  const params = useParams<{ id: string }>();
  const [product, setProduct] = useState<IProduct>();

  const {handleIncreaseProductQty} = useShoppingCartContext();

  useEffect(() => {
    getProduct(params.id as string).then((data) => {
      setProduct(data);
    });
  }, []);

  return (
    <div>
      <Container>
        <div className="h-96 grid grid-cols-12">
          <div className="bg-slate-400 col-span-2 p-4">
            <img
              className="rounded"
              src={product?.image}
              alt="iphone-15"
            />

            <Button onClick={()=> handleIncreaseProductQty(parseInt(params.id as string))} className="w-full" variant="primary">
              {" "}
              Add to cart{" "}
            </Button>
          </div>

          <div className="bg-yellow-100 col-span-10 p-4">
            <h1>{product?.title}</h1>
            <div>
              <p>{product?.price} € </p>
              <p className="p-3 bg-lime-200">{product?.description}</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Product;
