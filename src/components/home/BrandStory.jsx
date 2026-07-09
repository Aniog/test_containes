import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section className="bg-velmora-deep text-white">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2">
        {/* Image */}
        <div className="aspect-[4/5] md:aspect-auto relative overflow-hidden">
          <img
            data-strk-img-id="brand-story-image"
            data-strk-img="[brand-story-label] gold jewelry craftsmanship artisan"
            data-strk-img-ratio="4x5"
            data-strk-img-width="1000"
            src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 1250'/%3E`}
            alt="Velmora craftsmanship"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex items-center px-8 md:px-16 py-16 md:py-24">
          <div className="max-w-md">
            <p id="brand-story-label" className="text-[10px] tracking-[0.2em] uppercase text-velmora-gold font-medium">
              Our Story
            </p>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl leading-[1.15] tracking-tight">
              Fine jewelry,<br />without the markup
            </h2>
            <p className="mt-6 text-sm text-white/70 leading-relaxed">
              We believe that luxury shouldn't come with a luxury markup. By designing in-house,
              sourcing directly, and selling only through our site, we create demi-fine pieces
              that rival traditional fine jewelry — for a fraction of the price.
            </p>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              Every piece is crafted from 18K gold-plated brass and finished with care
              in limited batches. No middlemen, no retail overhead — just beautiful jewelry
              made to be worn.
            </p>
            <Link
              to="#"
              className="mt-8 inline-block text-xs tracking-[0.15em] uppercase text-velmora-gold border-b border-velmora-gold/40 pb-1 hover:border-velmora-gold transition-colors"
            >
              Read our full story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
