import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'Our fees depend on the scope of work — sourcing only, inspection only, or full-service. We provide a clear quote before starting. There are no hidden fees.',
  },
  {
    q: 'Do you work with small orders or only large volumes?',
    a: 'We work with buyers of all sizes. Whether you\'re placing a trial order of 100 units or a bulk order of 50,000 units, we can help.',
  },
  {
    q: 'How do you verify that a factory is legitimate?',
    a: 'We conduct on-site factory audits that include verifying business licenses, production capacity, equipment, workforce, and certifications. We provide a written audit report.',
  },
  {
    q: 'Can you source products not listed on your website?',
    a: 'Yes. Our team can source almost any product manufactured in China. Contact us with your requirements and we\'ll assess feasibility.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'Typically 2–4 weeks from inquiry to shortlisted suppliers with samples. Production and shipping timelines depend on the product and factory.',
  },
  {
    q: 'Do you handle shipping and customs documentation?',
    a: 'We coordinate with freight forwarders and ensure all export documents are correct. We do not act as a licensed customs broker, but we work closely with your chosen forwarder.',
  },
  {
    q: 'What if the goods fail inspection?',
    a: 'If goods fail our inspection, we work with the factory to resolve the issue before shipment. You receive a full inspection report and we do not release goods until standards are met.',
  },
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section className="section-padding bg-brand-light-blue">
      <div className="section-container">
        <div className="text-center mb-14">
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-2 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-brand-body text-lg max-w-2xl mx-auto">
            Answers to the most common questions from buyers considering China sourcing.
          </p>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-brand-border overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                <span className="font-semibold text-brand-dark text-sm md:text-base">{faq.q}</span>
                {openIdx === idx
                  ? <ChevronUp className="w-5 h-5 text-brand-navy flex-shrink-0" />
                  : <ChevronDown className="w-5 h-5 text-brand-muted flex-shrink-0" />
                }
              </button>
              {openIdx === idx && (
                <div className="px-6 pb-6">
                  <p className="text-brand-body text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
