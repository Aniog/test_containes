import { useEffect, useRef } from "react";
import PageHero from "@/components/sections/PageHero";
import InquiryForm from "@/components/sections/InquiryForm";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function Terms() {
  const containerRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="TERMS OF SERVICE"
        title="How we work together"
        subtitle="The terms below apply when you engage SSourcing China for sourcing, supplier verification, inspection, production follow-up, or shipping coordination. We keep them clear and free of fine print."
      />

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate max-w-none">
          <h2>1. Our role</h2>
          <p>
            SSourcing China acts as your buying agent in China. We source
            suppliers, verify factories, coordinate samples, run quality
            inspections, follow up on production, and arrange shipping. We do
            not manufacture products ourselves and we are not the seller of
            record. The contract for your goods is between you and the supplier
            we introduce you to.
          </p>

          <h2>2. Engagement</h2>
          <p>
            Each project starts with an inquiry. After we review your
            requirements we send a written proposal that describes the scope of
            work, the fees, and the payment terms. Work begins once you confirm
            the proposal in writing (email is sufficient).
          </p>

          <h2>3. Fees</h2>
          <p>
            Service fees are described in your proposal and are typically billed
            in two parts: an initial sourcing fee, and a success fee or
            inspection fee billed as the work progresses. We quote in USD or
            RMB. The exact amount, currency, and schedule are agreed in writing
            before work begins.
          </p>

          <h2>4. Supplier payments</h2>
          <p>
            Payments to suppliers are made under the terms we agree with you in
            the proposal. We generally recommend a deposit plus balance on
            completion of inspection, but the schedule depends on the supplier,
            the order size, and your relationship with them.
          </p>

          <h2>5. Quality and inspections</h2>
          <p>
            Our inspections follow a defined checklist. A pass or fail is
            reported as observed at the time of inspection, on the production
            lot sampled. Inspections reduce risk; they do not eliminate it. You
            remain responsible for final acceptance of the goods.
          </p>

          <h2>6. Limitation of liability</h2>
          <p>
            We carry out our work with reasonable care and skill. Our total
            liability for any single project is limited to the fees you have
            paid us for that project. We are not liable for indirect or
            consequential losses, including lost profit, lost business, or
            recall costs.
          </p>

          <h2>7. Confidentiality</h2>
          <p>
            We treat your product information, supplier lists, and commercial
            details as confidential. We do not share them with anyone outside of
            the suppliers, freight partners, and inspection staff who need them
            to do the work you have asked us to do.
          </p>

          <h2>8. Termination</h2>
          <p>
            You can end the engagement at any time by writing to us. Fees for
            work already completed remain payable. We will hand over the project
            status and any open documents so that you can continue the work
            elsewhere if you choose.
          </p>

          <h2>9. Governing law</h2>
          <p>
            These terms are governed by the laws of the People's Republic of
            China. Any dispute will be resolved by negotiation first, and then
            by arbitration in Shanghai if negotiation is unsuccessful.
          </p>

          <p className="text-sm text-slate-500 mt-12">Last updated: July 2026</p>
        </div>
      </section>

      <InquiryForm />
    </div>
  );
}
