import { useState } from 'react';
import { cn } from '@/lib/utils';

export function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="divide-y divide-divider">
      {items.map((item, i) => (
        <div key={i}>
          <button
            className="w-full flex items-center justify-between py-4 text-left group"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span className="font-sans text-xs tracking-widest uppercase text-charcoal group-hover:text-gold transition-colors duration-200">
              {item.title}
            </span>
            <span className={cn(
              'text-muted-warm transition-transform duration-300',
              openIndex === i ? 'rotate-45' : 'rotate-0'
            )}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
              </svg>
            </span>
          </button>
          <div className={cn(
            'overflow-hidden transition-all duration-300 ease-in-out',
            openIndex === i ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
          )}>
            <p className="font-sans text-sm text-muted-warm leading-relaxed">
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
