import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="mx-auto max-w-7xl overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative h-72 md:h-auto">
          <img
            src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1200&q=80"
            alt="Velmora jewelry craftsmanship"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="flex items-center bg-white px-6 py-12 md:px-12 md:py-16">
          <div className="max-w-md">
            <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-wide text-brand-ink">Our Story</h2>
            <p className="mt-4 text-sm leading-relaxed text-brand-muted">
              Velmora was born from a simple belief: fine jewelry should feel attainable without sacrificing quality. We design demi-fine pieces in warm 18K gold-plated finishes, with careful attention to detail, wearability, and longevity.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-brand-muted">
              Every piece is created to be worn daily—and passed down.
            </p>
            <Link to="/" className="mt-6 inline-flex items-center text-sm font-semibold tracking-wide text-brand-accent hover:text-brand-accentDark transition-colors">
              Read our story
              <span className="ml-2 text-lg leading-none">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
