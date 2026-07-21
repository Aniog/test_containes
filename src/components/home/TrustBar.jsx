import { trustItems } from '@/data/editorial'

export default function TrustBar() {
  return (
    <section className="border-b border-velmora-espresso/10 bg-velmora-cream text-velmora-obsidian">
      <div className="mx-auto flex max-w-7xl snap-x gap-6 overflow-x-auto px-5 py-4 md:grid md:grid-cols-4 md:overflow-visible md:px-10">
        {trustItems.map((item) => (
          <p key={item} className="min-w-max snap-center text-center font-sansBody text-xs font-bold uppercase tracking-nav text-velmora-muted md:min-w-0">
            {item}
          </p>
        ))}
      </div>
    </section>
  )
}
