import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShieldCheck, ClipboardCheck, Truck, CheckCircle2, ArrowRight } from 'lucide-react';

const Home = () => {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-slate-50">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 relative z-10 text-slate-900">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
              China Sourcing Agent for Global Buyers
            </h1>
            <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
              We help overseas buyers find reliable suppliers, verify factories, inspect quality, and coordinate shipping.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/contact" className="bg-accent text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-accent/90 transition-all text-center">
                Get a Free Sourcing Quote
              </Link>
            </div>
          </div>
          <div className="relative bg-slate-200 aspect-[4/3] rounded-2xl flex items-center justify-center">
             <span className="text-slate-400">Loading Sourcing Visuals...</span>
          </div>
        </div>
      </section>
      <section className="py-20 text-center text-slate-900">
        <h2 className="text-3xl font-bold">Trusted by 500+ Businesses</h2>
      </section>
    </div>
  );
};

export default Home;
