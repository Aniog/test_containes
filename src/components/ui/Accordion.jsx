import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="border-t border-taupe/60">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} className="border-b border-taupe/60">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-goldDark"
            >
              <span className="font-serif text-lg">{item.title}</span>
              {isOpen ? <Minus size={18} /> : <Plus size={18} />}
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? 'max-h-96 pb-6' : 'max-h-0'
              }`}
            >
              <p className="text-warmGray leading-relaxed pr-8">{item.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
