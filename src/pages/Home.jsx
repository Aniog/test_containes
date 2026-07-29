import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Truck, Heart, Award, Waves } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useState } from 'react';
import { fetchFeaturedProducts } from '../api/products.js';
import ProductCard from '../components/shop/ProductCard.jsx';

const features = [
  { icon: Shield, title: 'Live Arrival Guarantee', desc: '48-hour live arrival guarantee on all live animals. Your satisfaction is our priority.' },
  { icon: Truck, title: 'Overnight Shipping', desc: 'All live animals shipped overnight in insulated, temperature-controlled packaging.' },
  { icon: Heart, title: 'Ethically Sourced', desc: 'Every specimen is sustainably and ethically sourced from certified marine farms.' },
  { icon: Award, title: 'Expert Care Guides', desc: 'Detailed care guides included with every purchase. We support you every step of the way.' },
];

const categories = [
  { slug: 'nudibranch', label: 'Nudibranchs', emoji: '🐌', desc: 'Vivid, jewel-like sea slugs' },
  { slug: 'aeolid', label: 'Aeolids', emoji: '🌊', desc: 'Feathery cerata beauties' },
  { slug: 'sea-hare', label: 'Sea Hares', emoji: '🐇', desc: 'Large, beginner-friendly' },
  { slug: 'sacoglossan', label: 'Sacoglossans', emoji: '🌿', desc: 'Photosynthetic wonders' },
  { slug: 'care-kit', label: 'Care Kits', emoji: '🧪', desc: 'Everything to get started' },
  { slug: 'food', label: 'Food & Supplies', emoji: '🍽️', desc: 'Specialist feeding products' },
];

export default function Home() {
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(true);
  const heroRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    fetchFeaturedProducts()
      .then(setFeatured)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, heroRef.current);
  }, []);

  useEffect(() => {
    if (!loading) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [loading]);

  return (
    <div className="bg-seafoam min-h-screen">
      {/* Hero */}
      <section ref={heroRef} className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          data-strk-bg-id="hero-bg-a1b2c3"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-40">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-teal-ocean/20 border border-teal-ocean/30 text-teal-ocean-light px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <Waves className="w-4 h-4" />
              The World's Premier Sea Slug Shop
            </div>
            <h1 id="hero-title" className="text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
              Discover the Ocean's
              <span className="text-teal-ocean-light block">Living Jewels</span>
            </h1>
            <p id="hero-subtitle" className="text-lg text-white/80 leading-relaxed mb-8 max-w-xl">
              Rare nudibranchs, sea hares, and sacoglossans — ethically sourced, expertly cared for, and delivered overnight to your door.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 bg-coral text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-coral-light transition-colors shadow-lg"
              >
                Shop Now <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 border-2 border-white/40 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f) => (
              <div key={f.title} className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 bg-surface-alt rounded-2xl flex items-center justify-center">
                  <f.icon className="w-6 h-6 text-teal-ocean" />
                </div>
                <h3 className="font-bold text-navy text-base">{f.title}</h3>
                <p className="text-sm text-slate-text leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-navy mb-3">Browse by Category</h2>
          <p className="text-slate-text text-lg">Find the perfect sea slug for your aquarium</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/shop?category=${cat.slug}`}
              className="bg-white rounded-2xl p-5 text-center border border-border-ocean hover:border-teal-ocean hover:shadow-md transition-all group"
            >
              <div className="text-4xl mb-3">{cat.emoji}</div>
              <h3 className="font-bold text-navy text-sm group-hover:text-teal-ocean transition-colors">{cat.label}</h3>
              <p className="text-xs text-muted-text mt-1">{cat.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section ref={containerRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-navy mb-2">Featured Specimens</h2>
              <p className="text-slate-text text-lg">Hand-picked rarities from our collection</p>
            </div>
            <Link
              to="/shop"
              className="hidden md:inline-flex items-center gap-2 text-teal-ocean font-semibold hover:text-teal-ocean-dark transition-colors"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-seafoam rounded-2xl h-80 animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featured.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}

          <div className="text-center mt-10 md:hidden">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 bg-teal-ocean text-white px-8 py-3 rounded-xl font-bold hover:bg-teal-ocean-dark transition-colors"
            >
              View All Products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-teal-ocean to-teal-ocean-light rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">Ready to Start Your Collection?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Join thousands of marine enthusiasts who trust SlugSea for the finest sea slugs in the world.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-white text-teal-ocean px-8 py-4 rounded-xl font-bold text-lg hover:bg-seafoam transition-colors shadow-lg"
          >
            Explore the Shop <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
