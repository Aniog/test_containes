import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'How do I get started with sourcing from China?',
    answer: 'Simply submit your product requirements through our inquiry form. We will review your request within 24 hours and provide a free sourcing plan with estimated costs and timeline.',
  },
  {
    question: 'What are your fees?',
    answer: 'Our fees depend on the scope of services you need. We offer transparent pricing with no hidden costs. Basic sourcing starts at a flat fee, and full-service packages are priced as a percentage of order value. Contact us for a detailed quote.',
  },
  {
    question: 'How do you verify suppliers?',
    answer: 'We conduct on-site factory audits, verify business licenses, check production capacity, review quality management systems, and assess working conditions. We only recommend suppliers that pass our verification process.',
  },
  {
    question: 'Can you help with small orders?',
    answer: 'Yes, we work with businesses of all sizes. While some factories have minimum order quantities, we can help you find suppliers that accommodate smaller orders or negotiate MOQs on your behalf.',
  },
  {
    question: 'How do you handle quality issues?',
    answer: 'We conduct multi-stage inspections: pre-production, during production, and pre-shipment. If any issues are found, we work with the factory to resolve them before your goods ship. We also help negotiate compensation if defects are discovered.',
  },
  {
    question: 'Do you handle shipping and customs?',
    answer: 'Yes, we offer end-to-end logistics support including freight forwarding, customs documentation, and coordination with your preferred freight forwarder. We can arrange sea freight, air freight, or express shipping based on your needs.',
  },
  {
    question: 'What industries do you specialize in?',
    answer: 'We source across many industries including electronics, textiles, home goods, industrial equipment, consumer products, auto parts, health and beauty, and food packaging. If you have a specific product in mind, contact us and we will let you know if we can help.',
  },
  {
    question: 'How long does the sourcing process take?',
    answer: 'Timeline varies by product complexity. Supplier identification typically takes 1-2 weeks, sampling 2-4 weeks, and production 4-8 weeks depending on order size. We provide a detailed timeline with every sourcing plan.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle mx-auto">
            Answers to common questions about sourcing from China with SSourcing China.
          </p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-slate-200 rounded-lg overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-slate-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-500 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5">
                  <p className="text-slate-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
