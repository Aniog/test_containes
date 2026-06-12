import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'Our fees depend on the scope of work. For basic supplier sourcing, we charge a flat project fee. Factory audits and QC inspections are priced per visit. We provide a clear quote before starting any work — no hidden charges.',
  },
  {
    q: 'Do I need to travel to China?',
    a: 'No. We handle everything on the ground in China on your behalf — factory visits, sample collection, inspections, and shipping coordination. Most of our clients never visit China.',
  },
  {
    q: 'How long does it take to find a supplier?',
    a: 'For most product categories, we can present a shortlist of 3–5 verified suppliers within 5–10 business days of receiving your inquiry.',
  },
  {
    q: 'Can you help with small orders or samples?',
    a: 'Yes. We work with buyers at all stages — from initial samples and small test orders to large-scale production runs.',
  },
  {
    q: 'What if the goods fail the quality inspection?',
    a: 'If our inspection reveals issues, we work with the factory to resolve them before shipment. You receive a full report and we do not release the goods until the problems are corrected or you approve the deviation.',
  },
  {
    q: 'Do you work with Amazon FBA sellers?',
    a: 'Yes. We are familiar with Amazon FBA requirements and can ensure your products are packaged, labeled, and inspected to meet Amazon\'s standards.',
  },
  {
    q: 'Which regions of China do you cover?',
    a: 'We operate primarily in Guangdong, Zhejiang, Fujian, and Jiangsu — the main manufacturing hubs. We can also arrange visits to other provinces as needed.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-blue-700 text-xs font-semibold uppercase tracking-widest">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 text-lg">
            Answers to the most common questions from buyers new to China sourcing.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-slate-100 overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-slate-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-slate-900 text-sm pr-4">{faq.q}</span>
                {openIndex === index
                  ? <ChevronUp className="w-4 h-4 text-blue-700 flex-shrink-0" />
                  : <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />
                }
              </button>
              {openIndex === index && (
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
