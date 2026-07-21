import { Link } from 'react-router-dom';
import { useIntersectionObserver } from '@/hooks/useScrollPosition';

export function BrandStory() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="about" ref={ref} className="section-padding bg-cream">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="aspect-[4/5] overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80"
                alt="Velmora craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold rounded-full hidden md:block" />
          </div>

          {/* Content */}
          <div className={`py-8 md:py-0 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Our Story</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-warmblack mb-6 leading-tight">
              Jewelry that tells your story
            </h2>
            <div className="space-y-4 text-stone leading-relaxed">
              <p>
                At Velmora, we believe every woman deserves to feel adorned. Founded in 2019 by two sisters with a passion for accessible luxury, we set out to create jewelry that bridges the gap between fine and fashion.
              </p>
              <p>
                Each piece is thoughtfully designed in our New York City studio, where we blend timeless elegance with modern sensibility. Our demi-fine collections feature premium 18K gold plating over hypoallergenic metals, ensuring beauty that lasts.
              </p>
              <p>
                We source our materials responsibly and partner with artisans who share our commitment to quality. The result? Jewelry that feels as good as it looks—on your wrist, in your life, and on the planet.
              </p>
            </div>
            <Link
              to="#about"
              className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-gold hover:text-gold-hover transition-colors group"
            >
              Discover Our Journey
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
