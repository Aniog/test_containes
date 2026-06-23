import { Calendar, ArrowUpRight } from 'lucide-react'

const journal = [
  {
    id: 'plankton-bloom',
    title: 'Riding a plankton bloom in the Atlantic',
    excerpt:
      'A two-week voyage to capture the spring bloom — millions of diatoms swirling in cold currents.',
    date: 'May 2026',
    tag: 'Field log',
    imgId: 'journal-img-plankton-bloom-44e1',
    titleId: 'journal-plankton-bloom-title',
    descId: 'journal-plankton-bloom-desc',
  },
  {
    id: 'water-bear',
    title: 'The unkillable water bear, up close',
    excerpt:
      'Tardigrades survive boiling, freezing, and even space. We met one face to face at 800x.',
    date: 'April 2026',
    tag: 'Specimen of the month',
    imgId: 'journal-img-water-bear-9c20',
    titleId: 'journal-water-bear-title',
    descId: 'journal-water-bear-desc',
  },
  {
    id: 'snow-crystals',
    title: 'A morning of snowflakes, no two alike',
    excerpt:
      'Field photography at -12°C: catching crystals on a chilled slide before they vanish.',
    date: 'February 2026',
    tag: 'Photo essay',
    imgId: 'journal-img-snow-crystals-7820',
    titleId: 'journal-snow-crystals-title',
    descId: 'journal-snow-crystals-desc',
  },
]

export default function Journal() {
  return (
    <section id="journal" className="relative py-20 md:py-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-teal-300">From the journal</p>
            <h2
              id="journal-title"
              className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-slate-50"
            >
              Stories from the eyepiece
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm text-teal-300 hover:text-teal-200 transition"
          >
            Browse all entries
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {journal.map((post) => (
            <article
              key={post.id}
              className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 hover:-translate-y-1 hover:border-teal-400/40 transition duration-500"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  alt={post.title}
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition duration-700"
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[${post.descId}] [${post.titleId}] microscopy story`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <span className="absolute top-3 left-3 inline-flex items-center rounded-full bg-slate-950/80 px-3 py-1 text-xs text-teal-300 border border-teal-300/30">
                  {post.tag}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Calendar className="h-3.5 w-3.5" />
                  {post.date}
                </div>
                <h3 id={post.titleId} className="mt-3 text-lg font-semibold text-slate-100 group-hover:text-teal-200 transition">
                  {post.title}
                </h3>
                <p id={post.descId} className="mt-2 text-sm text-slate-400 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
