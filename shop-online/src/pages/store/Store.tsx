import React from 'react'
import ProductItem from '../../components/productItem/ProductItem'

function Store() {
  return (
    <div>
      <h1 className='mt-5'>New Product</h1>
      <div>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </div>
  )
}

export default Store
