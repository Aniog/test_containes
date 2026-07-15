import { Link } from "react-router-dom";

const BrandStory = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
        <div className="overflow-hidden rounded-sm">
          <img
            src="https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=900&q=80"
            alt="Velmora brand story"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="eyebrow">Our Story</p>
          <h2 className="section-heading mt-3">Designed in small batches, made to last.</h2>
          <p className="mt-4 text-sm leading-relaxed text-[var(--color-ink-secondary)]">
            Velmora began with a simple belief: fine jewelry should feel accessible without sacrificing quality. Every piece is thoughtfully designed, responsibly plated in 18K gold, and finished by hand.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-secondary)]">
            From our studio to your jewelry box, we obsess over the details so you can enjoy them for years.
          </p>
          <div className="mt-6">
            <Link to="/about" className="btn-outline">Read Our Story</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
