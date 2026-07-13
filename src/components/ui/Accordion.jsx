import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-t border-linen">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs tracking-widest uppercase font-sans font-semibold text-obsidian">
          {title}
        </span>
        {open
          ? <ChevronUp size={14} className="text-muted flex-shrink-0" />
          : <ChevronDown size={14} className="text-muted flex-shrink-0" />
        }
      </button>
      {open && (
        <div className="pb-5 text-sm font-sans text-muted leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}
