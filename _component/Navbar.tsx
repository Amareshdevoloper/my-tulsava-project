'use client'

import { CircleUserRound, Heart, Search, ShoppingCart, Menu, X } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <>
      {/* NAVBAR */}
      <nav className='h-30 bg-[rgb(255,246,234)] flex justify-between items-center p-5 text-[rgb(118,93,69)]'>

        {/* Mobile Menu Icon */}
        <div className='md:hidden'>
          <Menu onClick={() => setMenuOpen(true)} className='cursor-pointer' />
        </div>

        {/* Desktop Links */}
        <div className='hidden md:flex gap-5'>
          <Link href={'/'}>Home</Link>
          <Link href={'/allproduct'}>All Product</Link>
          <Link href={'/orders'}>Orders</Link>
          <Link href={'/bestselling'}>Best Selling</Link>
          <Link href={'/contact'}>Contact</Link>
        </div>

        {/* Logo */}
        <Link href={"/"}>
          <img
            src="//tulsava.in/cdn/shop/files/Threads_of_grace_1.png?v=1752664308"
            className='h-20'
          />
        </Link>

        {/* Icons */}
        <div className='flex items-center gap-4'>

          {/* Desktop Search */}
          <div className='hidden md:flex border rounded-full p-1 pl-2 items-center gap-2'>
            <Search />
            <input
              type="text"
              placeholder='I am looking for.....'
              className='pl-2 outline-none bg-transparent'
            />
          </div>

          {/* Mobile Search */}
          <div className='md:hidden'>
            <Search
              className='cursor-pointer'
              onClick={() => setSearchOpen(!searchOpen)}
            />
          </div>

          <CircleUserRound />
          <Heart />
          <ShoppingCart />
        </div>
      </nav>

      {/* Mobile Search Input */}
      {searchOpen && (
        <div className='md:hidden px-4 py-2 bg-[rgb(255,246,234)]'>
          <input
            type="text"
            placeholder='I am looking for.....'
            className='w-full border rounded-full px-4 py-2 outline-none'
          />
        </div>
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[rgb(255,246,234)] z-50 transform transition-transform duration-300
        ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className='flex justify-between items-center p-5'>
          <h2 className='font-semibold'>Menu</h2>
          <X onClick={() => setMenuOpen(false)} className='cursor-pointer' />
        </div>

        <div className='flex flex-col gap-4 p-5'>
          <Link href='/' onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href='/allproduct' onClick={() => setMenuOpen(false)}>All Product</Link>
          <Link href='/orders' onClick={() => setMenuOpen(false)}>Orders</Link>
          <Link href='/bestselling' onClick={() => setMenuOpen(false)}>Best Selling</Link>
          <Link href='/contact' onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className='fixed inset-0 bg-black/30 z-40'
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  )
}

export default Navbar
