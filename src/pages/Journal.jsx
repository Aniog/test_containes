import { useStrkImages } from '@/hooks/useStrkImages.js'

const entries = [
  {
    id: 'journal-layering',
    title: 'How to layer gold jewelry for day and evening',
    copy: 'An easy approach to combining huggies, fine chains, and one sculptural focal piece.',
  },
  {
    id: 'journal-gifting',
    title: 'A gifting guide for birthdays, bridal moments, and self-purchase',
    copy: 'Thoughtful picks that feel polished at an accessible premium price point.',
  },
  {
    id: 'journal-care',
    title: 'Materials, plating, and keeping your pieces luminous',
    copy: 'A simple ritual for caring for demi-fine jewelry so it stays beautiful for longer.',
  },
]

export default function Journal() {
  const containerRef = useStrkImages([])

  return (
    <div className="bg-velmora-ivory" ref={containerRef}>
      <section className="border-b border-velmora-mist bg-velmora-porcelain px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-eyebrow text-velmora-gold">Journal</p>
          <h1 className="mt-5 max-w-3xl font-serif text-5xl leading-none text-velmora-ink sm:text-6xl">
            Styling notes, gifting ideas, and the rituals behind the shine
          </h1>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {entries.map((entry) => {
            const titleId = `${entry.id}-title`
            const copyId = `${entry.id}-copy`
            return (
              <article className="overflow-hidden rounded-luxe border border-velmora-mist bg-velmora-porcelain shadow-velmora" key={entry.id}>
                <img
                  alt={entry.title}
                  className="h-80 w-full object-cover"
                  data-strk-img-id={`${entry.id}-img`}
                  data-strk-img={`[${copyId}] [${titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="p-7">
                  <h2 id={titleId} className="font-serif text-4xl leading-none text-velmora-ink">
                    {entry.title}
                  </h2>
                  <p id={copyId} className="mt-4 text-sm leading-7 text-velmora-taupe">
                    {entry.copy}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </div>
  )
}
