import { trustItems } from '@/data/siteContent'

const TrustBar = () => {
  return (
    <div id="benefits" className="border-y border-velmora-line bg-velmora-pearl/60 px-4 py-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-2 text-center text-[11px] font-medium uppercase tracking-[0.28em] text-velmora-ink sm:gap-x-8">
        {trustItems.map((item, index) => (
          <div key={item} className="flex items-center gap-6">
            {index > 0 ? <span className="hidden h-3 w-px bg-velmora-line sm:block" /> : null}
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrustBar
