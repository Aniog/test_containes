import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="border-t border-velmora-hairline">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.title} className="border-b border-velmora-hairline">
            <button
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex w-full items-center justify-between py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-sans text-xs uppercase tracking-widest text-velmora-text">
                {item.title}
              </span>
              {isOpen ? (
                <Minus size={16} className="text-velmora-muted" />
              ) : (
                <Plus size={16} className="text-velmora-muted" />
              )}
            </button>
            <div
              className={cn(
                'overflow-hidden transition-all duration-300 ease-out',
                isOpen ? 'max-h-96 pb-5' : 'max-h-0'
              )}
            >
              <p className="text-sm leading-relaxed text-velmora-muted">
                {item.content}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
