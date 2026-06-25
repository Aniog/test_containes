import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Do you charge a commission or a service fee?",
    a: "We work on a transparent service fee, agreed in advance. You see the original supplier price and we are not paid by the factory. For long-term programs we can also work on a monthly retainer.",
  },
  {
    q: "What is the minimum order quantity you can handle?",
    a: "For most consumer categories we work with orders starting from around 500 USD per SKU. For custom or OEM products MOQ depends on the factory, but we will tell you upfront before you commit.",
  },
  {
    q: "Can you help if I already have a supplier?",
    a: "Yes. We can run a factory audit on your existing supplier, perform quality inspections, follow production and coordinate shipping without replacing them.",
  },
  {
    q: "Which regions and ports do you cover?",
    a: "Our team is based in Yiwu, and we routinely source from Zhejiang, Guangdong, Jiangsu, Fujian and Shandong. We ship from Ningbo, Shanghai, Shenzhen, Yantian and other major Chinese ports.",
  },
  {
    q: "Do you handle Amazon FBA shipments?",
    a: "Yes. We support FNSKU labeling, carton labeling, polybagging, pallet preparation and shipment booking to FBA warehouses in the US, EU, UK and other Amazon marketplaces.",
  },
  {
    q: "How fast can you reply to an inquiry?",
    a: "We aim to reply to every new inquiry within one business day with clarifying questions, and to send an initial supplier shortlist within 3-5 business days for standard categories.",
  },
];

const FAQItem = ({ item, open, onToggle }) => {
  return (
    <div className="border-b border-[#D9E2EC]">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-6 text-left py-5"
      >
        <span className="text-base md:text-lg font-semibold text-[#0B2545]">{item.q}</span>
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#EEF2F7] text-[#1F4E79] shrink-0">
          {open ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </span>
      </button>
      {open && (
        <div className="pb-5 pr-12 text-[#475569] text-sm md:text-base leading-relaxed">
          {item.a}
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1F4E79] mb-3">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B2545] tracking-tight">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-[#475569] text-base md:text-lg">
            Short, practical answers to the questions we hear most often from new buyers.
          </p>
        </div>

        <div className="border-t border-[#D9E2EC]">
          {faqs.map((item, idx) => (
            <FAQItem
              key={item.q}
              item={item}
              open={openIndex === idx}
              onToggle={() => setOpenIndex(openIndex === idx ? -1 : idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
