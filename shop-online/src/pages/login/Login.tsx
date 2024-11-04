
import Container from '../../components/container/Container';
import { useShoppingCartContext } from '../../context/ShoppingCartContext';
import Button from '../../components/button/Button';

function Login() {

       const {handleLogin} = useShoppingCartContext();

  return (
    <div>
      <Container>

        <div className='bg-slate-400 p-12 rounded'>
            <input className='mb-2 rounded' type="text" placeholder='username' />
            
            <input className='rounded' type="password" placeholder='password' />
            <Button onClick={handleLogin}>Login</Button>

        </div>

      </Container>
    </div>
  )
}

export default Login
