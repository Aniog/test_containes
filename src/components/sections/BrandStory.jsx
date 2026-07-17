import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="section bg-[var(--color-surface)]">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80"
              alt="Velmora craftmanship"
              className="w-full h-full object-cover"
            />
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-[var(--color-accent)]" />
          </div>

          {/* Content */}
          <div className="py-8 md:py-0">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-[var(--color-accent)] mb-4">
              Our Story
            </p>
            
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-dark)] mb-6 leading-tight">
              Where Timeless Elegance Meets Modern Design
            </h2>
            
            <div className="space-y-4 text-[var(--color-secondary)]">
              <p className="font-sans text-base leading-relaxed">
                Founded in 2019, Velmora was born from a simple belief: every woman deserves to feel extraordinary without compromise. We create jewelry that bridges the gap between fine craftsmanship and accessible luxury.
              </p>
              <p className="font-sans text-base leading-relaxed">
                Each piece is thoughtfully designed in our studio and crafted by skilled artisans using premium materials — 18K gold plating, hypoallergenic metals, and carefully selected stones.
              </p>
              <p className="font-sans text-base leading-relaxed">
                Our name, derived from the Latin "vel mori" meaning "to want to live," reflects our commitment to creating jewelry that celebrates life's beautiful moments — both big and small.
              </p>
            </div>

            <Link 
              to="/about"
              className="inline-flex items-center gap-2 mt-8 font-sans text-sm text-[var(--color-dark)] hover:text-[var(--color-accent)] transition-colors group"
            >
              <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-current after:transition-all group-hover:after:w-full">
                Discover Our Journey
              </span>
              <svg 
                className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
