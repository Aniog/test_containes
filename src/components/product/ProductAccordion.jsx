import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function ProductAccordion({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-warm-800/30">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs tracking-widest uppercase text-warm-200 font-medium">
          {title}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-warm-400 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <div className="text-sm text-warm-400 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}
