import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import StockImage from '@/components/ui/StockImage'
import Reveal from '@/components/ui/Reveal'

export default function BrandStory() {
  return (
    <section className="border-y border-velmora-line bg-velmora-surface/40 py-20 md:py-28">
      <div className="velmora-container grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <Reveal>
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden bg-velmora-bg">
              <StockImage
                imgId="story-atelier"
                query="jeweler hands crafting gold jewelry in atelier warm workshop light macro"
                ratio="4x5"
                width={900}
                alt="Velmora atelier"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden border border-velmora-gold/40 bg-velmora-bg px-6 py-5 md:block">
              <p className="font-display text-3xl font-medium text-velmora-gold-light">2.5μ</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.24em] text-velmora-muted">
                Thick 18K plating
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="eyebrow">Our Story</p>
          <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-velmora-ink md:text-5xl">
            Heirloom feeling,
            <br />
            <em className="text-velmora-gold-light">without the heirloom price.</em>
          </h2>
          <div className="mt-7 space-y-5 text-[15px] leading-relaxed text-velmora-muted">
            <p>
              Velmora began at a kitchen table in Lisbon, with a simple
              frustration: jewelry was either precious and untouchable, or
              disposable and dull. We wanted the warmth of real gold in pieces
              made for real life.
            </p>
            <p>
              Every design is cast from recycled brass, plated in a thick layer
              of 18K gold, and finished by hand in our atelier. Nickel-free,
              hypoallergenic, and made to be worn — morning coffee to
              candlelight.
            </p>
          </div>
          <Link
            to="/about"
            className="group mt-9 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-velmora-gold transition-colors hover:text-velmora-gold-light"
          >
            <span className="border-b border-velmora-gold/50 pb-1 transition-colors group-hover:border-velmora-gold-light">
              Read Our Story
            </span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
