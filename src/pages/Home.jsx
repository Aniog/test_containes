import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShieldCheck, ClipboardCheck, Truck, CheckCircle2, ArrowRight } from 'lucide-react';
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current && typeof ImageHelper !== 'undefined') {
        try {
          ImageHelper.loadImages(strkImgConfig, containerRef.current);
        } catch (e) {
          console.error("ImageHelper error:", e);
        }
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef} className="overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-slate-50">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 relative z-10 text-slate-900">
            <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600 font-medium">Your Trusted Sourcing Partner in China</span>
            </div>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-7xl font-display font-bold leading-tight">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-xl text-slate-600 max-w-xl leading-relaxed font-medium">
              We help overseas buyers find reliable suppliers, verify factories, inspect quality, and coordinate shipping. Minimize risks and maximize profits in your China supply chain.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/contact" className="btn-accent px-10 py-5 rounded-md font-bold text-xl hover:bg-accent/90 transition-all text-center shadow-xl">
                Get a Free Sourcing Quote
              </Link>
              <Link to="/services" className="btn-outline px-10 py-5 rounded-md font-bold text-xl text-center">
                Our Services
              </Link>
            </div>
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i+100}`} alt="User" />
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">
                Trusted by <span className="text-primary">500+</span> businesses
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative z-10 border-8 border-white">
              <img
                data-strk-img-id="hero-image-home"
                data-strk-img="[hero-subtitle] [hero-title] factory warehouse shipping"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                alt="China Sourcing Agent"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-2xl z-20 hidden md:block border border-slate-100">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <ShieldCheck size={32} />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-lg leading-none">100% Guaranteed</p>
                  <p className="text-sm text-slate-500 mt-2 font-medium">Supplier Verification</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { val: "10+", lab: "Years Experience" },
              { val: "2000+", lab: "Orders Managed" },
              { val: "500+", lab: "Reliable Suppliers" },
              { val: "24/7", lab: "Expert Support" }
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-3">
                <span className="text-4xl font-bold text-primary">{stat.val}</span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">{stat.lab}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 id="services-title" className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
              Professional Sourcing Solutions
            </h2>
            <p id="services-desc" className="text-xl text-slate-600 font-medium">
              We manage every step of your supply chain in China, ensuring quality and reliability at every stage.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { icon: <Search />, title: "Product Sourcing", desc: "Finding vetted manufacturers that meet your specific quality and price targets." },
              { icon: <ShieldCheck />, title: "Supplier Audit", desc: "Rigorous on-site factory audits and background checks to mitigate risks." },
              { icon: <ClipboardCheck />, title: "Quality Control", desc: "Pre-shipment inspections following AQL standards for total peace of mind." },
              { icon: <Truck />, title: "Full Logistics", desc: "Managing sea, air, and train freight with all customs and export documents." }
            ].map((service, idx) => (
              <div key={idx} className="p-10 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl transition-all group">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                  {React.cloneElement(service.icon, { size: 32 })}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 text-base leading-relaxed mb-8 font-medium">{service.desc}</p>
                <Link to="/services" className="text-primary font-bold text-sm inline-flex items-center group-hover:translate-x-1 transition-transform">
                  Learn More <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-10 leading-tight">
            Ready to Scaled Your Business?
          </h2>
          <p className="text-2xl text-slate-300 mb-12 max-w-2xl mx-auto font-medium">
            Join hundreds of global brands that rely on SSourcing China for their professional supply chain.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/contact" className="bg-accent text-white px-12 py-5 rounded-md font-bold text-2xl hover:bg-accent/90 transition-all shadow-xl">
              Get Started Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
