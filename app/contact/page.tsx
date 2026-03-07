import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
    <div className='bg-[rgb(255,246,234)] text-[rgb(118,93,69)]  '>
        
          <h1 className='font-bold text-3xl flex justify-center items-center '>Contact Us</h1>
          <div className='text-center mt-5'>
          <p className='mt-3'>Instagram : <Link href={'https://www.instagram.com/tulsava_clothing'} className='underline'>tulsava clothing</Link></p>
          <p className='mt-3' >phone : +919335355547</p>
          <p className='mt-3' >Facebook : <Link href={'https://www.facebook.com/people/Tulsava-Clothing/100063463223943/?_rdr'} className='underline'>tulsava clothing</Link></p>

        </div>
        <section className='flex items-center gap-50 mt-20 p-10 flex-col md:flex-row' >
          {/* first div */}
        <div >
          <h1 className='font-bold text-2xl'>support customer</h1>
          <p className='mt-5 font-serif'>Have a question? Please contact us using the customer <br/> support channels below .</p>
          <h2 className='font-bold mt-5'>Customer Care:</h2>
          <div className='font-serif mt-3'>
          <p>Phone: +918890008448</p>
          <p>Email:Mediachaicoffee@gmail.com</p>
          <p>Opening hours: Everyday 8:00am - 5:00pm</p>
          </div>
          <h2 className='font-bold mt-5'>Wholesale:</h2>
          <p>Mediachaicoffee@gmail.com</p>
           <h2 className='font-bold mt-5'>Address:</h2>
           <p className='mt-3'>246-248, Mahavir nager, Jaipur ( Rajasthan)</p>
        </div>
        {/* second div */}
        
        <div >

          {/* headind div */}
           <div className='text-center md:text-left '>
            <h1 className='font-bold text-2xl'>Contact Us / Feedback</h1>
            <p className='p-5 font-serif'>Please submit all general enquiries in the contact form below and we look forward to hearing from you soon.</p>
             </div>
             {/* input section div */}
            <div className='flex gap-5  flex-col md:flex-row p-3 '>
              <input type="text" placeholder='Your Name' className='border rounded-4xl h-12 w-100 p-4' />
              <input type="email" placeholder='Your Email' className='border rounded-4xl h-12 w-100 p-4' />
             </div>
             {/* textarea div */}
             <div className='flex flex-col md:flex-row w-95 ml-5 md:w-full'>
            <textarea
        placeholder="Type please your message..."
        className="w-full h-35 p-3 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-black-500 mt-5 "
      ></textarea>
      </div>

        {/* checkbox div */}
        
        <div className='p-3 md:p-5'>
           <label className="flex items-center gap-2 p-5">
        <input type="checkbox" className="w-4 h-4 " />
        <p>I agree to the<Link href={'privacypolicy'} className='underline'>Privacy Policy</Link>  of the website.</p>
      </label>
        </div>

           <button className='rounded-full h-12 w-40 ml-5 bg-[rgb(118,93,69)] text-white'>
              Send
            </button>
        </div>
      

        
        </section>


    </div>
    </>
  )
}

export default page