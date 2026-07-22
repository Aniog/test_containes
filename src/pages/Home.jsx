import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import ProductCard from '@/components/product/ProductCard';
import { products, testimonials, ugcItems, categories } from '@/data/products';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const bestsellers = products.filter((p) => p.bestseller).slice(0, 5);

  return (
    <div ref={containerRef} className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          data-strk-bg-id="hero-bg"
          data-strk-bg="[hero-heading] [hero-subhead]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1
            id="hero-heading"
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-wide"
          >
            Crafted to be Treasured
          </h1>
          <p
            id="hero-subhead"
            className="text-lg md:text-xl font-light mb-8 max-w-2xl mx-auto"
          >
            Discover demi-fine jewelry that blends timeless elegance with modern design.
            Each piece is crafted to become a cherished part of your story.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-white text-amber-900 px-8 py-3 text-sm uppercase tracking-wider font-medium hover:bg-gray-100 transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-amber-50 border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 text-center">
            <div className="flex flex-col items-center">
              <span className="text-xs uppercase tracking-wider text-gray-600 mb-1">Shipping</span>
              <span className="text-sm font-medium">Free Worldwide</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xs uppercase tracking-wider text-gray-600 mb-1">Returns</span>
              <span className="text-sm font-medium">30-Day Easy</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xs uppercase tracking-wider text-gray-600 mb-1">Quality</span>
              <span className="text-sm font-medium">18K Gold Plated</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xs uppercase tracking-wider text-gray-600 mb-1">Materials</span>
              <span className="text-sm font-medium">Hypoallergenic</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bestsellers Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Bestsellers
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our most loved pieces, chosen by women like you for their timeless beauty and everyday elegance.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/shop"
              className="inline-block border border-amber-900 text-amber-900 px-8 py-3 text-sm uppercase tracking-wider font-medium hover:bg-amber-900 hover:text-white transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* UGC Reel Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Worn with Love
            </h2>
            <p className="text-gray-600">
              Real moments from our community.
            </p>
          </div>

          {/* Horizontal scroll container */}
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {ugcItems.map((item) => {
              const product = products.find((p) => p.id === item.productId);
              return (
                <div
                  key={item.id}
                  className="flex-shrink-0 w-64 md:w-80 relative group cursor-pointer"
                >
                  <div className="aspect-[9x16] bg-gray-200 rounded-lg overflow-hidden">
                    <img
                      data-strk-img-id={`ugc-${item.id}`}
                      data-strk-img={`[${product?.titleId}] [ugc-caption-${item.id}]`}
                      data-strk-img-ratio="9x16"
                      data-strk-img-width="400"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.caption}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p
                      id={`ugc-caption-${item.id}`}
                      className="text-white text-sm font-serif italic mb-1"
                    >
                      {item.caption}
                    </p>
                    <p className="text-white/80 text-xs">{item.username}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Category Tiles */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Shop by Category
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/collection/${category.id}`}
                className="group relative aspect-[4x5] overflow-hidden rounded-lg"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  data-strk-bg-id={`cat-${category.id}`}
                  data-strk-bg={`[cat-name-${category.id}] [cat-desc-${category.id}]`}
                  data-strk-bg-ratio="4x5"
                  data-strk-bg-width="800"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                  <h3
                    id={`cat-name-${category.id}`}
                    className="font-serif text-2xl md:text-3xl font-bold mb-2"
                  >
                    {category.name}
                  </h3>
                  <p
                    id={`cat-desc-${category.id}`}
                    className="text-sm text-center text-white/90"
                  >
                    {category.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[3x4] rounded-lg overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                data-strk-bg-id="story-img"
                data-strk-bg="[story-heading]"
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="800"
              />
            </div>
            <div className="md:pl-8">
              <h2
                id="story-heading"
                className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              >
                Our Story
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Velmora was born from a belief that fine jewelry should be accessible without compromising on quality. 
                We source the finest materials and work with skilled artisans to create pieces that feel luxurious 
                yet are priced for everyday wear.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Every design is thoughtfully created to be versatile, timeless, and meaningful. 
                Our jewelry is meant to be worn, loved, and passed down—crafted to be treasured for generations.
              </p>
              <Link
                to="/about"
                className="inline-block border-b border-amber-900 text-amber-900 pb-1 text-sm uppercase tracking-wider hover:text-amber-800 transition-colors"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What They Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                <p className="text-sm font-medium text-gray-900">
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24 bg-amber-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Join the Velmora Family
          </h2>
          <p className="text-amber-100 mb-8">
            Subscribe for exclusive offers, new arrivals, and 10% off your first order.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <Button className="bg-white text-amber-900 hover:bg-gray-100 px-6 py-3">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;