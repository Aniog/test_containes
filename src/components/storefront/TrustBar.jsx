import { trustPoints } from '@/data/products.js'

export default function TrustBar() {
  return (
    <section id="trust" className="border-y border-[#d9c7b7] bg-[#efe3d6] py-3">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-4 gap-y-2 px-5 text-center text-[11px] uppercase tracking-[0.3em] text-[#5f4c4a] md:px-8 lg:px-12">
        {trustPoints.map((point, index) => (
          <div key={point} className="flex items-center gap-4">
            <span>{point}</span>
            {index < trustPoints.length - 1 ? <span className="text-[#b78b54]">·</span> : null}
          </div>
        ))}
      </div>
    </section>
  )
}
