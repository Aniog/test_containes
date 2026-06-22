import { Microscope, Zap, Eye, ScanLine } from 'lucide-react'

const tools = [
  {
    id: 'optical',
    name: 'Optical Microscope',
    range: '40× — 1,000×',
    icon: Microscope,
    desc: 'Light bent through lenses reveals cells, protists and tissues. The classroom workhorse.',
    q: 'optical microscope lab equipment',
  },
  {
    id: 'electron',
    name: 'Electron Microscope',
    range: 'up to 10,000,000×',
    icon: Zap,
    desc: 'A beam of electrons resolves objects smaller than the wavelength of light — including viruses.',
    q: 'electron microscope laboratory science',
  },
  {
    id: 'fluorescence',
    name: 'Fluorescence Microscope',
    range: 'molecular labels',
    icon: Eye,
    desc: 'Glowing tags illuminate specific proteins and structures inside living cells in vivid color.',
    q: 'fluorescence microscope cells glowing',
  },
  {
    id: 'confocal',
    name: 'Confocal Microscope',
    range: '3D optical slices',
    icon: ScanLine,
    desc: 'Lasers scan thin focal planes, letting researchers reconstruct cells layer by layer in 3D.',
    q: 'confocal laser microscope scanning',
  },
]

export default function Tools() {
  return (
    <section
      id="tools"
      className="relative py-24 md:py-32 border-t border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <span className="text-xs uppercase tracking-[0.3em] text-cyan-400 font-semibold">
              The Instruments
            </span>
            <h2
              id="tools-title"
              className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-slate-50"
              style={{ fontFamily: "'Space Grotesk', Inter, sans-serif" }}
            >
              Lenses that opened the universe
            </h2>
            <p
              id="tools-desc"
              className="mt-5 text-slate-300 text-base md:text-lg leading-relaxed"
            >
              From hand-ground glass beads to lasers and electron beams, every
              tool carved a new doorway into the small.
            </p>

            <div className="mt-8 rounded-2xl overflow-hidden border border-slate-800">
              <img
                alt="Microscope close-up"
                className="w-full aspect-[4/5] object-cover"
                data-strk-img-id="tools-feature-image"
                data-strk-img="[tools-desc] [tools-title] modern microscope close up"
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
          </div>

          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4 md:gap-5">
            {tools.map((t) => {
              const Icon = t.icon
              const titleId = `tool-${t.id}-title`
              const descId = `tool-${t.id}-desc`
              return (
                <article
                  key={t.id}
                  className="rounded-2xl border border-slate-800 bg-slate-900/40 overflow-hidden group hover:border-cyan-500/30 transition-colors"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      alt={t.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      data-strk-img-id={`tool-${t.id}-img`}
                      data-strk-img={`[${descId}] [${titleId}] ${t.q}`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent" />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-950/80 border border-slate-700 text-[10px] uppercase tracking-widest text-cyan-400 font-semibold">
                      {t.range}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3">
                      <span className="w-9 h-9 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-cyan-400" />
                      </span>
                      <h3
                        id={titleId}
                        className="text-base md:text-lg font-bold text-slate-50"
                      >
                        {t.name}
                      </h3>
                    </div>
                    <p id={descId} className="mt-3 text-sm text-slate-400 leading-relaxed">
                      {t.desc}
                    </p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
