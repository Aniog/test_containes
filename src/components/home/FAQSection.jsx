import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';

const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'Our fees depend on the scope of work — sourcing only, inspection only, or full-service management. We provide a clear quote before starting. There are no hidden commissions from suppliers.',
  },
  {
    q: 'Do you work with small businesses and first-time importers?',
    a: 'Yes. We work with businesses of all sizes, including first-time importers. We will guide you through the process and explain each step clearly.',
  },
  {
    q: 'How long does it take to find a supplier?',
    a: 'For standard products, we typically present a shortlist within 5–10 business days. Complex or highly customised products may take longer.',
  },
  {
    q: 'Can you help with product customisation and private labelling?',
    a: 'Yes. We regularly manage custom product development, OEM manufacturing, and private label projects, including packaging design coordination.',
  },
  {
    q: 'What happens if the goods fail inspection?',
    a: 'We document all defects and work with the factory to arrange rework or replacement before shipment. You will not pay for goods that do not meet your specifications.',
  },
  {
    q: 'Which regions of China do you cover?',
    a: 'We operate across all major manufacturing hubs including Guangdong, Zhejiang, Jiangsu, Fujian, and Shandong. We can also source from other regions on request.',
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-neutral-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-neutral-50 transition-colors"
      >
        <span className="text-neutral-900 font-semibold text-sm pr-4">{q}</span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-brand-blue flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-neutral-400 flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-6 pb-5 bg-white">
          <p className="text-neutral-600 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQSection() {
  return (
    <section className="py-20 md:py-28 bg-neutral-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          overline="FAQ"
          title="Frequently Asked Questions"
          subtitle="Answers to the questions we hear most often from new clients."
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
