import React from 'react'

const journal = [
  {
    id: 'iridescence',
    date: 'May 2026',
    title: 'The geometry of iridescence',
    excerpt:
      'How nanoscale ridges on butterfly wings bend light into color without any pigment at all.',
    imgId: 'journal-iridescence-cb14ae',
    titleId: 'journal-iridescence-title',
    descId: 'journal-iridescence-desc',
    query: 'butterfly wing iridescent macro',
  },
  {
    id: 'mycelium-net',
    date: 'April 2026',
    title: 'Letters from the mycelium net',
    excerpt:
      'Beneath every forest floor, a vast, slow conversation is happening in chemical signals.',
    imgId: 'journal-mycelium-90a72c',
    titleId: 'journal-mycelium-title',
    descId: 'journal-mycelium-desc',
    query: 'mycelium fungal network microscope',
  },
  {
    id: 'ice-nucleation',
    date: 'March 2026',
    title: 'How a snowflake decides',
    excerpt:
      'Tracing the moment of ice nucleation around a single bacterial protein in cloud droplets.',
    imgId: 'journal-snowflake-44ed18',
    titleId: 'journal-snowflake-title',
    descId: 'journal-snowflake-desc',
    query: 'snowflake crystal ice microscope',
  },
]

export default function Journal() {
  return (
    <section
      id="journal"
      className="relative py-24 md:py-32 border-t border-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-cyan-400">
              Journal
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-slate-50 mt-4 leading-tight max-w-2xl">
              Field notes from the hidden world.
            </h2>
          </div>
          <a href="#join" className="text-sm text-cyan-400 hover:text-cyan-300">
            All entries →
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {journal.map((entry) => (
            <article
              key={entry.id}
              className="group rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/40 hover:border-cyan-500/40 transition-colors"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  alt={entry.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  data-strk-img-id={entry.imgId}
                  data-strk-img={`[${entry.descId}] [${entry.titleId}] ${entry.query}`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="p-6">
                <span className="text-xs uppercase tracking-[0.25em] text-cyan-400">
                  {entry.date}
                </span>
                <h3
                  id={entry.titleId}
                  className="font-serif text-2xl text-slate-50 mt-3 leading-snug"
                >
                  {entry.title}
                </h3>
                <p
                  id={entry.descId}
                  className="text-slate-300 mt-3 text-sm leading-relaxed"
                >
                  {entry.excerpt}
                </p>
                <span className="inline-block mt-5 text-sm text-cyan-400 group-hover:text-cyan-300">
                  Read entry →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
