import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What is a China sourcing agent?',
    answer: 'A China sourcing agent acts as your representative in China, helping you find reliable suppliers, verify factories, negotiate prices, manage quality control, and coordinate shipping. They bridge the gap between overseas buyers and Chinese manufacturers.',
  },
  {
    question: 'How do you verify suppliers?',
    answer: 'We conduct on-site factory audits that include checking business licenses, production capacity, quality management systems, equipment, and social compliance. We also verify references from previous clients and check for any legal or financial issues.',
  },
  {
    question: 'What are your fees?',
    answer: 'Our fees depend on the scope of services required. We offer transparent pricing with no hidden costs. Typically, we charge a service fee based on order value or a fixed fee for specific services like factory audits or inspections. Contact us for a detailed quote.',
  },
  {
    question: 'Can you source any product from China?',
    answer: 'We source a wide range of products including electronics, machinery, textiles, home goods, auto parts, and consumer goods. If you have a specific product in mind, contact us and we will let you know if we can help.',
  },
  {
    question: 'How do you handle quality control?',
    answer: 'We offer pre-production inspections, during-production checks, and pre-shipment inspections. Our inspectors follow international standards and provide detailed reports with photos and measurements. If issues are found, we work with the factory to resolve them before shipment.',
  },
  {
    question: 'Do you handle shipping and customs?',
    answer: 'Yes, we coordinate the entire shipping process including freight forwarding, customs documentation, and delivery tracking. We work with reliable logistics partners to ensure your goods arrive safely and on time.',
  },
  {
    question: 'What is the typical timeline for sourcing?',
    answer: 'Timelines vary depending on the product and complexity. Supplier sourcing typically takes 1-2 weeks, sample evaluation 1-2 weeks, and production 4-8 weeks. We provide detailed timelines for each project.',
  },
  {
    question: 'How do I get started?',
    answer: 'Simply fill out our contact form with your product requirements, and our team will get back to you within 24 hours with a free sourcing quote and initial recommendations.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Common questions about our China sourcing services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-medium text-gray-900 pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
