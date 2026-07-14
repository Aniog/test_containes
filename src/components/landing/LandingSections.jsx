import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { CheckCircle, Zap, Shield, Users } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Built for speed and performance so your team can move quickly without friction.',
  },
  {
    icon: Shield,
    title: 'Secure by Default',
    description: 'Enterprise-grade security baked in from day one. Your data stays safe.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Work together seamlessly with real-time updates and shared workspaces.',
  },
  {
    icon: CheckCircle,
    title: 'Easy to Use',
    description: 'Intuitive design means your team is productive from the very first day.',
  },
];

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-indigo-50 text-indigo-600 text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Now in public beta
            </span>
            <h1
              id="hero-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
            >
              Build something people love
            </h1>
            <p
              id="hero-subheading"
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              The all-in-one platform that helps modern teams ship faster, collaborate better, and grow with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors"
              >
                Get in touch
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold rounded-lg transition-colors"
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              data-strk-img-id="hero-main-img-a1b2c3"
              data-strk-img="[hero-subheading] [hero-heading]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Platform preview"
              className="w-full rounded-2xl shadow-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const FeaturesSection = () => (
  <section id="features" className="bg-gray-50 py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-14">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Everything you need to succeed</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Powerful features designed to help your team work smarter, not harder.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.title}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export { HeroSection, FeaturesSection };
