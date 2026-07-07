import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Accordion({ items, className }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className={cn('border-t border-border', className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.title} className="border-b border-border">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="w-full flex items-center justify-between py-4 text-left group"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-base uppercase tracking-wide text-foreground">
                {item.title}
              </span>
              <span className="text-muted-foreground transition-transform duration-300 group-hover:text-foreground">
                {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </span>
            </button>
            <div
              className={cn(
                'overflow-hidden transition-all duration-500 ease-out-expo',
                isOpen ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'
              )}
            >
              <div className="text-sm text-muted-foreground leading-relaxed">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
