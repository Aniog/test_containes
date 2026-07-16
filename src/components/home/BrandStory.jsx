import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'


export default function BrandStory() {
  return (
    <section id="about" className="bg-cream py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden bg-sand md:aspect-[5/6]">
          <img
            alt="Velmora atelier"
            data-strk-img-id="brand-story-img-velmora-02"
            data-strk-img="[brand-story-text] [brand-story-heading] jewelry maker atelier hands crafting gold warm"
            data-strk-img-ratio="4x5"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="md:pl-6">
          <p className="text-[11px] uppercase tracking-widest2 text-gold">Our Story</p>
          <h2
            id="brand-story-heading"
            className="mt-4 font-serif text-4xl leading-tight text-ink md:text-5xl"
          >
            Jewelry made to be lived in, not locked away.
          </h2>
          <p
            id="brand-story-text"
            className="mt-6 text-sm leading-relaxed text-stone md:text-base"
          >
            Velmora began with a simple belief: that fine-quality gold jewelry
            shouldn't wait for a special occasion. We design demi-fine pieces in
            our studio — 18K gold plated, hypoallergenic, and finished by hand —
            so you can wear the things you love, every single day.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-stone md:text-base">
            From the first sketch to the final polish, every piece is made with
            intention. No shortcuts, no noise — just gold that earns its place
            in your everyday.
          </p>
          <Link
            to="/#about"
            className="mt-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-wide2 text-ink transition-colors hover:text-gold"
          >
            Read Our Story
            <ArrowRight size={14} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  )
}
