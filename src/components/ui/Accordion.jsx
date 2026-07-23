import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="divide-y divide-sand border-y border-sand">
      {items.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between py-4 text-left transition-colors duration-300 hover:text-gold"
          >
            <span className="font-medium text-charcoal">{item.title}</span>
            <ChevronDown
              className={cn(
                'w-5 h-5 text-taupe transition-transform duration-300',
                openIndex === index && 'rotate-180'
              )}
            />
          </button>
          <div
            className={cn(
              'overflow-hidden transition-all duration-300 ease-out',
              openIndex === index ? 'max-h-96 pb-4' : 'max-h-0'
            )}
          >
            <p className="text-taupe leading-relaxed">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
