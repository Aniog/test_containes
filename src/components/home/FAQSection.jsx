import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';

const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'We offer a free initial consultation and supplier research. Our sourcing fees are typically 5-10% of the order value, depending on product complexity and order volume. We provide a clear quote before any work begins, so there are no surprises.',
  },
  {
    q: 'How long does it take to find suppliers?',
    a: 'We usually provide a shortlist of 3-5 qualified suppliers within 5-7 business days. Factory verification and sample arrangements typically take an additional 2-3 weeks, depending on the product.',
  },
  {
    q: 'Do you handle small orders or only large quantities?',
    a: 'We work with businesses of all sizes. While minimum order quantities depend on the specific product and factory, many of our suppliers accept orders starting from 500-1000 units. We will always be upfront about MOQs.',
  },
  {
    q: 'What happens if the products have quality issues?',
    a: 'Our multi-stage inspection process is designed to catch issues before shipment. If problems are found during inspection, we work with the factory to resolve them. If defective products arrive despite our inspections, we assist with claims and remediation.',
  },
  {
    q: 'Can you help with product development or custom designs?',
    a: 'Yes. We help clients develop custom products by coordinating with factories on tooling, molds, samples, and production. We can work from your CAD files, sketches, or product references.',
  },
  {
    q: 'Which countries do you ship to?',
    a: 'We coordinate shipping to destinations worldwide, including the US, Canada, UK, EU, Australia, the Middle East, Africa, and Southeast Asia. We work with multiple freight forwarders to find the best shipping options for your needs.',
  },
  {
    q: 'How do I know the factories you recommend are legitimate?',
    a: 'Every factory in our network has been visited in person by our team. We verify business licenses, export records, certifications, and production capabilities. We also provide detailed factory audit reports so you can see exactly what we found.',
  },
  {
    q: 'Do you handle customs and import documentation?',
    a: 'Yes. We prepare all necessary export documentation from China and can coordinate with customs brokers in your country for import clearance. We also advise on duties, tariffs, and compliance requirements for your specific products.',
  },
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="section-padding bg-white" id="faq">
      <div className="container-max">
        <SectionHeading
          badge="FAQ"
          title="Frequently Asked Questions"
          description="Common questions about our sourcing services, process, and pricing."
        />

        <div className="max-w-3xl mx-auto divide-y divide-gray-100">
          {faqs.map((faq, idx) => (
            <div key={idx} className="py-2">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                className="w-full flex items-start justify-between gap-4 py-4 text-left group"
              >
                <span className="text-base font-semibold text-navy-500 group-hover:text-accent-500 transition-colors">
                  {faq.q}
                </span>
                {openIdx === idx ? (
                  <ChevronUp className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                )}
              </button>
              {openIdx === idx && (
                <div className="pb-4 pr-8">
                  <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
