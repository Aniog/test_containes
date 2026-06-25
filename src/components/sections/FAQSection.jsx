import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import SectionHeader from "./SectionHeader";

const FAQS = [
  {
    q: "How do you charge for sourcing services?",
    a: "Most projects use a flat monthly service fee or a small commission on order value (typically 3–8%, depending on category and complexity). We share the supplier's original quotation with you and never take hidden kickbacks from factories.",
  },
  {
    q: "Do you have a minimum order quantity?",
    a: "We work best with serious B2B buyers ordering at least a few thousand USD per shipment. That said, we are flexible during the first sample stage — we'd rather start small and grow with you.",
  },
  {
    q: "Can you source products you have never handled before?",
    a: "Yes, but we will tell you upfront. If a category is outside our network, we either decline the project or invest time to find and audit new suppliers before recommending anyone.",
  },
  {
    q: "What does a typical quality inspection include?",
    a: "We follow AQL sampling aligned with ISO 2859 — checking functionality, dimensions, workmanship, labeling, and packaging. Every inspection produces a written report with photos, defect classification, and pass/fail status.",
  },
  {
    q: "How is payment handled?",
    a: "You can pay factories directly via T/T or pay through our China entity for added security. We use milestone-based payments (deposit, post-inspection, pre-shipment) so funds are only released when the production milestone is met.",
  },
  {
    q: "Can you ship to Amazon FBA?",
    a: "Yes. We handle FBA labeling, polybagging, carton markings, and box requirements. We work with reliable freight forwarders that offer DDP shipping straight to Amazon warehouses in the US, EU, UK, CA, AU, and JP.",
  },
  {
    q: "How long until I receive my first supplier shortlist?",
    a: "For most categories, you'll receive a shortlist of 3–5 verified suppliers with quotations within 3–5 business days of the kickoff call.",
  },
  {
    q: "What if quality issues are found during production?",
    a: "We document the issue, raise it with the factory in writing, and either re-work, re-make, or renegotiate based on contract terms. You decide whether to accept, rework, or reject — we never sign off on your behalf.",
  },
];

function FAQItem({ q, a, open, onToggle }) {
  return (
    <div className="rounded-2xl bg-surface border border-line shadow-sm">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-start gap-4 text-left p-5 md:p-6"
        aria-expanded={open}
      >
        <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
        <span className="flex-1">
          <span className="block text-base font-semibold text-ink">{q}</span>
          {open && (
            <span className="mt-2 block text-sm leading-relaxed text-muted">{a}</span>
          )}
        </span>
      </button>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-bg">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Quick answers to the things buyers ask us most often. Anything else? Send us a note — we reply within one business day."
        />

        <div className="mt-12 grid gap-3">
          {FAQS.map((item, i) => (
            <FAQItem
              key={item.q}
              q={item.q}
              a={item.a}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
