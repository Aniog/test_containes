import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28 bg-velvet-50">
      <div className="section-padding">
        <div className="grid md:grid-cols-2 gap-0 max-w-6xl mx-auto">
          {/* Image */}
          <div className="aspect-[4/5] md:aspect-auto overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-6 md:px-16 py-12 md:py-0">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-warmgray-500 mb-3">Our Story</p>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-noir leading-snug mb-6">
              Jewelry That Becomes<br />Part of Your Story
            </h2>
            <div className="w-12 h-px bg-sand-400 mb-6" />
            <p className="font-sans text-sm md:text-base text-warmgray-700 leading-relaxed mb-4">
              Velmora was born from a simple belief: that fine jewelry should feel personal,
              not precious. Every piece is designed to be lived in — worn through laughter,
              tears, celebrations, and quiet mornings.
            </p>
            <p className="font-sans text-sm md:text-base text-warmgray-700 leading-relaxed mb-8">
              Crafted from 18K gold-plated brass with ethically sourced crystals,
              our collections bridge the gap between fast fashion and unattainable luxury.
            </p>
            <Link to="/shop" className="btn-outline text-xs self-start">
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}