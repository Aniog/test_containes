import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-velmora-ivory">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="aspect-[4/5] bg-velmora-hairline/30 overflow-hidden"
          >
            <img
              data-strk-img-id="brand-story-image"
              data-strk-img="[brand-story-title] [brand-story-text] gold jewelry maker hands editorial warm"
              data-strk-img-ratio="4x5"
              data-strk-img-width={800}
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:py-10"
          >
            <p className="text-xs uppercase tracking-widest-xl text-velmora-gold font-medium mb-4">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-velmora-deep leading-[1.15]"
            >
              Designed for the Modern Romantic
            </h2>
            <p
              id="brand-story-text"
              className="mt-6 text-velmora-taupe leading-relaxed text-base md:text-lg"
            >
              Velmora was born from a simple belief: fine jewelry should feel
              personal, attainable, and made to last. Each piece is sculpted in
              18k gold-plated brass and finished by hand, balancing classic
              silhouettes with a contemporary spirit.
            </p>
            <p className="mt-4 text-velmora-taupe leading-relaxed text-base md:text-lg">
              Whether you are marking a milestone or simply elevating your
              everyday, our demi-fine collection is crafted to be treasured.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-sm uppercase tracking-widest-xl font-medium text-velmora-deep hover:text-velmora-gold transition-colors group"
            >
              Read Our Story
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
