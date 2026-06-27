import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);
  
  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <div className="divide-y divide-[var(--color-border)]">
      {items.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between py-4 text-left transition-colors duration-200 hover:text-[var(--color-accent)]"
            aria-expanded={openIndex === index}
          >
            <span className="text-sm font-medium tracking-wide uppercase">
              {item.title}
            </span>
            <span className="ml-4 flex-shrink-0 text-[var(--color-secondary)]">
              {openIndex === index ? (
                <Minus className="w-4 h-4" />
              ) : (
                <Plus className="w-4 h-4" />
              )}
            </span>
          </button>
          
          <div
            className={cn(
              'overflow-hidden transition-all duration-300',
              openIndex === index ? 'max-h-96 pb-4' : 'max-h-0'
            )}
          >
            <p className="text-sm text-[var(--color-secondary)] leading-relaxed">
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
