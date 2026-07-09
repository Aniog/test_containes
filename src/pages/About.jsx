import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import Newsletter from '@/components/home/Newsletter';

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div className="bg-ivory min-h-screen">
      {/* Hero */}
      <div ref={containerRef} className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-bg-a1b2c3"
          data-strk-bg="[about-hero-text] [about-hero-title] gold jewelry artisan studio"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1400"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-obsidian/50" />
        <div className="relative z-10 h-full flex items-end pb-12 md:pb-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
            <p className="font-sans text-xs uppercase tracking-widest-xl text-gold mb-3">Our Story</p>
            <h1 id="about-hero-title" className="font-serif text-5xl md:text-7xl font-light text-ivory">
              Made with Intention
            </h1>
            <p id="about-hero-text" className="hidden">Velmora fine jewelry brand story artisan craftsmanship</p>
          </div>
        </div>
      </div>

      {/* Story content */}
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="space-y-8">
          <p className="font-serif text-2xl md:text-3xl font-light text-ink leading-relaxed">
            Velmora was born from a simple belief: that beautiful jewelry shouldn't require a special occasion — or a special budget.
          </p>
          <div className="w-12 h-px bg-gold" />
          <p className="font-sans text-sm text-muted leading-relaxed">
            We design demi-fine pieces that feel genuinely luxurious, crafted with 18K gold plating and hypoallergenic materials that last. Every piece is designed in-house, thoughtfully made, and shipped to you in our signature packaging.
          </p>
          <p className="font-sans text-sm text-muted leading-relaxed">
            Our collections are inspired by the women who wear them — confident, intentional, and beautifully themselves. Whether you're treating yourself or gifting someone you love, Velmora is jewelry that means something.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-6 text-center py-10 border-y border-sand">
          {[
            { value: '2019', label: 'Founded' },
            { value: '12K+', label: 'Customers' },
            { value: '50+', label: 'Designs' },
          ].map(stat => (
            <div key={stat.label}>
              <p className="font-serif text-3xl font-light text-gold mb-1">{stat.value}</p>
              <p className="font-sans text-xs uppercase tracking-widest-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/shop"
            className="inline-block bg-gold text-ivory font-sans text-xs uppercase tracking-widest-md font-medium px-10 py-4 hover:bg-gold-dark transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      <Newsletter />
    </div>
  );
}
