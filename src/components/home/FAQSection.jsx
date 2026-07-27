import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'How do I get started with sourcing from China?',
    answer: 'Simply submit your product requirements through our contact form or inquiry page. We will analyze your needs, provide a transparent quote, and begin the supplier matching process within 24-48 hours.',
  },
  {
    question: 'What are your service fees?',
    answer: 'Our fees depend on the scope of services required. We offer transparent pricing with no hidden costs. Common fee structures include a percentage of order value for full-service sourcing or fixed fees for individual services like inspections.',
  },
  {
    question: 'How do you verify suppliers?',
    answer: 'We conduct on-site factory audits, verify business licenses, check production capacity, review quality management systems, and confirm export credentials. Every recommended supplier goes through our multi-step verification process.',
  },
  {
    question: 'Can you handle small order quantities?',
    answer: 'Yes, we work with buyers of all sizes. While some factories have minimum order requirements, we can help negotiate MOQs and find suppliers willing to work with smaller quantities, especially for new business relationships.',
  },
  {
    question: 'What quality control measures do you provide?',
    answer: 'We offer pre-production inspections, during-production checks, and pre-shipment inspections. Each inspection includes detailed photo reports, measurement checks, functional testing, and compliance verification against your specifications.',
  },
  {
    question: 'How do you handle shipping and customs?',
    answer: 'We coordinate with reliable freight forwarders to handle sea freight, air freight, and express shipping. We manage export documentation, customs clearance, and provide tracking until goods reach your destination.',
  },
  {
    question: 'What if there are quality issues with my order?',
    answer: 'If defects are found during inspection, we work with the factory to resolve issues before shipment. If problems arise after delivery, we help negotiate with the supplier for replacements, refunds, or corrective actions.',
  },
  {
    question: 'Do you work with buyers from all countries?',
    answer: 'Yes, we serve buyers from over 40 countries worldwide. Our team speaks English and has experience with international trade regulations, shipping requirements, and customs procedures for major markets.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Common questions about our China sourcing services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-card border border-border rounded-lg overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-5 text-left hover:bg-accent/50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-foreground pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
