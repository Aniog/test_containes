import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "How does your pricing work?",
    a: "We charge a service fee for sourcing, inspections, and project management. The fee depends on scope and is quoted up front. Factory pricing is passed through at cost — we do not take a margin on the goods themselves. You'll see both lines on every quote.",
  },
  {
    q: "What's a typical MOQ for a first order?",
    a: "It depends on the product. Many of our buyers start with 300–1,000 units for a first order to validate quality and logistics. We help you find factories willing to start small, or we recommend waiting until you can commit to a higher MOQ if the cost-per-unit math is better.",
  },
  {
    q: "How do you verify a factory?",
    a: "We visit the site in person, check the business license, take photos of the production lines and warehouse, confirm headcount, and (where possible) talk to existing customers. You get a written audit report with our recommendation.",
  },
  {
    q: "Can you handle the shipping and customs paperwork?",
    a: "Yes. We book with established Chinese freight forwarders for FCL, LCL, air, and rail. We prepare the commercial invoice, packing list, and certificate of origin. For DDP, we work with a customs broker in your country.",
  },
  {
    q: "What if something goes wrong during production?",
    a: "We flag issues early — that's the whole point of weekly updates and milestone inspections. If a defect rate exceeds the agreed AQL, we hold the shipment, work with the factory on rework or replacement, and document everything in writing. You decide whether to accept, rework, or refund.",
  },
  {
    q: "Do you work with first-time importers?",
    a: "Yes. Roughly half of our clients are importing from China for the first time. We'll walk you through Incoterms, HS codes, the difference between FOB and DDP, and the documents your bank will need. Nothing is assumed.",
  },
  {
    q: "Which regions of China do you cover?",
    a: "We work across the five main manufacturing regions: Guangdong, Zhejiang, Jiangsu, Fujian, and Shandong. We have on-the-ground contacts in each and run regular visits.",
  },
  {
    q: "How long does a typical project take?",
    a: "From brief to first PO, usually 3–5 weeks including sourcing, sampling, and negotiation. From PO to goods in your warehouse, 4–8 weeks for most products, longer for tooling or custom molds.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-accent-600">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-ink-900">
              Questions buyers ask us most
            </h2>
            <p className="mt-4 text-base text-ink-700 leading-relaxed">
              Don't see your question? Send it through the inquiry form and
              we'll come back with a straight answer.
            </p>
          </div>

          <div className="lg:col-span-8 divide-y divide-ink-200 border-y border-ink-200">
            {faqs.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.q}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="w-full flex items-center justify-between gap-4 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-semibold text-ink-900">
                      {item.q}
                    </span>
                    <span
                      className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition",
                        isOpen
                          ? "bg-brand-800 text-white"
                          : "bg-ink-100 text-ink-700"
                      )}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="pb-5 text-sm text-ink-700 leading-relaxed max-w-3xl">
                      {item.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
