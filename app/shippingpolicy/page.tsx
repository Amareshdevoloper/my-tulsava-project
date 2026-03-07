 import React from 'react';
import { Search, User, Heart, ShoppingBag } from 'lucide-react';

export default function ShippingPolicy() {
  return (
    <div className="min-h-screen bg-[rgb(255,246,234)] text-[rgb(118,93,69)] font-sans">
      {/* --- Page Content --- */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-serif text-center mb-12 text-[#826654]">
          Shipping policy
        </h1>

        <div className="space-y-8 text-[15px]">
          {/* Domestic Section */}
          <section>
            <h2 className="text-[#826654] mb-4">Domestic Shipping (India)</h2>
            <ul className="space-y-2 list-none ml-4">
              <li className="flex gap-4"><span>•</span> All orders are processed within 2–4 working days of order confirmation.</li>
              <li className="flex gap-4"><span>•</span> Delivery timelines vary by location, typically 5–7 working days.</li>
              <li className="flex gap-4"><span>•</span> Once shipped, tracking details will be shared via SMS/email.</li>
              <li className="flex gap-4"><span>•</span> Prepaid and COD options available (COD may not be available in some areas).</li>
            </ul>
          </section>

          <div className="w-16 h-[1px] bg-[#E0D5C8] my-8"></div>

          {/* International Section */}
          <section>
            <h2 className="mb-4 flex items-center gap-2">
              🌎 International Shipping
            </h2>
            <p className="mb-4 italic">Yes, we ship worldwide! ✈️</p>
            <ul className="space-y-2 list-none ml-4">
              <li className="flex gap-4"><span>•</span> International orders are accepted with extra shipping charges, depending on the destination and weight.</li>
              <li className="flex gap-4"><span>•</span> Delivery time may vary between 10–20 business days based on your location.</li>
              <li className="flex gap-4"><span>•</span> Currently, refunds and COD are not available for international orders.</li>
            </ul>
          </section>

          <div className="w-16 h-[1px] bg-[#E0D5C8] my-8"></div>

          {/* How to Place Order */}
          <section className="mb-12">
            <h2 className="mb-6 flex items-center gap-2">
              📥 How to Place an International Order
            </h2>
            <ol className="space-y-4 ml-2">
              <li className="flex gap-3">
                <span className="font-medium">1.</span> Browse our website and select your desired products.
              </li>
              <li className="flex gap-3 leading-relaxed">
                <span className="font-medium">2.</span> DM us on Instagram or WhatsApp, or email us at support@tulsavaclothing.com with the product screenshot(s).
              </li>
              <li className="flex gap-3">
                <span className="font-medium">3.</span> We will calculate the shipping cost and share a secure payment link with you.
              </li>
              <li className="flex gap-3">
                <span className="font-medium">4.</span> Once the payment is complete, your order will be processed. <span className="text-[#826654] font-semibold cursor-pointer">❓ Need Assistance?</span>
              </li>
            </ol>
          </section>

          {/* Contact Details Below Content */}
          <section className="pt-4 space-y-2 text-[14px]">
            <p className="flex items-center gap-2">📧 Email: support@tulsavaclothing.com</p>
            <p className="flex items-center gap-2">📸 Instagram: @tulsava_clothing</p>
            <p className="flex items-center gap-2">📞 WhatsApp: 8890008448</p>
          </section>
        </div>
      </main>

     
                
            
    </div>
  );
}