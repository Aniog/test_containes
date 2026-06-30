import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28 bg-warm-white">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-0 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-[#E8E0D5]/40 overflow-hidden">
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="[brand-story-label]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
            <span id="brand-story-label" className="hidden">jewelry craftsmanship workshop gold</span>
          </div>

          {/* Text */}
          <div className="py-10 md:py-0 md:pl-16 lg:pl-20">
            <p className="text-xs tracking-super-wide uppercase text-gold-dark font-sans mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-warm-dark tracking-wider leading-tight">
              Jewelry That<br />Tells Your Story
            </h2>
            <p className="mt-6 text-warm-gray text-sm leading-relaxed font-sans max-w-md">
              Velmora was born from a belief that fine jewelry should be both beautiful and accessible.
              Each piece is designed in our atelier, crafted with 18K gold plating on ethically sourced
              materials, and finished by hand. No middlemen, no markups — just demi-fine jewelry made
              to be treasured.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 text-xs tracking-super-wide uppercase text-warm-dark font-sans border-b border-warm-dark/30 hover:border-warm-dark transition-colors pb-1"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}