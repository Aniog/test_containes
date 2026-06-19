import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="border-t border-border">
      {items.map((item, index) => (
        <div key={index} className="border-b border-border">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between py-4 text-left"
          >
            <span className="font-medium text-primary">{item.title}</span>
            <ChevronDown
              className={cn(
                'w-5 h-5 text-muted transition-transform duration-200',
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
            <div className="text-secondary leading-relaxed">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
