import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const ProductAccordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0);
  const contentRefs = useRef([]);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="border-t border-cream">
      {items.map((item, index) => (
        <div key={item.title} className="border-b border-cream">
          {/* Header */}
          <button
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between py-4 text-left"
            aria-expanded={openIndex === index}
          >
            <span className="text-sm font-medium text-espresso tracking-wide">
              {item.title}
            </span>
            <ChevronDown
              className={cn(
                'w-4 h-4 text-cocoa transition-transform duration-300',
                openIndex === index && 'rotate-180'
              )}
              strokeWidth={1.5}
            />
          </button>

          {/* Content */}
          <div
            ref={(el) => (contentRefs.current[index] = el)}
            className="overflow-hidden transition-all duration-300"
            style={{
              maxHeight: openIndex === index ? contentRefs.current[index]?.scrollHeight + 'px' : '0px',
            }}
          >
            <div className="pb-4 text-sm text-cocoa leading-relaxed">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductAccordion;
