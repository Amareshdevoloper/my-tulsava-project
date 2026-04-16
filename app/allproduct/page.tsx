"use client";

import ProductCard from "@/_component/BestSelling/ProductCard";
import { products } from "@/_component/BestSelling/products";
import Footer from "@/_component/Footer";
import Navbar from "@/_component/Navbar";
import { Minus, Plus, X } from "lucide-react";
import { useState } from "react";

const AllProductPage = () => {
  // ✅ price as number
  const [price, setPrice] = useState<number>(3799);

  const [open, setOpen] = useState<boolean>(true);
  const [openFeaturedProducts, setOpenFeaturedProduct] = useState<boolean>(true);
  const [priceOpen, setPriceOpen] = useState<boolean>(true);
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  return (
    <>
      <Navbar />

      {/* Header */}
      <div className="h-30 bg-[rgb(255,246,234)]">
        <h1 className="pt-15 text-[rgb(118,93,69)] font-bold text-3xl text-center">
          Products
        </h1>
      </div>

      {/* MAIN SECTION */}
      <section className="flex bg-[rgb(255,246,234)]">

        {/* Mobile Filter Button */}
        {!showSidebar && (
          <button
            onClick={() => setShowSidebar(true)}
            className="lg:hidden fixed ml-5 top-45 bg-[rgb(118,93,69)] text-white px-8 py-2 rounded-md z-50"
          >
            Filter
          </button>
        )}

        {/* SIDEBAR */}
        <div
          className={`w-80 text-[rgb(118,93,69)] p-8 border-r bg-[rgb(255,246,234)]
          fixed lg:static top-0 left-0 h-full z-40 transition-transform duration-300
          ${showSidebar ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
        >
          {/* Close Button */}
          <button
            onClick={() => setShowSidebar(false)}
            className="lg:hidden mb-4 ml-50"
          >
            <X size={28} />
          </button>

          <h1 className="font-bold text-lg">Products Category</h1>
          <hr className="mt-5 border-gray-200" />

          {/* Availability */}
          <div>
            <div
              className="flex justify-between mt-8 cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <h2>Availability</h2>
              {open ? <Minus /> : <Plus />}
            </div>

            {open && (
              <div className="mt-4">
                <input type="checkbox" />
                <label className="ml-2">In stock (56)</label>
                <br />

                <input type="checkbox" />
                <label className="ml-2">Out of stock (53)</label>

                <hr className="mt-5 border-gray-200" />
              </div>
            )}
          </div>

          {/* Price Filter */}
          <div>
            <div
              className="flex justify-between mt-6 cursor-pointer"
              onClick={() => setPriceOpen(!priceOpen)}
            >
              <h2>Price</h2>
              {priceOpen ? <Minus /> : <Plus />}
            </div>

            {priceOpen && (
              <div className="mt-5">
                {/* Range Slider */}
                <input
                  type="range"
                  min="0"
                  max="3799"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}  // ✅ FIX
                  className="w-full accent-black cursor-pointer"
                />

                <p className="mt-3 text-[15px]">
                  Price: <span className="font-semibold">Rs. 0</span> -
                  <span className="font-semibold"> Rs. {price}</span>
                </p>

                <hr className="mt-5 border-gray-200" />
              </div>
            )}
          </div>

          {/* Featured Products */}
          <div>
            <div
              className="flex justify-between mt-8 cursor-pointer"
              onClick={() => setOpenFeaturedProduct(!openFeaturedProducts)}
            >
              <h2>Featured Products</h2>
              {openFeaturedProducts ? <Minus /> : <Plus />}
            </div>

            {openFeaturedProducts && (
              <div className="mt-5">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="w-full p-3 border border-gray-200 rounded-xl hover:shadow-md mb-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-28 overflow-hidden rounded-xl">
                        <img
                          src="/p4.jpg"
                          alt="product"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div>
                        <h2 className="text-sm font-semibold">
                          Pure Cotton Thread Work Suit
                        </h2>

                        <span className="text-sm font-bold">₹2,199</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex-1 pl-15 md:p-10 h-screen overflow-y-auto">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {products.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default AllProductPage;
