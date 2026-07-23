import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Accordion({ items }) {
  const [open, setOpen] = useState(new Set([0]));

  const toggle = (idx) => {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  return (
    <div className="border-t border-warmgray">
      {items.map((item, idx) => (
        <div key={idx} className="border-b border-warmgray">
          <button
            onClick={() => toggle(idx)}
            className="w-full flex items-center justify-between py-4 text-left"
          >
            <span className="font-serif text-lg">{item.title}</span>
            {open.has(idx) ? (
              <Minus className="w-4 h-4 text-clay" strokeWidth={1.6} />
            ) : (
              <Plus className="w-4 h-4 text-clay" strokeWidth={1.6} />
            )}
          </button>
          <div
            className={cn(
              'overflow-hidden transition-all duration-300',
              open.has(idx) ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0',
            )}
          >
            <p className="text-sm text-clay leading-relaxed">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
