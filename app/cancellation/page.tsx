'use client'
import React from 'react'


const  page = () => {
  return (
    <section className=' border p-15 text-[rgb(110,80,50)] bg-[rgb(255,246,234)]  '>
    <div  >
        <h1 className='text-[50px] font-bold text-center'>Cancellation & Refunds</h1>
        <p>Return Eligibility</p>
        <ul className="list-disc pl-8 pb-5">
  <li>We only accept exchanges—no refunds will be issued.</li>
  <li>You must raise an exchange request within 3 days of receiving the product.</li>
  <li> A parcel opening video is mandatory for any exchange request. The video must be continuous and uncut from the moment the package is opened.</li>
</ul>
 <hr className='w-15'/>
 </div>


 <div>
    <p  className='pb-2'>🔄 Exchange Conditions</p>
    <p>We will accept exchanges only if:</p>
    <ul className="list-disc pl-8 pb-5">
  <li>  The product is unused, unwashed, and in its original condition.</li>
  <li>  All original tags, labels, and packaging are intact.</li>
  <li> A valid parcel opening video is submitted.</li>
  <li>   The exchange is requested for the same product (in a different size or due to damage/defect).</li>
</ul>
 <hr className='w-15'/>
 </div>

 <div>
    <p  className='pb-2'>🚫 Non-Exchangeable Items</p>
    
    <ul className="list-disc pl-8 pb-5">
  <li>  Products that are on sale or discounted</li>
  <li>  Items that are custom-made or altered on request</li>
  <li>   Products returned without a valid opening video</li>
  <li> Products reported after the 3-day window</li>
</ul>
 <hr className='w-15'/>
 </div>
   

    <div>
    <p  className='pb-2'>📬 How to Request an Exchange</p>
    
    <ol className="list-decimal pl-8 pb-5">
  <li> Email us at support@tulsavaclothing.com within 3 days of delivery.</li>
  <li>   Include your order number, reason for exchange, and the parcel opening video</li>
  <li>Once approved, we will share the return address.</li>
  <li>You must ship the item back to us (shipping charges are to be borne by the customer unless it’s our error).</li>
</ol>

 <hr className='w-15'/>
 </div>

 <div>
    <p  className='pb-2'>🚚 Exchange Timeline</p>
    
    <ul className="list-disc pl-8 pb-5">
  <li>Once we receive the product and verify its condition, we will ship your replacement within 5-7 working days.</li>
   
</ul>
  
 </div>
    </section>
  )
}

export default  page