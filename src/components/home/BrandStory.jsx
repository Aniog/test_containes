import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section className="section-padding py-20 md:py-28">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-velmora-cream overflow-hidden">
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="[brand-story-title] [brand-story-subtitle]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
            <span id="brand-story-title" className="hidden">Velmora Fine Jewelry craftsmanship studio</span>
            <span id="brand-story-subtitle" className="hidden">artisan gold jewelry making process warm lighting</span>
          </div>

          {/* Text */}
          <div className="md:pl-4">
            <p className="text-velmora-gold font-sans text-xs tracking-widest uppercase mb-4">Our Philosophy</p>
            <h2 className="font-serif text-3xl md:text-4xl tracking-wide mb-6 leading-tight">
              Jewelry That Tells Your Story
            </h2>
            <div className="w-12 h-px bg-velmora-gold mb-8" />
            <p className="text-velmora-muted leading-relaxed mb-6">
              At Velmora, we believe fine jewelry should be an everyday luxury. Each piece is designed in our
              London studio, crafted from 18K gold-plated brass and ethically sourced crystals — made to be
              worn, layered, and treasured for years to come.
            </p>
            <p className="text-velmora-muted leading-relaxed mb-8">
              We reject the idea that beautiful jewelry should cost a fortune. By going direct-to-consumer,
              we offer exceptional demi-fine pieces at an honest price — without compromising on quality or conscience.
            </p>
            <Link to="/" className="btn-outline inline-block">
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}