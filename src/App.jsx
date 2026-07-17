import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import './App.css'

const specimens = [
  {
    id: 'diatom',
    title: 'Diatom Frustule',
    desc: 'Glass-shelled algae with intricate silica geometry, drifting through sunlit waters.',
    imgId: 'spec-diatom-a1b2c3',
    titleId: 'spec-diatom-title',
    descId: 'spec-diatom-desc',
    ratio: '3x4',
  },
  {
    id: 'tardigrade',
    title: 'Tardigrade',
    desc: 'A water bear, nearly indestructible, surviving extreme cold and radiation.',
    imgId: 'spec-tardigrade-d4e5f6',
    titleId: 'spec-tardigrade-title',
    descId: 'spec-tardigrade-desc',
    ratio: '1x1',
  },
  {
    id: 'pollen',
    title: 'Pollen Grains',
    desc: 'Sculpted pollen particles, each species carrying a unique architectural signature.',
    imgId: 'spec-pollen-g7h8i9',
    titleId: 'spec-pollen-title',
    descId: 'spec-pollen-desc',
    ratio: '3x4',
  },
  {
    id: 'radiolarian',
    title: 'Radiolarian',
    desc: 'Mineral skeletons of single-celled plankton, resembling alien cathedrals.',
    imgId: 'spec-radiolarian-j1k2l3',
    titleId: 'spec-radiolarian-title',
    descId: 'spec-radiolarian-desc',
    ratio: '1x1',
  },
  {
    id: 'butterfly-scale',
    title: 'Butterfly Wing Scale',
    desc: 'Nanostructured ridges that scatter light into iridescent color.',
    imgId: 'spec-butterfly-m4n5o6',
    titleId: 'spec-butterfly-title',
    descId: 'spec-butterfly-desc',
    ratio: '3x4',
  },
  {
    id: 'snowflake',
    title: 'Snowflake Crystal',
    desc: 'Hexagonal ice forming a one-of-a-kind fractal under the lens.',
    imgId: 'spec-snowflake-p7q8r9',
    titleId: 'spec-snowflake-title',
    descId: 'spec-snowflake-desc',
    ratio: '1x1',
  },
  {
    id: 'spider-eye',
    title: 'Spider Eyes',
    desc: 'A jumping spider principal eyes, gleaming like polished obsidian.',
    imgId: 'spec-spider-s1t2u3',
    titleId: 'spec-spider-title',
    descId: 'spec-spider-desc',
    ratio: '3x4',
  },
  {
    id: 'fungi',
    title: 'Fungal Hyphae',
    desc: 'Thread-like filaments of a mycelial network weaving through soil.',
    imgId: 'spec-fungi-v4w5x6',
    titleId: 'spec-fungi-title',
    descId: 'spec-fungi-desc',
    ratio: '1x1',
  },
]

const gallery = [
  { id: 'g1', title: 'Ciliate Dance', desc: 'Ciliated protozoan spiraling through a droplet.', imgId: 'gal-g1-y7z8a9', titleId: 'gal-g1-title', descId: 'gal-g1-desc', ratio: '3x2' },
  { id: 'g2', title: 'Crystal Bloom', desc: 'Crystallized salt forming a desert flower.', imgId: 'gal-g2-b1c2d3', titleId: 'gal-g2-title', descId: 'gal-g2-desc', ratio: '1x1' },
  { id: 'g3', title: 'Algae Galaxy', desc: 'A colony of green algae resembling a spiral galaxy.', imgId: 'gal-g3-e4f5g6', titleId: 'gal-g3-title', descId: 'gal-g3-desc', ratio: '3x4' },
  { id: 'g4', title: 'Insect Compound Eye', desc: 'Thousands of tiny lenses in a single eye.', imgId: 'gal-g4-h7i8j9', titleId: 'gal-g4-title', descId: 'gal-g4-desc', ratio: '1x1' },
  { id: 'g5', title: 'Water Flea', desc: 'A daphnia suspended in transparent stillness.', imgId: 'gal-g5-k1l2m3', titleId: 'gal-g5-title', descId: 'gal-g5-desc', ratio: '3x2' },
  { id: 'g6', title: 'Pollen Mosaic', desc: 'A field of varied pollen grains, each a tiny sculpture.', imgId: 'gal-g6-n4o5p6', titleId: 'gal-g6-title', descId: 'gal-g6-desc', ratio: '1x1' },
  { id: 'g7', title: 'Dewdrop Lens', desc: 'A single dewdrop magnifying the world beneath it.', imgId: 'gal-g7-q7r8s9', titleId: 'gal-g7-title', descId: 'gal-g7-desc', ratio: '3x4' },
  { id: 'g8', title: 'Bacterial Colony', desc: 'A petri dish bloom of microscopic life.', imgId: 'gal-g8-t1u2v3', titleId: 'gal-g8-title', descId: 'gal-g8-desc', ratio: '1x1' },
  { id: 'g9', title: 'Rotifer', desc: 'A wheel-animacule sweeping food into its mouth.', imgId: 'gal-g9-w4x5y6', titleId: 'gal-g9-title', descId: 'gal-g9-desc', ratio: '3x2' },
  { id: 'g10', title: 'Leaf Stomata', desc: 'Breathing pores on the underside of a leaf.', imgId: 'gal-g10-z7a8b9', titleId: 'gal-g10-title', descId: 'gal-g10-desc', ratio: '1x1' },
  { id: 'g11', title: 'Diatom Wheel', desc: 'A radial arrangement of patterned diatom shells.', imgId: 'gal-g11-c1d2e3', titleId: 'gal-g11-title', descId: 'gal-g11-desc', ratio: '3x4' },
  { id: 'g12', title: 'Fern Spore', desc: 'A single spore, ready to unfurl into a new plant.', imgId: 'gal-g12-f4g5h6', titleId: 'gal-g12-title', descId: 'gal-g12-desc', ratio: '1x1' },
]


function App() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <main ref={containerRef} className="bg-ink text-mist font-sans">
      {/* ===== Hero ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="hero-bg-9f2a7c"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/60 to-ink" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-32">
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-glow mb-6">
            A journey into the unseen
          </p>
          <h1
            id="hero-title"
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-tight max-w-4xl"
          >
            MicroCosmos
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 text-lg md:text-xl text-mist-dim max-w-2xl leading-relaxed"
          >
            The hidden world beneath the lens — where a single drop of pond water
            holds galaxies of living architecture, and the ordinary reveals
            itself as extraordinary.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#specimens"
              className="inline-flex items-center px-6 py-3 rounded-full bg-emerald-glow text-ink font-semibold hover:opacity-90 transition"
            >
              Explore specimens
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center px-6 py-3 rounded-full border border-ink-line text-mist hover:border-emerald-glow transition"
            >
              View gallery
            </a>
          </div>
        </div>
      </section>

      {/* ===== Intro ===== */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-glow mb-5">
              The premise
            </p>
            <h2
              id="intro-title"
              className="font-serif text-3xl md:text-5xl font-light leading-tight mb-6"
            >
              A universe in a drop of water
            </h2>
            <p id="intro-desc" className="text-mist-dim leading-relaxed text-lg">
              Long before telescopes reached the stars, a humble lens turned
              downward and found another cosmos entirely. Every puddle, every
              leaf, every grain of soil teems with life and structure too small
              for the unaided eye. MicroCosmos is a visual field guide to that
              world.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-ink-line">
            <img
              alt="Microscopic pond life"
              data-strk-img-id="intro-img-3b8c1d"
              data-strk-img="[intro-desc] [intro-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      {/* ===== Stats band ===== */}
      <section className="py-16 border-y border-ink-line bg-ink-soft">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { n: '1M+', l: 'Species unseen by the naked eye' },
            { n: '0.1mm', l: 'Where the microcosmos begins' },
            { n: '300+', l: 'Years of lens-based discovery' },
            { n: '∞', l: 'Forms still waiting to be found' },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-serif text-4xl md:text-5xl text-amber-glow font-light">
                {s.n}
              </div>
              <div className="mt-2 text-sm text-mist-dim">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Specimens ===== */}
      <section id="specimens" className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-glow mb-5">
              Field specimens
            </p>
            <h2
              id="specimens-title"
              className="font-serif text-3xl md:text-5xl font-light leading-tight"
            >
              Eight lives from the microscopic frontier
            </h2>
            <p id="specimens-desc" className="mt-5 text-mist-dim text-lg leading-relaxed">
              Each specimen is a portrait of a creature or structure whose
              existence shapes the living world, yet remains invisible without
              magnification.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {specimens.map((s) => (
              <article
                key={s.id}
                className="group rounded-2xl border border-ink-line bg-ink-soft overflow-hidden hover:border-emerald-glow/40 transition"
              >
                <div className="overflow-hidden">
                  <img
                    alt={s.title}
                    data-strk-img-id={s.imgId}
                    data-strk-img={`[${s.descId}] [${s.titleId}] [specimens-desc] [specimens-title]`}
                    data-strk-img-ratio={s.ratio}
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full object-cover group-hover:scale-[1.03] transition duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 id={s.titleId} className="font-serif text-xl text-mist">
                    {s.title}
                  </h3>
                  <p id={s.descId} className="mt-2 text-sm text-mist-dim leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Feature split ===== */}
      <section className="py-24 md:py-32 bg-ink-soft border-y border-ink-line">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 overflow-hidden rounded-3xl border border-ink-line">
            <img
              alt="Microscope detail"
              data-strk-img-id="feature-img-7d2e9a"
              data-strk-img="[feature-desc] [feature-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover aspect-[3/4]"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-glow mb-5">
              The instrument
            </p>
            <h2
              id="feature-title"
              className="font-serif text-3xl md:text-5xl font-light leading-tight mb-6"
            >
              Light, glass, and patience
            </h2>
            <p id="feature-desc" className="text-mist-dim leading-relaxed text-lg">
              Every image here began as a beam of light bent through carefully
              ground glass. Modern microscopy stacks focus, polarizes light, and
              stains molecules with fluorescent glow — but the magic is the same
              as it was centuries ago: revealing what was always there.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Gallery ===== */}
      <section id="gallery" className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-glow mb-5">
              The gallery
            </p>
            <h2
              id="gallery-title"
              className="font-serif text-3xl md:text-5xl font-light leading-tight"
            >
              Twelve windows into the small
            </h2>
            <p id="gallery-desc" className="mt-5 text-mist-dim text-lg leading-relaxed">
              A curated mosaic of forms — crystals, creatures, and cellular
              landscapes captured at the edge of visibility.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {gallery.map((g) => (
              <figure
                key={g.id}
                className="group relative overflow-hidden rounded-2xl border border-ink-line"
              >
                <img
                  alt={g.title}
                  data-strk-img-id={g.imgId}
                  data-strk-img={`[${g.descId}] [${g.titleId}] [gallery-desc] [gallery-title]`}
                  data-strk-img-ratio={g.ratio}
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full object-cover group-hover:scale-[1.04] transition duration-500"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-4">
                  <h3 id={g.titleId} className="font-serif text-base text-mist">
                    {g.title}
                  </h3>
                  <p id={g.descId} className="mt-1 text-xs text-mist-dim leading-snug">
                    {g.desc}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Closing ===== */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="closing-bg-2c5f8b"
          data-strk-bg="[closing-desc] [closing-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-ink/75" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2
            id="closing-title"
            className="font-serif text-3xl md:text-5xl font-light leading-tight"
          >
            Look closer. The world is busier than it seems.
          </h2>
          <p id="closing-desc" className="mt-6 text-mist-dim text-lg leading-relaxed">
            The microcosmos is not far away. It is on your skin, in your water,
            under your feet. You only need to change the scale of your
            attention.
          </p>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="border-t border-ink-line py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-serif text-xl text-mist">MicroCosmos</div>
          <p className="text-sm text-mist-dim">
            A visual field guide to the unseen world.
          </p>
        </div>
      </footer>
    </main>
  )
}

export default App
