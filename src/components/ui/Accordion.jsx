import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="border-t border-light-gray">
      {items.map((item, index) => (
        <div key={index} className="border-b border-light-gray">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className={cn(
              'w-full flex items-center justify-between py-5',
              'font-sans text-sm uppercase tracking-extra-wide text-charcoal',
              'hover:text-gold transition-colors duration-200'
            )}
            aria-expanded={openIndex === index}
          >
            <span>{item.title}</span>
            <ChevronDown
              size={18}
              className={cn(
                'transition-transform duration-300',
                openIndex === index && 'rotate-180'
              )}
            />
          </button>
          <div
            className={cn(
              'overflow-hidden transition-all duration-300',
              openIndex === index ? 'max-h-96 pb-5' : 'max-h-0'
            )}
          >
            <div className="text-taupe font-light leading-relaxed text-sm">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
