import React, { useState } from 'react';
import { strings } from '@/lib/generators-data';
import { Plus, Minus } from 'lucide-react';

const AccordionItem = ({ item, isFirst }) => {
  const [isOpen, setIsOpen] = useState(isFirst);
  
  return (
    <div className="border-b border-divider last:border-0">
      <button 
        className="w-full py-6 flex items-center justify-between text-left group"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="text-heading-gray font-heading font-bold text-[16px] md:text-[18px] uppercase group-hover:text-brand-purple transition-colors">
          {item.question}
        </span>
        <span className="text-brand-purple flex-shrink-0 ml-4">
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] mb-6' : 'max-h-0'}`}
        aria-hidden={!isOpen}
      >
        <p className="text-body-gray text-[14px] leading-relaxed">
          {item.answer}
        </p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const t = strings.en.faq;
  
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[800px] mx-auto px-4">
        <h2 className="text-heading-gray font-heading font-bold text-[26px] md:text-[32px] mb-12 uppercase text-center">
          {t.title}
        </h2>
        
        <div className="border border-card-border rounded-[3px] px-6 md:px-10 bg-white shadow-sm">
          {t.items.map((item, idx) => (
            <AccordionItem key={idx} item={item} isFirst={idx === 0} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
