import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="border-t border-velmora-stone">
      {items.map((item, index) => (
        <div key={index} className="border-b border-velmora-stone">
          <button
            type="button"
            onClick={() => toggle(index)}
            className="flex w-full items-center justify-between py-4 text-left focus-visible:outline-none"
          >
            <span className="font-sans text-sm font-medium uppercase tracking-wider text-velmora-charcoal">
              {item.title}
            </span>
            <ChevronDown
              size={18}
              className={cn(
                'text-velmora-charcoal transition-transform duration-300',
                openIndex === index && 'rotate-180'
              )}
            />
          </button>
          <div
            className={cn(
              'grid transition-all duration-300 ease-out',
              openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
            )}
          >
            <div className="overflow-hidden">
              <div className="pb-5 pr-8 font-sans text-sm leading-relaxed text-velmora-warm-gray">
                {item.content}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
