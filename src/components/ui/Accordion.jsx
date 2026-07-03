import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen, children]);

  return (
    <div className="border-b border-velmora-sand">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-velmora-gold focus-visible:ring-inset"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-velmora-espresso">{title}</span>
        <ChevronDown
          className={cn(
            'w-5 h-5 text-velmora-warm-gray transition-transform duration-300',
            isOpen && 'rotate-180'
          )}
        />
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-out"
        style={{ height: `${height}px` }}
      >
        <div ref={contentRef} className="pb-4 text-velmora-warm-gray text-sm leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
