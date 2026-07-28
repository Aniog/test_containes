import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Search, Settings, Truck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button.tsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.tsx';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-24 lg:py-32 xl:py-48 overflow-hidden bg-slate-900 text-white">
        <div
          className="absolute inset-0 z-0 opacity-40 mix-blend-overlay"
          data-strk-bg-id="hero-bg-sourcing-1"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-3xl space-y-6">
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl lg:text-2xl text-slate-300 max-w-[800px]">
              We help you find reliable suppliers, verify factories, inspect quality, and coordinate shipping from China down to the last detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto text-lg h-12 px-8">
                  Get a Free Sourcing Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg h-12 px-8 bg-transparent text-white border-white hover:bg-white hover:text-slate-900">
                  See How It Works
                </Button>
              </Link>
            </div>
            <div className="pt-8 flex items-center gap-6 text-sm font-medium text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Verified Suppliers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Strict QC</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Door-to-Door</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="services-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our End-to-End Sourcing Services</h2>
            <p id="services-subtitle" className="text-lg text-slate-600">We handle the complex details of manufacturing in China so you can focus on growing your business.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
               { id: 'supplier-verification', icon: ShieldCheck, title: 'Supplier Verification', desc: 'Avoid scams and middlemen. We verify factory licenses, capabilities, and visit them on-site.' },
               { id: 'product-sourcing', icon: Search, title: 'Product Sourcing', desc: 'We find the best balance of price and quality by comparing quotes from multiple qualified manufacturers.' },
               { id: 'quality-control', icon: Settings, title: 'Quality Control', desc: 'AQL inspections during and after production. We ensure your products meet exact specifications before shipping.' },
               { id: 'shipping-logistics', icon: Truck, title: 'Shipping & Logistics', desc: 'Sea freight, air freight, or express. We consolidate shipments and manage customs clearance.' },
            ].map((service) => (
              <Card key={service.id} className="border-none shadow-md hover:shadow-lg transition-shadow bg-white">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl" id={`service-${service.id}-title`}>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-slate-600" id={`service-${service.id}-desc`}>
                    {service.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 id="why-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Global Buyers Trust SSourcing China</h2>
                <p id="why-subtitle" className="text-lg text-slate-600">Working with suppliers across the world comes with risks. We act as your local team in China, protecting your interests.</p>
              </div>
              
              <ul className="space-y-6">
                {[
                  { title: 'Zero Hidden Fees', desc: 'Transparent pricing structure. We charge a reasonable service fee based on order value.' },
                  { title: 'Local Expertise', desc: 'Native Chinese speakers who understand western business standards and local manufacturing culture.' },
                  { title: 'Strict Quality Standards', desc: 'We don\'t just trust the factory\'s word. We physically inspect goods before the final payment is made.' },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 bg-primary/10 p-2 rounded-full">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-slate-900">{item.title}</h3>
                      <p className="text-slate-600 mt-1">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              
              <Button size="lg" asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                data-strk-img-id="why-choose-us-factory-1"
                data-strk-img="[why-subtitle] [why-title] factory inspection"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Factory Inspection in China"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div 
           className="absolute inset-0 z-0 opacity-10 mix-blend-overlay"
           data-strk-bg-id="cta-bg-1"
           data-strk-bg="cargo shipping containers"
           data-strk-bg-ratio="16x9"
           data-strk-bg-width="1920"
        />
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to source safely from China?</h2>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-10">
            Tell us about the products you need. We'll get back to you with a free consultation and initial sourcing plan within 24 hours.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="text-lg h-14 px-10">
              Get a Free Sourcing Quote
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};