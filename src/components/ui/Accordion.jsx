import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="divide-y divide-surface-dark border-y border-surface-dark">
      {items.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            className="w-full flex items-center justify-between py-4 text-left"
            aria-expanded={openIndex === index}
          >
            <span className="font-sans text-sm font-medium tracking-wide">
              {item.title}
            </span>
            <ChevronDown
              className={cn(
                'w-4 h-4 transition-transform duration-200',
                openIndex === index && 'rotate-180'
              )}
              strokeWidth={1.5}
            />
          </button>
          <div
            className={cn(
              'overflow-hidden transition-all duration-200',
              openIndex === index ? 'max-h-96 pb-4' : 'max-h-0'
            )}
          >
            <p className="text-sm text-text-secondary leading-relaxed">
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
