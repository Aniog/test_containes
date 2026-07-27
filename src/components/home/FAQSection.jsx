import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What does a sourcing agent actually do?',
    answer:
      'A sourcing agent acts as your local representative in China. We find suppliers, verify factories, negotiate prices, manage samples, monitor production, conduct quality inspections, and coordinate shipping. Essentially, we handle the entire procurement process so you do not have to manage it from overseas.',
  },
  {
    question: 'How much does your sourcing service cost?',
    answer:
      'We offer transparent, fixed-fee pricing based on the scope of work. Typical services include a supplier research package, factory audit, per-order management, and quality inspection. We do not take hidden commissions from factories. Contact us for a detailed quote based on your needs.',
  },
  {
    question: 'How long does it take to find a supplier?',
    answer:
      'Initial supplier shortlists are typically delivered within 3-5 business days after we receive your detailed product brief. Full factory verification and sample coordination usually add another 1-2 weeks depending on the product complexity and supplier responsiveness.',
  },
  {
    question: 'Can you help with small orders or samples only?',
    answer:
      'Yes. We support businesses of all sizes, including startups and small businesses. We can help with sample sourcing, small-batch orders, and scaling up as your business grows.',
  },
  {
    question: 'Do you work with all product categories?',
    answer:
      'We specialize in electronics, machinery, textiles, home goods, automotive parts, and packaging. If your product falls outside these categories, contact us. We may still be able to assist or refer you to a specialist.',
  },
  {
    question: 'How do you ensure product quality?',
    answer:
      'We conduct multi-stage quality inspections: pre-production checks to verify materials, during-production inspections to catch issues early, and pre-shipment inspections (AQL sampling) before goods leave the factory. You receive detailed reports with photos for every inspection.',
  },
  {
    question: 'Where are you located?',
    answer:
      'Our headquarters is in Shenzhen, China, with team members covering manufacturing hubs across Guangdong, Zhejiang, Jiangsu, and other key industrial regions.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 bg-light-blue text-brand text-xs font-semibold uppercase tracking-wide rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Answers to common questions about working with SSourcing China.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-semibold text-navy text-sm md:text-base pr-4">
                  {faq.question}
                </span>
                {openIndex === idx ? (
                  <ChevronUp className="w-5 h-5 text-brand shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                )}
              </button>
              {openIndex === idx && (
                <div className="px-5 pb-5">
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
