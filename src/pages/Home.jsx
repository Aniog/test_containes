import React from 'react';
import { useImageLoader } from '@/hooks/useImageLoader';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, ShieldCheck, Truck, Factory, Search, BarChart3, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const Home = () => {
  const containerRef = useImageLoader();
  return (
    <div className="flex flex-col" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0A2540] py-24 lg:py-32 text-white">
        <div 
          className="absolute inset-0 z-0 opacity-20"
          data-strk-bg-id="hero-bg-9922a"
          data-strk-bg="[hero-title] [hero-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="container relative z-10 px-4">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed font-medium">
              Reliable supplier sourcing, strict factory audits, quality control, and end-to-end logistics coordination from China to your door.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg font-bold bg-secondary hover:bg-secondary/90 text-white">
                  Get a Free Sourcing Quote
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg font-bold border-white/30 text-white hover:bg-white/10">
                  Explore Services
                </Button>
              </Link>
            </div>
            <div className="mt-12 flex items-center gap-8 text-white/60">
              <div className="flex items-center gap-2">
                <ShieldCheck size={20} className="text-secondary" />
                <span className="text-sm font-semibold">10+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={20} className="text-secondary" />
                <span className="text-sm font-semibold">500+ Active Clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="bg-slate-50 border-b">
        <div className="container px-4 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-3xl font-extrabold text-primary mb-1">$500M+</p>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Goods Sourced</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-extrabold text-primary mb-1">2,000+</p>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Verified Factories</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-extrabold text-primary mb-1">5,000+</p>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Inspections Done</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-extrabold text-primary mb-1">99%</p>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Client Retention</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Comprehensive Sourcing Solutions</h2>
            <p className="max-w-2xl mx-auto text-slate-600 text-lg">We manage the entire supply chain so you can focus on growing your brand.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Search, title: "Supplier Sourcing", desc: "We find the best-matched, reliable manufacturers for your specific product requirements." },
              { icon: ShieldCheck, title: "Factory Audits", desc: "Comprehensive on-site verification of factory capabilities, certifications, and standards." },
              { icon: CheckCircle2, title: "Quality Control", desc: "Strict inspections at every stage—pre-production, during production, and pre-shipment." },
              { icon: Factory, title: "Production Follow-up", desc: "Constant monitoring of your orders to ensure on-time delivery and spec compliance." },
              { icon: Truck, title: "Shipping & Logistics", desc: "Consolidation, customs clearance, and global shipping by sea, air, or rail." },
              { icon: BarChart3, title: "Cost Optimization", desc: "Price negotiation and supply chain analysis to maximize your profit margins." }
            ].map((service, idx) => (
              <Card key={idx} className="border-none shadow-sm hover:shadow-md transition-shadow bg-slate-50">
                <CardContent className="pt-8 text-center px-6 pb-8">
                  <div className="inline-flex p-3 bg-white rounded-xl shadow-sm mb-6 text-primary">
                    <service.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">{service.desc}</p>
                  <Link to="/services" className="text-sm font-bold text-secondary flex items-center justify-center gap-1 hover:gap-2 transition-all">
                    Learn More <ArrowRight size={16} />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-primary text-white overflow-hidden">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                data-strk-img-id="why-us-img-1"
                data-strk-img="China warehouse quality inspection professional QC"
                data-strk-img-ratio="4x3"
                data-strk-img-width="720"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                alt="Professional Quality Inspection"
                className="rounded-2xl shadow-2xl relative z-10"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/5 rounded-full blur-3xl" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">Why Smart Sourcing Starts with Us</h2>
              <div className="space-y-8">
                {[
                  { title: "Boots on the Ground", desc: "Our team is physically located in China's major manufacturing hubs (Shenzhen, Guangzhou, Ningbo)." },
                  { title: "No Hidden Fees", desc: "Transparent pricing models that save you money compared to trading company markups." },
                  { title: "Strict QC Standards", desc: "We use international AQL standards to ensure 100% compliance with your requirements." },
                  { title: "Local Market Knowledge", desc: "We understand Chinese business culture and negotiation tactics to get you the best deals." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1">
                      <CheckCircle2 className="text-secondary" size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-white/70 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12">
                <Link to="/how-it-works">
                  <Button className="h-12 px-8 font-bold bg-white text-primary hover:bg-slate-100">
                    See Our Sourcing Process
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-50 border-y">
        <div className="container px-4 text-center">
          <div className="max-w-3xl mx-auto bg-white p-12 rounded-3xl shadow-xl shadow-slate-200/50">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Ready to Source from China with Confidence?</h2>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              Contact us today for a free consultation. Tell us your product requirements, and we'll provide a custom sourcing strategy within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="h-14 px-10 text-lg font-bold">
                  Get My Free Quote
                </Button>
              </Link>
              <a href="mailto:info@ssourcingchina.com">
                <Button size="lg" variant="outline" className="h-14 px-10 text-lg font-bold">
                  Contact via Email
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
