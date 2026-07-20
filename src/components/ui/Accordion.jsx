import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="border-t border-stone-200">
      {items.map((item, index) => (
        <div key={index} className="border-b border-stone-200">
          <button
            type="button"
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between py-4 text-left"
            aria-expanded={openIndex === index}
          >
            <span className="font-serif text-lg text-stone-900">{item.title}</span>
            {openIndex === index ? (
              <Minus size={18} className="text-stone-500" />
            ) : (
              <Plus size={18} className="text-stone-500" />
            )}
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out-cubic ${
              openIndex === index ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="text-stone-600 text-sm leading-relaxed font-sans">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
