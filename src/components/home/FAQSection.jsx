import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    q: 'How do you find suppliers for my product?',
    a: 'We start by understanding your product specifications, target price, and quality requirements. Then we search our verified supplier network and industry contacts to identify factories that match your needs. We present you with 2-3 qualified options, complete with factory reports and pricing.',
  },
  {
    q: 'What does factory verification include?',
    a: 'Our factory verification includes an in-person visit to check the business license, production equipment, workforce, quality control systems, and past client references. We also verify whether the supplier is a real manufacturer or a trading company, and assess their capacity to meet your order volume.',
  },
  {
    q: 'How much does your sourcing service cost?',
    a: 'Our pricing depends on the scope of work. We offer flexible service packages — from single factory verification to full sourcing management. Contact us for a free quote based on your specific requirements. There are no hidden fees.',
  },
  {
    q: 'Can you handle small orders?',
    a: 'Yes. We work with buyers of all sizes, from small businesses placing first orders to large importers with regular shipments. We help you find suppliers that match your order volume, whether it is a few hundred units or tens of thousands.',
  },
  {
    q: 'What happens if there is a quality problem?',
    a: 'If a quality issue is found during inspection, we document it with photos and details, then work with the factory to resolve it before shipment. If the problem cannot be fixed, we help you negotiate a solution — whether that is rework, replacement, or refund. Our goal is to make sure you never receive defective goods.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'Typically, from your first inquiry to receiving samples takes 2-4 weeks. Full production and delivery timelines depend on the product and order size. We provide a realistic timeline at the start of each project and keep you updated throughout.',
  },
  {
    q: 'Do you work with buyers outside the US?',
    a: 'Yes. We serve buyers from North America, Europe, Australia, the Middle East, and other regions. Our team communicates in English and Chinese, and we can coordinate shipping to any international destination.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
            Common questions about our sourcing services and how we work with buyers.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-neutral-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between px-5 py-4 bg-neutral-50 hover:bg-neutral-100 transition-colors text-left border-0"
              >
                <span className="text-neutral-900 font-medium text-sm pr-4">{faq.q}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-neutral-500 shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-neutral-500 shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-5 py-4 bg-white">
                  <p className="text-neutral-600 text-sm leading-relaxed">{faq.a}</p>
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
