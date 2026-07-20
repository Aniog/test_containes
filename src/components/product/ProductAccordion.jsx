import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function ProductAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="divide-y divide-charcoal-200">
      {items.map((item, index) => (
        <div key={item.title}>
          <button
            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            className="w-full flex items-center justify-between py-5 text-left"
          >
            <span className="font-sans text-sm tracking-wide text-charcoal-800 uppercase">
              {item.title}
            </span>
            <ChevronDown 
              className={`w-4 h-4 text-charcoal-500 transition-transform duration-200 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div 
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-96 pb-5' : 'max-h-0'
            }`}
          >
            <p className="text-sm text-charcoal-600 leading-relaxed">
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
