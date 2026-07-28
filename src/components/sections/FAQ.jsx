import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import SectionHeader from './SectionHeader';

const FAQ = ({ 
  title = "Frequently Asked Questions",
  subtitle = "Find answers to common questions about our China sourcing services.",
  faqs = [],
  eyebrow = "FAQ"
}) => {
  const [openIndex, setOpenIndex] = useState(null);

  const defaultFAQs = faqs.length > 0 ? faqs : [
    {
      question: "How do I start the sourcing process?",
      answer: "Simply fill out our inquiry form with your product requirements. We'll review your request and get back to you within 24 hours with initial options and a free consultation."
    },
    {
      question: "What types of products can you help me source?",
      answer: "We have experience sourcing a wide range of products including electronics, home goods, furniture, textiles, machinery, packaging materials, and more. If you have a specific product in mind, contact us to discuss."
    },
    {
      question: "How do you verify factory reliability?",
      answer: "We conduct on-site visits to verify factory existence, assess production capacity, check business licenses, review quality management systems, and verify references. We provide detailed reports with photos and video calls."
    },
    {
      question: "What quality control services do you offer?",
      answer: "We offer pre-production, during-production, and pre-shipment inspections. Our inspectors check product quality, quantity, packaging, labeling, and compliance with your specifications. We use standard inspection protocols like AQL."
    },
    {
      question: "How long does the sourcing process typically take?",
      answer: "Timeline varies based on product complexity and availability. Simple products may take 2-4 weeks, while custom manufacturing can take 4-8 weeks. We'll provide estimated timelines during the consultation phase."
    },
    {
      question: "What are your fees for sourcing services?",
      answer: "Our fee structure depends on the services required and order volume. We offer transparent pricing with no hidden fees. Contact us for a custom quote based on your specific requirements."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-bg-light">
      <div className="container-custom">
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
          className="mb-12"
        />
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {defaultFAQs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-primary pr-4">{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className={`text-text-muted flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="px-6 pb-5 text-text-secondary leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
