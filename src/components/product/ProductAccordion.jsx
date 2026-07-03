import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function ProductAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="border-t border-[#E8E2D9]">
      {items.map((item, index) => (
        <div key={index} className="border-b border-[#E8E2D9]">
          <button
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between py-5 text-left"
            aria-expanded={openIndex === index}
          >
            <span className="font-sans text-sm font-medium text-[#3D3833]">
              {item.title}
            </span>
            <ChevronDown
              className={`w-4 h-4 text-[#9A8E82] transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-96 pb-5' : 'max-h-0'
            }`}
          >
            <p className="text-sm text-[#9A8E82] leading-relaxed">
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
