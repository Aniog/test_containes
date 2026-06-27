import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const SORTS = [
  { id: 'featured', label: 'Featured' },
  { id: 'bestsellers', label: 'Best Sellers' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'newest', label: 'Newest' },
];

export default function SortDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [open]);

  const current = SORTS.find((s) => s.id === value) || SORTS[0];

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-3 border border-hairline hover:border-ink px-4 py-2.5 text-sm text-charcoal transition-colors"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="label-light text-muted">Sort by</span>
        <span className="text-sm text-ink">{current.label}</span>
        <ChevronDown
          className={cn('w-4 h-4 text-ink transition-transform duration-200', open && 'rotate-180')}
          strokeWidth={1.25}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 top-full mt-2 z-30 bg-cream border border-hairline shadow-velmora-lg min-w-[220px] py-2"
        >
          {SORTS.map((sort) => (
            <li key={sort.id} role="option" aria-selected={sort.id === value}>
              <button
                type="button"
                onClick={() => {
                  onChange(sort.id);
                  setOpen(false);
                }}
                className={cn(
                  'w-full flex items-center justify-between px-4 py-2.5 text-sm text-left hover:bg-sand transition-colors',
                  sort.id === value ? 'text-ink' : 'text-charcoal'
                )}
              >
                {sort.label}
                {sort.id === value && <Check className="w-3.5 h-3.5 text-ink" strokeWidth={1.5} />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}