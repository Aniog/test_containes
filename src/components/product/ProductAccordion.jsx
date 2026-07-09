import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function ProductAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="border-t border-velmora-sand/50">
      {items.map((item, i) => (
        <div key={i} className="border-b border-velmora-sand/50">
          <button
            onClick={() => toggle(i)}
            className="w-full flex items-center justify-between py-4 text-left"
          >
            <span className="text-xs tracking-wider uppercase text-velmora-ink">
              {item.title}
            </span>
            <ChevronDown
              size={14}
              className={`text-velmora-stone transition-transform duration-300 ${
                openIndex === i ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === i ? 'max-h-48 pb-4' : 'max-h-0'
            }`}
          >
            <p className="text-sm text-velmora-stone leading-relaxed">
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}