import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';

const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'Our fees depend on the scope of work. We offer a free initial consultation and sourcing quote. For most projects, we charge a service fee based on order value or a flat project fee. There are no hidden charges — everything is agreed upfront.',
  },
  {
    q: 'How long does it take to find a supplier?',
    a: 'For standard products, we typically present a shortlist of verified suppliers within 5–10 business days. Complex or highly specialized products may take longer. We keep you updated throughout the process.',
  },
  {
    q: 'Do you work with small businesses and startups?',
    a: 'Yes. We work with businesses of all sizes, from startups placing their first order to established brands scaling production. We tailor our services to your order volume and budget.',
  },
  {
    q: 'Can you handle quality inspection for existing suppliers?',
    a: 'Absolutely. If you already have a supplier in China, we can conduct factory audits and pre-shipment inspections on your behalf without changing your supply chain.',
  },
  {
    q: 'What happens if the goods fail quality inspection?',
    a: 'We document all defects and work with the factory to resolve issues before shipment. If goods do not meet agreed specifications, we negotiate rework, replacement, or compensation on your behalf.',
  },
  {
    q: 'Do you handle shipping and customs?',
    a: 'Yes. We coordinate with freight forwarders, prepare export documentation, and track shipments. We can arrange FOB, CIF, or DDP terms depending on your preference.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 md:py-24 bg-neutral-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          subtitle="Answers to the most common questions from buyers new to China sourcing."
        />

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-5 text-left hover:bg-neutral-50 transition-colors border-0 bg-transparent"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-neutral-900 pr-4">{faq.q}</span>
                {openIndex === index
                  ? <ChevronUp className="w-5 h-5 text-brand-blue flex-shrink-0" />
                  : <ChevronDown className="w-5 h-5 text-neutral-400 flex-shrink-0" />
                }
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5">
                  <p className="text-neutral-600 leading-relaxed text-sm">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
