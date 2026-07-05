import { Link } from 'react-router-dom'

const articles = [
  {
    id: 'a-1',
    title: 'How to layer necklaces without tangles',
    excerpt:
      'A simple three-step method for the layered look — plus the chain lengths that always work.',
    category: 'Style Notes',
    read: '4 min',
  },
  {
    id: 'a-2',
    title: 'A guide to caring for 18K gold-plated jewelry',
    excerpt:
      'Small rituals that keep the warmth in your gold for years. From the shower to the gym.',
    category: 'Care',
    read: '3 min',
  },
  {
    id: 'a-3',
    title: 'Inside the Arezzo foundries',
    excerpt:
      'A photo essay from the family-run workshops where every Velmora piece begins.',
    category: 'Atelier',
    read: '6 min',
  },
  {
    id: 'a-4',
    title: 'Gift guide: the edit under $100',
    excerpt:
      'Five pieces that feel like heirlooms at a price that feels like kindness.',
    category: 'Gifting',
    read: '4 min',
  },
]

export default function Journal() {
  return (
    <div className="bg-ivory">
      <section className="pt-32 md:pt-40 pb-12 border-b border-hairline">
        <div className="container-page">
          <span className="eyebrow">The Velmora Journal</span>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl leading-[1.05]">
            Stories, notes,<br />
            <span className="italic font-light text-espresso-soft">and ritual.</span>
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-page grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14">
          {articles.map((a) => (
            <article key={a.id} className="group">
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-cream">
                <div
                  className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
                  data-strk-bg-id={`journal-${a.id}`}
                  data-strk-bg="[journal-subtitle] [journal-title] gold jewelry editorial warm"
                  data-strk-bg-ratio="4x3"
                  data-strk-bg-width="900"
                />
              </div>
              <div className="pt-5">
                <div className="flex items-center gap-3 text-[11px] uppercase tracking-widest2 text-taupe">
                  <span>{a.category}</span>
                  <span className="h-1 w-1 rounded-full bg-taupe/50" />
                  <span>{a.read} read</span>
                </div>
                <h2
                  id={`journal-${a.id}-title`}
                  className="mt-3 font-serif text-2xl md:text-3xl leading-snug group-hover:text-gold transition-colors"
                >
                  {a.title}
                </h2>
                <p
                  id={`journal-${a.id}-subtitle`}
                  className="mt-3 text-sm text-espresso-soft leading-relaxed"
                >
                  {a.excerpt}
                </p>
                <Link
                  to={`/journal/${a.id}`}
                  className="mt-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-widest2 font-medium link-underline"
                >
                  Read article
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
