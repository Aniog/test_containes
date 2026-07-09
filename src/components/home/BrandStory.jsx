import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      {/* Image */}
      <div className="aspect-[4/5] md:aspect-auto bg-velmora-sand/30 flex items-center justify-center">
        <span className="text-velmora-stone/40 text-xs tracking-wider">
          OUR STORY
        </span>
      </div>

      {/* Text */}
      <div className="flex items-center px-6 md:px-16 lg:px-24 py-16 md:py-0">
        <div className="max-w-md">
          <p className="text-velmora-gold text-xs tracking-widest uppercase mb-4">
            Our Story
          </p>
          <h2 className="font-serif text-2xl md:text-3xl tracking-wide text-velmora-ink leading-snug mb-6">
            At Velmora, we believe fine jewelry shouldn't cost a fortune.
          </h2>
          <p className="text-velmora-stone text-sm leading-relaxed mb-6">
            Every piece is crafted in 18K gold-plated brass, designed to be 
            loved daily and last for years. From our studio in New York, we 
            create demi-fine jewelry that bridges the gap between costume 
            and fine — accessible elegance for the modern woman.
          </p>
          <Link
            to="/about"
            className="text-xs tracking-widest uppercase text-velmora-ink hover:text-velmora-gold transition-colors inline-flex items-center gap-2"
          >
            Read More
            <span className="w-8 h-px bg-velmora-gold inline-block" />
          </Link>
        </div>
      </div>
    </section>
  );
}