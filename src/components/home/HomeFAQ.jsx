import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { SectionHeader } from '@/components/shared';

const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'Our fees depend on the scope of work. We offer a free initial consultation and sourcing quote. Service fees are typically a percentage of the order value or a fixed project fee, agreed upfront with no hidden charges.',
  },
  {
    q: 'How long does it take to find a supplier?',
    a: 'For most product categories, we can provide a shortlist of 3–5 verified suppliers within 5–7 business days. Complex or highly specialized products may take longer.',
  },
  {
    q: 'Do you work with small businesses and startups?',
    a: 'Yes. We work with businesses of all sizes, from individual entrepreneurs placing their first order to established brands scaling their supply chain.',
  },
  {
    q: 'What if the product quality is not acceptable?',
    a: 'Our QC inspections are designed to catch issues before goods leave the factory. If problems are found, we work with the supplier to resolve them. We document everything so you have full visibility.',
  },
  {
    q: 'Can you help with product development and private label?',
    a: 'Yes. We assist with product design, material selection, sample development, and branded packaging for private label and OEM projects.',
  },
  {
    q: 'Which regions of China do you cover?',
    a: 'We operate across all major manufacturing hubs including Guangdong, Zhejiang, Jiangsu, Shandong, Fujian, and more. Our team can visit factories throughout mainland China.',
  },
];

const HomeFAQ = () => {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          subtitle="Answers to the most common questions from buyers considering China sourcing."
        />
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-medium text-blue-navy text-sm pr-4">{faq.q}</span>
                {open === i
                  ? <ChevronUp className="w-4 h-4 text-gray-500 flex-shrink-0" />
                  : <ChevronDown className="w-4 h-4 text-gray-500 flex-shrink-0" />
                }
              </button>
              {open === i && (
                <div className="px-5 pb-4 bg-white">
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFAQ;
