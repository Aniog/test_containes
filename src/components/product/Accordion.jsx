import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="border-t border-velmora-taupe/40">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.title} className="border-b border-velmora-taupe/40">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="w-full flex items-center justify-between py-4 text-left"
            >
              <span className="text-sm uppercase tracking-widest font-medium text-velmora-espresso">
                {item.title}
              </span>
              <span className="text-velmora-coffee">
                {isOpen ? <Minus size={16} /> : <Plus size={16} />}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-sm text-velmora-coffee leading-relaxed">
                {item.content}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
