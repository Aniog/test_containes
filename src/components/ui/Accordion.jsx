import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Accordion({ items }) {
  const [open, setOpen] = useState(items[0]?.title || null);

  return (
    <div className="border-t border-velmora-espresso/10">
      {items.map((item) => {
        const isOpen = open === item.title;
        const panelId = `accordion-panel-${item.title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-|-$/g, '')}`;
        return (
          <div
            key={item.title}
            className="border-b border-velmora-espresso/10"
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : item.title)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="w-full flex items-center justify-between py-4 text-left group"
            >
              <span className="font-serif text-lg text-velmora-espresso">
                {item.title}
              </span>
              <ChevronDown
                className={cn(
                  'w-5 h-5 text-velmora-espresso/60 transition-transform duration-300',
                  isOpen && 'rotate-180'
                )}
              />
            </button>
            <div
              id={panelId}
              className={cn(
                'grid transition-all duration-300 ease-out',
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              )}
            >
              <div className="overflow-hidden">
                <p className="pb-5 text-velmora-stone leading-relaxed">
                  {item.content}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
