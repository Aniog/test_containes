import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { StockImg } from '@/components/ui/StockImg'

export function BrandStory() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-velmora">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="aspect-[4/5] overflow-hidden bg-stone-100"
          >
            <StockImg
              id="brand-story-img"
              query="gold jewelry atelier hands crafting demi fine warm editorial"
              ratio="4x3"
              width={900}
              alt="Velmora craftsmanship"
              className="h-full w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:pr-12"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-velmora-gold">
              Our Story
            </p>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-velmora-dark md:text-4xl lg:text-5xl">
              Jewelry made to live in — and love for years.
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-velmora-muted md:text-base">
              <p>
                Velmora was born from a simple belief: luxury should feel personal, not precious to the point of being unwearable. We design demi-fine pieces in small batches, using 18k gold plating and hypoallergenic materials.
              </p>
              <p>
                Every curve, clasp, and crystal is chosen to move with you — from morning coffee to midnight toasts.
              </p>
            </div>
            <Link
              to="/"
              className="group mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-velmora-dark transition hover:text-velmora-gold"
            >
              Read Our Story
              <ArrowRight
                size={14}
                strokeWidth={1.5}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
