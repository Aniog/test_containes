import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <main className="pt-[72px]">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1920&h=800&fit=crop"
            alt="Our Story"
            className="w-full h-full object-cover"
          />
          <div 
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(26,26,26,0.4) 0%, rgba(26,26,26,0.6) 100%)' }}
          />
        </div>
        <div className="relative z-10 text-center text-cream px-6">
          <h1 
            className="font-serif text-4xl md:text-5xl mb-4"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Our Story
          </h1>
          <p className="text-cream/80 max-w-xl">
            The journey of creating jewelry that celebrates life's precious moments
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container max-w-3xl">
          <div className="prose prose-lg">
            <p className="text-stone leading-relaxed mb-6" style={{ color: 'var(--color-stone)' }}>
              Velmora was born from a simple belief: every woman deserves jewelry that makes her feel extraordinary. Founded in 2020, we set out to create pieces that balance timeless elegance with modern sensibility—jewelry that feels luxurious yet accessible, sophisticated yet wearable.
            </p>
            
            <p className="text-stone leading-relaxed mb-6" style={{ color: 'var(--color-stone)' }}>
              Our name, derived from the Latin word for "to be desired," reflects our mission: to create jewelry that becomes a cherished part of your personal story. Each piece in our collection is designed with intention, crafted with care, and meant to be worn and loved for years to come.
            </p>

            <h2 
              className="font-serif text-2xl mt-12 mb-4"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Our Craft
            </h2>
            <p className="text-stone leading-relaxed mb-6" style={{ color: 'var(--color-stone)' }}>
              We believe in the beauty of demi-fine jewelry—pieces that offer the look and feel of fine jewelry at accessible price points. Our collections feature 18K gold plating over sterling silver, ensuring lasting quality without the premium price tag.
            </p>

            <h2 
              className="font-serif text-2xl mt-12 mb-4"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Our Values
            </h2>
            <p className="text-stone leading-relaxed mb-6" style={{ color: 'var(--color-stone)' }}>
              Sustainability and ethical practices are at the heart of everything we do. We work with skilled artisans who share our commitment to quality and responsible manufacturing. Every piece tells a story—not just of beauty, but of craftsmanship and care.
            </p>
          </div>

          <div className="mt-12 text-center">
            <Link 
              to="/shop" 
              className="btn-outline inline-flex items-center gap-2"
            >
              Explore Our Collection
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}