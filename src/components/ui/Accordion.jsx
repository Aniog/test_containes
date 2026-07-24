import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-white/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-serif text-lg text-brand-cream">{title}</span>
        <ChevronDown
          size={18}
          className={`text-brand-muted transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-4' : 'max-h-0'}`}
      >
        <div className="text-sm text-brand-soft leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}