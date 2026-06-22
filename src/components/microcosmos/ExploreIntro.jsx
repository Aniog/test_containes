const stats = [
  { value: '10¹⁴', label: 'Microbes living on you right now' },
  { value: '0.001mm', label: 'Average size of a bacterium' },
  { value: '4B', label: 'Years microbes have ruled Earth' },
  { value: '99%', label: 'Of microbial species still undescribed' },
]

export default function ExploreIntro() {
  return (
    <section id="explore" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.08),transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: copy */}
          <div>
            <span
              id="explore-eyebrow"
              className="text-xs tracking-[0.3em] uppercase text-cyan-300/80"
            >
              Prologue · 01
            </span>
            <h2
              id="explore-title"
              className="mt-4 font-serif font-light text-4xl md:text-5xl text-slate-50 tracking-tight"
            >
              The world is mostly invisible.
            </h2>
            <p
              id="explore-subtitle"
              className="mt-6 text-slate-300 text-base md:text-lg leading-relaxed"
            >
              For most of human history, the universe ended at the limit of our eye.
              Then, in 1674, a Dutch draper named Antonie van Leeuwenhoek polished a
              tiny lens, pointed it at a drop of pond water, and discovered an
              entire civilization swimming in plain sight.
            </p>
            <p className="mt-4 text-slate-400 leading-relaxed">
              MicroCosmos retraces that astonishment. Through high-magnification
              photography and electron microscopy, we revisit the silent kingdoms
              that built our atmosphere, our oceans, our soil — and ourselves.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
                >
                  <div className="font-serif text-3xl md:text-4xl text-cyan-300">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs text-slate-400 leading-snug">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image stack */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-cyan-500/5">
                  <img
                    alt="Diatom micrograph"
                    data-strk-img-id="explore-img-diatom-7f1aa3"
                    data-strk-img="[explore-subtitle] [explore-title] diatom microscope"
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden border border-white/10">
                  <img
                    alt="Pond water organisms"
                    data-strk-img-id="explore-img-pondlife-2c8e0b"
                    data-strk-img="[explore-eyebrow] [explore-title] pond water protozoa microscope"
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden border border-white/10">
                  <img
                    alt="Bacteria colony"
                    data-strk-img-id="explore-img-bacteria-09a4d2"
                    data-strk-img="[explore-title] bacteria colony electron microscope"
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-emerald-500/5">
                  <img
                    alt="Fungal hyphae"
                    data-strk-img-id="explore-img-fungi-44b2a1"
                    data-strk-img="[explore-subtitle] fungi hyphae mold macro"
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Decorative ring */}
            <div className="pointer-events-none absolute -top-10 -right-10 w-32 h-32 rounded-full border border-cyan-300/20" />
            <div className="pointer-events-none absolute -bottom-10 -left-10 w-40 h-40 rounded-full border border-emerald-300/10" />
          </div>
        </div>
      </div>
    </section>
  )
}
