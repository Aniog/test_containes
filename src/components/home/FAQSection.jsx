import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How much does your sourcing service cost?',
    answer: 'Our fees are transparent and depend on the scope of your project. We typically charge a sourcing commission (5-10% of order value) or a fixed project fee for complex requirements. The first quote and supplier shortlist are free.',
  },
  {
    question: 'How long does it take to find suppliers?',
    answer: 'For standard products, we can provide a shortlist of 3-5 verified suppliers within 3-5 business days. For custom or specialized products, it may take 7-10 days to conduct thorough research and initial vetting.',
  },
  {
    question: 'Do you work with small orders or only large volumes?',
    answer: 'We work with businesses of all sizes. Whether you need a small trial order of 500 units or a container load of 50,000 units, we can find suppliers that match your volume requirements.',
  },
  {
    question: 'What if I already have a supplier but need quality control?',
    answer: 'Absolutely. Many clients come to us for standalone inspection services. We offer pre-shipment inspection, during-production monitoring, and container loading supervision for any supplier you are already working with.',
  },
  {
    question: 'How do you handle payments to suppliers?',
    answer: 'We help you structure secure payment terms — typically 30% deposit and 70% before shipment. For new relationships, we can also arrange payment through escrow or our local account for added security.',
  },
  {
    question: 'Can you handle shipping and customs?',
    answer: 'Yes. We coordinate the full logistics chain from factory to your door — including freight forwarding, customs documentation, and delivery to your warehouse, Amazon FBA, or any destination worldwide.',
  },
  {
    question: 'What makes you different from other sourcing agents?',
    answer: 'Three things: (1) We are on the ground in China, visiting factories in person. (2) We are transparent — no hidden kickbacks from factories. (3) We have 12+ years of experience across diverse industries with a 98% client retention rate.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-3 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-lg">
            Everything you need to know about working with us.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl border transition-all duration-200 ${
                openIndex === index ? 'border-primary-200 shadow-md' : 'border-slate-200'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className={`font-semibold pr-4 ${openIndex === index ? 'text-primary-500' : 'text-slate-800'}`}>
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180 text-primary-500' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5">
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
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