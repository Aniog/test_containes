import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="border-t border-linen">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.title} className="border-b border-linen">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="w-full flex items-center justify-between py-4 text-left group"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-lg md:text-xl text-base">
                {item.title}
              </span>
              <ChevronDown
                size={20}
                className={`text-muted transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-out ${
                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="pb-5 text-muted text-sm md:text-base leading-relaxed pr-8">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
