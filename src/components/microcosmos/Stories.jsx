import { ArrowUpRight } from 'lucide-react'

const stories = [
  {
    id: 'forest-mycelium',
    eyebrow: 'Field Notes',
    title: 'The forest is talking through fungi.',
    excerpt:
      'Beneath every Douglas fir is a living cable of mycelium routing sugar, water, and warnings between trees. Scientists call it the Wood Wide Web.',
    author: 'Dr. Suzanne Cole',
    minutes: 8,
    titleId: 'story-title-forest-mycelium',
    descId: 'story-desc-forest-mycelium',
  },
  {
    id: 'gut-civilization',
    eyebrow: 'Body Atlas',
    title: 'There is a city living inside you.',
    excerpt:
      'Roughly 38 trillion microbes live in your gut, skin, and lungs. They outnumber your own cells — and they vote on your mood, immunity, and cravings.',
    author: 'Yara Okafor',
    minutes: 12,
    titleId: 'story-title-gut-civilization',
    descId: 'story-desc-gut-civilization',
  },
  {
    id: 'ocean-light',
    eyebrow: 'Ocean Layer',
    title: 'Half the air you breathe was made at sea.',
    excerpt:
      'Tiny phytoplankton in the upper ocean produce nearly half of Earth\'s oxygen. The lungs of the planet are mostly invisible.',
    author: 'Marcus Lin',
    minutes: 6,
    titleId: 'story-title-ocean-light',
    descId: 'story-desc-ocean-light',
  },
]

export default function Stories() {
  return (
    <section id="stories" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(16,185,129,0.07),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div className="max-w-2xl">
            <span className="text-xs tracking-[0.3em] uppercase text-cyan-300/80">
              Dispatches · 05
            </span>
            <h2 className="mt-4 font-serif font-light text-4xl md:text-5xl text-slate-50 tracking-tight">
              Stories from the small.
            </h2>
            <p className="mt-6 text-slate-300 leading-relaxed">
              Long-form essays from researchers, photographers, and naturalists who
              spend their lives looking through eyepieces.
            </p>
          </div>
          <a
            href="#journal"
            className="inline-flex items-center gap-2 text-sm text-cyan-300 hover:text-cyan-200 transition-colors"
          >
            All dispatches <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {stories.map((s) => (
            <article
              key={s.id}
              className="group relative rounded-3xl overflow-hidden border border-white/10 bg-slate-900/40 flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  alt={s.title}
                  data-strk-img-id={`story-img-${s.id}`}
                  data-strk-img={`[${s.descId}] [${s.titleId}] microscope nature`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                <span className="absolute top-4 left-4 text-[10px] tracking-[0.3em] uppercase text-slate-100 bg-slate-950/60 backdrop-blur px-3 py-1 rounded-full border border-white/15">
                  {s.eyebrow}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3
                  id={s.titleId}
                  className="font-serif text-2xl text-slate-50 leading-snug group-hover:text-cyan-200 transition-colors"
                >
                  {s.title}
                </h3>
                <p
                  id={s.descId}
                  className="mt-3 text-sm text-slate-300/90 leading-relaxed flex-1"
                >
                  {s.excerpt}
                </p>
                <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span>{s.author}</span>
                  <span>{s.minutes} min read</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
