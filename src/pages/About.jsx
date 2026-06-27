import { Link } from 'react-router-dom'

const AboutPage = () => {
  return (
    <div className="pt-20 md:pt-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <h1 className="font-serif text-4xl md:text-5xl text-velmora-text tracking-wide text-center">
          Our Story
        </h1>
        <div className="w-12 h-px bg-velmora-gold mx-auto mt-6 mb-12" />

        <div className="space-y-6 text-sm md:text-base text-velmora-muted leading-relaxed">
          <p>
            Velmora was born from a simple belief: luxury shouldn&apos;t be exclusive. We craft demi-fine
            jewelry in 18K gold plate, designed to move with you — from morning coffee to midnight
            celebrations.
          </p>
          <p>
            Every piece is hypoallergenic, ethically made, and created to be treasured for years.
            Because the best jewelry is the kind you never want to take off.
          </p>
          <p>
            Our design studio draws inspiration from the quiet elegance of everyday moments — the way
            light catches a gold hoop at golden hour, the subtle gleam of a pendant against a silk
            blouse. We believe in jewelry that whispers rather than shouts.
          </p>
          <p>
            From our artisans to your jewelry box, each Velmora piece undergoes rigorous quality
            checks to ensure it meets the standard we&apos;d set for ourselves. Because you deserve
            nothing less.
          </p>
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/shop"
            className="inline-block bg-velmora-gold text-velmora-black px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] hover:bg-velmora-gold-light transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
