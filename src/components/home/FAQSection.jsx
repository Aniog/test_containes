import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What is the minimum order quantity (MOQ) for sourcing?',
    answer: 'There is no universal MOQ — it depends on the product and factory. We work with your volume requirements and find suppliers that match. We have helped clients with orders as small as 500 units and as large as 100,000+ units.',
  },
  {
    question: 'How much do your sourcing services cost?',
    answer: 'We charge a transparent service fee based on the scope of work. This can be a fixed project fee, a percentage of order value (typically 3-8%), or a retainer for ongoing sourcing. We provide a clear quote after understanding your requirements — no hidden costs.',
  },
  {
    question: 'How do you ensure product quality?',
    answer: 'We implement a multi-stage QC process: pre-production sample review, in-line inspection during production (typically at 30% and 70% completion), and a final pre-shipment inspection. All inspections include detailed reports with photos and measurement data.',
  },
  {
    question: 'Do you handle shipping and logistics?',
    answer: 'Yes. We coordinate the full logistics chain: factory-to-port transport, freight booking (sea or air), customs documentation, and tracking until delivery. We work with major freight forwarders to get competitive rates.',
  },
  {
    question: 'How long does the sourcing process take?',
    answer: 'Supplier identification typically takes 1-2 weeks. Sampling and factory audit takes 2-3 weeks. Production lead time varies by product (usually 4-8 weeks). A typical first project from inquiry to delivery takes 8-12 weeks.',
  },
  {
    question: 'Can you help with product design and development?',
    answer: 'Yes. We can connect you with OEM/ODM manufacturers who offer design and engineering support. For custom products, we help translate your concept into manufacturing specifications and manage the sampling and prototyping process.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Answers to common questions about sourcing from China.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-slate-200 rounded-xl overflow-hidden">
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5">
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}