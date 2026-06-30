import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section className="bg-velmora-sand">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
        {/* Image */}
        <div className="relative min-h-[350px] md:min-h-full bg-velmora-deep/10">
          <img
            data-strk-img-id="brand-story-img-6d34fa"
            data-strk-img="[brand-story-heading]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="1000"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora craftsmanship"
            className="w-full h-full object-cover absolute inset-0"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-16 md:py-0">
          <h2 id="brand-story-heading" className="font-serif text-2xl md:text-3xl tracking-wider mb-6">Our Story</h2>
          <p className="text-sm text-velmora-muted leading-relaxed mb-4">
            Velmora was born from a simple belief: that fine jewelry should be an everyday luxury, 
            not just a special-occasion indulgence. We craft each piece using 18K gold plating 
            over brass, with meticulous attention to weight, finish, and feel.
          </p>
          <p className="text-sm text-velmora-muted leading-relaxed mb-8">
            From our atelier to your jewelry box — every curve, every crystal, every clasp 
            is designed to be cherished. This is jewelry that becomes part of your story.
          </p>
          <Link
            to="/shop"
            className="inline-block text-xs tracking-widest uppercase border-b border-velmora-gold text-velmora-gold pb-1 hover:text-velmora-gold-dark hover:border-velmora-gold-dark transition-colors w-fit"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  )
}
