import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'Our fees depend on the scope of work. We offer a free initial consultation and sourcing quote. Service fees are typically a percentage of the order value or a flat project fee, agreed upfront before any work begins.',
  },
  {
    q: 'How long does it take to find a supplier?',
    a: 'For most product categories, we can present a shortlist of qualified suppliers within 5–10 business days. Complex or highly specialized products may take longer.',
  },
  {
    q: 'Do you work with small orders or only large volumes?',
    a: 'We work with buyers at various stages. While some factories have minimum order quantities, we can often negotiate lower MOQs for new clients or help you find suppliers suited to smaller initial orders.',
  },
  {
    q: 'Can you help with product customization and private labeling?',
    a: 'Yes. We regularly assist clients with custom product development, OEM manufacturing, and private label branding — including packaging design coordination.',
  },
  {
    q: 'What happens if the goods fail quality inspection?',
    a: 'If goods fail inspection, we work with the factory to resolve the issue before shipment. We document all defects and negotiate rework, replacement, or compensation on your behalf.',
  },
  {
    q: 'Do you handle shipping and customs clearance?',
    a: 'We coordinate freight forwarding and export documentation from China. For import customs clearance in your country, we work with your local customs broker or can recommend one.',
  },
  {
    q: 'Which industries do you specialize in?',
    a: 'We source across a wide range of categories including electronics, furniture, apparel, industrial goods, packaging, toys, and more. Our team has category specialists for most major product types.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 bg-neutral-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-brand-blue text-sm font-semibold uppercase tracking-widest mb-2">FAQ</p>
          <h2 className="text-neutral-900 text-3xl md:text-4xl font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-neutral-500 text-lg mt-4">
            Answers to the most common questions from buyers new to China sourcing.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border border-neutral-200 rounded-xl overflow-hidden">
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-neutral-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-neutral-900 font-medium text-base pr-4">{faq.q}</span>
                {openIndex === index
                  ? <ChevronUp className="w-5 h-5 text-brand-blue flex-shrink-0" />
                  : <ChevronDown className="w-5 h-5 text-neutral-500 flex-shrink-0" />
                }
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-neutral-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
