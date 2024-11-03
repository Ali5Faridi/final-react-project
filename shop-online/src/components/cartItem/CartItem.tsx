
import Button from "../button/Button"

function CartItem() {
  return (
    <div className="flex mt-4 border-b pb-2">
       
      <img className="w-56 h-34 rounded p-3" src="./src/assets/iphone-15.jpg" alt="iphone.png" />
        <div className="p-4">
            <h1>Product:Apple</h1>
          <div className="mt-3 pt-2">
          <Button variant="primary">+</Button>
           <span className="mx-2">2</span>
           <Button className="" variant="primary">-</Button>
           <Button className="ml-2" variant="danger">Remove</Button>
          </div>
            
        </div>
    </div>
  )
}

export default CartItem
