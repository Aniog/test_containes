import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function AccordionSection({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-black/5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-[11px] tracking-[0.15em] uppercase text-velmora-espresso font-medium">
          {title}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-velmora-taupe transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <div className="font-sans text-sm text-velmora-stone leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}
