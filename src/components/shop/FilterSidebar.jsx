import { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';
import { CATEGORIES, MATERIALS } from '@/data/products';
import { cn } from '@/lib/utils';

const PRICE_BUCKETS = [
  { id: 'all', label: 'All prices', min: 0, max: Infinity },
  { id: 'under-50', label: 'Under $50', min: 0, max: 49.99 },
  { id: '50-75', label: '$50 – $75', min: 50, max: 75 },
  { id: '75-100', label: '$75 – $100', min: 75, max: 100 },
];

function FilterGroup({ title, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-hairline py-6">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between"
        aria-expanded={open}
      >
        <span className="text-[11px] uppercase tracking-widest-2 text-ink-soft">
          {title}
        </span>
        <ChevronDown
          className={cn(
            'w-4 h-4 text-ink-soft transition-transform duration-300 ease-editorial',
            open ? 'rotate-180' : 'rotate-0'
          )}
          strokeWidth={1.4}
        />
      </button>
      {open && <div className="mt-4 space-y-3">{children}</div>}
    </div>
  );
}

function Checkbox({ checked, onChange, label, count }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <span
        className={cn(
          'w-4 h-4 border flex items-center justify-center transition-colors duration-300 ease-editorial',
          checked ? 'bg-ink border-ink' : 'border-hairline group-hover:border-ink'
        )}
      >
        {checked && (
          <svg
            className="w-2.5 h-2.5 text-ivory"
            viewBox="0 0 12 10"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M1 5l3 3L11 1" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className="text-sm text-ink-soft flex-1">{label}</span>
      {typeof count === 'number' && (
        <span className="text-xs text-muted">{count}</span>
      )}
    </label>
  );
}

function Radio({ checked, onChange, label }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <span
        className={cn(
          'w-4 h-4 rounded-full border flex items-center justify-center transition-colors duration-300 ease-editorial',
          checked ? 'border-ink' : 'border-hairline group-hover:border-ink'
        )}
      >
        {checked && <span className="w-2 h-2 rounded-full bg-ink" />}
      </span>
      <input
        type="radio"
        className="sr-only"
        checked={checked}
        onChange={onChange}
      />
      <span className="text-sm text-ink-soft">{label}</span>
    </label>
  );
}

export default function FilterSidebar({
  filters,
  onChange,
  counts,
  totalActive,
  onClear,
  openMobile,
  onCloseMobile,
}) {
  const set = (key) => (value) => onChange({ ...filters, [key]: value });
  const toggleCategory = (id) => {
    const next = filters.categories.includes(id)
      ? filters.categories.filter((c) => c !== id)
      : [...filters.categories, id];
    onChange({ ...filters, categories: next });
  };
  const toggleMaterial = (id) => {
    const next = filters.materials.includes(id)
      ? filters.materials.filter((m) => m !== id)
      : [...filters.materials, id];
    onChange({ ...filters, materials: next });
  };

  const body = (
    <div className="bg-ivory">
      <div className="flex items-center justify-between mb-2 md:mb-0">
        <p className="font-serif text-2xl text-ink-soft">Filter</p>
        {totalActive > 0 && (
          <button
            type="button"
            onClick={onClear}
            className="text-[11px] uppercase tracking-widest-2 text-muted hover:text-ink transition-colors duration-300 ease-editorial"
          >
            Clear all
          </button>
        )}
      </div>

      <FilterGroup title="Category">
        {CATEGORIES.map((c) => (
          <Checkbox
            key={c.id}
            label={c.label}
            count={counts.byCategory[c.id] || 0}
            checked={filters.categories.includes(c.id)}
            onChange={() => toggleCategory(c.id)}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Price">
        {PRICE_BUCKETS.map((b) => (
          <Radio
            key={b.id}
            label={b.label}
            checked={filters.price === b.id}
            onChange={() => set('price')(b.id)}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Material" defaultOpen={false}>
        {MATERIALS.map((m) => (
          <Checkbox
            key={m.id}
            label={m.label}
            checked={filters.materials.includes(m.id)}
            onChange={() => toggleMaterial(m.id)}
          />
        ))}
      </FilterGroup>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:block w-60 lg:w-64 flex-shrink-0">
        {body}
      </aside>

      {/* Mobile drawer */}
      <div
        className={cn(
          'md:hidden fixed inset-0 z-40 transition-opacity duration-500 ease-editorial',
          openMobile ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        aria-hidden={!openMobile}
      >
        <button
          type="button"
          aria-label="Close filters"
          onClick={onCloseMobile}
          className="absolute inset-0 bg-ink/50 cursor-default"
          tabIndex={-1}
        />
        <aside
          className={cn(
            'absolute top-0 right-0 h-full w-[88%] max-w-sm bg-ivory shadow-soft-lg flex flex-col transition-transform duration-500 ease-editorial',
            openMobile ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="flex items-center justify-between h-16 px-6 border-b border-hairline">
            <p className="font-serif text-xl text-ink-soft">Filter</p>
            <button
              type="button"
              onClick={onCloseMobile}
              aria-label="Close filters"
              className="inline-flex items-center justify-center w-9 h-9 -mr-2"
            >
              <X className="w-5 h-5" strokeWidth={1.4} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-6">{body}</div>
          <div className="border-t border-hairline p-6">
            <button
              type="button"
              onClick={onCloseMobile}
              className="w-full btn-primary"
            >
              Show results
            </button>
          </div>
        </aside>
      </div>
    </>
  );
}

export { PRICE_BUCKETS };
