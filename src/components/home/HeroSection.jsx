import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Award, Clock, Users } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative bg-primary overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <h1
            id="hero-title"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight"
          >
            Precision Sheet Metal Folding Solutions
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed"
          >
            Industry-leading double folding machines and sheet metal folders engineered for accuracy, durability, and peak performance.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Explore Products
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-slate-600 hover:border-accent text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[
            { icon: Shield, value: '25+', label: 'Years Experience' },
            { icon: Award, value: '500+', label: 'Machines Delivered' },
            { icon: Clock, value: '24/7', label: 'Support Available' },
            { icon: Users, value: '50+', label: 'Countries Served' },
          ].map((stat, i) => (
            <div key={i} className="text-center md:text-left">
              <stat.icon className="w-8 h-8 text-accent mx-auto md:mx-0" />
              <p className="mt-2 text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
              <p className="text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
