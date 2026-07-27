import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'How does your sourcing service work?',
    answer: 'You submit your product requirements, and our team researches, contacts, and vets potential suppliers. We present you with verified options, negotiate pricing, and manage quality control and logistics through to delivery.',
  },
  {
    question: 'What does it cost to use your service?',
    answer: 'We typically charge a commission based on order value, or a fixed project fee for smaller orders. There are no upfront fees for initial supplier research and quoting. We will provide a clear quote before any work begins.',
  },
  {
    question: 'How do you verify factories?',
    answer: 'Our on-site team conducts physical factory audits covering business licenses, production lines, equipment, certifications, and past performance. We also check references and review export history where available.',
  },
  {
    question: 'Can you help with custom or OEM products?',
    answer: 'Yes. We work with many OEM/ODM manufacturers and can help with product development, sampling, mold creation, and custom packaging. Share your specifications and we will find the right partner.',
  },
  {
    question: 'What types of quality inspections do you offer?',
    answer: 'We offer pre-production, during-production, pre-shipment, and container-loading inspections. All inspections follow AQL standards and include detailed photo reports.',
  },
  {
    question: 'Which countries do you ship to?',
    answer: 'We coordinate shipping worldwide via sea freight, air freight, or rail depending on your needs and destination. We handle customs documentation for major markets including the US, EU, UK, Australia, and Southeast Asia.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-primary/5 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            Frequently Asked Questions
          </div>
          <h2 id="faq-title" className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Common Questions from Buyers
          </h2>
          <p id="faq-subtitle" className="text-lg text-text-secondary">
            Everything you need to know about working with SSourcing China.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`bg-surface rounded-xl border transition-colors ${
                  isOpen ? 'border-primary/20' : 'border-border'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-primary pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-text-muted shrink-0 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6">
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
