import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { clsx } from 'clsx';

export default function Accordion({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-pearl">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left group"
        aria-expanded={isOpen}
      >
        <span className="font-sans text-sm font-medium uppercase tracking-wide text-warm-800 group-hover:text-gold-600 transition-colors">
          {title}
        </span>
        <span
          className={clsx(
            'text-warm-600 transition-transform duration-300',
            isOpen && 'rotate-45'
          )}
        >
          <Plus size={18} strokeWidth={1.5} />
        </span>
      </button>
      
      <div
        className={clsx(
          'overflow-hidden transition-all duration-300 ease-out',
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        )}
      >
        <div className="text-warm-600 text-sm leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

export function AccordionGroup({ children }) {
  return <div className="divide-y divide-pearl">{children}</div>;
}
