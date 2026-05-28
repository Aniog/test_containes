import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import Hero from '../components/swim/Hero';
import Features from '../components/swim/Features';
import Testimonials from '../components/swim/Testimonials';
import Brands from '../components/swim/Brands';
import { Star, ArrowRight } from 'lucide-react';

const featuredProducts = [
  {
    imgId: 'home-prod-img-1a2b',
    titleId: 'home-prod-title-1',
    descId: 'home-prod-desc-1',
    badge: 'Best Seller',
    title: 'Racing Goggles Pro',
    desc: 'Crystal-clear UV-protected lenses with anti-fog coating and hydrodynamic seal.',
    price: '$49.99',
    rating: 5,
    category: 'Goggles',
  },
  {
    imgId: 'home-prod-img-3c4d',
    titleId: 'home-prod-title-2',
    descId: 'home-prod-desc-2',
    badge: 'Popular',
    title: 'Training Fins',
    desc: 'Short-blade fins for building ankle flexibility and improving kick technique.',
    price: '$34.99',
    rating: 5,
    category: 'Training',
  },
  {
    imgId: 'home-prod-img-5e6f',
    titleId: 'home-prod-title-3',
    descId: 'home-prod-desc-3',
    badge: 'New',
    title: 'Silicone Swim Cap',
    desc: 'Wrinkle-free silicone cap that reduces drag and protects hair from chlorine.',
    price: '$19.99',
    rating: 4,
    category: 'Caps',
  },
];

const stats = [
  { value: '50K+', label: 'Happy Swimmers' },
  { value: '200+', label: 'Products' },
  { value: '15+', label: 'Years Experience' },
  { value: '98%', label: 'Satisfaction Rate' },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} className={`w-4 h-4 ${i <= count ? 'text-amber-400 fill-amber-400' : 'text-slate-200 fill-slate-200'}`} />
      ))}
    </div>
  );
}

function FeaturedProducts() {
  const containerRef = useRef(null);
  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="bg-sky-50 py-16 md:py-24" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="inline-block bg-cyan-100 text-cyan-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
              Top Picks
            </span>
            <h2 id="home-featured-heading" className="text-3xl md:text-4xl font-bold text-sky-900">
              Featured Equipment
            </h2>
            <p id="home-featured-sub" className="text-slate-600 mt-2 max-w-lg">
              Hand-picked gear trusted by competitive swimmers and coaches worldwide.
            </p>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sky-700 font-semibold hover:text-sky-900 transition shrink-0"
          >
            View all products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredProducts.map((p) => (
            <div key={p.imgId} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden border border-sky-100 flex flex-col">
              <div className="relative h-52 bg-sky-100 overflow-hidden">
                <img
                  alt={p.title}
                  className="w-full h-full object-cover"
                  data-strk-img-id={p.imgId}
                  data-strk-img={`[${p.descId}] [${p.titleId}] [home-featured-sub] [home-featured-heading]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <span className="absolute top-3 left-3 bg-cyan-100 text-cyan-700 text-xs font-semibold px-3 py-1 rounded-full">{p.badge}</span>
                <span className="absolute top-3 right-3 bg-white/80 text-sky-700 text-xs font-semibold px-2 py-1 rounded-full">{p.category}</span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 id={p.titleId} className="text-xl font-semibold text-sky-900 mb-2">{p.title}</h3>
                <p id={p.descId} className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">{p.desc}</p>
                <div className="flex items-center justify-between mt-auto">
                  <StarRating count={p.rating} />
                  <span className="text-sky-700 font-bold text-lg">{p.price}</span>
                </div>
                <Link
                  to="/products"
                  className="mt-4 w-full bg-sky-700 hover:bg-sky-800 text-white rounded-full py-2.5 font-semibold text-sm transition text-center block"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsBar() {
  return (
    <div className="bg-sky-700 py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl md:text-4xl font-extrabold text-white mb-1">{s.value}</div>
              <div className="text-sky-200 text-sm font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CtaBanner() {
  return (
    <section className="bg-gradient-to-r from-sky-900 to-cyan-700 py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Ready to Elevate Your Swimming?
        </h2>
        <p className="text-sky-100 text-lg mb-8">
          Browse our full catalog of professional swimming equipment and find the perfect gear for your next session.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/products"
            className="bg-white text-sky-700 hover:bg-cyan-50 rounded-full px-8 py-3.5 font-semibold transition shadow-lg"
          >
            Shop All Products
          </Link>
          <Link
            to="/contact"
            className="border-2 border-white text-white hover:bg-white hover:text-sky-700 rounded-full px-8 py-3.5 font-semibold transition"
          >
            Get Expert Advice
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <FeaturedProducts />
      <Features />
      <Testimonials />
      <Brands />
      <CtaBanner />
    </>
  );
}
