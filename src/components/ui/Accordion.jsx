import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

function AccordionItem({ title, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-t border-sand">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-espresso">
          {title}
        </span>
        <ChevronDown
          className={cn(
            'h-4 w-4 text-espresso transition-transform duration-300',
            open && 'rotate-180'
          )}
          strokeWidth={1.25}
        />
      </button>
      <div
        className={cn(
          'grid transition-all duration-500 ease-out',
          open ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0'
        )}
      >
        <div className="overflow-hidden">
          <div className="text-sm leading-relaxed text-mink">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default function Accordion({ items }) {
  return (
    <div>
      {items.map((item, i) => (
        <AccordionItem key={item.title} title={item.title} defaultOpen={i === 0}>
          {item.content}
        </AccordionItem>
      ))}
      <div className="border-t border-sand" />
    </div>
  );
}
