import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="border-t border-warm-border">
      {items.map((item, index) => (
        <div key={index} className="border-b border-warm-border">
          <button
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between py-5 text-left group"
          >
            <span className="font-sans text-sm uppercase tracking-wider text-deep-base group-hover:text-gold-accent transition-colors">
              {item.title}
            </span>
            <ChevronDown
              size={16}
              className={`text-warm-gray transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-96 pb-5' : 'max-h-0'
            }`}
          >
            <p className="font-sans text-sm text-warm-gray leading-relaxed">
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
