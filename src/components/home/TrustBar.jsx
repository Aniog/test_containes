import { trustItems } from '@/lib/store-data'

export default function TrustBar() {
  return (
    <section className="border-y border-velmora-line/70 bg-velmora-paper text-velmora-ink">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-4 gap-y-2 px-4 py-4 text-center text-[11px] uppercase tracking-editorial sm:px-6 lg:gap-x-6 lg:px-8">
        {trustItems.map((item, index) => (
          <div key={item} className="flex items-center gap-4">
            {index > 0 && <span className="hidden h-3 w-px bg-velmora-line lg:block" />}
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
