import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { CheckCircle, Zap, Shield, Users } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized for speed so your visitors get the best experience possible.',
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security keeps your data and your customers safe.',
  },
  {
    icon: Users,
    title: 'Built for Teams',
    description: 'Collaborate seamlessly with your team and manage contacts together.',
  },
  {
    icon: CheckCircle,
    title: 'Easy to Use',
    description: 'Intuitive interface means you spend less time learning and more time growing.',
  },
];

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-white pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-indigo-50 text-indigo-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Now in public beta
          </span>
          <h1 id="hero-title" className="text-5xl font-bold text-gray-900 leading-tight mb-6">
            Connect with your audience,<br className="hidden md:block" /> effortlessly
          </h1>
          <p id="hero-subtitle" className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
            A beautiful landing page that captures leads and keeps them organized — all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-base"
            >
              Get in touch
            </a>
            <a
              href="#features"
              className="border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold px-8 py-3.5 rounded-lg transition-colors text-base"
            >
              Learn more
            </a>
          </div>
        </div>

        {/* Hero image */}
        <div className="max-w-5xl mx-auto mt-16 rounded-2xl overflow-hidden shadow-xl border border-gray-200">
          <img
            data-strk-img-id="hero-main-img-9a3f2c"
            data-strk-img="[hero-subtitle] [hero-title]"
            data-strk-img-ratio="16x9"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Hero visual"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-gray-50 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 id="features-title" className="text-3xl font-bold text-gray-900 mb-4">
              Everything you need to grow
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Simple tools that make a big difference for your business.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-11 h-11 bg-indigo-50 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
