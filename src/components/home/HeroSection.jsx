import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Globe, Shield, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const trustPoints = [
  'No upfront fees until you approve the supplier',
  'English-speaking team, China-based operations',
  'Serving buyers from 30+ countries',
];

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={containerRef} className="relative bg-brand-navy overflow-hidden">
      {/* Background overlay image */}
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="hero-bg-main-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-800 bg-opacity-60 text-blue-200 text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider mb-6">
              <Globe className="w-3.5 h-3.5" />
              China-Based · Global Reach
            </div>
            <h1
              id="hero-title"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6"
            >
              China Sourcing Agent for Global Buyers
            </h1>
            <p
              id="hero-subtitle"
              className="text-lg md:text-xl text-blue-100 leading-relaxed mb-8 max-w-xl"
            >
              We help overseas buyers find reliable Chinese suppliers, verify factories,
              inspect product quality, and coordinate shipping — so you can import with confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-lg text-base transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 border-2 border-blue-300 text-blue-100 hover:bg-blue-800 font-semibold px-7 py-3.5 rounded-lg text-base transition-colors"
              >
                How It Works
              </Link>
            </div>

            <ul className="space-y-2">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-center gap-2 text-blue-100 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Hero image */}
          <div className="hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                data-strk-img-id="hero-factory-img-d4e5f6"
                data-strk-img="[hero-subtitle] [hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="China factory sourcing"
                className="w-full h-80 object-cover"
              />
              {/* Floating stat card */}
              <div className="absolute bottom-4 left-4 bg-white rounded-xl shadow-lg px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Avg. Client Rating</p>
                    <p className="text-lg font-bold text-slate-900">4.9 / 5.0</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-blue-800 pt-10">
          {[
            { value: '500+', label: 'Verified Suppliers' },
            { value: '30+', label: 'Countries Served' },
            { value: '8 Years', label: 'Industry Experience' },
            { value: '98%', label: 'On-Time Delivery Rate' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <p className="text-sm text-blue-300 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
