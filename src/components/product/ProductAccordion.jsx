import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const ProductAccordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="divide-y divide-[var(--light-warm-gray)]">
      {items.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between py-5 text-left"
          >
            <span
              className="text-sm font-medium tracking-wide text-[var(--deep-espresso)]"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              {item.title}
            </span>
            <ChevronDown
              className={`w-4 h-4 text-[var(--champagne-gold)] transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-96 pb-5' : 'max-h-0'
            }`}
          >
            <p
              className="text-sm text-[var(--charcoal)] leading-relaxed"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductAccordion;
