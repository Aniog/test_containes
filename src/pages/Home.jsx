import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Eye, FlaskConical, BookOpen } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const Home = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Micrograph */}
        <div
          className="absolute inset-0 grayscale"
          data-strk-bg-id="hero-bg-radiolarian-7f3a2b"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-parchment/40" />

        {/* Glassmorphism Title Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-10 bg-white/30 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-10 md:p-16 text-center max-w-2xl mx-4"
        >
          <p className="text-xs font-mono text-slate uppercase tracking-[0.3em] mb-4">
            Educational Microscopy Platform
          </p>
          <h1
            id="hero-title"
            className="font-serif text-5xl md:text-6xl font-bold text-ink mb-4 leading-tight"
          >
            MicroCosmos
          </h1>
          <p
            id="hero-subtitle"
            className="font-serif text-xl md:text-2xl text-charcoal italic mb-8"
          >
            The Microscopic World
          </p>
          <p className="text-charcoal text-base mb-10 max-w-md mx-auto leading-relaxed">
            Explore the invisible architecture of life through high-resolution
            digital microscopy. From diatoms to human cytology.
          </p>
          <Link
            to="/specimens"
            className="inline-flex items-center gap-2 bg-ink text-parchment px-8 py-3 rounded-full font-medium text-sm hover:bg-charcoal transition-colors duration-300"
          >
            Start Observation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 lg:px-16 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-4">
            A Laboratory Without Walls
          </h2>
          <p className="text-charcoal max-w-xl mx-auto">
            Three pillars of microscopic exploration, designed for the curious mind.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Eye,
              title: 'Specimen Hub',
              description:
                'Technical breakdowns of plant histology, protists, and human cytology with annotated micrographs.',
              link: '/specimens',
            },
            {
              icon: FlaskConical,
              title: 'Slide Gallery',
              description:
                'A curated collection of digital slides at various magnifications, from 40x to 1000x oil immersion.',
              link: '/gallery',
            },
            {
              icon: BookOpen,
              title: 'Lab Notes',
              description:
                'Submit observations, request specimens, or provide feedback on the collection.',
              link: '/contact',
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Link
                to={feature.link}
                className="block bg-white/30 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:bg-white/40 transition-all duration-300 h-full"
              >
                <feature.icon className="w-8 h-8 text-ink mb-4" />
                <h3 className="font-serif text-xl font-semibold text-ink mb-3">
                  {feature.title}
                </h3>
                <p className="text-charcoal text-sm leading-relaxed">
                  {feature.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 px-6 border-t border-silver/30">
        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="font-serif text-2xl md:text-3xl text-ink italic leading-relaxed mb-6">
            "In every drop of water, there is a story of life."
          </p>
          <cite className="text-slate text-sm font-sans not-italic">
            — Antonie van Leeuwenhoek, Father of Microbiology
          </cite>
        </motion.blockquote>
      </section>
    </div>
  )
}

export default Home
