import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="border-b border-hairline">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
        />
      ))}
    </div>
  );
}

function AccordionItem({ title, content, isOpen, onToggle }) {
  return (
    <div className="border-b border-hairline last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left transition-colors duration-200 hover:text-gold"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-sm tracking-wide uppercase">
          {title}
        </span>
        <span className={cn(
          'text-gold transition-transform duration-200',
          isOpen && 'rotate-45'
        )}>
          {isOpen ? (
            <Minus className="w-4 h-4" />
          ) : (
            <Plus className="w-4 h-4" />
          )}
        </span>
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-300 ease-luxury',
          isOpen ? 'max-h-96 pb-5' : 'max-h-0'
        )}
      >
        <div className="text-warm-gray leading-relaxed text-sm">
          {content}
        </div>
      </div>
    </div>
  );
}
