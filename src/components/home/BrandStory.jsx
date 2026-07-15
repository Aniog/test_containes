import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="bg-charcoal-950">
      <div className="max-w-[1440px] mx-auto grid md:grid-cols-2">
        {/* Image */}
        <div className="aspect-[4/5] md:aspect-auto relative overflow-hidden">
          <div
            data-strk-bg-id="brand-story-img"
            data-strk-bg="[brand-story-heading] gold jewelry craftsmanship warm editorial"
            data-strk-bg-ratio="3x4"
            data-strk-bg-width="1000"
            className="absolute inset-0"
          />
        </div>

        {/* Content */}
        <div className="flex items-center px-6 md:px-16 lg:px-20 py-16 md:py-20">
          <div className="max-w-[440px]">
            <p className="font-sans text-[11px] tracking-widest3 uppercase text-warm-400 mb-4">
              Our Philosophy
            </p>
            <h2
              id="brand-story-heading"
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-cream-50 leading-[1.15] mb-6"
            >
              Jewelry that tells<br />your story
            </h2>
            <p className="text-charcoal-300 leading-relaxed mb-8">
              At Velmora, we believe luxury shouldn&apos;t cost a fortune. Each piece is designed
              in our London atelier and crafted from 18K gold-plated brass — combining old-world
              craftsmanship with a modern, accessible price point. We create jewelry that becomes
              part of your daily ritual, pieces you reach for instinctively, treasures that feel
              undeniably yours.
            </p>
            <Link to="/shop" className="btn-outline border-cream-400/30 text-cream-200 hover:border-cream-100 hover:text-cream-50">
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
