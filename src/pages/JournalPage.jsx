import StockImage from '@/components/layout/StockImage.jsx'

const journalEntries = [
  {
    id: 'journal-layering',
    title: 'The Art of Layering Gold Jewelry',
    excerpt:
      'How to build a polished stack that feels considered, warm, and effortless from day to evening.',
    description:
      'Editorial jewelry still life showing layered gold necklaces and earrings on warm neutral textures',
  },
  {
    id: 'journal-gifting',
    title: 'Gifting Notes for Modern Keepsakes',
    excerpt:
      'A guide to choosing pieces that feel personal, memorable, and beautifully easy to give.',
    description:
      'Luxury gifting image with gold jewelry box, ribbon, and soft editorial light',
  },
  {
    id: 'journal-care',
    title: 'Caring for Demi-Fine Favorites',
    excerpt:
      'Simple rituals to help your go-to Velmora pieces keep their glow over time.',
    description:
      'Editorial flatlay of gold jewelry, soft pouch, and care cloth on a warm stone surface',
  },
]

export default function JournalPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-16 pt-28 sm:px-6 md:pb-24 lg:px-10">
      <div className="mb-10 max-w-3xl space-y-4">
        <p className="text-[0.68rem] uppercase tracking-[0.34em] text-stone-500">
          Journal
        </p>
        <h1 className="font-serif text-5xl text-stone-950 sm:text-6xl">
          Editorial notes on gifting, layering, and care
        </h1>
        <p className="text-base leading-8 text-stone-600">
          A calm, polished space for inspiration around wearing and gifting Velmora
          jewelry beautifully.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {journalEntries.map((entry, index) => (
          <article key={entry.id} className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-sm">
            <div className="relative aspect-[4/5] bg-stone-100">
              <StockImage
                slotId={`journal-${index}`}
                imageId={entry.id}
                title={entry.title}
                description={entry.description}
                ratio="4x3"
                width="1000"
                alt={entry.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="space-y-4 p-7">
              <p className="text-[0.68rem] uppercase tracking-[0.34em] text-stone-500">
                Editorial
              </p>
              <h2 className="font-serif text-3xl text-stone-950">{entry.title}</h2>
              <p className="text-sm leading-7 text-stone-600">{entry.excerpt}</p>
              <button
                type="button"
                className="text-xs uppercase tracking-[0.26em] text-stone-800 transition hover:text-stone-950"
              >
                Read Story
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
