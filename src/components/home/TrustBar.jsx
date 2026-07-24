import { trustBar } from '@/data/products'

export default function TrustBar() {
  return (
    <div className="border-y border-ink/10 bg-cream-soft">
      <div className="mx-auto flex max-w-content flex-col items-center divide-y divide-ink/10 px-6 py-5 sm:flex-row sm:divide-x sm:divide-y-0 md:px-10 lg:px-16">
        {trustBar.map((item) => (
          <div
            key={item}
            className="flex flex-1 items-center justify-center px-4 py-2 text-center text-[11px] uppercase tracking-widest2 text-ink-muted sm:py-0"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
