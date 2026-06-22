import { useEffect, useRef } from 'react'
import {
  Microscope,
  Atom,
  Droplets,
  Leaf,
  Bug,
  FlaskConical,
  Telescope,
  ArrowRight,
  Play,
  Sparkles,
  ChevronDown,
  Mail,
  Instagram,
  Twitter,
  Youtube,
} from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const galleryItems = [
  {
    id: 'diatom',
    title: 'Diatom Constellations',
    desc: 'Silica-shelled algae, glowing like glass jewels under polarized light.',
    titleId: 'gallery-diatom-title',
    descId: 'gallery-diatom-desc',
    imgId: 'gallery-diatom-7c4f1a',
    ratio: '4x3',
    width: 900,
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    id: 'paramecium',
    title: 'Paramecium Ballet',
    desc: 'Single-celled dancers powered by thousands of beating cilia.',
    titleId: 'gallery-paramecium-title',
    descId: 'gallery-paramecium-desc',
    imgId: 'gallery-paramecium-3d22ab',
    ratio: '1x1',
    width: 600,
    span: '',
  },
  {
    id: 'pollen',
    title: 'Pollen Architecture',
    desc: 'Spiked, sculpted spheres engineered by flowering plants.',
    titleId: 'gallery-pollen-title',
    descId: 'gallery-pollen-desc',
    imgId: 'gallery-pollen-9b7e23',
    ratio: '1x1',
    width: 600,
    span: '',
  },
  {
    id: 'bacteria',
    title: 'Bacterial Colonies',
    desc: 'Miniature cities of microbes painting petri dishes in living color.',
    titleId: 'gallery-bacteria-title',
    descId: 'gallery-bacteria-desc',
    imgId: 'gallery-bacteria-44ad81',
    ratio: '4x3',
    width: 900,
    span: 'md:col-span-2',
  },
  {
    id: 'tardigrade',
    title: 'Tardigrade — The Water Bear',
    desc: 'A nearly indestructible micro-animal that thrives in extreme worlds.',
    titleId: 'gallery-tardigrade-title',
    descId: 'gallery-tardigrade-desc',
    imgId: 'gallery-tardigrade-22f0c5',
    ratio: '3x4',
    width: 700,
    span: 'md:row-span-2',
  },
  {
    id: 'crystal',
    title: 'Crystal Symmetries',
    desc: 'Mineral lattices unfolding into geometric infinities.',
    titleId: 'gallery-crystal-title',
    descId: 'gallery-crystal-desc',
    imgId: 'gallery-crystal-58af6e',
    ratio: '1x1',
    width: 600,
    span: '',
  },
  {
    id: 'neuron',
    title: 'Neural Networks',
    desc: 'A single neuron — one node in a galaxy of thoughts.',
    titleId: 'gallery-neuron-title',
    descId: 'gallery-neuron-desc',
    imgId: 'gallery-neuron-12c4f0',
    ratio: '1x1',
    width: 600,
    span: '',
  },
  {
    id: 'fungi',
    title: 'Mycelium Threads',
    desc: 'Underground fungal webs, the original biological internet.',
    titleId: 'gallery-fungi-title',
    descId: 'gallery-fungi-desc',
    imgId: 'gallery-fungi-91b3e4',
    ratio: '4x3',
    width: 900,
    span: 'md:col-span-2',
  },
]

const realms = [
  {
    id: 'realm-bacteria',
    icon: Atom,
    name: 'Bacteria',
    titleId: 'realm-bacteria-title',
    descId: 'realm-bacteria-desc',
    imgId: 'realm-bacteria-img-1',
    desc: 'The most ancient and abundant life form on Earth — invisible architects of every ecosystem.',
  },
  {
    id: 'realm-protists',
    icon: Droplets,
    name: 'Protists',
    titleId: 'realm-protists-title',
    descId: 'realm-protists-desc',
    imgId: 'realm-protists-img-1',
    desc: 'Single-celled wanderers of pond and ocean, each a tiny self-contained universe.',
  },
  {
    id: 'realm-fungi',
    icon: Leaf,
    name: 'Fungi',
    titleId: 'realm-fungi-title',
    descId: 'realm-fungi-desc',
    imgId: 'realm-fungi-img-1',
    desc: 'Branching, breathing networks that decompose, connect, and quietly run the planet.',
  },
  {
    id: 'realm-microfauna',
    icon: Bug,
    name: 'Microfauna',
    titleId: 'realm-microfauna-title',
    descId: 'realm-microfauna-desc',
    imgId: 'realm-microfauna-img-1',
    desc: 'Tardigrades, rotifers, mites — animals smaller than a grain of sand, with full lives of their own.',
  },
]

const stats = [
  { value: '10³⁰', label: 'Microbes on Earth' },
  { value: '99%', label: 'Species still undiscovered' },
  { value: '0.001 mm', label: 'Average tardigrade size' },
  { value: '3.7 B', label: 'Years of microbial evolution' },
]

const stories = [
  {
    id: 'story-tardigrade',
    eyebrow: 'Field Notes',
    title: 'Surviving the Vacuum of Space',
    desc: 'How tardigrades shut down their metabolism, dehydrate to nothing, and ride out radiation that would kill almost anything else.',
    titleId: 'story-tardigrade-title',
    descId: 'story-tardigrade-desc',
    imgId: 'story-tardigrade-img',
  },
  {
    id: 'story-pond',
    eyebrow: 'Pond Diaries',
    title: 'A Drop of Water, A Living City',
    desc: 'One milliliter of pond water can contain thousands of organisms hunting, hiding, and reproducing in a single afternoon.',
    titleId: 'story-pond-title',
    descId: 'story-pond-desc',
    imgId: 'story-pond-img',
  },
  {
    id: 'story-skin',
    eyebrow: 'Inner Worlds',
    title: 'The Microbiome Beneath Your Skin',
    desc: 'You are walking ecosystem of bacteria, fungi and viruses — a coral reef of microbes you call yourself.',
    titleId: 'story-skin-title',
    descId: 'story-skin-desc',
    imgId: 'story-skin-img',
  },
]

const photoStrip = [
  { id: 'strip-1', title: 'Algal bloom under microscope', titleId: 'strip-1-title', imgId: 'strip-1-img' },
  { id: 'strip-2', title: 'Snowflake crystal close up', titleId: 'strip-2-title', imgId: 'strip-2-img' },
  { id: 'strip-3', title: 'Insect compound eye macro', titleId: 'strip-3-title', imgId: 'strip-3-img' },
  { id: 'strip-4', title: 'Red blood cells', titleId: 'strip-4-title', imgId: 'strip-4-img' },
  { id: 'strip-5', title: 'Butterfly wing scales', titleId: 'strip-5-title', imgId: 'strip-5-img' },
  { id: 'strip-6', title: 'Plant cell chloroplasts', titleId: 'strip-6-title', imgId: 'strip-6-img' },
]

const PLACEHOLDER_SRC =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 text-slate-100">
          <span className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-400 via-cyan-400 to-sky-500 flex items-center justify-center">
            <Microscope className="w-5 h-5 text-slate-950" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight">MicroCosmos</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
          <a href="#gallery" className="hover:text-emerald-400 transition-colors">Gallery</a>
          <a href="#realms" className="hover:text-emerald-400 transition-colors">Realms</a>
          <a href="#stories" className="hover:text-emerald-400 transition-colors">Stories</a>
          <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
        </nav>
        <a
          href="#newsletter"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-emerald-400 text-slate-950 px-5 py-2 text-sm font-semibold hover:bg-emerald-300 transition-colors"
        >
          Subscribe
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden min-h-screen flex items-center">
      <div
        data-strk-bg-id="hero-bg-microcosmos-9f1a3c"
        data-strk-bg="[hero-subtitle] [hero-title] microscopic dark cosmos cell"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        className="absolute inset-0 -z-10 bg-cover bg-center"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950/85 via-slate-950/70 to-slate-950" />
      <div className="absolute inset-0 -z-10 bg-cosmos opacity-90" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-32 md:py-40 w-full">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-emerald-400 mb-6">
            <Sparkles className="w-4 h-4" />
            <span>The Unseen Universe</span>
          </p>
          <h1
            id="hero-title"
            className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold text-slate-50 tracking-tight leading-[1.05]"
          >
            Worlds Inside a{' '}
            <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-sky-400 bg-clip-text text-transparent">
              Drop of Water
            </span>
          </h1>
          <p
            id="hero-subtitle"
            className="mt-8 text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl"
          >
            MicroCosmos is a visual journey into the living universe beneath the lens —
            bacteria, protists, fungi, crystals and creatures too small to see, photographed
            in breathtaking detail.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#gallery"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-400 text-slate-950 px-7 py-3.5 font-semibold hover:bg-emerald-300 transition-colors"
            >
              Explore the gallery
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#stories"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 text-slate-100 px-7 py-3.5 font-semibold hover:border-emerald-400 hover:text-emerald-400 transition-colors"
            >
              <Play className="w-4 h-4" />
              Watch the journey
            </a>
          </div>
        </div>

        {/* Floating photo cards */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {photoStrip.slice(0, 4).map((p) => (
            <figure
              key={p.id}
              className="group relative overflow-hidden rounded-2xl border border-slate-800 aspect-[3/4] bg-slate-900"
            >
              <img
                alt={p.title}
                data-strk-img-id={p.imgId}
                data-strk-img={`[${p.titleId}] microscopic detail`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="500"
                src={PLACEHOLDER_SRC}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
              <figcaption
                id={p.titleId}
                className="absolute bottom-3 left-3 right-3 text-xs font-medium text-slate-100"
              >
                {p.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-400 flex flex-col items-center gap-1 text-xs uppercase tracking-[0.3em]">
        Scroll
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  )
}

function Stats() {
  return (
    <section className="border-y border-slate-800 bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center md:text-left">
            <div className="font-display text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
              {s.value}
            </div>
            <div className="mt-2 text-xs uppercase tracking-[0.25em] text-slate-400">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Intro() {
  return (
    <section id="about" className="bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 md:py-32 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-400 mb-4">About the Project</p>
          <h2
            id="intro-title"
            className="font-display text-4xl md:text-5xl font-extrabold text-slate-50 tracking-tight leading-tight"
          >
            A microscope pointed at the cosmos in your backyard.
          </h2>
          <p
            id="intro-desc"
            className="mt-6 text-slate-300 text-lg leading-relaxed"
          >
            Every puddle, leaf and grain of soil contains civilizations. MicroCosmos collects the
            most stunning microscopy from biologists, artists, and citizen scientists, and tells
            the stories behind each frame — so the unseen world finally gets the audience it
            deserves.
          </p>
          <div className="mt-8 flex items-center gap-3 text-sm text-slate-400">
            <FlaskConical className="w-5 h-5 text-emerald-400" />
            <span>Curated weekly by working microbiologists.</span>
          </div>
        </div>

        <div className="lg:col-span-7 grid grid-cols-2 gap-4 md:gap-6">
          <div className="relative overflow-hidden rounded-2xl border border-slate-800 aspect-[3/4]">
            <img
              alt="Microscope close-up"
              data-strk-img-id="intro-img-microscope-2a4c"
              data-strk-img="[intro-title] vintage microscope studio"
              data-strk-img-ratio="3x4"
              data-strk-img-width="700"
              src={PLACEHOLDER_SRC}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="grid gap-4 md:gap-6 content-start">
            <div className="relative overflow-hidden rounded-2xl border border-slate-800 aspect-[4/3]">
              <img
                alt="Cells under fluorescent stain"
                data-strk-img-id="intro-img-cells-7d12"
                data-strk-img="[intro-desc] fluorescent cell stain blue green"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src={PLACEHOLDER_SRC}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-slate-800 aspect-[4/3]">
              <img
                alt="Petri dish bacterial colonies"
                data-strk-img-id="intro-img-petri-58a3"
                data-strk-img="[intro-desc] petri dish colorful bacterial colonies"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src={PLACEHOLDER_SRC}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Gallery() {
  return (
    <section id="gallery" className="bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-400 mb-4">Gallery</p>
            <h2
              id="gallery-title"
              className="font-display text-4xl md:text-5xl font-extrabold text-slate-50 tracking-tight"
            >
              Eight portraits from the microscopic world.
            </h2>
          </div>
          <p
            id="gallery-subtitle"
            className="text-slate-400 max-w-md"
          >
            Captured with light, electron and confocal microscopy by an international community of
            researchers and visual storytellers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[220px] md:auto-rows-[240px] gap-4 md:gap-6">
          {galleryItems.map((item) => (
            <figure
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 ${item.span}`}
            >
              <img
                alt={item.title}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}] [gallery-title] microscope`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
                src={PLACEHOLDER_SRC}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-90" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5">
                <h3
                  id={item.titleId}
                  className="font-display text-lg md:text-xl font-bold text-slate-50"
                >
                  {item.title}
                </h3>
                <p
                  id={item.descId}
                  className="mt-1 text-sm text-slate-300 leading-snug line-clamp-2"
                >
                  {item.desc}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function Realms() {
  return (
    <section id="realms" className="bg-slate-900/40 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 md:py-32">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-400 mb-4">Four Realms</p>
          <h2
            id="realms-title"
            className="font-display text-4xl md:text-5xl font-extrabold text-slate-50 tracking-tight"
          >
            Inhabitants of the unseen kingdom.
          </h2>
          <p
            id="realms-subtitle"
            className="mt-5 text-slate-300 text-lg"
          >
            Microscopic life is not one thing — it is countless lineages, each with its own
            biology, beauty and behavior.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {realms.map((r) => {
            const Icon = r.icon
            return (
              <article
                key={r.id}
                className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    alt={r.name}
                    data-strk-img-id={r.imgId}
                    data-strk-img={`[${r.descId}] [${r.titleId}] microscope`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src={PLACEHOLDER_SRC}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent" />
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-emerald-400/15 border border-emerald-400/40 flex items-center justify-center backdrop-blur">
                    <Icon className="w-5 h-5 text-emerald-300" />
                  </div>
                </div>
                <div className="p-6">
                  <h3
                    id={r.titleId}
                    className="font-display text-2xl font-bold text-slate-50"
                  >
                    {r.name}
                  </h3>
                  <p
                    id={r.descId}
                    className="mt-2 text-sm text-slate-400 leading-relaxed"
                  >
                    {r.desc}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Stories() {
  return (
    <section id="stories" className="bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-400 mb-4">Stories</p>
            <h2
              id="stories-title"
              className="font-display text-4xl md:text-5xl font-extrabold text-slate-50 tracking-tight"
            >
              Tiny lives, enormous tales.
            </h2>
          </div>
          <a
            href="#newsletter"
            className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 text-sm font-semibold"
          >
            All articles
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {stories.map((s) => (
            <article
              key={s.id}
              className="group flex flex-col rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 hover:border-emerald-400/40 transition-colors"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  alt={s.title}
                  data-strk-img-id={s.imgId}
                  data-strk-img={`[${s.descId}] [${s.titleId}] microscopic photography`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="900"
                  src={PLACEHOLDER_SRC}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-xs uppercase tracking-[0.25em] text-emerald-400">
                  {s.eyebrow}
                </p>
                <h3
                  id={s.titleId}
                  className="mt-3 font-display text-xl md:text-2xl font-bold text-slate-50 leading-snug"
                >
                  {s.title}
                </h3>
                <p
                  id={s.descId}
                  className="mt-3 text-sm text-slate-300 leading-relaxed flex-1"
                >
                  {s.desc}
                </p>
                <a
                  href="#newsletter"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300"
                >
                  Read story
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function PhotoStrip() {
  return (
    <section className="bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <p className="text-xs uppercase tracking-[0.3em] text-emerald-400 mb-6 text-center">
          From the Archive
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {photoStrip.map((p) => (
            <figure
              key={p.id}
              className="group relative overflow-hidden rounded-xl border border-slate-800 aspect-square bg-slate-900"
              title={p.title}
            >
              <img
                alt={p.title}
                data-strk-img-id={`${p.imgId}-strip`}
                data-strk-img={`[${p.titleId}-strip] microscope`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="400"
                src={PLACEHOLDER_SRC}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <span id={`${p.titleId}-strip`} className="sr-only">{p.title}</span>
              <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/30 transition-colors" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function Quote() {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        data-strk-bg-id="quote-bg-microcosmos-bf12a7"
        data-strk-bg="microscopic abstract texture cosmic dark"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        className="absolute inset-0 -z-10 bg-cover bg-center"
      />
      <div className="absolute inset-0 -z-10 bg-slate-950/80" />
      <div className="max-w-4xl mx-auto px-6 lg:px-10 py-28 md:py-36 text-center">
        <Telescope className="w-10 h-10 mx-auto text-emerald-400 mb-8" />
        <blockquote className="font-display text-2xl md:text-4xl font-semibold text-slate-50 leading-snug">
          “The smaller the subject, the larger the universe it reveals. A single drop of pond
          water contains more drama than most novels.”
        </blockquote>
        <p className="mt-6 text-sm uppercase tracking-[0.3em] text-emerald-400">
          — Field journal, Spring 2026
        </p>
      </div>
    </section>
  )
}

function Newsletter() {
  return (
    <section id="newsletter" className="bg-slate-900/40 border-y border-slate-800">
      <div className="max-w-5xl mx-auto px-6 lg:px-10 py-24 md:py-28 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-emerald-400 mb-4">Stay close</p>
        <h2 className="font-display text-3xl md:text-5xl font-extrabold text-slate-50 tracking-tight">
          A new microscopic world in your inbox each Sunday.
        </h2>
        <p className="mt-5 text-slate-300 max-w-2xl mx-auto">
          Photo essays, behind-the-scenes from researchers, and brief field notes — no spam,
          just wonder.
        </p>

        <form
          className="mt-10 max-w-xl mx-auto flex flex-col sm:flex-row gap-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            placeholder="you@example.com"
            className="flex-1 rounded-full bg-slate-950 border border-slate-700 text-slate-100 placeholder:text-slate-500 px-5 py-3.5 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-400 text-slate-950 px-7 py-3.5 font-semibold hover:bg-emerald-300 transition-colors"
          >
            Subscribe
            <Mail className="w-4 h-4" />
          </button>
        </form>
        <p className="mt-4 text-xs text-slate-500">Unsubscribe anytime. We respect your inbox.</p>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <a href="#top" className="flex items-center gap-2 text-slate-100">
            <span className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-400 via-cyan-400 to-sky-500 flex items-center justify-center">
              <Microscope className="w-5 h-5 text-slate-950" />
            </span>
            <span className="font-display text-lg font-bold tracking-tight">MicroCosmos</span>
          </a>
          <p className="mt-4 text-sm text-slate-400 max-w-sm leading-relaxed">
            An independent visual journal of microscopic life — stories, science, and stunning
            imagery from the unseen world.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-100 mb-3">Explore</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><a href="#gallery" className="hover:text-emerald-400">Gallery</a></li>
            <li><a href="#realms" className="hover:text-emerald-400">Realms</a></li>
            <li><a href="#stories" className="hover:text-emerald-400">Stories</a></li>
            <li><a href="#about" className="hover:text-emerald-400">About</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-100 mb-3">Follow</h4>
          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:border-emerald-400 transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:border-emerald-400 transition-colors"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:border-emerald-400 transition-colors"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© 2026 MicroCosmos Journal. All rights reserved.</p>
          <p>Crafted with light, lenses, and curiosity.</p>
        </div>
      </div>
    </footer>
  )
}

function App() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-950 text-slate-100 antialiased">
      <Nav />
      <Hero />
      <Stats />
      <Intro />
      <Gallery />
      <Realms />
      <Stories />
      <PhotoStrip />
      <Quote />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App
