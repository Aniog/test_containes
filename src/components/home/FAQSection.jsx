import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqItems } from '@/data/content';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-ss-text tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-ss-body max-w-2xl mx-auto">
            Common questions about our China sourcing services.
          </p>
        </div>

        <div className="space-y-3">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border border-ss-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="text-sm font-medium text-ss-text pr-4">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-ss-muted shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-sm text-ss-body leading-relaxed">
                    {item.answer}
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