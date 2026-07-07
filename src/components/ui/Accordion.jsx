import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="divide-y divide-warmGray-200">
      {items.map((item, index) => (
        <div key={index}>
          <button
            type="button"
            className="w-full flex items-center justify-between py-4 text-left group"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            aria-expanded={openIndex === index}
          >
            <span className="font-sans text-sm font-medium text-charcoal uppercase tracking-extra-wide">
              {item.title}
            </span>
            <ChevronDown
              size={16}
              className={cn(
                'text-warmGray-500 transition-transform duration-300 flex-shrink-0',
                openIndex === index && 'rotate-180'
              )}
            />
          </button>
          <div
            className={cn(
              'overflow-hidden transition-all duration-300',
              openIndex === index ? 'max-h-96 pb-4' : 'max-h-0'
            )}
          >
            {typeof item.content === 'string' ? (
              <p className="font-sans text-sm text-warmGray-600 leading-relaxed">
                {item.content}
              </p>
            ) : (
              item.content
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
