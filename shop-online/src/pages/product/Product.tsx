// import { Container } from '@mui/material'
// import { Button } from '@mui/material'
import { useParams } from 'react-router-dom'
import Container from '../../components/container/Container'

import Button from '../../components/button/Button'

function Product() {

    const params = useParams()
  return (
    <div>
      <Container>
      <div className="h-96 grid grid-cols-12">
        <div className='bg-slate-400 col-span-2 p-4'>
        <img className="rounded" src="../src/assets/iphon.webp" alt="iphone-15" />
         
         <Button className='w-full' variant="primary"> Add to cart </Button>

        </div>
      

      <div className="bg-yellow-100 col-span-10 p-4">
        <h1>Product:Apple</h1>
        <div>
        <p>price:1436$</p>
            <p className="p-3 bg-lime-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                provident voluptatibus iusto quibusdam illo officia minima harum
                quisquam incidunt aliquam libero repellat exercitationem eos ad culpa
                accusamus, delectus tempora nemo!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                provident voluptatibus iusto quibusdam illo officia minima harum
                quisquam incidunt aliquam libero repellat exercitationem eos ad culpa
                accusamus, delectus tempora nemo!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                provident voluptatibus iusto quibusdam illo officia minima harum
                quisquam incidunt aliquam libero repellat exercitationem eos ad culpa
                accusamus, delectus tempora nemo!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                provident voluptatibus iusto quibusdam illo officia minima harum
                quisquam incidunt aliquam libero repellat exercitationem eos ad culpa
                accusamus, delectus tempora nemo!
            </p>
        </div>
       

      
      </div>
      </div>
      </Container>
       

    </div>
  )
}

export default Product

