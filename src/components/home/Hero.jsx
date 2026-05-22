import { useEffect, useRef } from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative bg-gradient-to-br from-green-50 via-white to-yellow-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-sm font-semibold px-4 py-2 rounded-full w-fit">
              <Star className="w-4 h-4 fill-green-600 text-green-600" />
              <span id="hero-badge">Fresh & Organic Fruits</span>
            </div>

            <h1
              id="hero-title"
              className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight"
            >
              Nature's Best <br />
              <span className="text-green-700">Fruits</span>, Delivered
            </h1>

            <p
              id="hero-subtitle"
              className="text-lg text-gray-600 leading-relaxed max-w-md"
            >
              Handpicked seasonal fruits sourced directly from local farms. Fresh, healthy, and delivered to your door every day.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#shop"
                className="inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-full px-7 py-3 transition-colors"
              >
                Shop Now
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#categories"
                className="inline-flex items-center justify-center gap-2 border border-green-700 text-green-700 hover:bg-green-50 font-semibold rounded-full px-7 py-3 transition-colors"
              >
                Browse Categories
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-2">
              {[
                { value: '200+', label: 'Fruit Varieties' },
                { value: '5k+', label: 'Happy Customers' },
                { value: '100%', label: 'Organic' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-extrabold text-green-700">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero image */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                alt="Fresh tropical fruits basket"
                className="w-full h-full object-cover"
                data-strk-img-id="hero-fruit-img-8f2a9c"
                data-strk-img="[hero-subtitle] [hero-title] [hero-badge]"
                data-strk-img-ratio="1x1"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3">
              <span className="text-3xl">🍓</span>
              <div>
                <p className="text-xs text-gray-500">Today's Pick</p>
                <p className="text-sm font-bold text-gray-900">Strawberries</p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-orange-500 text-white rounded-2xl shadow-lg px-4 py-3 text-center">
              <p className="text-xs font-medium">Up to</p>
              <p className="text-xl font-extrabold">30% OFF</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
