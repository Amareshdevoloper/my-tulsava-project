import { Facebook, Instagram } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className='text-[rgb(110,80,50)] bg-[rgb(255,246,234)]
         px-5 py-12
        flex flex-col md:flex-row
        justify-center md:justify-between
        items-start
        gap-12 md:gap-15 md:border'>

        {/* Help Customer */}
        <div className='max-w-sm text-center md:text-left'>
          <h1 className='font-bold font-serif pb-4 text-[22px] md:text-[25px]'>
            Help Customer
          </h1>

          <p className='pb-3 text-[14px] md:text-[15px]'>
            Find a location nearest you to reduce shipping costs and make shopping easier
          </p>

          <p className='pb-3 text-[14px] md:text-[15px]'>
            Address: 246-248, Mahavir nagar, Jaipur (Rajasthan)
          </p>

          <p className='pb-3 text-[14px] md:text-[15px]'>
            +918890008448
          </p>

          <p className='pb-3 text-[14px] md:text-[15px]'>
            Mediachaicoffee@gmail.com
          </p>

          <div className='flex justify-center md:justify-start gap-3 mt-4'>
            <Facebook className='h-10 w-10 border p-2 rounded-full cursor-pointer' />
            <Instagram className='h-10 w-10 border p-2 rounded-full cursor-pointer' />
          </div>
        </div>

        {/* Policy */}
        <div className='text-center md:text-left'>
          <h1 className='font-bold font-serif pb-4 text-[22px] md:text-[25px]'>
            Policy
          </h1>

          <div className='flex flex-col gap-2 text-[14px] md:text-[15px]'>
            <Link href={'/privacypolicy'}>Privacy Policy</Link>
            <Link href={'/cancellation'}>Cancellation & Refunds</Link>
            <Link href={'/refundpolicy'}>Refund Policy</Link>
            <Link href={'/terms'}>Terms of Service</Link>
            <Link href={'/shippingpolicy'}>Shipping Policy</Link>
          </div>
        </div>

        {/* Newsletter */}
        <div className='max-w-md text-center md:text-left'>
          <h1 className='font-bold font-serif pb-4 text-[22px] md:text-[25px]'>
            Sign Up to Newsletter
          </h1>

          <p className='pb-4 text-[14px] md:text-[15px]'>
            Sign up for 10% off your first purchase and free shipping. Updates information on Sales and Offers.
          </p>

          <div className='flex flex-col sm:flex-row gap-4'>
            <input
              type="email"
              placeholder='Enter the email'
              required
              className='pl-4 outline-none border rounded-full h-12 w-full sm:w-64'
            />
            <button className='rounded-full h-12 px-8 bg-[rgb(118,93,69)] text-white'>
              Sign Up
            </button>
          </div>

          <p className='mt-4 text-[13px] md:text-[15px]'>
            ***By entering the e-mail you accept the terms and conditions and the privacy policy.
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer
