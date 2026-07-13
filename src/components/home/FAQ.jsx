import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'How does the sourcing process work?',
    answer: 'Our process is straightforward: 1) You share your product requirements. 2) We identify and present qualified suppliers. 3) We conduct factory verification and sampling. 4) We monitor production and quality. 5) We coordinate shipping and delivery. You stay informed at every step with regular updates.',
  },
  {
    question: 'What are your fees?',
    answer: 'We offer flexible pricing based on your needs. For standard sourcing projects, we charge a percentage of the order value. For ongoing partnerships, we offer monthly retainer options. Contact us for a customized quote based on your specific requirements.',
  },
  {
    question: 'How do you verify suppliers?',
    answer: 'Our verification process includes: business license verification, on-site factory audits, production capacity assessment, quality management system review, financial stability check, and reference verification from existing clients. We only work with suppliers who pass our rigorous vetting process.',
  },
  {
    question: 'What types of products can you source?',
    answer: 'We source a wide range of products including consumer electronics, home goods, apparel, industrial equipment, automotive parts, promotional items, and more. Our network covers manufacturers across all major industrial regions in China.',
  },
  {
    question: 'How long does the sourcing process take?',
    answer: 'Timelines vary based on product complexity and quantity. Simple products: 2-4 weeks for supplier identification and sampling, 4-8 weeks for production. Complex products: 4-8 weeks for sourcing, 8-16 weeks for production. We provide detailed timelines during the consultation phase.',
  },
  {
    question: 'What quality control measures do you have?',
    answer: 'We implement multi-stage quality control: pre-production sample approval, in-line inspections during manufacturing, pre-shipment inspections using AQL standards, and container loading supervision. Each stage includes detailed reports with photos and measurements.',
  },
  {
    question: 'Can you handle custom product development?',
    answer: 'Yes, we work with manufacturers who specialize in custom product development. We can help with design optimization, prototyping, tooling, and sample production. Our team provides technical guidance throughout the development process.',
  },
  {
    question: 'What shipping options do you offer?',
    answer: 'We coordinate all shipping methods including sea freight (FCL/LCL), air freight, rail freight, and express courier services. We handle customs clearance, documentation, and door-to-door delivery. We help you choose the most cost-effective option based on your timeline.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-4 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-text-secondary">
            Find answers to common questions about our sourcing services.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-bg-light rounded-xl border border-border-light overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <HelpCircle className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-semibold text-text-primary">{faq.question}</span>
                </div>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-text-light flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-text-light flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 pl-18">
                  <div className="ml-12 text-text-secondary leading-relaxed">
                    {faq.answer}
                  </div>
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
