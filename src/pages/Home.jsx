import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Microscope, BookOpen, Compass } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* HERO --------------------------------------------------------- */}
      <section className="relative min-h-[92vh] -mt-24 pt-24 flex items-end overflow-hidden">
        {/* Full-bleed micrograph */}
        <div className="absolute inset-0">
          <img
            id="hero-bg-img"
            alt="Radiolarian micrograph"
            data-strk-img-id="home-hero-radiolaria"
            data-strk-img="[hero-title] [hero-subtitle] radiolarian black and white microscopy"
            data-strk-img-ratio="16x9"
            data-strk-img-width="2000"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="w-full h-full object-cover grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-parchment via-parchment/40 to-parchment/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-parchment/70 via-transparent to-parchment/30" />
        </div>

        {/* Corner annotations */}
        <div className="absolute top-32 right-6 sm:right-10 z-10 hidden md:block text-right">
          <p className="small-caps text-graphite">Plate I · MMXXVI</p>
          <p className="font-mono text-xs text-graphite mt-1">47°34′N · 122°19′W</p>
        </div>
        <div className="absolute top-32 left-6 sm:left-10 z-10 hidden md:block">
          <p className="small-caps text-graphite">Specimen R-001</p>
          <p className="font-mono text-xs text-graphite mt-1">Radiolaria sp. / 600×</p>
        </div>

        {/* Centered glass title card */}
        <div className="relative z-10 w-full px-6 pb-20 md:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-3xl rounded-[2rem] border border-white/40 bg-white/35 backdrop-blur-md
                       shadow-[0_24px_70px_rgba(26,26,26,0.18)] px-8 sm:px-12 py-12 sm:py-14 text-center"
          >
            <p id="hero-subtitle" className="small-caps text-graphite">
              The Microscopic World · Volumes I — III
            </p>
            <h1 id="hero-title" className="mt-6 font-serif text-5xl sm:text-7xl md:text-[5.5rem] leading-[1.02] text-ink">
              Micro<span className="italic font-light">Cosmos</span>
            </h1>
            <p className="mt-5 text-charcoal/90 max-w-xl mx-auto leading-relaxed">
              An illustrated catalogue of the microscopic world — prepared for students
              of cytology, histology, and the planktonic sciences. Each plate, observed
              and rendered in the timeless grammar of black and white.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3 items-center justify-center">
              <Link
                to="/specimens"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full
                           bg-ink text-parchment border border-ink/30 hover:bg-charcoal transition"
              >
                <Microscope className="w-4 h-4" strokeWidth={1.6} />
                <span className="text-sm tracking-wide">Start Observation</span>
                <ArrowRight className="w-4 h-4 transition group-hover:translate-x-1" strokeWidth={1.6} />
              </Link>
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full
                           bg-white/45 backdrop-blur-md border border-white/40 text-ink hover:bg-white/65 transition"
              >
                <span className="text-sm tracking-wide">Enter Slide Archive</span>
              </Link>
            </div>

            <div className="mt-10 pt-6 border-t border-ink/15 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-graphite font-mono text-xs">
              <span>EST. 1962</span>
              <span className="hidden sm:inline">·</span>
              <span>147 PLATES CATALOGUED</span>
              <span className="hidden sm:inline">·</span>
              <span>BRIGHTFIELD · H&amp;E</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INVOCATION / EDITORIAL --------------------------------------- */}
      <section className="max-w-5xl mx-auto px-6 py-28 md:py-36">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-4">
            <p className="small-caps text-graphite">Foreword</p>
            <div className="mt-3 w-12 border-t border-ink/40" />
          </div>
          <div className="md:col-span-8">
            <p className="font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.15] text-ink">
              <span className="italic">“There is</span> a world inside the world,
              held together by membranes thinner than a thought, ordered by laws
              older than the sea itself.”
            </p>
            <p className="mt-8 text-charcoal text-lg leading-relaxed max-w-2xl">
              MicroCosmos was first prepared as a teaching folio for the
              undergraduate microscopy programme. These pages collect three
              volumes of plates, each accompanied by collector's notes,
              magnifications, and a short technical apparatus.
            </p>
            <p className="mt-6 small-caps text-graphite">— The Editor</p>
          </div>
        </div>
      </section>

      {/* THREE VOLUMES PREVIEW ---------------------------------------- */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex items-end justify-between gap-6 mb-12">
          <div>
            <p className="small-caps text-graphite">Three Volumes</p>
            <h2 className="font-serif text-4xl sm:text-5xl text-ink mt-3">
              The Catalogue
            </h2>
          </div>
          <Link to="/specimens" className="hidden sm:inline-flex items-center gap-2 small-caps text-ink border-b border-ink/40 hover:border-ink pb-1">
            View Specimens <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { id: 'plant',   no: 'I',   title: 'Plant Histology',  caption: 'Vascular tissues, stomatal arrays, the architecture of leaves.', icon: BookOpen },
            { id: 'protist', no: 'II',  title: 'Protists & Diatoms', caption: 'Silica frustules, calcareous tests, the cathedrals of plankton.', icon: Compass },
            { id: 'human',   no: 'III', title: 'Human Cytology',  caption: 'Erythrocytes, neurons, hepatocytes — the body in section.', icon: Microscope },
          ].map((v) => (
            <motion.div
              key={v.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.4 }}
              className="relative bg-parchment-dim ring-1 ring-bone p-6 rounded-sm flex flex-col"
            >
              <div className="aspect-[3/2] overflow-hidden bg-ink mb-6 ring-1 ring-ink/30">
                <img
                  alt={v.title}
                  data-strk-img-id={`vol-${v.id}`}
                  data-strk-img={`[vol-title-${v.id}] [vol-caption-${v.id}] black and white microscopy`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover grayscale contrast-110"
                />
              </div>
              <p className="font-mono text-xs text-graphite">VOL. {v.no}</p>
              <h3 id={`vol-title-${v.id}`} className="font-serif text-2xl text-ink mt-2">{v.title}</h3>
              <p id={`vol-caption-${v.id}`} className="text-charcoal text-sm mt-3 leading-relaxed flex-1">
                {v.caption}
              </p>
              <Link to="/specimens" className="mt-5 small-caps text-ink inline-flex items-center gap-2 group">
                Read Volume
                <ArrowRight className="w-3.5 h-3.5 transition group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MICROMETER STRIP --------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-6 mt-28">
        <div className="rounded-3xl border border-white/40 bg-white/40 backdrop-blur-md p-10 md:p-14 grid md:grid-cols-2 gap-10 items-center shadow-[0_18px_60px_rgba(26,26,26,0.10)]">
          <div>
            <p className="small-caps text-graphite">A Note on Method</p>
            <h3 className="font-serif text-3xl md:text-4xl text-ink mt-4 leading-tight">
              Each plate, the result of patience and precise observation.
            </h3>
            <p className="mt-5 text-charcoal leading-relaxed">
              Specimens are prepared by hand: fixed in formalin, embedded in paraffin,
              cut at twelve micrometres on a rotary microtome, and stained in
              haematoxylin and eosin or safranin and fast green.
            </p>
            <Link to="/contact" className="mt-7 inline-flex items-center gap-2 small-caps text-ink border-b border-ink/40 hover:border-ink pb-1">
              Submit a Lab Note <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Decorative micrometer scale */}
          <div className="relative">
            <div className="rounded-2xl bg-parchment-dim ring-1 ring-bone p-6">
              <p className="small-caps text-graphite mb-4">Micrometer · 0.01 mm reticle</p>
              <svg viewBox="0 0 400 80" className="w-full h-20" aria-hidden="true">
                <line x1="10" y1="40" x2="390" y2="40" stroke="#1A1A1A" strokeWidth="1" />
                {Array.from({ length: 39 }).map((_, i) => {
                  const x = 10 + i * 10
                  const big = i % 5 === 0
                  return (
                    <line key={i} x1={x} y1={big ? 22 : 30} x2={x} y2={big ? 58 : 50} stroke="#1A1A1A" strokeWidth="1" />
                  )
                })}
                {[0, 5, 10, 15, 20, 25, 30, 35].map((n) => (
                  <text key={n} x={10 + n * 10} y={16} textAnchor="middle" className="font-mono" fontSize="10" fill="#5C5C5C">
                    {n * 10}
                  </text>
                ))}
              </svg>
              <p className="mt-3 font-mono text-xs text-graphite text-right">µm</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
