import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionHeader from "@/components/site/SectionHeader";

const FAQS = [
  {
    q: "How do you charge for sourcing services?",
    a: "We use a transparent fixed-fee or commission model agreed in writing before we start. We do not take hidden commissions from suppliers. Inspection, audit, and shipping fees are quoted separately so you always know what you're paying for.",
  },
  {
    q: "What is the minimum order quantity (MOQ) you can support?",
    a: "It depends on the product, but we generally help buyers placing orders from a few thousand US dollars up to multi-container shipments. For very small trial orders, we'll be honest about whether sourcing through us makes financial sense.",
  },
  {
    q: "How do you verify a factory is real?",
    a: "We check business licenses, tax IDs, and export records, and we visit the factory in person. Our audit covers production lines, equipment, capacity, certifications, and existing client references.",
  },
  {
    q: "Can you handle private label or OEM projects?",
    a: "Yes. We coordinate tooling, custom packaging, branding, certifications (CE, FCC, RoHS, FDA, etc.), and multi-round sampling for OEM and private label products.",
  },
  {
    q: "Do you arrange shipping and customs clearance?",
    a: "Yes. We work with vetted forwarders to provide FOB, CIF, and DDP options, including consolidation in our warehouse, export documents, and door-to-door delivery in many countries.",
  },
  {
    q: "How long does a typical project take?",
    a: "From initial brief to first shipment, most projects take 6 – 12 weeks depending on tooling and certification needs. We'll give you a realistic timeline up front, not after issues appear.",
  },
];

const FaqItem = ({ q, a, open, onClick }) => (
  <div className="border-b border-border-soft last:border-b-0">
    <button
      type="button"
      onClick={onClick}
      className="w-full flex items-start justify-between gap-6 py-5 text-left"
      aria-expanded={open}
    >
      <span className="text-base md:text-lg font-semibold text-brand">{q}</span>
      <ChevronDown
        className={`h-5 w-5 text-muted shrink-0 mt-1 transition-transform ${open ? "rotate-180" : ""}`}
      />
    </button>
    {open && (
      <div className="pb-5 -mt-1">
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">{a}</p>
      </div>
    )}
  </div>
);

const HomeFaq = () => {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="bg-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Direct answers to the questions buyers ask us most often before starting a project."
        />
        <div className="mt-10 rounded-xl bg-white border border-border-soft px-5 md:px-7">
          {FAQS.map((f, i) => (
            <FaqItem
              key={f.q}
              q={f.q}
              a={f.a}
              open={openIdx === i}
              onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFaq;
