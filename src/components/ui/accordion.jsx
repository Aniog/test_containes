import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const AccordionItem = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-base-200">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between py-4 text-left"
      >
        <span className="font-serif text-base font-semibold text-ink">{title}</span>
        <ChevronDown
          className={cn(
            'h-4 w-4 text-ink/60 transition-transform duration-200',
            open && 'rotate-180',
          )}
        />
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-300',
          open ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <p className="pb-4 text-sm text-ink/70 leading-relaxed">{children}</p>
      </div>
    </div>
  );
};

const Accordion = ({ items }) => {
  return (
    <div className="rounded-2xl border border-base-200 bg-cream divide-y divide-base-200">
      {items.map((item) => (
        <AccordionItem key={item.title} title={item.title} defaultOpen={item.defaultOpen}>
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};

export { Accordion, AccordionItem };
