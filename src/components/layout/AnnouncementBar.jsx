import { trustPoints } from '@/data/storefront'

export default function AnnouncementBar() {
  return (
    <div className="border-y border-velmora-sand/60 bg-velmora-cream/95">
      <div className="velmora-shell flex flex-wrap items-center justify-center gap-x-4 gap-y-2 px-4 py-3 text-center text-[11px] font-medium uppercase tracking-[0.34em] text-velmora-cocoa/75 sm:gap-x-6">
        {trustPoints.map((item, index) => (
          <span key={item} className="inline-flex items-center gap-4">
            <span>{item}</span>
            {index < trustPoints.length - 1 ? <span className="hidden text-velmora-sand sm:inline">·</span> : null}
          </span>
        ))}
      </div>
    </div>
  )
}
