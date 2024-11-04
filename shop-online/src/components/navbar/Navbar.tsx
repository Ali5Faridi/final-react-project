import React from 'react'
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Container  from '../container/Container';
import { useShoppingCartContext } from '../../context/ShoppingCartContext';
import Button from '../button/Button';


function Navbar() {
    
   const {cartQty, handleLogout} = useShoppingCartContext();

  return (
    <div className='h-12 border-b shadow flex items-center bg-red-200'>
      <Container>
        <div className='flex justify-between items-center'>
        <ul className='flex'>
        <li className='ml-20'><Link to="/"> Home </Link></li>
        <li className='ml-4'><Link to="/store">Store</Link></li>
       </ul>
       <div>
        <Button onClick={handleLogout}>Logout</Button>
        <Link className='relative' to="/cart">
        <button className='text-green-600 mr-12'><ShoppingCartIcon /></button>
        <span className='absolute w-8 h-8 bg-red-400 flex justify-center items-center rounded-full right-0 -top-2'>{cartQty !== 0 ? cartQty: '0'}</span>
        </Link>
          
       </div>
        </div>
      
        </Container>

       
    </div>
  )
}

export default Navbar
