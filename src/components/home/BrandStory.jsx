import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section id="story" className="py-20 sm:py-28 bg-brand-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="/images/story.svg"
              alt="Jewelry craftsmanship"
              className="w-full h-full object-cover"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </div>
          <div className="lg:py-8">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-gold mb-4">
              Since 2019
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-cream leading-tight mb-6">
              Designed for the<br />Woman Who Knows
            </h2>
            <p className="text-brand-soft leading-relaxed mb-4">
              Velmora was born from a belief that fine jewelry should not be reserved for special occasions alone. Each piece is designed in our studio and crafted with 18K gold plating, chosen for its warmth, durability, and unmistakable glow.
            </p>
            <p className="text-brand-soft leading-relaxed mb-8">
              We create for the modern woman — the one who buys herself flowers, who knows her worth, who understands that the smallest details hold the most meaning.
            </p>
            <Link
              to="/"
              className="inline-block text-xs uppercase tracking-widest text-brand-gold border-b border-brand-gold pb-1 hover:text-brand-goldLight hover:border-brand-goldLight transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}