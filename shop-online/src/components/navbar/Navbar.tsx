import React from 'react'
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Container  from '../container/Container';


function Navbar() {
  return (
    <div className='h-12 border-b shadow flex items-center bg-red-200'>
      <Container>
        <div className='flex justify-between items-center'>
        <ul className='flex'>
        <li className='ml-20'><Link to="/"> Home </Link></li>
        <li className='ml-4'><Link to="/store">Store</Link></li>
       </ul>
       <div>
        <Link to="/cart">
        <button className='text-green-600 mr-12'><ShoppingCartIcon /></button>
        </Link>
          
       </div>
        </div>
      
        </Container>

       
    </div>
  )
}

export default Navbar
