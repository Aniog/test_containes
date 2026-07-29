import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const HomeHero = () => {
  return (
    <section className="relative bg-slate-900 text-white py-24 lg:py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-40"
        data-strk-bg-id="hero-bg-ssourcing"
        data-strk-bg="[hero-title] [hero-subtitle] factory production quality control"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-10" />

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl">
          <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="hero-subtitle" className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
            Finding reliable suppliers, verifying factories, and ensuring quality so you can scale your business with confidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg h-14 px-8" asChild>
              <Link to="/contact">Get a Free Sourcing Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-slate-900 text-lg h-14 px-8" asChild>
              <Link to="/services">Explore Our Services</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Reliable Supplier Network",
              "Rigid Quality Control",
              "Direct Factory Communication",
              "End-to-End Logistics Support"
            ].map((point, i) => (
              <div key={i} className="flex items-center space-x-2 text-slate-200">
                <CheckCircle className="text-blue-400 w-5 h-5 flex-shrink-0" />
                <span className="font-medium">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
