import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const features = [
  {
    id: 'feat-nebulae',
    label: '星雲',
    title: 'Nebulae',
    desc: 'Vast clouds of gas and dust — stellar nurseries where new suns are born from gravitational collapse.',
    imgId: 'feat-img-nebulae-d4e5f6',
    imgQuery: '[feat-nebulae-desc] [feat-nebulae-title]',
  },
  {
    id: 'feat-galaxies',
    label: '銀河',
    title: 'Galaxies',
    desc: 'Billions of stars bound by gravity, spiraling through the cosmic web across hundreds of thousands of light-years.',
    imgId: 'feat-img-galaxies-g7h8i9',
    imgQuery: '[feat-galaxies-desc] [feat-galaxies-title]',
  },
  {
    id: 'feat-pulsars',
    label: 'パルサー',
    title: 'Pulsars',
    desc: 'Rapidly rotating neutron stars emitting beams of electromagnetic radiation with clockwork precision.',
    imgId: 'feat-img-pulsars-j1k2l3',
    imgQuery: '[feat-pulsars-desc] [feat-pulsars-title]',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function FeaturedSection() {
  const containerRef = useRef(null)
  const imgRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '-80px' })

  useEffect(() => {
    const timer = setTimeout(() => {
      if (imgRef.current) {
        ImageHelper.loadImages(strkImgConfig, imgRef.current)
      }
    }, 400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="bg-cosmic-black py-28 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-nebula-light block mb-3">
              特集 · Featured
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-star-white tracking-wide">
              Objects of Wonder
            </h2>
          </div>
          <Link
            to="/gallery"
            className="group inline-flex items-center gap-3 font-sans text-xs uppercase tracking-[0.3em] text-star-dim hover:text-star-white transition-colors duration-300"
          >
            <span>All Galleries</span>
            <span className="w-8 h-px bg-current transition-all duration-300 group-hover:w-14" />
          </Link>
        </motion.div>

        {/* Feature cards */}
        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.04]"
        >
          {features.map((feat) => (
            <motion.div
              key={feat.id}
              variants={itemVariants}
              className="bg-cosmic-black group cursor-pointer"
            >
              <div ref={imgRef} className="relative overflow-hidden aspect-[4/3]">
                <img
                  alt={feat.title}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  data-strk-img-id={feat.imgId}
                  data-strk-img={feat.imgQuery}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span
                  id={`${feat.id}-label`}
                  className="absolute top-4 left-4 font-serif text-xs text-nebula-light tracking-widest opacity-70"
                >
                  {feat.label}
                </span>
              </div>
              <div className="p-6 border-t border-white/[0.06]">
                <h3
                  id={`${feat.id}-title`}
                  className="font-serif text-xl font-light text-star-white mb-3 tracking-wide"
                >
                  {feat.title}
                </h3>
                <p
                  id={`${feat.id}-desc`}
                  className="font-sans text-sm text-star-dim leading-relaxed font-light"
                >
                  {feat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
