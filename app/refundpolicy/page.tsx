 export default function Page() {
  return (
    <section className="bg-[#fbf3e8] px-4 py-14">
      <div className="max-w-3xl mx-auto text-center">

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-semibold text-[#6b4f3f]">
          Refund policy
        </h1>

        {/* Sub heading */}
        <p className="mt-3 text-sm text-[#6b4f3f] flex items-center justify-center gap-2">
          📦 Return & Exchange Policy – Tulsava Clothing
        </p>

        {/* Intro */}
        <p className="mt-10 text-sm md:text-base text-[#6b4f3f] leading-relaxed text-left">
          Thank you for shopping with Tulsava Clothing! Please read our policy
          carefully before making a purchase:
        </p>

        {/* Policy Points */}
        <ul className="mt-6 space-y-5 text-left text-sm md:text-base text-[#6b4f3f] leading-relaxed">

          <li className="flex gap-3">
            <span>✅</span>
            <p>
              <span className="font-semibold">
                Only Size Exchange is Available:
              </span>{" "}
              We do not offer refunds. Returns are accepted only for size
              exchange.
            </p>
          </li>

          <li className="flex gap-3">
            <span>🔁</span>
            <p>
              <span className="font-semibold">
                Exchange with Another Product:
              </span>{" "}
              If the requested size is unavailable, you can exchange it with
              any other product of equal or higher value (you’ll need to pay
              the price difference, if any).
            </p>
          </li>

          <li className="flex gap-3">
            <span>🚚</span>
            <p>
              <span className="font-semibold">No Pickup Facility:</span>{" "}
              Customers are required to courier the product back to us. We
              currently do not provide return pickup service.
            </p>
          </li>

          <li className="flex gap-3">
            <span>💰</span>
            <p>
              <span className="font-semibold">
                Courier Charges Refund (If It’s Our Mistake):
              </span>{" "}
              If there’s an issue from our side (like wrong product sent or
              damaged item), we will refund your courier charges after proper
              verification.
            </p>
          </li>

          <li className="flex gap-3">
            <span>🎥</span>
            <p>
              <span className="font-semibold">
                Mandatory Parcel Opening Video:
              </span>{" "}
              A clear, unedited video of parcel opening is mandatory to claim
              any return or exchange.
            </p>
          </li>

          <li className="flex gap-3">
            <span>⏳</span>
            <p>
              <span className="font-semibold">Complaint Timeline:</span>{" "}
              All return/exchange requests must be made within 2 days of
              delivery. Requests after this period will not be accepted.
            </p>
          </li>

          <li className="flex gap-3">
            <span>📦</span>
            <p>
              <span className="font-semibold">Product Condition:</span>{" "}
              The product must be returned unused, unwashed, and in original
              condition with all tags and packaging intact.
            </p>
          </li>

        </ul>
      </div>
    </section>
  );
}
