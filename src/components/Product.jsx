import React from 'react'
import Button from './Button'

  
function Product({ products ,mover,count}) {

  


  return (
    <div className='w-full py-50'>
      <div className='container max-w-screen-xl mx-auto  items-center'>

        <div className='max-w-screen-xl mx-auto flex items-center justify-between mb-50'>

          <div onMouseEnter={()=>{mover(count)}} className="max-w-screen-xl mx-auto flex items-center justify-between">

            <h1 className='text-5xl font-medium '>Artiquel</h1>
            <div className='dets w-1/3'>
                 <p className='mb-10'>With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.</p>
                 <div className='flex items-center gap-10'> 
                  <Button />
                  <Button>Case Study</Button>
                 </div>
          </div>

          </div>

        </div>
        <div className='max-w-screen-xl mx-auto flex items-center justify-between mb-50'>
            <h1 className='text-5xl font-medium '>TTR</h1>
            <div className='dets w-1/3'>
                 <p className='mb-10'>With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.</p>
                 <div className='flex items-center gap-10'> 
                  <Button />
                  <Button>Case Study</Button>
                 </div>
          </div>
        </div>
        <div className='max-w-screen-xl mx-auto flex items-center justify-between mb-50'>
            <h1 className='text-5xl font-medium '>YIR 2022</h1>
            <div className='dets w-1/3'>
                 <p className='mb-10'>Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.</p>
                 <div className='flex items-center gap-10'> 
                  <Button />
                  <Button>Case Study</Button>
                 </div>
          </div>
        </div>
        <div className='max-w-screen-xl mx-auto flex items-center justify-between mb-50'>
            <h1 className='text-5xl font-medium '>Yahoo!</h1>
            <div className='dets w-1/3'>
                 <p className='mb-10'>We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.</p>
                 <div className='flex items-center gap-10'> 
                  <Button />
                  <Button title="Case Study" />
                 </div>
          </div>
        </div>
     </div>      
    </div>
  )

  
} 


export default Product;









