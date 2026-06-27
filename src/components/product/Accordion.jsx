import React from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Accordion({ items, defaultOpen = 0 }) {
  return (
    <div className="border-t border-hairline">
      {items.map((item, i) => (
        <details
          key={item.title}
          open={i === defaultOpen}
          className="group border-b border-hairline"
        >
          <summary
            className="flex items-center justify-between py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden"
          >
            <span className="label text-ink">{item.title}</span>
            <ChevronDown
              className="w-4 h-4 text-ink transition-transform duration-300 group-open:rotate-180"
              strokeWidth={1.25}
            />
          </summary>
          <div className="pb-6 pr-8">
            <div className="text-sm md:text-[0.95rem] text-charcoal leading-relaxed">
              {item.content}
            </div>
          </div>
        </details>
      ))}
    </div>
  );
}