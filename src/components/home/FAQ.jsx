import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader.jsx";

const FAQS = [
  {
    q: "Where are you based, and do you actually visit factories?",
    a: "We are a China-based sourcing agent headquartered in Shenzhen, with partner offices in Yiwu and Guangzhou. Our sourcing and QC teams physically visit the factories we recommend — we do not rely on online listings or unverified middlemen.",
  },
  {
    q: "What is the typical order size you handle?",
    a: "We work with a wide range — from small MOQ private-label orders (typically USD 3,000–10,000) up to full container-load production runs. The key is that the order needs to be commercially viable for the factory; we will be honest with you if it is not.",
  },
  {
    q: "How do you charge for your services?",
    a: "We offer two models: a one-time sourcing fee per project, or a commission based on order value. Costs for inspections, factory audits, and shipping coordination are quoted transparently in advance — there are no hidden markups.",
  },
  {
    q: "How do you make sure product quality is consistent?",
    a: "We follow a three-stage inspection process aligned with AQL standards: pre-production (raw materials and components), during-production (DUPRO), and pre-shipment (PSI). You receive photo and video reports with measurable defect rates after each inspection.",
  },
  {
    q: "Can you protect my product design and brand?",
    a: "Yes. We sign an NDA with you before sharing sensitive specifications with any factory, and we require the same from the supplier. We can also recommend factories that already work with international brands and have IP protection procedures in place.",
  },
  {
    q: "Do you handle shipping and customs documents?",
    a: "Yes. We coordinate the entire shipping process — consolidation, packaging, labeling, export documents (commercial invoice, packing list, certificate of origin, etc.), and we book FOB, CIF, or DDP shipments by sea, air, or rail depending on your timeline and budget.",
  },
  {
    q: "How long does a typical sourcing project take?",
    a: "From initial inquiry to confirmed samples, plan on 2–4 weeks depending on product complexity. From confirmed order to ready-to-ship goods, plan on 30–60 days for most products. We will give you a realistic timeline at the quotation stage.",
  },
  {
    q: "What information should I prepare for my first inquiry?",
    a: "Product description or reference photos, target quantity, target price (if you have one), required certifications, packaging requirements, and your expected delivery timeline. The more we know upfront, the faster we can give you a useful shortlist.",
  },
];

function FAQItem({ q, a, isOpen, onToggle }) {
  return (
    <div className="border-b border-[#E5E1D8]">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-start justify-between gap-6 py-5 text-left group"
      >
        <span className="text-[16px] md:text-[17px] font-semibold text-[#0F172A] leading-snug group-hover:text-[#C8553D] transition-colors">
          {q}
        </span>
        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-colors ${
            isOpen ? "bg-[#C8553D] border-[#C8553D] text-white" : "border-[#E5E1D8] text-[#0E2A47]"
          }`}
        >
          {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-[15px] leading-relaxed text-[#475569] max-w-3xl">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <section id="faq" className="section bg-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeader
              eyebrow="Frequently Asked Questions"
              title="Answers to what buyers ask us most"
              subtitle="If your question is not below, send us a message and we will get back to you within one business day."
            />
          </div>
          <div className="lg:col-span-8">
            <div className="card p-2 md:p-4">
              {FAQS.map((f, i) => (
                <FAQItem
                  key={f.q}
                  q={f.q}
                  a={f.a}
                  isOpen={openIdx === i}
                  onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}