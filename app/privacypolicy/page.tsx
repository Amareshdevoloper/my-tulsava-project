import Footer from "@/_component/Footer";
import Navbar from "@/_component/Navbar";

 export default function Page() {
  return (
    
    <section className="bg-[#fbf3e8] px-4 py-16">
      <div className="max-w-3xl mx-auto text-[#6b4f3f]">
        <Navbar/>
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-semibold text-center">
          Privacy policy
        </h1>

        {/* Intro */}
        <p className="mt-6 text-sm md:text-base text-center leading-relaxed">
          Welcome to Tulsava Clothing. Your privacy is important to us. This
          Privacy Policy explains how we collect, use, protect, and share your
          information when you visit our website or shop with us.
        </p>

        {/* Divider */}
        <div className="w-16 h-px bg-[#6b4f3f] mx-auto my-10"></div>

        {/* 1 */}
        <h2 className="font-semibold mb-2">1. Information We Collect</h2>
        <p className="text-sm md:text-base mb-4">
          We may collect the following information from you:
        </p>

        <p className="font-medium mb-2">When you visit our website:</p>
        <ul className="list-disc pl-6 space-y-1 text-sm md:text-base mb-4">
          <li>IP address and browser details</li>
          <li>Device type and location (approximate)</li>
          <li>Pages visited and time spent</li>
          <li>Cookies and analytics data</li>
        </ul>

        <p className="font-medium mb-2">
          When you make a purchase or create an account:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-sm md:text-base mb-4">
          <li>Full name</li>
          <li>Email address</li>
          <li>Shipping and billing address</li>
          <li>Mobile number</li>
          <li>
            Payment details (processed securely through trusted payment
            gateways)
          </li>
        </ul>

        <p className="font-medium mb-2">When you contact us:</p>
        <ul className="list-disc pl-6 space-y-1 text-sm md:text-base">
          <li>Name and contact details</li>
          <li>Any messages or queries you send</li>
        </ul>

        {/* Divider */}
        <div className="w-16 h-px bg-[#6b4f3f] my-10"></div>

        {/* 2 */}
        <h2 className="font-semibold mb-2">2. How We Use Your Information</h2>
        <ul className="list-disc pl-6 space-y-1 text-sm md:text-base">
          <li>Fulfill and deliver your orders</li>
          <li>Provide customer support</li>
          <li>Send order updates and receipts</li>
          <li>Improve your shopping experience</li>
          <li>Notify you about offers (only if you opt-in)</li>
        </ul>

        {/* Divider */}
        <div className="w-16 h-px bg-[#6b4f3f] my-10"></div>

        {/* 3 */}
        <h2 className="font-semibold mb-2">3. Data Security & Sharing</h2>
        <p className="text-sm md:text-base mb-3">
          Your data is safe with us.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-sm md:text-base">
          <li>We do not sell or rent your personal data</li>
          <li>
            We may share limited information with trusted third parties like
            courier partners and payment providers—only to complete your
            purchase
          </li>
          <li>All sensitive data is encrypted and stored securely</li>
        </ul>

        {/* Divider */}
        <div className="w-16 h-px bg-[#6b4f3f] my-10"></div>

        {/* 4 */}
        <h2 className="font-semibold mb-2">4. Cookies & Tracking</h2>
        <p className="text-sm md:text-base mb-3">We use cookies to:</p>
        <ul className="list-disc pl-6 space-y-1 text-sm md:text-base mb-3">
          <li>Remember your preferences</li>
          <li>Improve website performance</li>
          <li>Track site traffic and product interest</li>
        </ul>
        <p className="text-sm md:text-base">
          You can control cookie settings in your browser at any time.
        </p>

        {/* Divider */}
        <div className="w-16 h-px bg-[#6b4f3f] my-10"></div>

        {/* 5 */}
        <h2 className="font-semibold mb-2">5. Your Privacy Rights</h2>
        <p className="text-sm md:text-base mb-3">You have the right to:</p>
        <ul className="list-disc pl-6 space-y-1 text-sm md:text-base">
          <li>Access or update your personal data</li>
          <li>Request deletion of your account/data</li>
          <li>Opt-out of marketing emails anytime</li>
          <li>Contact us for any privacy concerns</li>
        </ul>

        {/* Divider */}
        <div className="w-16 h-px bg-[#6b4f3f] my-10"></div>

        {/* 6 */}
        <h2 className="font-semibold mb-2">6. Changes to This Policy</h2>
        <p className="text-sm md:text-base">
          We may update this Privacy Policy occasionally. All changes will be
          posted on this page with a new effective date.
        </p>

      </div>
      <Footer/>
    </section>
    
  );
}
