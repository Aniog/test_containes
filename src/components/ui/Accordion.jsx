import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-velmora-stone/20">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="font-inter text-xs uppercase tracking-widest text-velmora-obsidian group-hover:text-velmora-gold-dark transition-colors duration-300">
          {title}
        </span>
        <ChevronDown
          size={14}
          className={`text-velmora-mist transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className="overflow-hidden transition-all duration-350 ease-out"
        style={{ maxHeight: open ? '400px' : '0px', opacity: open ? 1 : 0 }}
      >
        <div className="pb-5 font-inter text-sm text-velmora-mist leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}
