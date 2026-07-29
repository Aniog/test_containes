import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Search, CheckCircle, Truck, ArrowRight, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const homeTrustPoints = [
  {
    icon: <Search className="text-primary" size={24} />,
    title: "Supplier Verification",
    desc: "We dive deep into factory credentials to ensure you work with real, reliable manufacturers."
  },
  {
    icon: <Shield className="text-primary" size={24} />,
    title: "On-site QC Inspection",
    desc: "Our inspectors visit factories personally to count pieces and check quality before anything ships."
  },
  {
    icon: <Truck className="text-primary" size={24} />,
    title: "Logistics Management",
    desc: "Full coordination from factory floor to your warehouse, including ocean/air/rail freight."
  }
];

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10 text-center lg:text-left">
            <span id="hero-badge" className="inline-block bg-primary/10 text-primary font-bold text-sm tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
              China Sourcing Expert
            </span>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary leading-[1.15] mb-6">
              China Sourcing Agent <br />
              <span className="text-primary">for Global Buyers</span>
            </h1>
            <p id="hero-desc" className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed font-medium">
              We help you find verified suppliers, manage production, inspect quality, and coordinate shipping. Your professional office in China.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link to="/contact" className="w-full sm:w-auto bg-primary text-white font-bold py-4 px-10 rounded-lg hover:bg-primary-hover shadow-lg shadow-primary/20 transition text-lg">
                Get a Free Sourcing Quote
              </Link>
              <Link to="/services" className="w-full sm:w-auto border-2 border-slate-300 text-slate-700 font-bold py-4 px-10 rounded-lg hover:bg-slate-100 transition text-lg">
                Our Services
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap justify-center lg:justify-start items-center gap-8 opacity-80">
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-green-500" />
                <span className="text-sm font-semibold text-slate-700">10+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-green-500" />
                <span className="text-sm font-semibold text-slate-700">300+ Verified Factories</span>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform lg:rotate-2 transition-transform duration-500 group-hover:rotate-0">
              <img
                data-strk-img-id="hero-img-china-factory"
                data-strk-img="[hero-desc] [hero-title] professional China sourcing agent factory inspection"
                data-strk-img-ratio="4x3"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="SSourcing China Factory Inspection"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-secondary/10 pointer-events-none group-hover:bg-transparent transition-colors"></div>
            </div>
            {/* Decorative elements */}
            <div className="hidden lg:block absolute -top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl -z-10"></div>
            <div className="hidden lg:block absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </section>

      {/* Partners/Logos section */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">Trusted by buyers worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 grayscale opacity-40">
            {/* These should be generic sourcing-related icons or placeholder brand names */}
            <span className="text-xl font-black italic">GLOBALTRADE</span>
            <span className="text-xl font-black italic">EUROIMPORT</span>
            <span className="text-xl font-black italic">AUSSIEPROCURE</span>
            <span className="text-xl font-black italic">USA-TECH</span>
            <span className="text-xl font-black italic">NORDIC-GOODS</span>
          </div>
        </div>
      </section>

      {/* Trust Points / Key Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="trust-title" className="text-3xl md:text-4xl font-extrabold text-secondary mb-4 leading-tight">
              One-Stop China Sourcing Solution
            </h2>
            <p id="trust-desc" className="text-slate-600 text-lg">
              Eliminate the risks of offshore procurement. We act as your eyes and ears on the ground in China.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {homeTrustPoints.map((point, i) => (
              <div key={i} className="group bg-slate-50 p-8 rounded-xl border border-slate-100 hover:border-primary/20 hover:bg-white transition hover:shadow-xl">
                <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                   {point.icon}
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4">{point.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience / Stats Section */}
      <section className="bg-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <p className="text-4xl md:text-5xl font-black text-accent mb-2">10+</p>
              <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">Years Active</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-black text-accent mb-2">300+</p>
              <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">Factories Verified</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-black text-accent mb-2">5k+</p>
              <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">Containers Shipped</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-black text-accent mb-2">100%</p>
              <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">On-ground Presence</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          {/* Faded background image search ref only */}
          <div
            data-strk-bg-id="cta-bg-container-port"
            data-strk-bg="busy container port terminal shipping logistics"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
            className="w-full h-full bg-cover"
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 leading-tight">
            Stop Worrying About Quality. <br />
            Start Sourcing Profits.
          </h2>
          <p className="text-blue-100 text-xl mb-10 font-medium">
            Contact us today for a free initial consultation on your sourcing requirements.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-primary font-bold py-4 px-12 rounded-lg hover:bg-blue-50 transition text-lg shadow-2xl">
            Get Started Now <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
