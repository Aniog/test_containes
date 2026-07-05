import { TRUST_POINTS } from '@/data/products'

export default function TrustBar() {
  return (
    <div className="border-b border-warm-gray bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-x-6 gap-y-3 py-3.5">
          {TRUST_POINTS.map((point) => (
            <span
              key={point}
              className="text-[11px] md:text-xs font-sans uppercase tracking-ui text-taupe"
            >
              {point}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
