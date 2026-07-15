import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="divide-y divide-velvet-200">
      {items.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between py-4 text-left font-sans font-medium text-sm tracking-wide text-obsidian hover:text-champagne transition-colors duration-200"
          >
            {item.title}
            <ChevronDown
              className={`w-4 h-4 text-velvet-500 transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-96 pb-4' : 'max-h-0'
            }`}
          >
            <p className="text-sm text-velvet-700 leading-relaxed font-sans">
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
