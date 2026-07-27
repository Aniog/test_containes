import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'Our fees depend on the scope of work. We offer a free initial consultation and quote. Typical services include a one-time sourcing fee, factory audit fee, and inspection fee. We provide a clear breakdown before any work begins — no hidden charges.',
  },
  {
    q: 'Do you work with small businesses and startups?',
    a: 'Yes. We work with buyers of all sizes, from startups placing their first order to established importers managing multiple product lines. We tailor our services to your order volume and budget.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'Initial supplier research typically takes 5–10 business days. Factory audits require scheduling and usually take 1–2 weeks. The full process from inquiry to confirmed order is typically 3–6 weeks depending on complexity.',
  },
  {
    q: 'Can you help with custom or OEM products?',
    a: 'Yes. We regularly assist buyers with custom product development, private labeling, and OEM manufacturing. We help with design specifications, sample development, and production oversight.',
  },
  {
    q: 'What happens if quality issues are found during inspection?',
    a: 'We document all defects with photos and a detailed report. We then work with the factory to resolve issues — either through rework, replacement, or price adjustment — before goods are shipped.',
  },
  {
    q: 'Do you handle shipping and customs?',
    a: 'We coordinate with trusted freight forwarders for sea and air freight. We handle export documentation from the Chinese side. For import customs in your country, we can recommend partners or work with your existing broker.',
  },
  {
    q: 'Are you independent from the suppliers you recommend?',
    a: 'Yes. We are fully independent. We do not accept commissions or kickbacks from suppliers. Our fee comes from you, the buyer, which means our interests are aligned with yours.',
  },
];

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-brand-accent text-sm font-semibold uppercase tracking-widest">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-base">
            Answers to the most common questions from buyers considering China sourcing.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-slate-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-semibold text-slate-900 text-sm pr-4">{faq.q}</span>
                {openIndex === i ? (
                  <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5">
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
