import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-surface)]">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] rounded-[var(--radius-lg)] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80"
              alt="Velmora artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-[var(--color-accent)] rounded-full" />
          </div>
          
          {/* Content */}
          <div className="py-8 md:py-0">
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-accent)] mb-4">
              Our Story
            </p>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
              Jewelry with Intention
            </h2>
            
            <div className="space-y-4 text-[var(--color-secondary)]">
              <p className="text-base leading-relaxed">
                At Velmora, we believe that the jewelry you wear should tell your story. Every piece is designed with intention, crafted with care, and made to be a treasured part of your everyday moments.
              </p>
              
              <p className="text-base leading-relaxed">
                Founded in 2019, we set out to create demi-fine jewelry that bridges the gap between fashion and fine jewelry — accessible enough to wear every day, but beautiful enough to make you feel special.
              </p>
              
              <p className="text-base leading-relaxed">
                Each piece is crafted in our studio using ethically sourced materials and 18K gold plating. We partner with skilled artisans who share our commitment to quality and sustainability.
              </p>
            </div>
            
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors group"
            >
              <span className="relative">
                Read Our Story
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-current transition-all duration-300 group-hover:w-full" />
              </span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
