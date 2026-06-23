import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';

// We'll pass a mock config to ImageHelper, as we don't have the real one locally
const mockStrkImgConfig = {
    // Simplified structure for the helper
};

export default function HomeHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    // We would use ImageHelper here in a real Strikingly environment
    // For this boilerplate, we'll rely on the placeholder base64 SVGs initially
    // or standard image urls if we had them.
    if (window.ImageHelper && typeof window.ImageHelper.loadImages === 'function') {
        try {
            window.ImageHelper.loadImages(mockStrkImgConfig, containerRef.current);
        } catch (e) {
            console.log("Image load deferred");
        }
    }
  }, []);

  return (
    <section className="relative overflow-hidden bg-slate-900" ref={containerRef}>
      {/* Background Image Setup */}
      <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop')" }}
            data-strk-bg-id="hero-bg-2a3b4c"
            data-strk-bg="[hero-title] [hero-subtitle]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1920"
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-8 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
            Your On-the-Ground Partner in China
          </div>
          
          <h1 id="hero-title" className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
            China Sourcing Agent for Global Buyers
          </h1>
          
          <p id="hero-subtitle" className="text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
            We help overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping. Save time, reduce risks, and lower costs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              to="/contact"
              className="inline-flex h-14 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex h-14 items-center justify-center rounded-md border border-slate-700 bg-slate-900/50 px-8 text-base font-medium text-white shadow-sm transition-colors hover:bg-slate-800 hover:text-white backdrop-blur-sm"
            >
              Explore Our Services
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-slate-800/60">
            {[
              "Verified Suppliers Only",
              "Strict Quality Control",
              "End-to-End Logistics"
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center text-slate-300">
                <CheckCircle2 className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
