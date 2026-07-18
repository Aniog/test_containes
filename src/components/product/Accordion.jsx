import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const AccordionItem = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-velmora-hairline">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left group"
        aria-expanded={open}
      >
        <span className="text-sm uppercase tracking-[0.15em] font-semibold text-velmora-charcoal">
          {title}
        </span>
        <ChevronDown
          className={cn(
            'w-4 h-4 text-velmora-taupe transition-transform duration-300 group-hover:text-velmora-gold',
            open && 'rotate-180'
          )}
        />
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-300 ease-out',
          open ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'
        )}
      >
        <div className="text-sm text-velmora-taupe leading-relaxed space-y-2">
          {children}
        </div>
      </div>
    </div>
  );
};

const Accordion = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem key={item.title} title={item.title} defaultOpen={index === 0}>
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;
