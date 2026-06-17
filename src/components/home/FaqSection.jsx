import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'Our fees depend on the scope of work. We offer a free initial consultation and quote. Typical services include a one-time sourcing fee, factory audit fee, and per-shipment inspection fee. We are transparent about all costs upfront.',
  },
  {
    q: 'How long does it take to find a supplier?',
    a: 'We typically deliver an initial shortlist of verified suppliers within 5–7 business days of receiving your requirements. Factory audits and sample arrangements may take an additional 1–2 weeks.',
  },
  {
    q: 'Do you work with small businesses and startups?',
    a: 'Yes. We work with businesses of all sizes, from first-time importers to established brands. We tailor our services to your order volume and budget.',
  },
  {
    q: 'Can you handle products not listed on your website?',
    a: 'Absolutely. Our network covers a wide range of industries. If you have a specific product in mind, contact us and we\'ll assess whether we can source it for you.',
  },
  {
    q: 'What happens if the goods fail inspection?',
    a: 'We issue a detailed inspection report and work with the factory to resolve issues before shipment. If problems cannot be resolved, we advise you on your options, including rework, partial rejection, or cancellation.',
  },
  {
    q: 'Do you handle customs and import duties?',
    a: 'We coordinate the export side from China, including documentation and freight booking. For import duties and customs in your country, we can recommend trusted customs brokers in your region.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <div className="text-center mb-14">
          <span className="text-brand-red text-sm font-semibold uppercase tracking-widest">FAQ</span>
          <h2 className="section-title mt-2">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Common questions from buyers considering working with a China sourcing agent.
          </p>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div key={i} className="card-base overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-semibold text-brand-blue text-sm md:text-base pr-4">{faq.q}</span>
                {openIndex === i
                  ? <ChevronUp className="w-5 h-5 text-brand-red flex-shrink-0" />
                  : <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                }
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
