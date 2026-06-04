import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const splitPanels = [
  {
    id: 'hands-soil',
    leftTitle: 'Hands in Earth',
    rightTitle: 'Root Systems',
    leftId: 'home-split-left-1',
    rightId: 'home-split-right-1',
    quote: '"We are not separate from the soil — we are an expression of it."',
  },
  {
    id: 'eyes-forest',
    leftTitle: 'Eyes',
    rightTitle: 'Canopy Light',
    leftId: 'home-split-left-2',
    rightId: 'home-split-right-2',
    quote: '"Look into the forest, and the forest looks back into you."',
  },
  {
    id: 'veins-leaves',
    leftTitle: 'Veins',
    rightTitle: 'Leaf Veins',
    leftId: 'home-split-left-3',
    rightId: 'home-split-right-3',
    quote: '"The same patterns that sustain us also sustain the trees."',
  },
]

export default function Home() {
  const containerRef = useRef(null)
  const [activePanel, setActivePanel] = useState(0)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setActivePanel((prev) => (prev + 1) % splitPanels.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const panel = splitPanels[activePanel]

  return (
    <div ref={containerRef}>
      {/* Hero Split Screen */}
      <section className="relative h-[calc(100vh-4rem)] min-h-[600px] overflow-hidden">
        {/* Left Panel - Human Element */}
        <motion.div
          key={`left-${panel.id}`}
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '-100%', opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
          className="absolute top-0 left-0 w-1/2 h-full"
        >
          <div className="relative w-full h-full">
            <img
              alt={panel.leftTitle}
              data-strk-img-id={`home-left-${panel.id}-a1b2c3`}
              data-strk-img={`[${panel.leftId}] human hand portrait closeup`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-skin-light/30 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-12">
              <span className="text-xs tracking-[0.3em] uppercase text-skin-light/80 mb-3">
                Human Form
              </span>
              <h2
                id={panel.leftId}
                className="text-3xl md:text-5xl font-light text-white tracking-wide"
              >
                {panel.leftTitle}
              </h2>
            </div>
          </div>
        </motion.div>

        {/* Right Panel - Nature Element */}
        <motion.div
          key={`right-${panel.id}`}
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '100%', opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
          className="absolute top-0 right-0 w-1/2 h-full"
        >
          <div className="relative w-full h-full">
            <img
              alt={panel.rightTitle}
              data-strk-img-id={`home-right-${panel.id}-d4e5f6`}
              data-strk-img={`[${panel.rightId}] nature pattern organic`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-forest-deep/30 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-12">
              <span className="text-xs tracking-[0.3em] uppercase text-forest-light/80 mb-3">
                Natural Form
              </span>
              <h2
                id={panel.rightId}
                className="text-3xl md:text-5xl font-light text-white tracking-wide"
              >
                {panel.rightTitle}
              </h2>
            </div>
          </div>
        </motion.div>

        {/* Center Divider */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/20 z-10" />

        {/* Quote Overlay */}
        <motion.div
          key={`quote-${panel.id}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 text-center max-w-xl px-6"
        >
          <p className="font-handwriting text-2xl md:text-3xl text-white/90 drop-shadow-lg leading-relaxed">
            {panel.quote}
          </p>
        </motion.div>

        {/* Panel Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {splitPanels.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActivePanel(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                idx === activePanel
                  ? 'bg-white w-8'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Panel ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="font-handwriting text-2xl md:text-4xl text-forest-deep mb-10 leading-relaxed"
          >
            &ldquo;To see ourselves in nature — and nature in ourselves —
            is the first act of healing the planet.&rdquo;
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-forest-deep/70 leading-relaxed max-w-2xl mx-auto"
          >
            Intertwined is a long-form environmental photography project exploring the
            visual and spiritual connections between human life and the natural world.
            Through juxtaposition, macro detail, and global storytelling, we reveal
            the patterns that bind us to the earth.
          </motion.p>
        </div>
      </section>

      {/* Feature Links */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-1">
          {/* Global Stories */}
          <Link to="/global-stories" className="group relative h-[500px] overflow-hidden">
            <img
              alt="Global Stories"
              data-strk-img-id="home-global-stories-g7h8i9"
              data-strk-img={`[home-feature-global-title] indigenous tribe environmental portrait`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-forest-dark/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-10">
              <span className="text-xs tracking-[0.3em] uppercase text-skin-warm/80 mb-3 block">
                Editorial
              </span>
              <h2
                id="home-feature-global-title"
                className="text-4xl md:text-5xl font-light text-white tracking-wide mb-3"
              >
                Global Stories
              </h2>
              <p className="text-white/70 max-w-md text-sm leading-relaxed">
                Indigenous cultures and their deep-rooted connection to the land —
                a journey across continents.
              </p>
            </div>
          </Link>

          {/* The Lab */}
          <Link to="/the-lab" className="group relative h-[500px] overflow-hidden">
            <img
              alt="The Lab"
              data-strk-img-id="home-the-lab-j0k1l2"
              data-strk-img={`[home-feature-lab-title] macro plant pattern dna fractal`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sky-deep/80 via-sky-deep/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-10">
              <span className="text-xs tracking-[0.3em] uppercase text-skin-light/80 mb-3 block">
                Science
              </span>
              <h2
                id="home-feature-lab-title"
                className="text-4xl md:text-5xl font-light text-white tracking-wide mb-3"
              >
                The Lab
              </h2>
              <p className="text-white/70 max-w-md text-sm leading-relaxed">
                Macro photography revealing the hidden DNA-like patterns in the
                botanical world.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}