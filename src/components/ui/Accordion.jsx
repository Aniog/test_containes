import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-sm uppercase tracking-wider text-espresso-900 group-hover:text-gold transition-colors">
          {title}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-taupe transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          strokeWidth={1.5}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <div className="text-sm text-taupe leading-relaxed">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
