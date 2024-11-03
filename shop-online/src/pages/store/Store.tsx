import React from "react";
import ProductItem from "../../components/productItem/ProductItem";
// import { Container } from '@mui/material'
import Container from "../../components/container/Container";
import { Link } from "react-router-dom";

function Store() {
  return (
    <div>
      <Container>
        <h1 className="mt-5 pl-4 p-3 bg-lime-200">New Product</h1>
        <div className="grid grid-cols-4 gap-4 pl-4 mt-4">
       
        <Link to={`/product/${1}`}>
        <ProductItem />
        </Link>

        <Link to={`/product/${2}`}> 
        <ProductItem />
        </Link>

        <Link to={`/product/${3}`}>
        <ProductItem />
        </Link>

        <Link to={`/product/${4}`}>
        <ProductItem />
        </Link>

        <Link to={`/product/${5}`}>
        <ProductItem />
        </Link>

        </div>
      </Container>
    </div>
  );
}

export default Store;
