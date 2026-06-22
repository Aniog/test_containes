import React from 'react'

const stats = [
  {
    eyebrow: 'What we see',
    title: 'A hidden architecture of life',
    body: 'Every drop of water, every grain of sand, every speck of dust is its own galaxy. MicroCosmos is a visual archive devoted to the geometry of the very small.',
  },
  {
    eyebrow: 'How we see it',
    title: 'Optics, light, and patience',
    body: 'From simple optical microscopy to fluorescence, electron, and confocal imaging, our contributors share the techniques that make the invisible visible.',
  },
  {
    eyebrow: 'Why it matters',
    title: 'Wonder is a science',
    body: 'Discovery begins with attention. By looking closer, we learn to care more deeply about the systems that quietly sustain everything above the lens.',
  },
]

export default function Intro() {
  return (
    <section
      id="explore"
      className="relative py-24 md:py-32 border-t border-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-[0.3em] text-cyan-400">
              Explore
            </span>
            <h2 id="intro-title" className="font-serif text-4xl md:text-5xl text-slate-50 mt-4 leading-tight">
              Three ways to look at the small.
            </h2>
            <p id="intro-desc" className="text-slate-300 mt-6 leading-relaxed">
              MicroCosmos pairs scientific imagery with quiet narrative. Wander
              through ecosystems no larger than a thumbprint, and meet the
              organisms, structures, and forces that shape them.
            </p>

            <div className="mt-8 rounded-2xl overflow-hidden border border-slate-800">
              <img
                alt="Microscopy detail"
                className="w-full aspect-[4/3] object-cover"
                data-strk-img-id="intro-feature-image-3a91be"
                data-strk-img="[intro-desc] [intro-title] cell mitosis microscope blue"
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
          </div>

          <div className="lg:col-span-7 grid gap-6">
            {stats.map((s, i) => (
              <article
                key={s.eyebrow}
                className="rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur p-7 md:p-8 hover:border-cyan-500/40 transition-colors"
              >
                <div className="flex items-baseline justify-between mb-4">
                  <span className="text-xs uppercase tracking-[0.3em] text-cyan-400">
                    {s.eyebrow}
                  </span>
                  <span className="font-serif text-3xl text-slate-700">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-slate-50">
                  {s.title}
                </h3>
                <p className="text-slate-300 mt-3 leading-relaxed">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
