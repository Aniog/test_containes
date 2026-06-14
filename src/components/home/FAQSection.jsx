import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { faqItems } from '../../data/content';
import { cn } from '../../lib/utils';

const FAQItem = ({ item, isOpen, onToggle }) => {
  return (
    <div className="border-b border-[#E5E7EB] last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left hover:text-[#E67E22] transition-colors duration-200"
      >
        <span className="text-lg font-semibold pr-4">{item.question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-[#E67E22] flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-[#6B7280] flex-shrink-0" />
        )}
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-300',
          isOpen ? 'max-h-96 pb-5' : 'max-h-0'
        )}
      >
        <p className="text-[#6B7280] leading-relaxed">{item.answer}</p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Header */}
          <div>
            <span className="inline-block px-4 py-1 bg-[#E67E22]/10 text-[#E67E22] text-sm font-semibold rounded-full mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[#6B7280] mb-8">
              Find answers to common questions about our China sourcing services. Still have questions? Contact us directly.
            </p>
            <a
              href="mailto:info@ssourcingchina.com"
              className="inline-flex items-center gap-2 text-[#E67E22] font-semibold hover:text-[#D35400] transition-colors"
            >
              Contact Us
              <ChevronDown className="w-4 h-4" />
            </a>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="bg-[#F8FAFC] rounded-2xl p-8">
            {faqItems.map((item, index) => (
              <FAQItem
                key={index}
                item={item}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;