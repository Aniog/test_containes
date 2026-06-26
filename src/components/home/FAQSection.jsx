import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'What types of products can you help me source from China?',
    a: 'We source a wide range of products including electronics, home goods, apparel, industrial parts, health & beauty products, and packaging materials. If it\'s manufactured in China, we can likely help you source it. Contact us with your specific product requirements.',
  },
  {
    q: 'How do you verify suppliers and factories?',
    a: 'We conduct on-site factory audits that verify business licenses, production capacity, quality management systems (ISO certifications), equipment condition, and worker conditions. We also check references from existing clients and review export history.',
  },
  {
    q: 'What does your quality inspection process include?',
    a: 'We offer three types of inspections: pre-production inspection (checking raw materials and components), during-production inspection (monitoring quality at key milestones), and pre-shipment inspection (final AQL-based inspection before goods leave the factory). Each includes detailed photo reports.',
  },
  {
    q: 'How much does your sourcing service cost?',
    a: 'Our pricing depends on the scope of work, product complexity, and order volume. We offer flexible pricing models including project-based fees and commission structures. Contact us for a free quote tailored to your specific needs.',
  },
  {
    q: 'Do you work with small businesses or only large importers?',
    a: 'We work with businesses of all sizes, from startups placing their first order to established importers managing large volumes. Our services are scalable and we can tailor our approach to match your needs and budget.',
  },
  {
    q: 'How long does the sourcing process typically take?',
    a: 'Timelines vary by product and complexity. Supplier identification typically takes 5-10 business days. Factory verification takes 3-7 days. Sample development can take 1-4 weeks depending on the product. We provide realistic timelines upfront and keep you updated throughout.',
  },
  {
    q: 'Can you help with shipping and customs clearance?',
    a: 'Yes. We coordinate end-to-end logistics including freight booking (air, sea, or rail), customs documentation preparation, compliance checks, and door-to-door delivery tracking. We work with reliable freight forwarders to ensure smooth delivery.',
  },
  {
    q: 'What happens if there is a quality problem with my order?',
    a: 'Our multi-stage inspection process is designed to catch issues early. If a quality problem is found, we document it with photos and details, negotiate with the factory for rework or replacement, and follow up until the issue is resolved. Our goal is to prevent defective goods from being shipped.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Common questions about our China sourcing services.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-border overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-surface/50 transition-colors"
              >
                <span className="font-medium text-text-primary pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-text-secondary shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5 pt-0">
                  <p className="text-text-secondary text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
