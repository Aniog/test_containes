import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="bg-surface">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Image */}
        <div className="aspect-[4/5] md:aspect-auto overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
            alt="Velmora craftsmanship"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex items-center">
          <div className="px-6 lg:px-16 py-16 md:py-0 max-w-lg">
            <p className="text-xs uppercase tracking-wider text-accent font-medium">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium tracking-wide mt-4 leading-tight text-text-primary">
              Jewelry that tells your story, without saying a word.
            </h2>
            <p className="text-text-secondary text-sm mt-5 leading-relaxed">
              Velmora was born from the belief that luxury should be accessible. 
              Every piece is crafted from 18K gold-plated brass with a hypoallergenic finish, 
              designed in our atelier and made to be worn every day — not locked away for special occasions.
            </p>
            <p className="text-text-secondary text-sm mt-3 leading-relaxed">
              We source our materials responsibly, partner with ethical artisans, 
              and wrap every order like a gift — because you deserve it.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
            >
              Discover Our Story
              <span className="text-lg leading-none">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
