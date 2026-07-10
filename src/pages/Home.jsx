import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Sun, Droplets, Heart } from 'lucide-react';

const features = [
  { icon: Sun, title: 'Sun-Ripened', desc: 'Our fruits grow under open skies, soaking up natural sunlight for the best flavor.' },
  { icon: Droplets, title: 'Naturally Watered', desc: 'Fed by mountain spring water, our orchards stay lush and healthy year-round.' },
  { icon: Heart, title: 'Grown with Care', desc: 'Every tree is tended by hand. We believe good farming starts with love for the land.' },
];

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          data-strk-bg-id="home-hero-bg-a1b2c3"
          data-strk-bg="[home-hero-subtitle] [home-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-5xl mx-auto px-6 py-32 md:py-44 text-center text-white">
          <p id="home-hero-subtitle" className="text-farm-orange font-medium text-sm uppercase tracking-widest mb-3">
            Fresh from the orchard
          </p>
          <h1 id="home-hero-title" className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Welcome to<br />Green Valley Farm
          </h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
            A family-run fruit farm nestled in the hills, growing the freshest seasonal fruits with care and tradition.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/fruits"
              className="bg-farm-green text-white px-7 py-3 rounded-full font-medium hover:bg-green-800 transition-colors"
            >
              See Our Fruits
            </Link>
            <Link
              to="/about"
              className="border border-white text-white px-7 py-3 rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Why Our Farm?</h2>
          <p className="text-gray-500 mt-2">Simple values, exceptional fruit.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-50 mb-4">
                <Icon className="w-6 h-6 text-farm-green" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-farm-green">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center text-white">
          <h2 className="text-3xl font-bold mb-3">Visit Us This Season</h2>
          <p className="text-white/80 mb-6 max-w-md mx-auto">
            Come pick your own fruit, explore the farm, and take home the freshest produce straight from the tree.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-farm-green px-7 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
