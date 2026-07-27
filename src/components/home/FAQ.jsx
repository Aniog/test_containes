import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'How do you find and verify suppliers?',
    answer: 'We search our pre-verified supplier network and industry databases based on your product requirements. For new suppliers, we conduct on-site factory audits to verify business licenses, production capacity, quality management systems, and actual manufacturing capabilities — not just trading companies.',
  },
  {
    question: 'What does a quality inspection include?',
    answer: 'Our inspections follow international AQL standards. We check product appearance, dimensions, functionality, packaging, and labeling. We provide detailed reports with photos and measurements. Inspections can be done before production (pre-production), during production (DUPRO), and before shipment (pre-shipment).',
  },
  {
    question: 'How much does your sourcing service cost?',
    answer: 'Our basic sourcing and supplier matching service is free — you only pay when you place an order through the supplier we found. Factory verification, quality inspection, and production follow-up services are quoted based on your specific needs. Contact us for a free quote.',
  },
  {
    question: 'Can you source any type of product?',
    answer: 'We source across most product categories manufactured in China, including electronics, textiles, hardware, packaging, furniture, automotive parts, and more. If a product can be manufactured in China, we can likely find a reliable supplier for it.',
  },
  {
    question: 'How long does the sourcing process take?',
    answer: 'Initial supplier matching typically takes 3–7 business days. Factory verification takes 5–10 days depending on location. The full process from request to first sample can range from 2–4 weeks, depending on product complexity and supplier availability.',
  },
  {
    question: 'Do you handle shipping and customs?',
    answer: 'Yes. We coordinate freight booking (air, sea, or express), prepare customs documentation, arrange insurance, and track delivery to your destination. We work with reliable freight forwarders and can handle both FCL and LCL shipments.',
  },
  {
    question: 'What if the supplier fails to deliver?',
    answer: 'We monitor production progress closely and flag issues early. If a supplier cannot meet commitments, we help you find alternatives from our verified network. Our goal is to prevent problems before they happen, not just react after the fact.',
  },
  {
    question: 'Do you work with small orders?',
    answer: 'Yes. While many factories have minimum order quantities, we can help negotiate lower MOQs for initial orders or find suppliers who accommodate smaller quantities. We work with businesses of all sizes.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Common questions about our China sourcing services. Can't find what you're looking for? Contact us directly.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-slate-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-slate-500 shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-500 shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
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

export default FAQ;
