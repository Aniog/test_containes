import React from 'react';
import { ArrowRight, Wrench } from 'lucide-react';

const HomeHero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
              <Wrench className="w-4 h-4" />
              <span className="text-sm font-medium">Precision Sheet Metal Solutions</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Advanced Double Folding
              <span className="block text-slate-300">Machinery</span>
            </h1>

            <p className="text-lg text-slate-300 max-w-xl mb-10 leading-relaxed">
              ARTITECT MACHINERY delivers high-performance double folder machines,
              sheet metal folders, and metal folding solutions engineered for precision,
              durability, and industrial-grade reliability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-colors"
              >
                Explore Products
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Request Quote
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square max-w-lg mx-auto relative">
              <div className="w-full h-full bg-slate-800 rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <Wrench className="w-24 h-24 mx-auto mb-4 opacity-80" />
                  <p className="text-lg font-medium opacity-90">Precision Engineering</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl">
                <div className="text-3xl font-bold text-slate-900">25+</div>
                <div className="text-sm text-slate-600">Years Experience</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white rounded-xl p-6 shadow-xl">
                <div className="text-3xl font-bold text-slate-900">500+</div>
                <div className="text-sm text-slate-600">Machines Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
