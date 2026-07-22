import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Accordion({ title, defaultOpen = false, children }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-brand-border-subtle">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left transition-colors duration-200 hover:text-brand-gold"
        aria-expanded={isOpen}
      >
        <span className="text-sm font-medium uppercase tracking-[0.1em]">
          {title}
        </span>
        <ChevronDown
          className={cn(
            'w-4 h-4 transition-transform duration-300',
            isOpen && 'rotate-180'
          )}
        />
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-300 ease-out',
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        )}
      >
        <div className="text-brand-text-secondary text-sm leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}
