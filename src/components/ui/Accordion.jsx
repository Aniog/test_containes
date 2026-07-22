import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function Accordion({ items, className }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className={cn('divide-y divide-border/50', className)}>
      {items.map((item, index) => (
        <div key={index} className="py-4">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex w-full items-center justify-between text-left"
          >
            <span className="serif-heading text-lg md:text-xl">{item.title}</span>
            <ChevronDown
              className={cn(
                'h-5 w-5 text-muted-foreground transition-transform duration-300',
                openIndex === index && 'rotate-180'
              )}
            />
          </button>
          <div
            className={cn(
              'overflow-hidden transition-all duration-300',
              openIndex === index ? 'max-h-96 pt-4' : 'max-h-0'
            )}
          >
            <div className="text-sm text-muted-foreground leading-relaxed">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
