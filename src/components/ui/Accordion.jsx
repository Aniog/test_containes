import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-sand">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left font-sans font-medium text-charcoal hover:text-gold transition-colors duration-200"
      >
        <span>{title}</span>
        <ChevronDown
          className={cn(
            'w-5 h-5 transition-transform duration-300',
            isOpen && 'rotate-180'
          )}
        />
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-300',
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        )}
      >
        <div className="text-warmgray font-light leading-relaxed text-sm">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
