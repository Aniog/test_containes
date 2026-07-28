import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How much does your sourcing service cost?',
    answer: 'We offer flexible pricing models. For standard sourcing, we charge a commission based on order value (typically 3-8%). For inspection and monitoring services, we charge fixed fees per man-day. Contact us for a detailed quote based on your needs.',
  },
  {
    question: 'How do you verify suppliers?',
    answer: 'Our verification process includes checking business licenses, visiting the factory in person, inspecting production lines and equipment, reviewing quality management systems, and cross-checking references. We provide a detailed factory audit report with photos.',
  },
  {
    question: 'What is your minimum order quantity (MOQ)?',
    answer: 'We do not set a universal MOQ. The MOQ depends on the product category and supplier. We help negotiate MOQs with factories and can often secure lower minimums than you would get contacting suppliers directly.',
  },
  {
    question: 'How long does the sourcing process take?',
    answer: 'Initial supplier research and quotation collection typically take 5-10 business days. Factory verification adds another 3-5 days. Production lead times vary by product but we keep you updated throughout.',
  },
  {
    question: 'Can you help with product development and samples?',
    answer: 'Yes. We coordinate sample production, collect samples from multiple suppliers, and ship them to you for evaluation. For custom products, we help communicate technical requirements to factories and track prototype development.',
  },
  {
    question: 'Do you handle shipping and customs?',
    answer: 'We coordinate shipping including booking freight (sea, air, rail), preparing export documentation, and arranging delivery to your door or port. We work with reliable freight forwarders and keep you informed of shipping schedules.',
  },
  {
    question: 'What happens if there is a quality issue?',
    answer: 'If a pre-shipment inspection fails, we work with the factory to rework or replace the defective items before shipping. Our inspection reports are detailed with photos, so you can make informed decisions. We also help resolve disputes with suppliers when necessary.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-teal-700 uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mt-2 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-slate-600">
            Answers to common questions about our sourcing process, pricing, and services.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-slate-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-slate-800 pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-500 shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5">
                  <p className="text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
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
