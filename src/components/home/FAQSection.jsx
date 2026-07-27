import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'What is the minimum order quantity (MOQ) you can handle?',
    a: 'We work with orders of all sizes. While many Chinese factories have MOQs, we negotiate on your behalf and can often find suppliers willing to accommodate smaller trial orders. Typical MOQs depend on the product category — we will advise you during consultation.',
  },
  {
    q: 'How do you vet and verify suppliers?',
    a: 'Our 8-point verification process includes: business license check, factory site visit, production capacity assessment, quality management system review, sample evaluation, export license verification, client reference checks, and compliance audit against international standards.',
  },
  {
    q: 'What are your fees and payment terms?',
    a: 'We offer transparent pricing based on service scope. Typical engagement models include a per-project fee, a retainer for ongoing sourcing, or a percentage-based commission. We provide a detailed quote after understanding your requirements. No hidden costs.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'Supplier identification typically takes 1-2 weeks. Factory audits and sample collection take another 2-3 weeks. Production lead times vary by product complexity but typically range from 3-8 weeks. We provide a realistic timeline during the initial consultation.',
  },
  {
    q: 'Can you handle product customisation and OEM/ODM?',
    a: 'Yes. We have extensive experience with custom products, OEM manufacturing, and ODM development. We help you communicate specifications clearly to factories, review technical drawings, and ensure the final product matches your requirements.',
  },
  {
    q: 'What happens if there are quality issues with my order?',
    a: 'Our quality control process is designed to catch issues before shipment. If problems are found during inspection, we work with the factory to resolve them — rework, replacement, or negotiation — before the goods leave China. We only ship when quality is confirmed.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-heading mb-4">Frequently Asked Questions</h2>
          <p className="section-subheading mx-auto">
            Quick answers to common questions about working with a China sourcing agent.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-slate-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-slate-50 transition-colors"
              >
                <span className="font-medium text-brand-900 pr-4 text-sm md:text-base">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-4">
                  <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
