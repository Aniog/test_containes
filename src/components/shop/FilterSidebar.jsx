import { cn } from '@/lib/utils'
import { CATEGORIES, MATERIALS } from '@/data/products'

const PRICE_BUCKETS = [
  { id: 'all', label: 'All prices', range: [0, 9999] },
  { id: 'under-50', label: 'Under $50', range: [0, 50] },
  { id: '50-75', label: '$50 – $75', range: [50, 75] },
  { id: 'over-75', label: 'Over $75', range: [75, 9999] },
]

function Group({ title, children }) {
  return (
    <div className="py-6 border-b border-ink-900/10 last:border-b-0">
      <h3 className="text-[11px] uppercase tracking-[0.22em] text-ink-900 font-medium mb-4">
        {title}
      </h3>
      {children}
    </div>
  )
}

function RadioRow({ name, value, current, onChange, label, count }) {
  const checked = current === value
  return (
    <label className="flex items-center justify-between gap-3 py-1.5 cursor-pointer group">
      <span className="flex items-center gap-3">
        <span
          className={cn(
            'w-4 h-4 rounded-full border flex items-center justify-center transition-colors',
            checked ? 'border-ink-900' : 'border-ink-900/30 group-hover:border-ink-900/60',
          )}
        >
          {checked && <span className="w-2 h-2 rounded-full bg-ink-900" />}
        </span>
        <span className="text-[13px] text-ink-800">{label}</span>
      </span>
      {typeof count === 'number' && (
        <span className="text-[12px] text-ink-400">{count}</span>
      )}
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        className="sr-only"
      />
    </label>
  )
}

export default function FilterSidebar({
  filters,
  onChange,
  onReset,
  counts,
  className,
}) {
  const { category, material, price } = filters

  return (
    <aside className={cn('lg:sticky lg:top-24', className)}>
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-[12px] uppercase tracking-[0.22em] text-ink-900 font-medium">
          Refine
        </h2>
        <button
          type="button"
          onClick={onReset}
          className="text-[11px] uppercase tracking-[0.22em] text-ink-500 hover:text-ink-900 underline-offset-4 hover:underline"
        >
          Reset
        </button>
      </div>
      <div>
        <Group title="Category">
          <RadioRow
            name="category"
            value="all"
            current={category}
            onChange={(v) => onChange({ ...filters, category: v })}
            label="All"
            count={counts?.total}
          />
          {CATEGORIES.map((c) => (
            <RadioRow
              key={c.id}
              name="category"
              value={c.id}
              current={category}
              onChange={(v) => onChange({ ...filters, category: v })}
              label={c.label}
              count={counts?.category?.[c.id] || 0}
            />
          ))}
        </Group>
        <Group title="Material">
          <RadioRow
            name="material"
            value="all"
            current={material}
            onChange={(v) => onChange({ ...filters, material: v })}
            label="All materials"
          />
          {MATERIALS.map((m) => (
            <RadioRow
              key={m.id}
              name="material"
              value={m.id}
              current={material}
              onChange={(v) => onChange({ ...filters, material: v })}
              label={m.label}
            />
          ))}
        </Group>
        <Group title="Price">
          {PRICE_BUCKETS.map((b) => (
            <RadioRow
              key={b.id}
              name="price"
              value={b.id}
              current={price}
              onChange={(v) => onChange({ ...filters, price: v })}
              label={b.label}
            />
          ))}
        </Group>
      </div>
    </aside>
  )
}

export { PRICE_BUCKETS }
