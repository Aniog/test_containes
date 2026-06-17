import React, { useState } from 'react';
import { strings } from '@/lib/strings.en';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-b border-subtle-divider last:border-0">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex justify-between items-center py-5 text-left group"
      >
        <span className="font-heading text-[#4B5056] group-hover:text-brand-purple transition-colors">
          {question}
        </span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-brand-purple" />
        ) : (
          <ChevronDown className="w-5 h-5 text-[#C6C9CD]" />
        )}
      </button>
      <div 
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-height-1000 opacity-100 pb-5" : "max-h-0 opacity-0"
        )}
      >
        <div className="text-[#636972] text-sm leading-relaxed whitespace-pre-line">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const { en } = strings;
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-light-bg py-16 md:py-20 lg:py-24">
      <div className="container-custom max-w-3xl">
        <h2 className="text-2xl md:text-3xl mb-12 text-center">{en.faq.heading}</h2>
        <div className="bg-white rounded-lg px-6 md:px-8 border border-card-border">
          {en.faq.items.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
