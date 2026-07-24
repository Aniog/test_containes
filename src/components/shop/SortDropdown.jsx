import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const OPTIONS = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'newest', label: 'Newest' },
];

export default function SortDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const current = OPTIONS.find((o) => o.id === value) || OPTIONS[0];

  useEffect(() => {
    if (!open) return undefined;
    const onDoc = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="inline-flex items-center gap-2 border border-hairline px-4 py-2.5 text-[11px] uppercase tracking-widest-2 text-ink-soft hover:border-ink transition-colors duration-300 ease-editorial"
      >
        <span className="text-muted">Sort:</span>
        <span>{current.label}</span>
        <ChevronDown
          className={cn(
            'w-3.5 h-3.5 transition-transform duration-300 ease-editorial',
            open ? 'rotate-180' : 'rotate-0'
          )}
          strokeWidth={1.4}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 mt-2 w-56 bg-ivory border border-hairline shadow-soft-lg z-20 py-1"
        >
          {OPTIONS.map((opt) => {
            const active = opt.id === value;
            return (
              <li key={opt.id}>
                <button
                  type="button"
                  role="option"
                  aria-selected={active}
                  onClick={() => {
                    onChange(opt.id);
                    setOpen(false);
                  }}
                  className={cn(
                    'w-full flex items-center justify-between px-4 py-2.5 text-sm text-left transition-colors duration-200 ease-editorial',
                    active ? 'text-ink bg-champagne/40' : 'text-ink-soft hover:bg-champagne/30'
                  )}
                >
                  <span>{opt.label}</span>
                  {active && <Check className="w-3.5 h-3.5 text-ink" strokeWidth={1.6} />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export { OPTIONS as SORT_OPTIONS };
