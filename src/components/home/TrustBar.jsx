import { trustItems } from '@/data/storefront'

const TrustBar = () => {
  return (
    <div className="border-b border-velmora-line/80 bg-velmora-cream">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 px-4 py-4 text-center md:gap-5 md:px-6 lg:px-8">
        {trustItems.map((item, index) => (
          <div key={item} className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-velmora-stone">
            <span>{item}</span>
            {index < trustItems.length - 1 ? <span className="hidden text-velmora-line md:inline">·</span> : null}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrustBar
