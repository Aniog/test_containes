import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="divide-y divide-cream-200">
      {items.map((item, i) => (
        <div key={item.title}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
            className="w-full flex items-center justify-between py-4 text-left transition-colors hover:text-gold-600"
          >
            <span className="text-xs tracking-widest uppercase font-medium text-ink-700">
              {item.title}
            </span>
            <ChevronDown
              className={`w-3.5 h-3.5 text-ink-400 transition-transform duration-300 ${
                openIndex === i ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === i ? 'max-h-96 pb-4' : 'max-h-0'
            }`}
          >
            <p className="text-sm text-ink-500 leading-relaxed">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}