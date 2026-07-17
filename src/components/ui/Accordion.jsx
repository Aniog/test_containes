import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

const AccordionItem = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-[var(--color-border)]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left font-sans text-sm tracking-wide text-[var(--color-dark)] hover:text-[var(--color-accent)] transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-medium">{title}</span>
        <span className="text-[var(--color-accent)]">
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-300 ease-out',
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        )}
      >
        <div className="text-sm text-[var(--color-secondary)] leading-relaxed font-sans">
          {children}
        </div>
      </div>
    </div>
  );
};

const Accordion = ({ items }) => {
  return (
    <div className="divide-y divide-[var(--color-border)]">
      {items.map((item, index) => (
        <AccordionItem 
          key={index} 
          title={item.title} 
          defaultOpen={item.defaultOpen}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;
