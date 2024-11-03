import { useEffect, useState  } from "react";
import ProductItem from "../../components/productItem/ProductItem";
// import { Container } from '@mui/material'
import Container from "../../components/container/Container";
import { Link } from "react-router-dom";
import { getProducts } from "../../services/api";
import {IProduct} from "../../types/server";


function Store() {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    getProducts().then((result) => {
      setProducts(result);
    });
  }, []);

  return (
    <div>
      <Container>
        <h1 className="mt-5 pl-4 p-3 bg-lime-200">New Product</h1>
        <div className="grid grid-cols-4 gap-4 pl-4 mt-4">
          {products.map((item) => (
            
            <Link key={item.id} to={`/product/${item.id}`}>
            <ProductItem {...item} />
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Store;
