import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-velmora-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs tracking-widest uppercase font-medium text-velmora-charcoal">{title}</span>
        <ChevronDown
          size={16}
          strokeWidth={1.5}
          className={`text-velmora-muted transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="pb-5 text-sm text-velmora-warm leading-relaxed animate-in fade-in slide-in-from-top-1 duration-200">
          {children}
        </div>
      )}
    </div>
  );
}
