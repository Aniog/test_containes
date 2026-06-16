import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Zap, Award } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '25+', label: 'Years of Excellence' },
  { value: '60+', label: 'Countries Served' },
  { value: '5,000+', label: 'Machines Delivered' },
  { value: '99.7%', label: 'Uptime Reliability' },
];

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center bg-charcoal overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-main-bg"
        data-strk-bg="[hero-headline] [hero-sub]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/90 to-charcoal/60 z-10" />

      {/* Gold accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber z-20 hidden lg:block" />

      <div className="container-custom relative z-20 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="gold-accent" />
              <span className="text-amber text-sm font-semibold tracking-[0.2em] uppercase">
                Precision Folding Technology
              </span>
            </div>

            <h1
              id="hero-headline"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6"
            >
              Double Folding{' '}
              <span className="text-amber">Machines</span>{' '}
              Built to Perform
            </h1>

            <p
              id="hero-sub"
              className="text-lg text-stone-300 leading-relaxed mb-8 max-w-xl"
            >
              Engineered in Germany for fabricators who demand precision, reliability,
              and productivity. From compact workshops to industrial production lines.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link to="/products" className="btn-primary">
                Explore Our Range
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link to="/contact" className="btn-secondary">
                Request a Quote
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6">
              {[
                { icon: Shield, label: 'ISO 9001 Certified' },
                { icon: Zap, label: 'Industry 4.0 Ready' },
                { icon: Award, label: 'CE Compliant' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-stone-400 text-sm">
                  <Icon className="w-4 h-4 text-amber" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Hero Image */}
          <div className="hidden lg:block">
            <div className="relative">
              <img
                data-strk-img-id="hero-machine-img"
                data-strk-img="[hero-headline] double folding machine sheet metal"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="ARTITECT Double Folding Machine"
                className="rounded-xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-4 -left-4 bg-amber text-charcoal px-5 py-3 rounded-lg shadow-lg">
                <p className="text-xs font-semibold tracking-widest uppercase">Made in Germany</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 pt-10 border-t border-stone-700/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl lg:text-4xl font-bold text-amber mb-1">{stat.value}</p>
                <p className="text-stone-400 text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
