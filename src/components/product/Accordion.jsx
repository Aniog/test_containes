import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="border-t border-stoneborder">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={item.title} className="border-b border-stoneborder">
            <button
              onClick={() => setOpenIndex(isOpen ? -1 : idx)}
              className="flex w-full items-center justify-between py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-sm font-medium uppercase tracking-widest text-espresso">
                {item.title}
              </span>
              {isOpen ? (
                <Minus size={16} strokeWidth={1.5} className="text-warmstone" />
              ) : (
                <Plus size={16} strokeWidth={1.5} className="text-warmstone" />
              )}
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? 'max-h-96 pb-5' : 'max-h-0'
              }`}
            >
              <p className="text-sm leading-relaxed text-warmstone">{item.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}