import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-20 sm:py-28 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="aspect-[4/5] rounded-sm overflow-hidden bg-surface-alt">
            <img
              src="https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=900&q=80"
              alt="Velmora brand story"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs tracking-widest uppercase text-gold mb-3">Our Story</p>
            <h2 className="font-serif text-3xl sm:text-4xl tracking-wide text-ink leading-snug">
              Designed in small batches,<br />made to last.
            </h2>
            <p className="mt-6 text-sm text-ink/70 leading-relaxed">
              Velmora was founded on a simple belief: fine jewelry should feel accessible without sacrificing quality. Every piece is crafted from 18K gold-plated brass, finished by hand, and designed to transition from day to evening with ease.
            </p>
            <p className="mt-4 text-sm text-ink/70 leading-relaxed">
              We work with family-owned workshops and prioritize recycled materials wherever possible. The result is jewelry that feels personal, considered, and quietly confident.
            </p>
            <Link to="/about" className="inline-block mt-8 text-xs tracking-widest uppercase text-gold hover:text-gold-dark transition-colors">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
