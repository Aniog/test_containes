import { trustItems } from '@/data/storefront'

export function AnnouncementBar() {
  return (
    <div className="border-y border-velmora-line/80 bg-velmora-parchment text-velmora-truffle">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-5 gap-y-2 px-4 py-3 text-[11px] uppercase tracking-[0.24em] sm:px-6 lg:px-8">
        {trustItems.map((item, index) => (
          <div key={item} className="flex items-center gap-5">
            <span>{item}</span>
            {index < trustItems.length - 1 && <span className="hidden text-velmora-taupe sm:inline">·</span>}
          </div>
        ))}
      </div>
    </div>
  )
}
