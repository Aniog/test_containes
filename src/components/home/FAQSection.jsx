import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'How do you find and evaluate suppliers?',
    answer: 'We search across our verified factory network and industry contacts based on your product specifications. We then evaluate candidates through background checks, on-site visits, production capability assessments, and reference verification before presenting options to you.',
  },
  {
    question: 'What does a factory verification visit include?',
    answer: 'Our team visits the factory in person to verify their business license, check actual production lines, review quality control processes, assess worker conditions, and confirm their capacity to meet your order volume and timeline.',
  },
  {
    question: 'How are quality inspections conducted?',
    answer: 'We offer pre-production inspections (checking materials and components), during-production inspections (monitoring the manufacturing process), and pre-shipment inspections (final check before goods leave the factory). Each inspection follows internationally recognized AQL standards.',
  },
  {
    question: 'What are your service fees?',
    answer: 'Our fees depend on the scope of work — supplier search, inspection visits, production monitoring, or full sourcing management. We provide a clear fee structure upfront with no hidden costs. Contact us for a quote based on your specific needs.',
  },
  {
    question: 'Can you help with small order quantities?',
    answer: 'Yes. While some factories have minimum order requirements, we work with suppliers who accommodate smaller volumes, especially for initial trial orders. We help you find the right balance between order size and cost.',
  },
  {
    question: 'Which regions in China do you cover?',
    answer: 'We are based in Guangzhou and have coverage across major manufacturing regions including Guangdong (electronics, textiles, furniture), Zhejiang (machinery, consumer goods), Jiangsu (industrial equipment), and other key production hubs.',
  },
  {
    question: 'How do you handle shipping and logistics?',
    answer: 'We coordinate with freight forwarders for sea, air, and rail shipments. We handle export documentation, customs declarations, and track your shipment from the factory to your destination. We can arrange door-to-door delivery or port-to-port based on your preference.',
  },
  {
    question: 'What happens if there is a quality problem after delivery?',
    answer: "We document all inspections with photos and reports. If issues arise that were not caught during inspection, we work with you and the factory to determine responsibility and arrange corrective action — whether that's replacement, rework, or compensation.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
            Common questions about our sourcing services and how we work.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-neutral-200 rounded-lg">
              <button
                className="w-full flex items-center justify-between p-5 text-left hover:bg-neutral-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-neutral-800 font-medium text-sm md:text-base pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-neutral-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-neutral-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5">
                  <p className="text-neutral-500 text-sm leading-relaxed">{faq.answer}</p>
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
