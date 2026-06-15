import React from 'react';
import { NavLink } from 'react-router-dom';
import { ShieldCheck, Truck, Search, CheckCircle2, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-slate-50 pt-20 pb-24 lg:pt-32 lg:pb-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 id="hero-title" className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="mt-3 text-base text-slate-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl leading-relaxed">
              We help overseas buyers find reliable suppliers, verify factories, inspect quality, and coordinate shipping. Your boots on the ground in China.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <div className="flex flex-col sm:flex-row gap-4">
                <NavLink
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-700 md:text-lg transition-all shadow-lg hover:shadow-xl"
                >
                  Get a Free Sourcing Quote
                </NavLink>
                <NavLink
                  to="/services"
                  className="inline-flex items-center justify-center px-8 py-4 border border-slate-300 text-base font-semibold rounded-lg text-slate-700 bg-white hover:bg-slate-50 md:text-lg transition-all"
                >
                  Our Services
                </NavLink>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4 justify-center lg:justify-start">
                {[
                  { icon: Search, text: 'Find Suppliers' },
                  { icon: ShieldCheck, text: 'Verify Factories' },
                  { icon: CheckCircle2, text: 'Quality Control' },
                  { icon: Truck, text: 'Global Shipping' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center text-sm font-medium text-slate-600">
                    <item.icon className="h-5 w-5 text-blue-500 mr-2" />
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-2xl shadow-2xl overflow-hidden">
              <img
                data-strk-img-id="hero-img-china-factory"
                data-strk-img="[hero-subtitle] [hero-title] factory sourcing professional"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                className="w-full h-full object-cover"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="SSourcing China Hero"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
