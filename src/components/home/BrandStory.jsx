import { Link } from "react-router-dom";

const BrandStory = () => {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="aspect-[4/5] overflow-hidden bg-stone-100">
            <img
              src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=900&q=80"
              alt="Velmora brand story"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="md:pl-10">
            <h2 className="font-serif text-3xl text-stone-900">Our Story</h2>
            <p className="mt-4 text-sm leading-relaxed text-stone-600">
              Velmora was born from a simple belief: fine jewelry should feel accessible, intentional, and timeless. We design each piece to be worn daily — not saved for special occasions.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-stone-600">
              From our studio to your jewelry box, we obsess over materials, finish, and fit so you can enjoy pieces that feel as good as they look.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 text-xs tracking-[0.2em] uppercase text-amber-800 hover:text-amber-900 border-b border-amber-800 pb-1"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
