import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import ProductCard from '@/components/product/ProductCard';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { getBestsellers, testimonials, ugcContent } from '@/data/products';

// Animated Section Component
function AnimatedSection({ children, className, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className={cn(
        'transition-all duration-700 ease-silk',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// Trust Bar Component
function TrustBar() {
  const features = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="bg-cream py-3 border-y border-champagne">
      <div className="container-narrow">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {features.map((feature) => (
            <div key={feature} className="flex items-center gap-2 text-stone text-sm">
              <svg className="w-4 h-4 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1920&h=1080&fit=crop"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/30 to-charcoal/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-narrow text-center">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl text-white font-medium tracking-wide leading-tight mb-6 animate-fade-up">
          Crafted to be Treasured
        </h1>
        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: '200ms' }}>
          Demi-fine gold jewelry designed for the modern woman. Timeless pieces that celebrate every moment.
        </p>
        <div className="animate-fade-up" style={{ animationDelay: '400ms' }}>
          <Link to="/collection">
            <Button size="lg" className="bg-gold text-charcoal hover:bg-gold-light">
              Shop the Collection
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-white/80 rounded-full" />
        </div>
      </div>
    </section>
  );
}

// Bestsellers Section
function BestsellersSection() {
  const bestsellers = getBestsellers();

  return (
    <section className="section-padding bg-ivory">
      <div className="container-narrow">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="heading-h2 text-charcoal mb-4">Bestsellers</h2>
            <p className="text-stone max-w-xl mx-auto">
              Our most loved pieces, chosen by you. Discover the jewelry everyone is wearing.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product, index) => (
            <AnimatedSection key={product.id} delay={index * 100}>
              <ProductCard product={product} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12">
          <Link to="/collection">
            <Button variant="secondary">
              View All
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}

// UGC Reel Section
function UGCSection() {
  const scrollRef = useRef(null);

  return (
    <section className="py-16 bg-cream overflow-hidden">
      <div className="container-narrow mb-8">
        <AnimatedSection>
          <h2 className="heading-h3 text-charcoal mb-2">Styled by You</h2>
          <p className="text-stone">Real moments, real jewelry</p>
        </AnimatedSection>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 px-4 md:px-8 overflow-x-auto scrollbar-hide pb-4"
      >
        {ugcContent.map((item, index) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-48 md:w-56 relative group"
          >
            <div className="aspect-[9/16] bg-charcoal/10 overflow-hidden">
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="font-serif text-white text-sm italic">{item.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Categories Section
function CategoriesSection() {
  const categories = [
    {
      name: 'Earrings',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=800&fit=crop',
      slug: 'earrings',
    },
    {
      name: 'Necklaces',
      image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&h=800&fit=crop',
      slug: 'necklaces',
    },
    {
      name: 'Huggies',
      image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&h=800&fit=crop',
      slug: 'huggies',
    },
  ];

  return (
    <section className="section-padding bg-ivory">
      <div className="container-narrow">
        <AnimatedSection>
          <h2 className="heading-h2 text-charcoal text-center mb-12">Shop by Category</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <AnimatedSection key={category.slug} delay={index * 150}>
              <Link
                to={`/collection?category=${category.slug}`}
                className="group relative block aspect-[3/4] overflow-hidden"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/20 to-transparent" />
                <div className="absolute inset-0 flex items-end p-6">
                  <span className="font-serif text-2xl text-white tracking-wide group-hover:text-gold-light transition-colors duration-300">
                    {category.name}
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

// Brand Story Section
function BrandStorySection() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <AnimatedSection className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&h=1000&fit=crop"
                alt="Brand story"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/20 rounded-full blur-3xl" />
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <span className="caption text-gold mb-4 block">Our Story</span>
            <h2 className="heading-h2 text-charcoal mb-6">
              Jewelry with Intention
            </h2>
            <div className="space-y-4 text-stone leading-relaxed mb-8">
              <p>
                Every Velmora piece begins with a story. We believe jewelry should be more than decoration — it should mark moments, express individuality, and become part of your personal narrative.
              </p>
              <p>
                Our demi-fine collections are crafted with 18K gold plating over quality metals, designed to be lived in. From morning coffee to evening celebrations, Velmora pieces are meant to be worn, loved, and passed on.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-dark transition-colors duration-200 font-medium"
            >
              Discover Our Story
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  return (
    <section className="section-padding bg-ivory">
      <div className="container-narrow">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="heading-h2 text-charcoal mb-4">What Our Customers Say</h2>
            <div className="flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold text-gold" />
              ))}
              <span className="text-stone ml-2">4.9 out of 5</span>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.id} delay={index * 100}>
              <div className="bg-cream p-8 h-full">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-stone leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                    <span className="font-serif text-gold">{testimonial.initials}</span>
                  </div>
                  <span className="text-charcoal font-medium">{testimonial.name}</span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

// Newsletter Section
function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1000);
  };

  return (
    <section className="py-20 bg-charcoal">
      <div className="container-narrow">
        <AnimatedSection>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="heading-h2 text-white mb-4">Join the Velmora Circle</h2>
            <p className="text-white/70 mb-8">
              Subscribe for early access to new collections, exclusive offers, and styling inspiration.
            </p>

            {submitted ? (
              <div className="py-4 text-gold">
                <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <p className="font-serif text-xl">Welcome to Velmora</p>
                <p className="text-white/60 mt-2">Check your inbox for your 10% off code.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-gold"
                />
                <Button type="submit" loading={loading}>
                  Subscribe
                </Button>
              </form>
            )}

            <p className="text-white/40 text-sm mt-6">
              10% off your first order. No spam, unsubscribe anytime.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

// Main Home Page Component
export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustBar />
      <BestsellersSection />
      <UGCSection />
      <CategoriesSection />
      <BrandStorySection />
      <TestimonialsSection />
      <NewsletterSection />
    </main>
  );
}
