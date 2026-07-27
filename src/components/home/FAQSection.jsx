import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'Our fees depend on the scope of work — sourcing only, inspection only, or full-service. We offer transparent, project-based pricing with no hidden commissions from suppliers. Contact us for a tailored quote.',
  },
  {
    q: 'Do you work with small businesses and startups?',
    a: 'Yes. We work with businesses of all sizes, from startups placing their first order to established brands managing multiple product lines. We tailor our service to your order volume and budget.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'A typical sourcing project takes 2–4 weeks from inquiry to shortlisted suppliers with samples. Production and shipping timelines vary by product and factory capacity.',
  },
  {
    q: 'Can you help with custom or OEM products?',
    a: 'Absolutely. We regularly source custom-designed and OEM products, including private label goods. We manage the entire process from design review to production and delivery.',
  },
  {
    q: 'How do you verify that a factory is legitimate?',
    a: 'We conduct on-site factory audits that cover business licenses, production capacity, equipment, workforce, quality management systems, and compliance certifications. You receive a full written audit report.',
  },
  {
    q: 'What happens if the goods fail inspection?',
    a: 'If goods fail our pre-shipment inspection, we work with the factory to resolve the issues before shipment. We document all findings and provide clear pass/fail reports with photos.',
  },
  {
    q: 'Do you handle shipping and customs clearance?',
    a: 'We coordinate freight forwarding and prepare all necessary export documentation. We work with trusted freight partners for sea, air, and express shipments. Import customs clearance in your country is typically handled by your local broker.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Common questions from buyers considering working with a China sourcing agent.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-slate-200 rounded-xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left bg-white hover:bg-slate-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-medium text-slate-800 text-sm">{faq.q}</span>
                {openIndex === idx
                  ? <ChevronUp className="w-4 h-4 text-brand-blue shrink-0" />
                  : <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                }
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-5 bg-white">
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
