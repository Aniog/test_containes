import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="section-padding bg-surface">
      <div className="max-w-content mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80"
                alt="Velmora artisan crafting jewelry"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-accent rounded-full hidden md:block" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <span className="inline-block font-sans text-xs tracking-widest text-accent uppercase mb-4">
              Our Story
            </span>
            <h2 className="font-serif text-3xl md:text-4xl mb-6 leading-tight">
              Where Craftsmanship<br />Meets Intention
            </h2>
            <div className="space-y-4 text-text-secondary font-sans leading-relaxed">
              <p>
                Velmora was born from a simple belief: jewelry should feel personal. 
                Each piece in our collection is designed to become part of your story, 
                worn through life's most meaningful moments.
              </p>
              <p>
                We partner with skilled artisans who share our commitment to quality 
                and ethical production. Every huggie, every pendant, every pair of 
                earrings is crafted with care in our family-owned studio.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 font-sans text-sm tracking-wide text-primary hover:text-accent transition-colors group"
            >
              <span>Learn More About Us</span>
              <span className="w-8 h-px bg-current transition-all duration-300 group-hover:w-12" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
