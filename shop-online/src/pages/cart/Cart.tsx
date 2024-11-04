import Container from "../../components/container/Container";
import CartItem from "../../components/cartItem/CartItem";
import Button from "../../components/button/Button";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

function Cart() {
  const { cartItems } = useShoppingCartContext();

  return (
    <div>
      <Container>
        <div className="">
          {cartItems.map((item) => (
            <CartItem {...item} />
          ))}
          ;
        </div>

        <div className="bg-cyan-100 rounded p-6">
          <p>Total price: 3256$</p>
          <p> discount: 15%</p>
          <p>Final price: 2871$</p>
        </div>
        <Button className="mt-2 ml-10" variant="success">
          Checkout
        </Button>
      </Container>
    </div>
  );
}

export default Cart;
