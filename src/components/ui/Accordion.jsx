import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

function AccordionItem({ title, children, isOpen, onToggle }) {
  return (
    <div className="border-b border-border">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left transition-colors hover:text-accent"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-text-primary">{title}</span>
        <span className="ml-4 flex-shrink-0 text-text-secondary">
          {isOpen ? (
            <Minus className="w-4 h-4" />
          ) : (
            <Plus className="w-4 h-4" />
          )}
        </span>
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-250 ease-in-out',
          isOpen ? 'max-h-96 pb-5' : 'max-h-0'
        )}
      >
        <div className="text-text-secondary leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

function Accordion({ items, defaultOpen = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen);
  
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <div className="divide-y divide-border">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}

export default Accordion;
