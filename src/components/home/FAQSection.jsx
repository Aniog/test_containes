import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'Our fees vary depending on the scope of work. We offer a free initial consultation and sourcing quote. For most projects, we charge a service fee based on the order value or a fixed project fee. We\'ll provide a clear breakdown before you commit.',
  },
  {
    q: 'How long does it take to find a supplier?',
    a: 'For standard product categories, we typically deliver a shortlist of verified suppliers within 5–7 business days. More complex or niche products may take 10–14 days. We\'ll give you a realistic timeline upfront.',
  },
  {
    q: 'Do you work with small businesses and startups?',
    a: 'Yes. We work with businesses of all sizes, from startups placing their first order to established importers managing multiple product lines. We tailor our services to your needs and budget.',
  },
  {
    q: 'Can you help with product customization and private labeling?',
    a: 'Absolutely. We regularly assist clients with OEM and ODM projects, including custom packaging, private labeling, and product modifications. We coordinate directly with factories on your specifications.',
  },
  {
    q: 'What happens if the product quality doesn\'t meet my standards?',
    a: 'We conduct pre-shipment inspections to catch quality issues before goods leave the factory. If problems are found, we work with the supplier to resolve them. Our goal is to ensure you only receive goods that meet your agreed specifications.',
  },
  {
    q: 'Do you handle shipping and customs documentation?',
    a: 'We coordinate with freight forwarders for sea and air freight and assist with export documentation. We don\'t act as a licensed customs broker, but we can recommend trusted partners for import clearance in your country.',
  },
  {
    q: 'Which regions of China do you cover?',
    a: 'We operate across all major manufacturing regions including Guangdong, Zhejiang, Jiangsu, Fujian, Shandong, and more. Our network covers the key industrial hubs for most product categories.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#e8621a] mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d2340] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#5a6a7e] text-base leading-relaxed">
            Common questions from buyers considering China sourcing services.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-[#dde3ec] rounded-xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-[#f4f6f9] transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-sm font-semibold text-[#0d2340] pr-4">{faq.q}</span>
                {openIndex === index
                  ? <ChevronUp className="w-4 h-4 text-[#1a4f8a] shrink-0" />
                  : <ChevronDown className="w-4 h-4 text-[#5a6a7e] shrink-0" />
                }
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 bg-[#f4f6f9]">
                  <p className="text-sm text-[#5a6a7e] leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
