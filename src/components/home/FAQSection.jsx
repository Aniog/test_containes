import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    id: 'faq-1',
    question: 'What is the minimum order quantity (MOQ) you work with?',
    answer: 'We work with orders of all sizes. Most factories have MOQs starting from 100–500 units depending on the product. We can also help negotiate lower MOQs for first orders or trial runs.',
  },
  {
    id: 'faq-2',
    question: 'How do you charge for your services?',
    answer: 'Our pricing depends on the scope of work. We typically charge a service fee based on order value (usually 5–10%) or a flat project fee. Initial consultations and quotes are always free.',
  },
  {
    id: 'faq-3',
    question: 'How long does the sourcing process take?',
    answer: 'Supplier identification typically takes 5–10 business days. The full process from sourcing to delivery usually takes 4–12 weeks depending on product complexity and order size.',
  },
  {
    id: 'faq-4',
    question: 'Can you source products I already have a supplier for?',
    answer: 'Yes. We can verify your existing supplier, conduct quality inspections, or help you find alternative suppliers for better pricing or quality.',
  },
  {
    id: 'faq-5',
    question: 'What industries do you specialize in?',
    answer: "We source across many industries including electronics, textiles, home goods, industrial equipment, beauty products, and packaging. If it's manufactured in China, we can likely help.",
  },
  {
    id: 'faq-6',
    question: 'Do you handle shipping and customs?',
    answer: 'Yes. We coordinate with freight forwarders, handle export documentation, and can arrange door-to-door delivery via sea, air, or rail freight.',
  },
];

const FAQSection = () => {
  const [openId, setOpenId] = useState(null);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-brand-blue text-sm font-semibold uppercase tracking-wider mb-3">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-neutral-600 text-lg">
            Common questions from buyers considering a China sourcing agent.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-neutral-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-neutral-50 transition border-none"
              >
                <span className="font-medium text-neutral-900 pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-neutral-500 shrink-0 transition-transform ${
                    openId === faq.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openId === faq.id && (
                <div className="px-5 pb-5 text-neutral-600 text-sm leading-relaxed border-t border-neutral-100 pt-4">
                  {faq.answer}
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
