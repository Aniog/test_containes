import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Section, { SectionHeader } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

const FAQ = [
  {
    q: "What does a China sourcing agent actually do?",
    a: "We act as your local buying office in China. We help you find and verify suppliers, manage samples, monitor production, perform quality inspections, and coordinate shipping. You stay in control of decisions; we handle the local execution and communication.",
  },
  {
    q: "What is the typical order size you work with?",
    a: "We work with first orders of around USD 5,000 in product value, all the way up to recurring monthly container volumes. We will be honest if your order is too small to be cost-effective for a particular product or supplier.",
  },
  {
    q: "How do you charge for your services?",
    a: "Our fees are project-based or monthly, depending on the engagement. We share a clear quote after reviewing your brief. Supplier pricing is passed through at cost, and you receive the same factory quotes we do.",
  },
  {
    q: "How long does the first order usually take?",
    a: "From brief to first sample is typically 10–18 days, and from confirmed order to on-board vessel is 25–45 days depending on product complexity, customization, and production capacity.",
  },
  {
    q: "Can you protect my product design and brand?",
    a: "Yes. We sign NDAs before sharing your drawings or product details with any factory. We can also help you register trademarks in China, and recommend escrow or staged payment terms to reduce financial risk.",
  },
  {
    q: "Do you handle shipping and customs?",
    a: "We coordinate FOB, CIF, and DDP shipments by sea, air, rail, and courier. We can recommend freight forwarders, prepare export documents, and arrange consolidation when you buy from multiple factories.",
  },
  {
    q: "What if I have never imported before?",
    a: "Many of our clients are first-time importers. We walk you through Incoterms, payment terms, sample approval, and your first inspection, so you build an internal playbook while we handle the heavy lifting.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <Section tone="surface" id="faq">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeader
            eyebrow="FAQ"
            title="Common questions from new buyers"
            lead="Quick answers to the questions we hear most often. If yours is not here, just ask — we are happy to jump on a 20-minute call."
          />
        </div>
        <div className="lg:col-span-8">
          <ul className="divide-y divide-line overflow-hidden rounded-lg border border-line bg-surface">
            {FAQ.map((item, i) => {
              const isOpen = open === i;
              return (
                <li key={item.q}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left hover:bg-primary-100/30 md:px-6"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-semibold text-primary">
                      {item.q}
                    </span>
                    <span
                      className={cn(
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-primary transition-colors",
                        isOpen && "bg-primary text-white border-primary"
                      )}
                    >
                      {isOpen ? (
                        <Minus className="h-4 w-4" />
                      ) : (
                        <Plus className="h-4 w-4" />
                      )}
                    </span>
                  </button>
                  <div
                    className={cn(
                      "grid overflow-hidden transition-all duration-300",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    )}
                  >
                    <div className="min-h-0">
                      <p className="px-5 pb-6 text-sm leading-relaxed text-muted md:px-6 md:text-base">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Section>
  );
}
