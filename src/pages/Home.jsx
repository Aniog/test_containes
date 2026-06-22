import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Search, ClipboardCheck, Ship, ArrowRight, CheckCircle2, TrendingUp, Clock } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

// Pre-defined services for the Home page
const services = [
  {
    title: 'Supplier Sourcing',
    description: 'We find reliable manufacturers that meet your specific requirements, price points, and quality standards.',
    icon: Search,
  },
  {
    title: 'Factory Verification',
    description: 'On-site audits to verify factory legitimacy, production capacity, treating compliance and working conditions.',
    icon: ShieldCheck,
  },
  {
    title: 'Quality Control',
    description: 'Pre-shipment inspections and mid-production checks to ensure products match your exact specifications.',
    icon: ClipboardCheck,
  },
  {
    title: 'Shipping & Logistics',
    description: 'We coordinate freight forwarding, customs clearance, and delivery to your destination warehouse.',
    icon: Ship,
  },
];

// Pre-defined trust points
const trustPoints = [
  { value: '10+', label: 'Years Experience', icon: Clock },
  { value: '500+', label: 'Verified Factories', icon: ShieldCheck },
  { value: '1,000+', label: 'Successful Shipments', icon: Ship },
  { value: '30%', label: 'Average Cost Savings', icon: TrendingUp },
];

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    // We wrap this in requestAnimationFrame to ensure the DOM is painted first
    const frameId = window.requestAnimationFrame(() => {
        if(containerRef.current) {
            ImageHelper.loadImages(strkImgConfig, containerRef.current);
        }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 md:pt-32 md:pb-40 overflow-hidden">
        {/* Background Image using data-strk-bg */}
        <div 
          className="absolute inset-0 z-0 bg-blue-900"
          data-strk-bg-id="hero-bg-9j8k7k"
          data-strk-bg="[hero-headline] shipping container port factory"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        >
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-blue-900/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 id="hero-headline" className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
              China Sourcing Agent for Global Buyers
            </h1>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl">
              We help overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3.5 px-8 rounded-md transition-colors shadow-lg text-center text-lg"
              >
                Get a Free Sourcing Quote
              </Link>
              <Link 
                to="/services" 
                className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-medium py-3.5 px-8 rounded-md transition-colors text-center text-lg backdrop-blur-sm"
              >
                View Our Services
              </Link>
            </div>
            
            <div className="mt-12 flex items-center gap-4 text-blue-100/80 text-sm font-medium">
              <div className="flex items-center gap-1"><CheckCircle2 className="h-4 w-4 text-green-400" /> No upfront fees</div>
              <div className="flex items-center gap-1"><CheckCircle2 className="h-4 w-4 text-green-400" /> Native English B2B support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points / Stats Bar */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 md:py-12">
            {trustPoints.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="flex flex-col items-center justify-center text-center">
                  <Icon className="h-8 w-8 text-blue-800 mb-3" />
                  <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                  <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="services-title" className="text-3xl font-bold text-slate-900 mb-4">Comprehensive Sourcing Solutions</h2>
            <p className="text-lg text-slate-600">
              From finding the right factory to delivering goods to your door, we manage the entire supply chain to minimize your risks and costs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-lg border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow group">
                  <div className="bg-blue-50 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                    <Icon className="h-7 w-7 text-blue-800" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Link to="/services" className="inline-flex items-center text-blue-800 font-medium hover:text-blue-900">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Problems We Solve Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 id="problems-title" className="text-3xl font-bold text-slate-900 mb-6">Why You Need a Local Partner in China</h2>
              <p className="text-lg text-slate-600 mb-8">
                Sourcing from China directly can be risky. Communication barriers, varying quality standards, and complex logistics often lead to expensive mistakes.
              </p>
              
              <ul className="space-y-6">
                {[
                  { title: "Avoid Scams & Middlemen", desc: "We verify if you are dealing with a real factory or just a trading company passing off as a manufacturer." },
                  { title: "Prevent Quality Issues", desc: "Our inspectors check your goods before they are shipped, catching defects when they can still be fixed." },
                  { title: "Negotiate Better Prices", desc: "As locals, we know the true market costs and negotiate fiercely on your behalf." },
                ].map((item, idx) => (
                  <li key={idx} className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                      <p className="mt-1 text-slate-600">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              
              <div className="mt-10">
                <Link to="/how-it-works" className="inline-flex items-center bg-blue-800 hover:bg-blue-900 text-white font-medium py-3 px-6 rounded-md transition-colors">
                  See Our Process
                </Link>
              </div>
            </div>
            
            <div className="relative h-96 lg:h-full min-h-[400px] rounded-xl overflow-hidden shadow-lg border border-slate-200">
               <img
                  alt="Quality control inspector checking products in a factory"
                  className="absolute inset-0 w-full h-full object-cover"
                  data-strk-img-id="quality-control-8f2a9c"
                  data-strk-img="[problems-title] quality control inspector looking at products in factory warehouse"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-800 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="cta-title" className="text-3xl md:text-4xl font-bold mb-6">Ready to source securely from China?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Tell us about your product requirements, and our team will get back to you with a detailed sourcing plan within 24 hours.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-md text-lg transition-colors shadow-lg"
          >
            Start Your Sourcing Journey
          </Link>
        </div>
      </section>
    </div>
  );
}