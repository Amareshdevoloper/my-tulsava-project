import Footer from "@/_component/Footer";
import Navbar from "@/_component/Navbar";

 export default function Page() {
  return (
    <section className="bg-[#fbf3e8] px-4 py-16">
      <div className="max-w-3xl mx-auto text-[#6b4f3f]">
      <Navbar/>
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-semibold text-center">
          Terms of service
        </h1>

        {/* Divider */}
        <div className="w-16 h-px bg-[#6b4f3f] mx-auto my-10"></div>

        {/* 1 */}
        <h2 className="font-semibold mb-2">1. General Information</h2>
        <ul className="list-disc pl-6 space-y-1 text-sm md:text-base mb-6">
          <li>Tulsava Clothing is an online ethnic wear store for women.</li>
          <li>
            All users must be at least 18 years old or use the website under
            the supervision of a parent/guardian.
          </li>
        </ul>

        <div className="w-16 h-px bg-[#6b4f3f] my-10"></div>

        {/* 2 */}
        <h2 className="font-semibold mb-2">2. Products & Descriptions</h2>
        <ul className="list-disc pl-6 space-y-1 text-sm md:text-base mb-6">
          <li>
            We try our best to ensure that all product images and descriptions
            are accurate.
          </li>
          <li>
            Slight variations in color or embroidery may occur due to lighting
            or screen settings.
          </li>
          <li>
            All sizes are clearly mentioned in the product description or
            images—please review carefully before purchase.
          </li>
        </ul>

        <div className="w-16 h-px bg-[#6b4f3f] my-10"></div>

        {/* 3 */}
        <h2 className="font-semibold mb-2">3. Pricing & Payment</h2>
        <ul className="list-disc pl-6 space-y-1 text-sm md:text-base mb-6">
          <li>
            All prices are listed in INR (₹) and inclusive of applicable taxes
            unless mentioned otherwise.
          </li>
          <li>
            We reserve the right to change product prices or discontinue
            products at any time without notice.
          </li>
          <li>
            Payments are securely processed through trusted third-party
            gateways. We do not store your card details.
          </li>
        </ul>

        <div className="w-16 h-px bg-[#6b4f3f] my-10"></div>

        {/* 4 */}
        <h2 className="font-semibold mb-2">4. Orders & Shipping</h2>
        <ul className="list-disc pl-6 space-y-1 text-sm md:text-base mb-6">
          <li>
            Once an order is placed, you will receive a confirmation email or
            message.
          </li>
          <li>Orders cannot be cancelled or modified once shipped.</li>
          <li>
            Shipping timelines may vary based on location and availability.
            Estimated delivery times are shared on the website.
          </li>
        </ul>

        <div className="w-16 h-px bg-[#6b4f3f] my-10"></div>

        {/* 5 */}
        <h2 className="font-semibold mb-2">5. Returns & Exchanges</h2>
        <ul className="list-disc pl-6 space-y-1 text-sm md:text-base mb-6">
          <li>
            We accept returns/exchanges only for eligible products as per our
            Return Policy (refer to the Returns page).
          </li>
          <li>
            Items must be unused, unwashed, and returned with original
            packaging and tags.
          </li>
          <li>
            Custom-made or sale items may not be eligible for return.
          </li>
        </ul>

        <div className="w-16 h-px bg-[#6b4f3f] my-10"></div>

        {/* 6 */}
        <h2 className="font-semibold mb-2">6. User Conduct</h2>
        <p className="text-sm md:text-base mb-2">You agree not to:</p>
        <ul className="list-disc pl-6 space-y-1 text-sm md:text-base mb-6">
          <li>Use our website for unlawful or harmful purposes</li>
          <li>Attempt to hack or disrupt the website functionality</li>
          <li>Post false reviews or misuse discount codes</li>
        </ul>

        <div className="w-16 h-px bg-[#6b4f3f] my-10"></div>

        {/* 7 */}
        <h2 className="font-semibold mb-2">7. Intellectual Property</h2>
        <p className="text-sm md:text-base mb-6">
          All content on this website, including images, text, logos, and
          designs, is the property of Tulsava Clothing and may not be used
          without permission.
        </p>

        <div className="w-16 h-px bg-[#6b4f3f] my-10"></div>

        {/* 8 */}
        <h2 className="font-semibold mb-2">8. Limitation of Liability</h2>
        <ul className="list-disc pl-6 space-y-1 text-sm md:text-base mb-6">
          <li>
            We are not responsible for any indirect or consequential damages
            resulting from your use of our website or products.
          </li>
          <li>
            Tulsava Clothing is not liable for delays or failures caused by
            events beyond our control.
          </li>
        </ul>

        <div className="w-16 h-px bg-[#6b4f3f] my-10"></div>

        {/* 9 */}
        <h2 className="font-semibold mb-2">9. Changes to Terms</h2>
        <p className="text-sm md:text-base">
          We reserve the right to update or modify these Terms at any time.
          Please check this page periodically for updates.
        </p>

      </div>
      <Footer/>
    </section>
  );
}
