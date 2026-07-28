import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';

const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'We offer transparent, fixed-fee service packages based on the scope of work — sourcing, audit, inspection, or full-service. We do not take commissions from suppliers, so our interests are fully aligned with yours. Contact us for a tailored quote.',
  },
  {
    q: 'Do you work with small businesses and startups?',
    a: 'Yes. We work with buyers of all sizes, from startups placing their first order to established importers managing multiple SKUs. Our services are scalable to your needs and order volume.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'Supplier identification typically takes 5–10 business days. Factory audits take 1–3 days per factory. The full process from inquiry to confirmed supplier is usually 2–4 weeks, depending on product complexity.',
  },
  {
    q: 'Can you help with custom or OEM products?',
    a: 'Absolutely. We regularly source custom-designed and OEM products. We help you find factories with the right capabilities, manage sample development, and protect your design through NDAs and contracts.',
  },
  {
    q: 'What if the factory fails the audit?',
    a: 'If a factory does not meet our audit standards, we will not recommend them. We provide a written report explaining the findings and immediately search for alternative suppliers that meet your requirements.',
  },
  {
    q: 'Do you handle shipping and customs?',
    a: 'We coordinate with freight forwarders and ensure all export documentation is correct. We do not act as a freight forwarder ourselves, but we work closely with trusted logistics partners and can recommend options based on your destination and cargo type.',
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-slate-50 transition-colors border-0"
      >
        <span className="font-semibold text-slate-800 text-sm pr-4">{q}</span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-6 pb-5 bg-white">
          <p className="text-slate-600 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function HomeFAQ() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          subtitle="Answers to the most common questions from buyers considering China sourcing."
        />
        <div className="flex flex-col gap-3">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
