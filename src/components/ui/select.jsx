import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

const Select = ({ value, onValueChange, children, placeholder, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = React.Children.toArray(children).find(
    (child) => child.props.value === value
  );

  return (
    <div ref={selectRef} className={cn('relative', className)}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'flex h-11 w-full items-center justify-between rounded-lg border border-[#e5e5e5] bg-white px-4 py-2 text-sm',
          'focus:outline-none focus:ring-2 focus:ring-[#b8860b]/20 focus:border-[#b8860b]',
          !value && 'text-[#a3a3a3]'
        )}
      >
        <span>{selectedOption ? selectedOption.props.children : placeholder || 'Select...'}</span>
        <ChevronDown className={cn('h-4 w-4 transition-transform', isOpen && 'rotate-180')} />
      </button>
      {isOpen && (
        <div className="absolute z-50 mt-1 w-full rounded-lg border border-[#e5e5e5] bg-white shadow-lg">
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child, {
                onSelect: () => {
                  onValueChange(child.props.value);
                  setIsOpen(false);
                },
              });
            }
            return child;
          })}
        </div>
      )}
    </div>
  );
};

const SelectItem = ({ value, children, onSelect, className }) => {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        'w-full text-left px-4 py-2.5 text-sm text-[#1a1a1a] hover:bg-[#f5f5f0] transition-colors',
        className
      )}
    >
      {children}
    </button>
  );
};

export { Select, SelectItem };
