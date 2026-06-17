import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ShieldCheck, Truck, Factory, Search } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div 
          className="absolute inset-0 z-0 bg-slate-900"
          data-strk-bg-id="hero-bg-9a2b1c"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <h1 id="hero-title" className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
              Find reliable suppliers, verify factories, inspect quality, and coordinate shipping. We are your eyes and ears on the ground in China.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="bg-secondary text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-secondary/90 transition-all shadow-lg hover:shadow-secondary/20 flex items-center justify-center gap-2 group"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/services" 
                className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-md font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center"
              >
                Our Services
              </Link>
            </div>
            
            <div className="mt-12 flex items-center gap-8 border-t border-white/10 pt-8 text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm">Verified Suppliers</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span className="text-sm">On-site QC</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5 text-primary" />
                <span className="text-sm">Global Shipping</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section (Logos) */}
      <section className="py-12 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-slate-500 text-sm font-semibold uppercase tracking-widest mb-8">Trusted by buyers across 50+ countries</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale">
            {/* Logo placeholders - can be replaced with real logos */}
            <div className="h-8 w-24 bg-slate-400 rounded-full" />
            <div className="h-8 w-32 bg-slate-400 rounded-full" />
            <div className="h-8 w-28 bg-slate-400 rounded-full" />
            <div className="h-8 w-24 bg-slate-400 rounded-full" />
            <div className="h-8 w-36 bg-slate-400 rounded-full" />
          </div>
        </div>
      </section>

      {/* Services Summary */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 id="services-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Comprehensive China Sourcing Solution</h2>
            <p id="services-subtitle" className="text-lg text-slate-600">From finding the right factory to final quality checks, we handle the complex process so you can focus on growing your business.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Search className="w-8 h-8 text-primary" />,
                title: "Supplier Sourcing",
                desc: "Identify and shortlist the best manufacturers based on your specific requirements and budget.",
                id: "service-1"
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-primary" />,
                title: "Supplier Verification",
                desc: "Legally verify factories, business licenses, and certifications to eliminate scammers.",
                id: "service-2"
              },
              {
                icon: <Factory className="w-8 h-8 text-primary" />,
                title: "Production Follow-up",
                desc: "Manage production schedules, ensure lead times are met, and solve issues on the spot.",
                id: "service-3"
              },
              {
                icon: <CheckCircle className="w-8 h-8 text-primary" />,
                title: "Quality Control",
                desc: "Rigorous pre-shipment inspections following AQL standards to ensure 100% compliance.",
                id: "service-4"
              },
              {
                icon: <Truck className="w-8 h-8 text-primary" />,
                title: "Logistics & Shipping",
                desc: "Consolidate shipments, manage export documents, and coordinate global sea/air freight.",
                id: "service-5"
              },
              {
                icon: <Globe className="w-8 h-8 text-primary" />,
                title: "Payment Management",
                desc: "Securely handle payments and contracts with suppliers to minimize financial risks.",
                id: "service-6"
              }
            ].map((service) => (
              <div key={service.id} className="p-8 rounded-xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-primary/20 hover:shadow-xl transition-all group">
                <div className="mb-6 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 id={`${service.id}-title`} className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p id={`${service.id}-desc`} className="text-slate-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div 
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="why-us-bg-12345"
          data-strk-bg="manufacturing quality control factory inspection"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 italic text-primary">Stop Worrying About Your Supply Chain.</h2>
              <p className="text-xl text-slate-300 mb-12">We solve the most common challenges global buyers face when sourcing from China.</p>
              
              <div className="space-y-8 text-slate-200">
                <div className="flex gap-4">
                  <div className="bg-primary/20 p-2 rounded-full border border-primary/30 h-fit">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">Eliminate Language Barriers</h4>
                    <p className="text-slate-400">Our native team communicates fluently with factory managers to ensure your requirements are perfectly understood.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-primary/20 p-2 rounded-full border border-primary/30 h-fit">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">Reduce Travel Costs</h4>
                    <p className="text-slate-400">No need to travel to China. We visit factories, inspect goods, and send you detailed photo/video reports.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-primary/20 p-2 rounded-full border border-primary/30 h-fit">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">100% Quality Guaranteed</h4>
                    <p className="text-slate-400">We don't accept "factory standard". We enforce your standard, every single time.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden border-8 border-white/5 shadow-2xl relative">
                 <img 
                   data-strk-img-id="qc-officer-ins-1"
                   data-strk-img="quality control inspector checking electronics factory"
                   data-strk-img-ratio="2x3"
                   data-strk-img-width="800"
                   src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                   alt="QC Inspection"
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                    <p className="text-2xl font-bold mb-1">98.5%</p>
                    <p className="text-sm text-slate-300">Client satisfaction rate with our quality control protocols.</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Ready to Start Sourcing Smarter from China?</h2>
          <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">Get in touch today for a free consultation and personalized sourcing quote. No hidden fees, clear pricing, absolute transparency.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact" className="bg-primary text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/20">
              Get a Free Sourcing Quote
            </Link>
            <Link to="/contact" className="bg-white text-slate-900 border border-slate-200 px-10 py-4 rounded-md font-bold text-lg hover:bg-slate-50 transition-all">
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
