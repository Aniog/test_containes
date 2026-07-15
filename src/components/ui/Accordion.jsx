import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="border-t border-velmora-sand">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="border-b border-velmora-sand">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex w-full items-center justify-between py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-lg text-velmora-ink">
                {item.title}
              </span>
              {isOpen ? (
                <Minus size={18} className="text-velmora-taupe" />
              ) : (
                <Plus size={18} className="text-velmora-taupe" />
              )}
            </button>
            <div
              className={cn(
                'grid transition-all duration-300 ease-in-out',
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              )}
            >
              <div className="overflow-hidden">
                <div className="pb-5 pr-8 text-sm leading-relaxed text-velmora-taupe">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
