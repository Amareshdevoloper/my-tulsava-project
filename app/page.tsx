'use client'

import React, { useState } from 'react'
import { CardSim, ChevronLeft, ChevronRight, Link } from 'lucide-react'
import BestSellingSection from '@/_component/BestSelling/BestSellingSection'
import { useRouter } from 'next/navigation'
import Navbar from '@/_component/Navbar'
import Footer from '@/_component/Footer'
import { products, trendingProducts } from '@/_component/BestSelling/products'

 
const page = () => {
  const images = [
    "big.jpg",
    "edit.jpg",
  ]

  const [current, setCurrent] = useState(0)

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    )
  }
  const router=useRouter()
  
    
  return (
    <>
      {/* HERO SLIDER */}
      <Navbar/>
      
      <div className='relative h-[220px] sm:h-[350px] md:h-[450px] lg:h-[600px]'>
        
         
        <img
          src={images[current]}
          className='w-full h-full object-cover'
        />
        
       <button  onClick={() => router.push('/orders')}   className='rounded-full h-12 w-50 px-8 bg-[rgb(118,93,69)] text-white absolute top-120 ml-170  '>
           Sign up
            </button>
            
        
        <ChevronLeft
          onClick={prevImage}
          className="absolute left-3 top-1/2 -translate-y-1/2
                     w-9 h-9 md:w-10 md:h-10
                     bg-white/70 rounded-full cursor-pointer"
                     
        />

        <ChevronRight
          onClick={nextImage}
          className="absolute right-3 top-1/2 -translate-y-1/2
                     w-9 h-9 md:w-10 md:h-10
                     bg-white/70 rounded-full cursor-pointer"
        />
      </div>

      {/* TOP COLLECTION */}
      <div className='px-4 sm:px-8 md:px-15 py-12 text-[rgb(110,80,50)] bg-[rgb(255,246,234)]'>
        <div className='text-center'>
          <h1 className='font-bold text-2xl md:text-3xl'>
            Top Collections
          </h1>
          <p className='mt-3 mb-10 max-w-xl mx-auto text-sm md:text-base'>
            Express your style with our standout collection—fashion meets sophistication
          </p>
        </div>

        {/* Images */}
        <div className='flex flex-col md:flex-row justify-center items-center gap-8 md:gap-20'>
          <div className='w-40 sm:w-48 md:w-50'>
            <img
              src='suit.jpg'
              className='w-full h-60 object-cover rounded-3xl'
            />
            <p className='text-center mt-2'>Suit</p>
          </div>

          <div className='w-40 sm:w-48 md:w-50'>
            <img
              src='sale.jpg'
              className='w-full h-60 object-cover rounded-3xl'
            />
            <p className='text-center mt-2'>Sale</p>
          </div>
        </div>
      </div>

      {/* BEST SELLING */}
      

        <BestSellingSection data={products}/>
        <BestSellingSection data={trendingProducts}/>


        {/* Products future-ready */}
        <div className='flex flex-wrap justify-center gap-6'>
          {/* product cards will come here */}
        </div>

      
      <Footer/>
    </>
  )
}

export default page
