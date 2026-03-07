'use client'

import Link from 'next/link'
import { Heart, Eye, Layers } from 'lucide-react'

const ProductCard = ({ product }: any) => {
  return (
    <div
      className="
        min-w-[70%] sm:min-w-[260px]
        max-w-[260px]
        bg-[#fff6ea]
        group
      "
    >
      <Link href={product.url} target="_blank">

        {/* IMAGE */}
        <div className="relative rounded-2xl overflow-hidden">

          <img
            src={product.image}
            className="
              w-full
              h-[260px] sm:h-[360px]
              object-cover
            "
          />

          {/* Discount */}
          {product.discount && (
            <span className="absolute top-3 left-3 bg-[#d64c4c] text-white text-xs px-3 py-1 rounded-full">
              {product.discount}
            </span>
          )}

          {/* Out of Stock */}
          {product.outOfStock && (
            <span className="absolute top-11 left-3 bg-[#6b6b6b] text-white text-xs px-3 py-1 rounded-full">
              Out of Stock
            </span>
          )}

          {/* Icons */}
          <div
            className="
              absolute right-3 top-1/2 -translate-y-1/2
              flex flex-col gap-3
              opacity-100 sm:opacity-0
              sm:group-hover:opacity-100
              transition
            "
          >
            <button className="bg-white p-2 rounded-full shadow">
              <Heart size={16} />
            </button>
            <button className="bg-white p-2 rounded-full shadow">
              <Layers size={16} />
            </button>
            <button className="bg-white p-2 rounded-full shadow">
              <Eye size={16} />
            </button>
            
          </div>

          {/* Select Button */}
          <button
            className="
              absolute bottom-4 left-1/2 -translate-x-1/2
              bg-white px-6 py-2 rounded-full text-sm
              opacity-100 sm:opacity-0
              sm:group-hover:opacity-100
              transition w-40
            "
          >
            Select Options
          </button>
        </div>

        {/* CONTENT */}
        <div className="text-center mt-3 px-2">
          <p className="text-[14px] leading-snug">
            {product.title}
          </p>

          <div className="mt-1 text-[14px]">
            <span className="font-semibold">
              Rs. {product.price.toLocaleString()}
            </span>

            {product.oldPrice && (
              <span className="line-through ml-2 text-gray-400">
                Rs. {product.oldPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard
