import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import { CheckCircle, ShieldCheck, Factory, Truck, Search, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Mock config for now since we don't have the real one
const strkImgConfig = {};

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Only load if config is actually provided
    if (Object.keys(strkImgConfig).length > 0) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32 bg-slate-900 text-white">
        <div 
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="hero-bg-1"
          data-strk-bg="[hero-title] [hero-subtitle] factory floor QC shipping"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-xl text-slate-300 mb-8 leading-relaxed">
              Find reliable suppliers, verify factories, inspect quality, and manage logistics with our expert team on the ground in China.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-bold px-8 py-6 rounded-lg text-lg">
                Get a Free Sourcing Quote
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold px-8 py-6 rounded-lg text-lg">
                View Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center gap-3">
              <CheckCircle className="text-secondary w-6 h-6 shrink-0" />
              <span className="font-semibold text-slate-700">10+ Years Experience</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-secondary w-6 h-6 shrink-0" />
              <span className="font-semibold text-slate-700">Verified Factory Network</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-secondary w-6 h-6 shrink-0" />
              <span className="font-semibold text-slate-700">100% Quality Guarantee</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-secondary w-6 h-6 shrink-0" />
              <span className="font-semibold text-slate-700">International Logistics</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our End-to-End Sourcing Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">We handle the complexities of sourcing from China so you can focus on growing your business.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Search className="w-10 h-10" />}
              title="Supplier Sourcing"
              description="We find and screen potential suppliers to ensure they meet your specific requirements and standards."
              imgId="service-1"
            />
            <ServiceCard 
              icon={<ShieldCheck className="w-10 h-10" />}
              title="Factory Verification"
              description="On-site audits to verify factory capabilities, certifications, and social compliance."
              imgId="service-2"
            />
            <ServiceCard 
              icon={<Factory className="w-10 h-10" />}
              title="Quality Control"
              description="Rigorous pre-shipment inspections to ensure products meet your quality standards."
              imgId="service-3"
            />
            <ServiceCard 
              icon={<Truck className="w-10 h-10" />}
              title="Logistics Support"
              description="Shipping coordination, customs clearance, and delivery tracking to your doorstep."
              imgId="service-4"
            />
            <ServiceCard 
              icon={<Quote className="w-10 h-10" />}
              title="Price Negotiation"
              description="Using our local knowledge to secure the best prices without compromising on quality."
              imgId="service-5"
            />
            <ServiceCard 
              icon={<Factory className="w-10 h-10" />}
              title="Production Monitoring"
              description="Regular updates and follow-ups to ensure your orders are produced on time."
              imgId="service-6"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Sourcing Correctly?</h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">Contact us today for a free consultation and sourcing quote tailored to your needs.</p>
          <Button size="lg" className="bg-white text-secondary hover:bg-slate-100 font-bold px-10 py-7 rounded-lg text-xl shadow-lg">
            Get Started Now
          </Button>
        </div>
      </section>
    </div>
  );
};

const ServiceCard = ({ icon, title, description, imgId }) => (
  <div className="p-8 border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition bg-slate-50 group">
    <div className="mb-6 text-secondary group-hover:scale-110 transition-transform">{icon}</div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-slate-600 mb-6">{description}</p>
    <div className="relative h-48 rounded-lg overflow-hidden border border-slate-200">
      <img 
        data-strk-img-id={imgId}
        data-strk-img={`${title} China factory sourcing`}
        data-strk-img-ratio="3x2"
        data-strk-img-width="600"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={title}
        className="object-cover w-full h-full"
      />
    </div>
  </div>
);

export default Home;
