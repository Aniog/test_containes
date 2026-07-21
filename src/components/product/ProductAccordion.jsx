import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function ProductAccordion({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-velmora-stone/60">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs font-medium tracking-wider uppercase text-velmora-charcoal">{title}</span>
        <ChevronDown className={`w-4 h-4 text-velmora-warmgray transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <div className="text-sm text-velmora-warmgray leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}
