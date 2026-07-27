import { useState } from 'react';
import { ChevronDown, Plus } from 'lucide-react';

const faqs = [
  {
    question: 'What is the minimum order quantity (MOQ) for sourcing from China?',
    answer: 'MOQs vary by supplier and product type. Many factories require 500-2000 units per design. We work to negotiate lower MOQs with suppliers and can also help you find suppliers with more flexible MOQ requirements if your volumes are smaller.',
  },
  {
    question: 'How long does it take to receive products from China?',
    answer: 'Typical lead times range from 30-90 days depending on product complexity, order quantity, and current production schedules. Shipping adds another 2-6 weeks depending on the freight method (sea freight vs. air freight). We provide detailed timelines during the quoting phase.',
  },
  {
    question: 'How do you ensure product quality?',
    answer: 'We conduct quality inspections at multiple stages: pre-production, during production (inline inspection), and pre-shipment. Our inspectors follow AQL standards and provide detailed inspection reports with photos. We also verify factory certifications and may arrange third-party lab testing when needed.',
  },
  {
    question: 'What are your service fees?',
    answer: 'Our fee structure depends on the services you need. We typically charge a percentage of the order value or a flat fee per service. Initial consultations and supplier identification are often free. We provide transparent pricing quotes before any work begins.',
  },
  {
    question: 'Do you handle shipping and customs?',
    answer: 'Yes, we coordinate full shipping and logistics services including freight forwarding, customs documentation, and delivery to your specified location. We work with established logistics partners to ensure competitive rates and reliable delivery.',
  },
  {
    question: 'Can you help with product development and prototyping?',
    answer: 'Absolutely. We can connect you with manufacturers who offer OEM and ODM services, help refine your product specifications, create prototypes, and manage the development process from concept to mass production.',
  },
  {
    question: 'What countries do you ship to?',
    answer: 'We ship to over 50 countries worldwide. Our logistics network covers North America, Europe, South America, Africa, Asia, and Australia. Common destinations include USA, UK, Germany, Australia, Canada, and Brazil.',
  },
  {
    question: 'How do I get started?',
    answer: 'Simply fill out our contact form or email us with your product requirements. We will review your needs and schedule a free consultation call within 24 hours. From there, we create a customized sourcing plan for your review.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-spacing bg-white" id="faq">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-primary mb-4">FAQ</span>
          <h2 className="section-heading mb-4">
            Frequently Asked Questions
          </h2>
          <p className="section-subheading mx-auto">
            Find answers to common questions about our China sourcing services.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-neutral-50 rounded-xl overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'ring-2 ring-primary-200' : ''
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold text-neutral-900 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-400 shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="px-6 pb-6 text-neutral-600 leading-relaxed">
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

export default FAQSection;
