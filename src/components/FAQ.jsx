import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { strings } from '../data/generators';

const FAQItem = ({ q, a, index, expanded, toggle }) => {
  return (
    <div className="border-b border-divider last:border-0">
      <button 
        className="w-full flex items-center justify-between py-5 text-left group"
        onClick={() => toggle(index)}
        aria-expanded={expanded}
        aria-controls={`faq-answer-${index}`}
      >
        <span className="text-base font-bold text-hero-line1 group-hover:text-brand-purple transition-colors uppercase font-heading">
          {q}
        </span>
        {expanded ? <ChevronUp size={20} className="text-brand-purple" /> : <ChevronDown size={20} className="text-card-border group-hover:text-brand-purple" />}
      </button>
      
      <div 
        id={`faq-answer-${index}`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${expanded ? 'max-h-96 opacity-100 mb-5' : 'max-h-0 opacity-0'}`}
        role="region"
        aria-labelledby={`faq-question-${index}`}
      >
        <p className="text-sm text-body-text whitespace-pre-line leading-relaxed">
          {a}
        </p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const { faq } = strings.en;
  const [expandedIndex, setExpandedIndex] = useState(0);

  const toggle = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[800px] mx-auto px-5">
        <h2 className="text-2xl md:text-3xl font-heading text-center mb-10">
          {faq.title}
        </h2>
        
        <div className="border-t border-divider">
          {faq.questions.map((item, index) => (
            <FAQItem 
              key={index}
              index={index}
              {...item}
              expanded={expandedIndex === index}
              toggle={toggle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
