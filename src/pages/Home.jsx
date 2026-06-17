import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Shield, Zap, Settings, ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // ImageHelper loading placeholder logic would go here if config existed
  }, []);

  const featuredFeatures = [
    {
      icon: <Shield className="w-6 h-6 text-amber-600" />,
      title: "Built to Last",
      desc: "Industrial grade components and robust steel construction ensure decades of reliable service."
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-600" />,
      title: "Precision Speed",
      desc: "Advanced CNC controls and high-speed hydraulics maximize throughput without compromising accuracy."
    },
    {
      icon: <Settings className="w-6 h-6 text-amber-600" />,
      title: "Versatile Tooling",
      desc: "Quick-change tool systems for seamless transitions between different sheet metal profiles."
    }
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-slate-900 z-0"
          data-strk-bg-id="hero-bg-928374"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-2xl">
            <h1 id="hero-title" className="text-5xl md:text-7xl font-bold leading-tight mb-6 transition-all">
              Precision Engineering for <span className="text-amber-500">Master Crafters</span>
            </h1>
            <p id="hero-subtitle" className="text-xl md:text-2xl text-slate-300 mb-8 font-light">
              World-class sheet metal folding machines designed for accuracy, speed, and durability.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-md font-semibold text-lg flex items-center gap-2 transition-all">
                View Machines <ChevronRight className="w-5 h-5" />
              </Link>
              <Link to="/contact" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-md font-semibold text-lg transition-all">
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 id="intro-title" className="text-4xl font-bold text-slate-900 mb-6">Redefining the Standard of Metal Folding</h2>
              <p id="intro-desc" className="text-lg text-slate-600 mb-8 leading-relaxed">
                At Artitect Machinery, we specialize in high-performance sheet metal folding technology. 
                Whether you need a double folding machine for complex profiles or a heavy-duty sheet metal folder, 
                our equipment is engineered to deliver flawless results every time. 
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center p-4 border border-slate-100 rounded-lg bg-slate-50">
                  <div className="text-3xl font-bold text-amber-600 mb-1">25+</div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Years Experience</div>
                </div>
                <div className="text-center p-4 border border-slate-100 rounded-lg bg-slate-50">
                  <div className="text-3xl font-bold text-amber-600 mb-1">500+</div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Installs Globally</div>
                </div>
                <div className="text-center p-4 border border-slate-100 rounded-lg bg-slate-50">
                  <div className="text-3xl font-bold text-amber-600 mb-1">99%</div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Client Loyalty</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                data-strk-img-id="intro-machine-img"
                data-strk-img="[intro-desc] [intro-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                alt="Modern Metal Folding Machine" 
                className="rounded-2xl shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-amber-600/30 rounded-2xl z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Features */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="features-title" className="text-4xl font-bold text-slate-900 mb-4">Why Choose Artitect?</h2>
            <p id="features-subtitle" className="text-lg text-slate-600">Engineering excellence that puts your production at the forefront of the industry.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredFeatures.map((f, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all group">
                <div className="mb-6 bg-slate-50 w-16 h-16 flex items-center justify-center rounded-lg group-hover:bg-amber-50 group-hover:text-amber-600 transition-colors">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
                <p className="text-slate-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          {/* Subtle pattern or graphic could go here */}
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Upgrade Your Production?</h2>
          <p className="text-xl text-amber-50 mb-10 max-w-2xl mx-auto">
            Contact our technical team today for a custom consultation and see how Artitect can transform your workflow.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/contact" className="bg-slate-900 hover:bg-slate-800 text-white px-10 py-4 rounded-md font-bold text-lg flex items-center gap-2 shadow-xl transition-all">
              Request a Demo <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
