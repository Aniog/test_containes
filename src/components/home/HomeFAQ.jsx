import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'How much does a sourcing agent cost?',
    a: 'Our fees are based on a percentage of the order value, typically 5-10% depending on project complexity and order volume. There are no hidden charges. We provide a transparent quote before starting any work.',
  },
  {
    q: 'Do you work with small businesses and startups?',
    a: 'Yes. We work with buyers of all sizes — from startups placing their first order to established brands importing multiple containers monthly. Our minimum order recommendation depends on the product category.',
  },
  {
    q: 'How do you protect my intellectual property?',
    a: 'We sign NNN (Non-Disclosure, Non-Use, Non-Circumvention) agreements before sharing your designs with any factory. We also recommend registering your IP in China and can assist with the process.',
  },
  {
    q: 'What if the product quality is not as expected?',
    a: 'Our multi-stage QC process catches problems early. If issues are found during production, we work with the factory to correct them before shipment. Pre-shipment inspection is mandatory for every order.',
  },
  {
    q: 'Can I visit factories myself?',
    a: 'Absolutely. We can arrange factory visits and accompany you as translator and guide. Many clients visit for the initial audit and then rely on us for ongoing management.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'A typical sourcing project takes 4-8 weeks from initial briefing to placing an order. Production lead time varies by product. We provide a detailed timeline after understanding your requirements.',
  },
  {
    q: 'Which regions in China do you cover?',
    a: 'We cover all major manufacturing regions: Guangdong (electronics, furniture, plastics), Zhejiang (hardware, textiles, small commodities), Jiangsu (machinery, chemicals), Fujian (stone, ceramics), and Shandong (textiles, machinery).',
  },
];

export default function HomeFAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (idx) => setOpenIdx(openIdx === idx ? null : idx);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to know before starting your sourcing journey.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-lg border border-gray-100 overflow-hidden">
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                onClick={() => toggle(idx)}
              >
                <span className="text-sm font-semibold text-gray-900 pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${
                    openIdx === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIdx === idx && (
                <div className="px-6 pb-4">
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
