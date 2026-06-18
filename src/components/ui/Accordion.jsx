import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { clsx } from 'clsx';

export default function Accordion({ items }) {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <div className="border-t border-hairline">
      {items.map((item, i) => {
        const open = openIdx === i;
        return (
          <div key={item.title} className="border-b border-hairline">
            <button
              type="button"
              onClick={() => setOpenIdx(open ? -1 : i)}
              className="w-full flex items-center justify-between py-5 text-left group"
              aria-expanded={open}
            >
              <span className="text-[11px] uppercase tracking-[0.3em] text-espresso group-hover:text-gold transition-colors font-sans">
                {item.title}
              </span>
              <ChevronDown
                size={16}
                strokeWidth={1.4}
                className={clsx(
                  'text-espresso group-hover:text-gold transition-all duration-300',
                  open && 'rotate-180',
                )}
              />
            </button>
            <div
              className={clsx(
                'overflow-hidden transition-all duration-500 ease-out',
                open ? 'max-h-96 pb-6' : 'max-h-0',
              )}
            >
              <div className="text-sm text-mute font-sans leading-relaxed space-y-2">
                {Array.isArray(item.body) ? (
                  <ul className="list-none space-y-2">
                    {item.body.map((line, k) => (
                      <li key={k} className="flex gap-3">
                        <span className="text-gold mt-2 inline-block w-3 h-px bg-gold flex-shrink-0" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>{item.body}</p>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
