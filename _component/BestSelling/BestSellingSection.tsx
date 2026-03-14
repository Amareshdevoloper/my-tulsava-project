'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ProductCard from './ProductCard'
import { products } from './products'

const BestSellingSection = ({data,title,subTitle}) => {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)


console.log("wertyuiuhgfd",data);

  const scrollAmount = 300 // card width + gap

  const nextSlide = () => {
    if (!sliderRef.current) return
    sliderRef.current.scrollBy({
      left: scrollAmount,
      behavior: 'smooth',
    })
  }

  const prevSlide = () => {
    if (!sliderRef.current) return
    sliderRef.current.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth',
    })
  }

  // AUTO SLIDE
  useEffect(() => {
    if (isHovering) return

    const interval = setInterval(() => {
      if (!sliderRef.current) return

      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current

      if (scrollLeft + clientWidth >= scrollWidth - 5) {
        sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        nextSlide()
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [isHovering])

  return (
    <section className="bg-[#fff6ea] py-16 relative">

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold">{title}</h2>
        <p className="mt-2 text-sm"> {subTitle}</p>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2
       md:bg-white p-3 rounded-full shadow z-10 bg-gray-200 opacity-50"
      >
        <ChevronLeft  />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2
        md:bg-white p-3 rounded-full shadow z-10 bg-gray-200 opacity-50"
      >
        <ChevronRight />
      </button>

      {/* Slider */}
      <div
        ref={sliderRef}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="flex gap-8 overflow-x-scroll scroll-smooth px-10
        scrollbar-hide"
      >
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default BestSellingSection
