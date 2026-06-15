import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';

const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'Our fees depend on the scope of work. We offer a free initial consultation and sourcing quote. For most projects, we charge a service fee based on the order value or a flat project fee. We\'ll provide a clear breakdown before you commit to anything.',
  },
  {
    q: 'How long does it take to find a supplier?',
    a: 'For standard product categories, we typically provide an initial shortlist of 3–5 verified suppliers within 3–5 business days. More specialized or complex products may take 7–10 days.',
  },
  {
    q: 'Can you help with small orders or trial orders?',
    a: 'Yes. We work with buyers at various stages, including those placing trial orders to test a new supplier. We can help you negotiate lower MOQs and manage the process for smaller initial orders.',
  },
  {
    q: 'Do you only work with factories in Guangdong?',
    a: 'No. We have supplier relationships across all major Chinese manufacturing regions, including Zhejiang, Jiangsu, Shandong, Fujian, and more. We source from wherever the best-fit factory is located.',
  },
  {
    q: 'What happens if the goods fail the quality inspection?',
    a: 'If our inspection reveals issues, we work with the factory to resolve them before shipment. We document all findings and provide you with a detailed report. You decide whether to accept, rework, or reject the goods.',
  },
  {
    q: 'Do you handle shipping and customs clearance?',
    a: 'We coordinate with freight forwarders and ensure all export documentation is in order. We don\'t act as a freight forwarder ourselves, but we work closely with your chosen forwarder or can recommend reliable partners.',
  },
  {
    q: 'Can I visit the factory myself?',
    a: 'Absolutely. We can arrange and accompany factory visits for clients who wish to travel to China. We handle logistics, translation, and meeting coordination.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 md:py-24 bg-light-bg">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          subtitle="Answers to the questions we hear most often from buyers considering working with us."
        />
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-primary-dark font-semibold text-sm pr-4">{faq.q}</span>
                {openIndex === i
                  ? <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                  : <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                }
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5">
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
