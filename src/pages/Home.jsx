import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, ShieldCheck, Truck, BarChart3, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div className="flex flex-col min-h-screen" ref={containerRef}>
      {/* Hero Section */}
      <section 
        className="relative py-20 md:py-32 lg:py-40 border-b border-border overflow-hidden text-white"
      >
        <div 
           className="absolute inset-0 z-0 bg-slate-900"
           data-strk-bg-id="hero-bg-92f1b"
           data-strk-bg="import export logistics port shipping containers"
           data-strk-bg-ratio="16x9"
           data-strk-bg-width="1600"
        >
          <div className="absolute inset-0 bg-slate-900/80"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className="max-w-2xl text-white">
              <div className="inline-flex items-center rounded-full border border-slate-700 bg-slate-800/50 px-3 py-1 text-sm font-medium text-slate-300 md:mb-6 mb-4">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                Trusted by 500+ Importers Worldwide
              </div>
              <h1 id="hero-title" className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6">
                China Sourcing <br />
                <span className="text-primary">Without The Risks</span>
              </h1>
              <p id="hero-desc" className="text-lg md:text-xl text-slate-300 mb-8 max-w-lg leading-relaxed">
                Your dedicated China sourcing agent. We help global buyers find reliable suppliers, verify factories, inspect quality, and coordinate shipping.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-base h-12 px-8">
                  <Link to="/contact">
                    Get a Free Sourcing Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base h-12 px-8 bg-transparent text-white border-slate-700 hover:bg-slate-800 hover:text-white">
                  <Link to="/how-it-works">How We Work</Link>
                </Button>
              </div>
            </div>
            
            {/* Hero Image Component */}
            <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-800/50 aspect-[4/3] flex items-center justify-center">
                 <img
                   alt="Factory inspection"
                   className="absolute inset-0 w-full h-full object-cover opacity-80"
                   data-strk-img-id="hero-factory-inspection-a1"
                   data-strk-img="factory quality control inspector china"
                   data-strk-img-ratio="4x3"
                   data-strk-img-width="800"
                   src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                 />
                 <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/90 via-slate-900/40 to-transparent z-10 pointer-events-none"></div>
                 {/* Placeholder for hero image */}
                 <div className="w-full h-full p-8 flex flex-col justify-between relative overflow-hidden text-slate-300">
                    <div className="flex justify-between items-start z-10">
                      <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-700 backdrop-blur-sm">
                        <Search className="h-6 w-6 text-primary mb-2" />
                        <div className="text-xs font-medium uppercase tracking-wider text-slate-400">Supplier Search</div>
                        <div className="text-sm font-bold text-white">Verified Factories</div>
                      </div>
                      <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-700 backdrop-blur-sm">
                        <ShieldCheck className="h-6 w-6 text-green-500 mb-2" />
                        <div className="text-xs font-medium uppercase tracking-wider text-slate-400">Quality Control</div>
                        <div className="text-sm font-bold text-white">0% Defect Rate</div>
                      </div>
                    </div>
                    <div className="bg-slate-900/80 p-4 rounded-lg border border-slate-700 backdrop-blur-sm mt-auto z-10 flex items-center gap-4">
                      <div className="h-10 w-10 bg-primary/20 rounded-full flex items-center justify-center">
                        <Truck className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">Global Shipping</div>
                        <div className="text-xs text-slate-400">Door-to-door logistics managed</div>
                      </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-wider mb-8">
            Solving Sourcing Problems For Industries Worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Generic placeholder logos */}
            {['Electronics', 'Apparel', 'Home Goods', 'Machinery', 'Auto Parts'].map((industry) => (
              <div key={industry} className="text-xl font-bold text-slate-800 flex items-center gap-2">
                 <div className="w-6 h-6 bg-slate-300 rounded-sm"></div>
                 {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="home-services-title" className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900 mb-4">
              Comprehensive Sourcing Solutions
            </h2>
            <p id="home-services-desc" className="text-lg text-slate-600">
              We handle the complex, risky parts of manufacturing in China so you can focus on growing your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Search,
                title: "Supplier Sourcing",
                desc: "We skip the middlemen on Alibaba and find real manufacturers with the best prices and capabilities."
              },
              {
                icon: ShieldCheck,
                title: "Factory Audits",
                desc: "On-site verification of factory licenses, production capacity, and working conditions before you pay."
              },
              {
                icon: BarChart3,
                title: "Quality Inspection",
                desc: "Pre-shipment inspections based on AQL standards to ensure products meet your exact specifications."
              },
              {
                icon: Truck,
                title: "Shipping & Logistics",
                desc: "Consolidating samples and managing sea/air freight with customs clearance to your door."
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/services">Explore All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 id="home-why-title" className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900 mb-6">
                Why Buyers Lose Money Without a Sourcing Agent
              </h2>
              <p id="home-why-desc" className="text-lg text-slate-600 mb-8">
                Sourcing independently often leads to communication barriers, missed deadlines, substandard quality, and hidden fees. We act as your local office in China to prevent these expensive mistakes.
              </p>
              
              <div className="space-y-6">
                {[
                  "No language or cultural barriers",
                  "Avoid trading companies posing as factories",
                  "Catch quality issues before shipment",
                  "Secure payment terms and contract protection"
                ].map((point, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-lg font-medium text-slate-800">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-slate-100 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-slate-900 rounded-2xl p-8 md:p-12 shadow-xl text-white">
                <h3 className="text-2xl font-bold mb-8">The SSourcing China Difference</h3>
                <div className="space-y-6">
                  <div className="border-b border-slate-700 pb-6">
                    <div className="text-4xl font-bold text-primary mb-2">100%</div>
                    <div className="text-lg font-medium mb-1">Transparent Pricing</div>
                    <div className="text-slate-400">No hidden kickbacks from factories. We charge a flat percentage of the order value.</div>
                  </div>
                  <div className="border-b border-slate-700 pb-6">
                    <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                    <div className="text-lg font-medium mb-1">Local Presence</div>
                    <div className="text-slate-400">Our team is on the ground in major manufacturing hubs ready to visit factories.</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">Risk-Free</div>
                    <div className="text-lg font-medium mb-1">Quality Guarantee</div>
                    <div className="text-slate-400">We don't authorize the final payment until goods pass rigorous inspection.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            Ready to Streamline Your China Sourcing?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
            Tell us about your product requirements. We'll evaluate feasibility and provide a tailored sourcing strategy within 24 hours.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-primary hover:bg-white/90 h-14 px-10 text-lg">
            <Link to="/contact">Get Your Free Sourcing Plan</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};
