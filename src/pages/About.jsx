import { Link } from 'react-router-dom'
import { StrkImage, StrkImageContainer } from '@/components/ui/StrkImage'
import Newsletter from '@/components/home/Newsletter'

export default function About() {
  return (
    <StrkImageContainer deps={[]} className="pt-24 md:pt-28">
      <section className="py-16 md:py-24 text-center max-w-3xl mx-auto px-5 md:px-8">
        <p className="text-[11px] uppercase tracking-widest2 text-gold mb-4">Our Story</p>
        <h1 className="font-serif text-4xl md:text-6xl text-charcoal tracking-wide leading-tight">
          Jewelry made to be lived in
        </h1>
        <p className="mt-6 text-muted leading-relaxed text-lg">
          Velmora began with a simple belief: that fine gold jewelry should be
          worn, not locked away. We design demi-fine pieces in 18K gold plate
          over brass — warm, weighty and made to move with you.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 pb-20">
        <div className="aspect-[16/9] overflow-hidden bg-ink">
          <StrkImage
            imgId="about-hero-velmora-2b3c4d"
            query="gold jewelry atelier craftsmanship warm editorial"
            ratio="16x9"
            width={1600}
            alt="Velmora atelier"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-5 md:px-8 pb-20 grid md:grid-cols-3 gap-10 text-center">
        {[
          { t: 'Designed in Studio', d: 'Every piece begins as a sketch, refined for proportion and wearability.' },
          { t: '18K Gold Plated', d: 'Warm gold over brass, hypoallergenic and nickel-free for everyday wear.' },
          { t: 'Made to Last', d: 'We obsess over hinges, chains and clasps so your pieces endure.' },
        ].map((f) => (
          <div key={f.t}>
            <h3 className="font-serif text-2xl text-charcoal mb-3">{f.t}</h3>
            <p className="text-muted leading-relaxed">{f.d}</p>
          </div>
        ))}
      </section>

      <section className="bg-sand py-16 text-center">
        <div className="max-w-2xl mx-auto px-5 md:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal tracking-wide">
            Discover the collection
          </h2>
          <Link
            to="/shop"
            className="inline-block mt-6 bg-gold text-cream px-10 py-4 text-[11px] uppercase tracking-widest2 hover:bg-gold-deep transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </section>

      <Newsletter />
    </StrkImageContainer>
  )
}
