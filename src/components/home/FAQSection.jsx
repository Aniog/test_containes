import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'Our fees depend on the scope of work. We offer a free initial consultation and sourcing quote. For most projects, we charge a service fee based on order value or a flat project fee. We\'ll provide a clear breakdown before you commit.',
  },
  {
    q: 'How long does it take to find a supplier?',
    a: 'For standard product categories, we typically provide a shortlist of 3–5 verified suppliers within 3–5 business days. Complex or niche products may take 7–10 days. We\'ll give you a realistic timeline upfront.',
  },
  {
    q: 'Can you help with small orders or low MOQs?',
    a: 'Yes. We work with buyers at various stages, including startups and small businesses. We can help negotiate lower MOQs with factories and identify suppliers who specialize in smaller production runs.',
  },
  {
    q: 'Do you work with specific product categories only?',
    a: 'We source across a wide range of categories including electronics, furniture, apparel, machinery, health products, and more. If you\'re unsure whether we can help with your product, just ask — we\'ll be honest about our capabilities.',
  },
  {
    q: 'What does a factory audit include?',
    a: 'Our factory audits cover production capacity, equipment condition, workforce size, quality management systems, certifications (ISO, CE, etc.), and compliance with your specific requirements. You receive a written report with photos.',
  },
  {
    q: 'How do you handle quality inspections?',
    a: 'We offer pre-production, during-production, and pre-shipment inspections. Our local QC team follows your product specifications and AQL standards. You receive a detailed inspection report before goods are shipped.',
  },
  {
    q: 'Can you help with shipping and customs?',
    a: 'Yes. We coordinate sea freight, air freight, and express courier options. We work with licensed freight forwarders and can assist with export documentation, packing lists, and customs clearance coordination.',
  },
  {
    q: 'What if there\'s a quality problem after delivery?',
    a: 'We document all inspections thoroughly to support any claims. If issues arise, we work with you and the supplier to resolve them — whether through replacement, credit, or rework. Our goal is to prevent problems before shipment.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-brand-blue text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600">
            Answers to the most common questions from buyers new to China sourcing.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-slate-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-slate-50 transition-colors"
              >
                <span className="font-medium text-slate-900 text-sm pr-4">{faq.q}</span>
                {openIndex === i ? (
                  <ChevronUp className="w-4 h-4 text-brand-blue flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === i && (
                <div className="px-5 pb-4 bg-slate-50 border-t border-slate-100">
                  <p className="text-sm text-slate-600 leading-relaxed pt-3">{faq.a}</p>
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
