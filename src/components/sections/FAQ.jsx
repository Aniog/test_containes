import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const defaultFaqs = [
  {
    q: "How do you charge for your services?",
    a: "We typically work with a fixed service fee per project or a percentage of the order value, agreed upfront. For long-term clients we offer monthly retainers. We do not take hidden commissions from suppliers.",
  },
  {
    q: "What is the minimum order size you can support?",
    a: "We work with both small-batch buyers (a few hundred units) and full-container orders. For very small orders we usually consolidate from multiple suppliers to keep logistics economical.",
  },
  {
    q: "Do you only work with factories you already know?",
    a: "No. We use our verified factory database when there is a good fit, but for new product categories we go to market, request fresh quotations, audit candidates and shortlist the best supplier for the project.",
  },
  {
    q: "Can you handle product certification and compliance?",
    a: "We can coordinate third-party testing (e.g. CE, FCC, RoHS, REACH, EN, ASTM) with accredited labs and ensure factories provide the required documents. Final certification ownership stays with you, the importer.",
  },
  {
    q: "What inspection standards do you follow?",
    a: "We follow standard AQL sampling (typically 2.5 for major and 4.0 for minor defects, adjustable to your specification), with documented photo and video reports. Inspections include pre-production, during-production and pre-shipment as needed.",
  },
  {
    q: "Do you arrange shipping to my country?",
    a: "Yes. We coordinate sea, air and express shipments through our forwarder partners, including export documentation, customs clearance and door-to-door delivery to most countries.",
  },
  {
    q: "How long does a typical sourcing project take?",
    a: "Supplier shortlist and quotation usually take 5–10 business days. Sampling depends on the product (1–4 weeks). Bulk production lead times vary by category but are typically 30–60 days, plus shipping time.",
  },
  {
    q: "How do we get started?",
    a: "Send us your product brief through the inquiry form. We'll reply within 1 business day, ask clarifying questions if needed, and propose a sourcing plan with a clear scope and fee.",
  },
];

export default function FAQ({ faqs = defaultFaqs }) {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-ink md:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted">
            Practical answers to the most common questions from new buyers.
          </p>
        </div>

        <div className="mt-10 divide-y divide-brand-line overflow-hidden rounded-2xl border border-brand-line bg-white">
          {faqs.map((f, i) => {
            const open = openIndex === i;
            return (
              <div key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-7"
                  aria-expanded={open}
                >
                  <span className="text-base font-semibold text-brand-ink md:text-lg">
                    {f.q}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-brand-muted transition-transform",
                      open && "rotate-180 text-brand-accent"
                    )}
                  />
                </button>
                {open && (
                  <div className="px-5 pb-6 md:px-7">
                    <p className="text-sm leading-relaxed text-brand-muted md:text-base">
                      {f.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
