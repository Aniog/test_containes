import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'What types of products do you source?',
    a: 'We source across virtually all categories manufactured in China, including electronics, apparel, home goods, industrial equipment, automotive parts, medical supplies, packaging, and more. If it is made in China, we can help you find the right supplier.',
  },
  {
    q: 'How do you verify suppliers?',
    a: 'We conduct on-site factory audits to verify business licenses, production capabilities, quality management systems, certifications, and workforce. We take photos and video, and provide a detailed audit report with our assessment.',
  },
  {
    q: 'What is your fee structure?',
    a: 'We offer transparent, project-based pricing. Typically we charge a percentage of the order value or a fixed fee depending on the scope. We provide a detailed quote upfront with no hidden costs. Contact us for a customized proposal.',
  },
  {
    q: 'Do you handle small orders or MOQs?',
    a: 'Yes, we work with orders of all sizes. We help you negotiate minimum order quantities with suppliers and can also connect you with factories that specialize in low-volume production.',
  },
  {
    q: 'How do you handle quality control?',
    a: 'We offer multiple QC touchpoints: during production inspection, pre-shipment inspection, and container loading supervision. We follow AQL (Acceptable Quality Limit) standards and provide detailed inspection reports with photos.',
  },
  {
    q: 'What shipping options do you arrange?',
    a: 'We handle all shipping methods: air freight, sea freight (FCL/LCL), express courier (DHL, FedEx, UPS), and rail freight. We manage customs documentation, consolidation, and door-to-door delivery.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'Timelines vary by product complexity. A typical sourcing cycle — from supplier search to first shipment — takes 4-12 weeks. Supplier verification adds 1-2 weeks, sample production 2-4 weeks, and mass production 4-8 weeks.',
  },
  {
    q: 'Is there a minimum commitment?',
    a: 'No. We work on a per-project basis. Whether you need a one-time shipment or ongoing sourcing support, we tailor our services to your needs.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Common questions about working with a China sourcing agent.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-border overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-accent/50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-foreground pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}