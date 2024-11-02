import React from 'react'
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


function Navbar() {
  return (
    <div className='h-12 border-b shadow flex justify-between items-center'>
       <ul className='flex'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/store">Store</Link></li>
       </ul>
       <div>
           <button className='text-green-600'><ShoppingCartIcon /></button>
       </div>
    </div>
  )
}

export default Navbar
