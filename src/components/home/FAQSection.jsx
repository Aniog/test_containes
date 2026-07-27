import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'Our fees depend on the scope of services required. We offer a free initial consultation and sourcing quote. For most projects, we charge a service fee based on order value or a flat project fee. There are no hidden charges — everything is agreed upfront.',
  },
  {
    q: 'How long does it take to find a supplier?',
    a: 'For standard product categories, we typically present a shortlist of 3–5 qualified suppliers within 5–7 business days. Complex or highly specialized products may take 10–14 days. We keep you informed throughout the process.',
  },
  {
    q: 'Can you help with small orders or samples?',
    a: 'Yes. We assist with sample procurement regardless of order size. For production orders, minimum quantities depend on the product and factory. We can help you find suppliers willing to work with smaller MOQs when needed.',
  },
  {
    q: 'How do you verify that a factory is reliable?',
    a: 'Our factory verification process includes checking business licenses, export records, production capacity, certifications (ISO, CE, etc.), and conducting on-site audits. We also review past client references where available.',
  },
  {
    q: 'What happens if the goods fail quality inspection?',
    a: 'If goods fail our pre-shipment inspection, we work with the factory to resolve the issues before shipment. We document all findings and provide you with a detailed report. We do not release goods for shipment until quality standards are met.',
  },
  {
    q: 'Do you handle shipping and customs?',
    a: 'We coordinate with licensed freight forwarders for sea, air, and express shipping. We prepare export documentation and can advise on import requirements for your country. We do not act as a customs broker but can recommend trusted partners.',
  },
  {
    q: 'Which regions of China do you cover?',
    a: 'We have teams and supplier networks in Shenzhen, Guangzhou, Yiwu, Ningbo, Shanghai, and Dongguan — covering the major manufacturing hubs for electronics, textiles, furniture, hardware, and consumer goods.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Common questions from buyers considering China sourcing services.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-navy text-sm pr-4">{faq.q}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 bg-white">
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
