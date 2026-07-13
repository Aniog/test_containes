import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';

const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'Our fees depend on the scope of the project. We offer a free initial consultation and sourcing quote. Service fees are typically a percentage of the order value or a fixed project fee, agreed upfront with no hidden charges.',
  },
  {
    q: 'How long does it take to find a supplier?',
    a: 'For standard product categories, we typically present a shortlist of 3–5 verified suppliers within 5–10 business days. Complex or highly specialized products may take longer.',
  },
  {
    q: 'Do you work with small orders or only large volumes?',
    a: 'We work with buyers of all sizes. While some factories have minimum order quantities, we help you find suppliers that match your volume requirements, including those open to smaller initial orders.',
  },
  {
    q: 'Can you handle quality inspection for goods already in production?',
    a: 'Yes. We can arrange during-production inspections and pre-shipment inspections even if you have already placed an order with a supplier independently.',
  },
  {
    q: 'What happens if the goods fail the quality inspection?',
    a: 'We document all defects with photos and a detailed report, then work with the factory to arrange rework or replacement before shipment. We do not release goods until they meet the agreed standards.',
  },
  {
    q: 'Do you handle shipping and customs clearance?',
    a: 'We coordinate with freight forwarders and prepare all Chinese export documentation. We can recommend trusted freight partners for international shipping, though customs clearance in your country is handled by your local broker.',
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-200 rounded-lg overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-slate-50 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-medium text-slate-900 text-sm pr-4">{q}</span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-slate-400 shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
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

export default function FAQSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          subtitle="Answers to the most common questions from buyers new to China sourcing."
        />
        <div className="space-y-3">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
