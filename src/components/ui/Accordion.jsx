import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Accordion({ items }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="divide-y divide-velmora-sand">
      {items.map((item, idx) => (
        <div key={idx}>
          <button
            onClick={() => setOpen(open === idx ? -1 : idx)}
            className="w-full flex items-center justify-between py-4 text-left group"
          >
            <span className="font-inter text-xs tracking-widest uppercase text-velmora-obsidian group-hover:text-velmora-gold transition-colors duration-200">
              {item.title}
            </span>
            <ChevronDown
              size={16}
              className={cn(
                'text-velmora-ash transition-transform duration-300',
                open === idx && 'rotate-180'
              )}
            />
          </button>
          <div className={cn(
            'overflow-hidden transition-all duration-300',
            open === idx ? 'max-h-96 pb-4' : 'max-h-0'
          )}>
            <p className="font-inter text-sm text-velmora-stone leading-relaxed">
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
