import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'How do I get started with sourcing from China?',
    answer: 'Simply submit your product requirements through our contact form or inquiry page. We will review your request within 24 hours and provide a free sourcing plan with estimated costs and timelines.',
  },
  {
    question: 'What are your service fees?',
    answer: 'Our fees depend on the scope of services you need. We offer transparent pricing with no hidden costs. After reviewing your requirements, we provide a detailed quote before any work begins.',
  },
  {
    question: 'How do you verify suppliers?',
    answer: 'We conduct on-site factory audits that include checking business licenses, production capacity, quality management systems, and social compliance. We also verify references and past performance.',
  },
  {
    question: 'Can you handle small order quantities?',
    answer: 'Yes, we work with buyers of all sizes. While some factories have minimum order quantities, we can help you find suppliers willing to work with smaller orders, especially for initial samples and test runs.',
  },
  {
    question: 'What quality inspections do you provide?',
    answer: 'We offer pre-production inspections, during-production checks, and pre-shipment inspections. Each inspection includes a detailed report with photos and measurements against your specifications.',
  },
  {
    question: 'How do you handle shipping and customs?',
    answer: 'We coordinate with reliable freight forwarders to arrange sea, air, or express shipping. We prepare all necessary customs documentation and can deliver to your warehouse or port of choice.',
  },
  {
    question: 'Do you work with buyers from all countries?',
    answer: 'Yes, we serve buyers from North America, Europe, Australia, Southeast Asia, the Middle East, and other regions. Our team speaks English and Mandarin.',
  },
  {
    question: 'What if there is a quality issue with my order?',
    answer: 'If defects are found during inspection, we work with the factory to resolve the issue before shipment. If problems arise after delivery, we help you negotiate with the supplier for replacement or refund.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-blue-700 font-semibold text-sm uppercase tracking-wider mb-3">FAQ</span>
          <h2 id="faq-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p id="faq-subtitle" className="text-lg text-slate-600">
            Answers to common questions about sourcing from China with SSourcing China.
          </p>
        </div>

        {/* FAQ list */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 lg:p-6 text-left hover:bg-slate-50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-slate-900 pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-5 lg:px-6 pb-5 lg:pb-6">
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
