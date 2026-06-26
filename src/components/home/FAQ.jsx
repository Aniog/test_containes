import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'How do you verify that a Chinese supplier is legitimate?',
    a: 'We conduct comprehensive on-site factory audits that verify business licenses, production equipment, quality management systems, export history, and financial standing. We also check references from previous international clients and verify certifications such as ISO, CE, and RoHS.',
  },
  {
    q: 'What products can you help source from China?',
    a: 'We cover a wide range of categories including electronics, textiles and apparel, furniture, hardware and industrial parts, plastics, packaging, home goods, promotional items, and more. If it is manufactured in China, we can help source it.',
  },
  {
    q: 'What are your fees and how does payment work?',
    a: 'We offer flexible pricing based on project scope: either a fixed project fee, a percentage of order value (typically 3-8%), or a retainer for ongoing sourcing needs. We provide a transparent quote after reviewing your requirements. No hidden charges.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'The timeline varies by product complexity and order volume. A typical project takes 6-10 weeks from initial requirements to production start. Supplier identification usually takes 1-2 weeks, factory audits 1 week, and sampling/negotiation 2-4 weeks.',
  },
  {
    q: 'Do you handle shipping and customs clearance?',
    a: 'Yes, we offer complete logistics support including freight booking (sea, air, or rail), customs documentation, and coordination with your freight forwarder. We can also recommend trusted shipping partners if needed.',
  },
  {
    q: 'What happens if there is a quality issue with the order?',
    a: 'We catch most issues before shipment through our multi-stage QC process. If a defect is found, we work with the supplier to correct it. For post-delivery issues, we mediate with the supplier and support you through the resolution process.',
  },
  {
    q: 'Can you help with product development or custom designs?',
    a: 'Absolutely. We can connect you with Chinese manufacturers that offer OEM/ODM services, including design support, prototyping, tooling, and custom packaging. We manage the entire development-to-production pipeline.',
  },
  {
    q: 'Do I need to visit China myself?',
    a: 'No, we serve as your local representative. While some clients choose to visit for key milestones, it is not required. We provide detailed reports, photos, and video updates so you have full visibility remotely.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg">
            Answers to common questions about our sourcing services.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-navy pr-4">{faq.q}</span>
                {openIndex === i ? (
                  <Minus className="w-5 h-5 text-gold flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5">
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
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