import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Accordion({ items, defaultOpen = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen);

  return (
    <div className="divide-y divide-champagne">
      {items.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            className="w-full flex items-center justify-between py-5 text-left group"
            aria-expanded={openIndex === index}
          >
            <span className="font-medium text-charcoal group-hover:text-gold transition-colors duration-200">
              {item.title}
            </span>
            <ChevronDown
              className={cn(
                'w-5 h-5 text-stone transition-transform duration-300',
                openIndex === index && 'rotate-180'
              )}
            />
          </button>
          <div
            className={cn(
              'overflow-hidden transition-all duration-300 ease-silk',
              openIndex === index ? 'max-h-96 pb-5' : 'max-h-0'
            )}
          >
            <div className="text-stone leading-relaxed">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
