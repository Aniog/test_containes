import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { categories, testimonials, trustItems } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import CategoryTile from '@/components/home/CategoryTile';
import TestimonialCard from '@/components/home/TestimonialCard';
import Newsletter from '@/components/home/Newsletter';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const HomePage = () => {
  const containerRef = useRef(null);
  const bestsellers = products.filter(p => p.isBestseller).slice(0, 5);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          data-strk-bg-id="hero-bg-velmora"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          style={{ backgroundImage: 'url(https://placehold.co/1600x900/f5f5f5/666666?text=Hero+Image)' }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1
            id="hero-title"
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-light mb-6 tracking-wide animate-slide-up"
          >
            Crafted to be Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto tracking-wide animate-slide-up"
            style={{ animationDelay: '0.2s' }}
          >
            Discover demi-fine jewelry that blends timeless elegance with modern sophistication. Each piece designed to celebrate life's precious moments.
          </p>
          <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button
              asChild
              size="lg"
              className="bg-white text-charcoal-800 hover:bg-gray-100 border-none px-8 py-6 text-sm tracking-widest uppercase"
            >
              <a href="#bestsellers">Shop the Collection</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
            {trustItems.map((item, index) => (
              <div key={index} className="flex items-center justify-center text-center">
                <p className="text-sm text-charcoal-600 font-medium tracking-wide">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section id="bestsellers" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal-800 mb-4">Bestsellers</h2>
          <p className="text-charcoal-600 max-w-2xl mx-auto">Our most loved pieces, cherished by customers worldwide</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* UGC Reel Section */}
      <section className="py-16 bg-velmora-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal-800 mb-4">Worn with Love</h2>
            <p className="text-charcoal-600">Real moments from our community</p>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="flex-shrink-0 w-64 md:w-80 relative rounded-lg overflow-hidden shadow-soft group cursor-pointer"
              >
                <div
                  className="aspect-[9/16] bg-gray-200"
                  data-strk-img-id={`ugc-reel-${i}`}
                  data-strk-img="[ugc-caption]"
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="600"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p
                    id={`ugc-caption-${i}`}
                    className="text-white text-sm font-serif italic"
                  >
                    "Absolutely in love with my new Velmora pieces!"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Tiles */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal-800 mb-4">Shop by Category</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryTile key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal-800 mb-6">Our Story</h2>
              <p className="text-charcoal-600 leading-relaxed mb-6">
                Velmora was born from a belief that fine jewelry should be accessible without compromising on quality. Each piece is thoughtfully designed in our atelier, using ethically sourced materials and meticulous craftsmanship.
              </p>
              <p className="text-charcoal-600 leading-relaxed mb-8">
                Our 18K gold plated collections are hypoallergenic and crafted to last, bringing timeless elegance to your everyday wardrobe.
              </p>
              <Button asChild variant="outline" className="border-charcoal-800 text-charcoal-800 hover:bg-charcoal-800 hover:text-white">
                <a href="/about">Read Our Story</a>
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <div
                className="aspect-square bg-gray-100 rounded-lg overflow-hidden shadow-soft-lg"
                data-strk-bg-id="brand-story-img"
                data-strk-bg="[brand-story-title]"
                data-strk-bg-ratio="1x1"
                data-strk-bg-width="800"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal-800 mb-4">What Our Customers Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24 bg-velmora-gold-500">
        <Newsletter />
      </section>
    </div>
  );
};

export default HomePage;
