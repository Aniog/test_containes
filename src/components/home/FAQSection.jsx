import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'How much does your sourcing service cost?',
    answer: 'Our fees depend on the scope of work. We offer project-based pricing for one-time sourcing assignments and monthly retainer options for ongoing procurement support. We provide a clear fee proposal before any work begins. There are no hidden commissions from suppliers.',
  },
  {
    question: 'How long does it take to find a supplier?',
    answer: 'For standard products, we typically present a shortlist of qualified suppliers within 5–10 business days. For custom or complex products, the timeline may be 2–3 weeks. We\'ll give you a realistic estimate based on your specific requirements.',
  },
  {
    question: 'Can you help with small orders or low MOQs?',
    answer: 'Yes. We work with buyers at various stages, including startups and small businesses. We can help negotiate lower MOQs with suppliers and identify factories that are open to smaller initial orders.',
  },
  {
    question: 'Do you handle quality inspections independently?',
    answer: 'Yes. Our inspections are conducted by our own team or accredited third-party inspection agencies. We follow AQL sampling standards and provide detailed inspection reports with photos. We are independent from the supplier.',
  },
  {
    question: 'What happens if goods fail the inspection?',
    answer: 'If goods fail inspection, we work with the supplier to resolve the issue before shipment — whether that means rework, replacement, or a price adjustment. We document everything and keep you informed throughout.',
  },
  {
    question: 'Do you work with specific industries or product types?',
    answer: 'We source across 30+ product categories including electronics, furniture, apparel, machinery, plastics, and consumer goods. If you\'re unsure whether we can help with your product, contact us and we\'ll let you know honestly.',
  },
  {
    question: 'Can you help with product development and OEM manufacturing?',
    answer: 'Yes. We support custom product development, including design-to-manufacture projects, mold development, packaging design, and private label production. We have experience working with OEM factories across multiple categories.',
  },
];

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-brand-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left bg-white hover:bg-brand-gray transition-colors"
      >
        <span className="font-medium text-brand-text text-sm md:text-base">{question}</span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-brand-blue flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-brand-muted flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-5 md:px-6 pb-5 md:pb-6 bg-white border-t border-brand-border">
          <p className="text-brand-muted text-sm leading-relaxed pt-4">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQSection() {
  return (
    <section className="py-16 md:py-24 bg-brand-gray">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-brand-orange text-sm font-semibold uppercase tracking-wide">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text mt-2 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-brand-muted text-lg max-w-2xl mx-auto">
            Answers to the questions we hear most often from buyers considering China sourcing.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
