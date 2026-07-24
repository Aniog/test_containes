import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="bg-velvet-50">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Image side */}
        <div className="aspect-[4/5] md:aspect-auto min-h-[400px] relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(135deg, #c4a06a 0%, #704b35 50%, #5c3f2e 100%)`,
            }}
          />
          <div className="absolute inset-0 bg-velvet-950/10" />
        </div>

        {/* Text side */}
        <div className="flex items-center px-6 py-16 md:py-0 md:px-16 lg:px-24">
          <div className="max-w-md mx-auto md:mx-0">
            <p className="font-sans text-xs tracking-widest uppercase text-sand-500 mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velvet-800 font-light leading-tight mb-6">
              Beauty in<br />Every Detail
            </h2>
            <p className="text-sand-600 text-sm md:text-base leading-relaxed mb-4">
              Velmora was born from a simple belief: that fine jewelry should be both extraordinary and accessible. Each piece is designed in our atelier, where traditional craftsmanship meets modern sensibility.
            </p>
            <p className="text-sand-600 text-sm md:text-base leading-relaxed mb-8">
              We work exclusively with 18K gold plating and ethically sourced materials, creating demi-fine pieces that become part of your story — worn every day, treasured for a lifetime.
            </p>
            <Link to="/about" className="btn-outline text-xs">
              Discover Velmora
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
