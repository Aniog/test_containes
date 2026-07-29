import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Truck, Search, Factory, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-[650px] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          data-strk-bg-id="hero-bg-ssourcing"
          data-strk-bg="[hero-title] [hero-subtitle] China manufacturing warehouse"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 z-10 bg-primary/75" />
        
        <div className="container relative z-20 mx-auto px-4">
          <div className="max-w-2xl text-primary-foreground">
            <h1 id="hero-title" className="text-4xl md:text-6xl font-extrabold font-heading mb-6 tracking-tight">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl mb-8 text-primary-foreground/90 leading-relaxed font-light">
              Find reliable suppliers, verify factories, and ensure product quality with our boots-on-the-ground team in China. Your transparent supply chain starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-bold px-8 py-7 text-lg shadow-lg">
                <Link to="/contact">Get a Free Sourcing Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white/10 px-8 py-7 text-lg">
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 id="services-title" className="text-3xl md:text-4xl font-bold font-heading mb-4 text-primary uppercase tracking-wider">End-to-End Sourcing Solutions</h2>
            <p className="text-muted-foreground">We handle everything from the initial search to the final shipment, giving you peace of mind.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Search, title: "Product Sourcing", desc: "Finding the best factories matching your specs and budget using our local network." },
              { icon: Factory, title: "Factory Audit", desc: "Physical verification of supplier credentials, certifications, and production capacity." },
              { icon: CheckCircle, title: "Quality Control", desc: "Rigorous on-site inspections before items leave the warehouse. No surprises." },
              { icon: Truck, title: "Shipping Support", desc: "Coordinating logistics, customs, and delivery from China to your destination." }
            ].map((s, idx) => (
              <div key={idx} className="bg-background p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 text-left group">
                <div className="bg-secondary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                  <s.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                <Link to="/services" className="inline-flex items-center mt-6 text-secondary font-bold hover:translate-x-1 transition-transform text-xs uppercase tracking-widest">
                  View Detail <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <img 
                data-strk-img-id="qc-inspection-img"
                data-strk-img="[trust-title] [trust-desc] Quality inspection China factory"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                alt="Quality Inspection"
                className="rounded-2xl shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-secondary -z-0 rounded-2xl opacity-10" />
            </div>
            <div className="lg:w-1/2 space-y-8">
              <h2 id="trust-title" className="text-3xl md:text-5xl font-bold font-heading text-primary leading-tight">Your Transparent Office in China</h2>
              <p id="trust-desc" className="text-muted-foreground text-lg leading-relaxed">
                Navigating the Chinese manufacturing landscape can be challenging. We eliminate the risks of distance, language, and culture by being your local representative on the ground.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "No Hidden Commissions",
                  "Verified Factory Access",
                  "Bilingual Communication",
                  "Real-time QC Reports",
                  "Flexible Sourcing Plans",
                  "Secure Payment Escrow"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="text-secondary h-5 w-5 shrink-0" />
                    <span className="font-semibold text-primary/80">{item}</span>
                  </div>
                ))}
              </div>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/how-it-works">See Our Process</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Proof */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Suppliers Verified", value: "500+" },
              { label: "Successful Projects", value: "1,200+" },
              { label: "Countries Served", value: "30+" },
              { label: "Years Experience", value: "12+" }
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">{stat.value}</div>
                <div className="text-sm text-primary-foreground/60 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
