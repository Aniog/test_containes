import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

export function Accordion({ items, className }) {
  const [open, setOpen] = useState(null);

  return (
    <div className={cn('divide-y divide-border', className)}>
      {items.map((item, i) => (
        <div key={i}>
          <button
            className="w-full flex items-center justify-between py-4 text-left"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="font-inter font-medium text-sm tracking-widest uppercase text-charcoal">
              {item.title}
            </span>
            <ChevronDown
              className={cn(
                'w-4 h-4 text-taupe transition-transform duration-300',
                open === i && 'rotate-180'
              )}
            />
          </button>
          <div className={cn(
            'overflow-hidden transition-all duration-300',
            open === i ? 'max-h-96 pb-4' : 'max-h-0'
          )}>
            <p className="font-inter text-sm text-taupe leading-relaxed">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
