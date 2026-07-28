import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'How do I start a sourcing request?',
    answer: 'Simply fill out our contact form or send us an email with your product requirements, target quantity, and any specifications. We will respond within 24 hours with an initial assessment and next steps.',
  },
  {
    question: 'What are your fees?',
    answer: 'Our fees depend on the scope and complexity of your sourcing project. We offer transparent pricing with no hidden costs. After reviewing your requirements, we will provide a detailed quote before any work begins.',
  },
  {
    question: 'How do you verify suppliers?',
    answer: 'We conduct on-site factory audits that include verifying business licenses, production capacity, quality management systems, equipment, and social compliance. We provide detailed audit reports with photos and videos.',
  },
  {
    question: 'Can you handle small orders?',
    answer: 'Yes, we work with buyers of all sizes. While some factories have minimum order quantities, we can help negotiate terms and find suppliers willing to work with smaller volumes.',
  },
  {
    question: 'How do you ensure product quality?',
    answer: 'We implement a multi-stage quality control process: pre-production sample approval, during-production inspections, and pre-shipment final inspections. All inspections include detailed reports with photos and measurements.',
  },
  {
    question: 'Do you handle shipping and customs?',
    answer: 'Yes, we provide end-to-end logistics support including freight forwarding, customs documentation, and delivery coordination. We work with trusted shipping partners to ensure smooth delivery to your destination.',
  },
  {
    question: 'What industries do you specialize in?',
    answer: 'We have experience across many industries including electronics, textiles, machinery, home goods, auto parts, packaging, and more. Our team includes specialists who understand the specific requirements of each sector.',
  },
  {
    question: 'How long does the sourcing process take?',
    answer: 'Timeline varies by project complexity. Simple sourcing can take 1-2 weeks, while complex projects with custom manufacturing may take 4-12 weeks. We provide realistic timelines upfront and keep you updated throughout.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle mx-auto">
            Answers to common questions about our sourcing services.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-slate-200 rounded-xl overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-slate-900 pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-slate-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-500 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-slate-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
