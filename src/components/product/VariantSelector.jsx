import { cn } from '@/lib/utils'

const VARIANTS = [
  { id: 'gold', label: '18K Gold', swatch: 'linear-gradient(135deg, #F4E1B0, #B68B4F 60%, #7A5A30)' },
  { id: 'silver', label: 'Sterling Silver', swatch: 'linear-gradient(135deg, #F2F2F0, #B8B8B5 60%, #6E6E6A)' },
]

export default function VariantSelector({ product, value, onChange }) {
  const available = VARIANTS.filter((v) => product.colors?.includes(v.id))
  if (available.length === 0) return null
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <p className="text-[11px] uppercase tracking-[0.22em] text-ink-700">
          Finish
        </p>
        <p className="text-[12px] text-ink-500">{available.find((v) => v.id === value)?.label}</p>
      </div>
      <div className="flex flex-wrap gap-2.5">
        {available.map((v) => {
          const active = v.id === value
          return (
            <button
              key={v.id}
              type="button"
              onClick={() => onChange(v.id)}
              className={cn('pill', active && 'pill-active')}
              aria-pressed={active}
            >
              <span
                className="w-3.5 h-3.5 rounded-full mr-2 border border-ink-900/20"
                style={{ background: v.swatch }}
              />
              {v.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
