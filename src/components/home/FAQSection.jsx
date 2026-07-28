import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'How do you verify suppliers in China?',
    answer: 'We conduct on-site factory audits that include verifying business licenses, checking production capacity, inspecting equipment and facilities, reviewing quality management systems, and confirming export certifications. Each supplier goes through our multi-step verification process before we recommend them.',
  },
  {
    question: 'What industries and products do you source?',
    answer: 'We source products across major industries including electronics, home goods, apparel, machinery, automotive parts, health and beauty products, and more. Our supplier network covers thousands of manufacturers across China\'s major industrial regions.',
  },
  {
    question: 'How much does your sourcing service cost?',
    answer: 'Our pricing depends on the scope of services needed. We offer transparent pricing with no hidden fees. Basic supplier sourcing starts with a flat project fee, while comprehensive services including QC and shipping coordination are priced based on order volume. Contact us for a customized quote.',
  },
  {
    question: 'What quality control measures do you use?',
    answer: 'We implement a three-stage inspection process: pre-production inspection of raw materials and samples, in-line inspection during manufacturing, and pre-shipment inspection of finished goods. We use AQL (Acceptable Quality Level) standards and provide detailed inspection reports with photos.',
  },
  {
    question: 'How long does the sourcing process take?',
    answer: 'Initial supplier identification typically takes 5-7 business days. Sample evaluation adds 1-2 weeks depending on product complexity. From order confirmation to shipment, production timelines vary by product but generally range from 30-60 days. We provide realistic timelines upfront.',
  },
  {
    question: 'Can you help with small order quantities?',
    answer: 'Yes, we work with businesses of all sizes. While minimum order quantities vary by manufacturer, we have relationships with suppliers who accommodate smaller orders. We will find the best fit for your quantity requirements and budget.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section-padding bg-white" id="faq">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Common questions about sourcing products from China with our help.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-xl mb-4 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-brand-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
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
