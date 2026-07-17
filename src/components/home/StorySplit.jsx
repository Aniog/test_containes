import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import StrkImage from '@/components/ui/StrkImage'
import { Reveal } from '@/hooks/useReveal'

export default function StorySplit() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden bg-stone-warm">
            <StrkImage
              imgId="story-atelier-d47c29"
              query="jewelry atelier bench hands crafting gold jewelry warm workshop light artisan [brand-name]"
              ratio="4x5"
              width={900}
              alt="The Velmora atelier"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden bg-gold px-8 py-6 md:block">
            <p className="font-serif text-4xl font-medium text-cream">18K</p>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-cream/85">
              Gold Plated
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold-deep">Our Story</p>
          <h2 className="mt-4 font-serif text-3xl font-medium leading-tight tracking-wide text-ink md:text-5xl">
            Quiet luxury, made to be lived in
          </h2>
          <div className="mt-6 space-y-5 text-sm leading-relaxed text-taupe-dark md:text-base">
            <p>
              Velmora began at a single atelier bench with a simple belief: beautiful jewelry
              shouldn&apos;t wait for special occasions. Each piece is designed in-house and finished
              in thick 18K gold over recycled sterling silver — demi-fine, in the truest sense.
            </p>
            <p>
              We make small batches, skip the middlemen, and price honestly. The result is jewelry
              that feels like an heirloom and lives like an everyday essential.
            </p>
          </div>
          <Link
            to="/about"
            className="group mt-9 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold-deep transition-colors hover:text-ink"
          >
            Read Our Story
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
