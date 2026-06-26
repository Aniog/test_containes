import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ArrowRight, 
  Search, 
  ShieldCheck, 
  Truck, 
  Factory, 
  Globe, 
  Award, 
  Users,
  ChevronRight,
  HelpCircle
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const services = [
    {
      icon: <Search className="w-8 h-8 text-blue-600" />,
      title: "Supplier Sourcing",
      desc: "We find the most reliable manufacturers in China that meet your specific product requirements.",
      id: "service-sourcing"
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      title: "Factory Verification",
      desc: "Our team conducts on-site audits to verify factory capabilities, certifications, and reliability.",
      id: "service-audit"
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Quality Control",
      desc: "Rigorous inspections at various production stages to ensure your products meet international standards.",
      id: "service-qc"
    },
    {
      icon: <Truck className="w-8 h-8 text-blue-600" />,
      title: "Shipping Logistics",
      desc: "Efficient coordination of sea, air, and rail freight to deliver your goods safely to your doorstep.",
      id: "service-shipping"
    }
  ];

  const processSteps = [
    { title: "Inquiry", desc: "Share your product requirements and target price." },
    { title: "Sourcing", desc: "We find & vet potential suppliers." },
    { title: "Sampling", desc: "Coordinate samples to ensure quality matches." },
    { title: "Production", desc: "Monitor production and quality inspections." },
    { title: "Shipping", desc: "Coordinate logistics and customs clearance." }
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 text-white py-24 lg:py-32">
        <div 
          className="absolute inset-0 z-0 opacity-40"
          data-strk-bg-id="hero-bg-9922x"
          data-strk-bg="[hero-title] [hero-subtitle] China factory port logistics"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              SSourcing China helps you navigate the complex Chinese market. From supplier verification to quality control and shipping, we are your eyes and ears on the ground.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-bold text-lg transition-all shadow-lg flex items-center justify-center gap-2">
                Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/services" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-md font-bold text-lg transition-all text-center">
                Our Services
              </Link>
            </div>
            
            <div className="mt-12 flex items-center gap-8 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Transparent Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>On-site Inspection</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Reliable Logistics</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points / Stats */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <span className="block text-3xl font-bold text-slate-900 mb-1">10+</span>
              <span className="text-sm text-slate-500 font-medium uppercase tracking-wider">Years Experience</span>
            </div>
            <div className="text-center">
               <span className="block text-3xl font-bold text-slate-900 mb-1">500+</span>
              <span className="text-sm text-slate-500 font-medium uppercase tracking-wider">Global Clients</span>
            </div>
            <div className="text-center">
              <span className="block text-3xl font-bold text-slate-900 mb-1">1000+</span>
              <span className="text-sm text-slate-500 font-medium uppercase tracking-wider">Verified Suppliers</span>
            </div>
            <div className="text-center">
               <span className="block text-3xl font-bold text-slate-900 mb-1">$50M+</span>
              <span className="text-sm text-slate-500 font-medium uppercase tracking-wider">Goods Sourced</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 id="services-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Comprehensive Sourcing Solutions</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              We provide end-to-end sourcing services to ensure your buying process from China is smooth, secure, and cost-effective.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-slate-50 p-8 rounded-xl border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all group">
                <div className="mb-6 p-4 bg-white rounded-lg shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors inline-block text-blue-600">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section / Problems we solve */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Partner with SSourcing China?</h2>
              <p className="text-slate-400 mb-8 text-lg">
                Importing from China shouldn't be a gamble. We eliminate the risks associated with international trade.
              </p>
              
              <ul className="space-y-6">
                {[
                  { title: "Beat the Language Barrier", desc: "Our team is fluent in English and Mandarin, ensuring clear communication and negotiation." },
                  { title: "Avoid Scams & Fraud", desc: "On-site factory audits and background checks protect your investment." },
                  { title: "Ensure Quality Consistency", desc: "We implement strict QC protocols at every stage of production." },
                  { title: "Local Presence, Global Vision", desc: "Based in China, but we understand international business standards and requirements." }
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4">
                    <div className="bg-blue-600/30 p-1 rounded-full h-8 w-8 flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle2 className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <div className="bg-blue-600 rounded-2xl p-4 shadow-2xl overflow-hidden">
                <img 
                  data-strk-img-id="why-us-img-1"
                  data-strk-img="China sourcing agent factory inspection quality control"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Quality Control Expert"
                  className="rounded-xl w-full"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-8 -left-8 bg-white text-slate-900 p-6 rounded-xl shadow-2xl hidden md:block">
                <div className="flex items-center gap-4 mb-2">
                  <ShieldCheck className="w-10 h-10 text-blue-600" />
                  <div>
                    <span className="block font-bold text-xl leading-none">100% Secure</span>
                    <span className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Trade Guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Simple Sourcing Process</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">We've streamlined the import process into five clear stages to keep you informed and in control.</p>
          </div>
          
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {processSteps.map((step, idx) => (
                <div key={idx} className="relative z-10 bg-white p-6 text-center">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-6 shadow-lg shadow-blue-200">
                    {idx + 1}
                  </div>
                  <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-16 text-center">
             <Link to="/how-it-works" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline">
              Learn more about our workflow <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <div>
              <h2 id="products-title" className="text-3xl font-bold text-slate-900 mb-4">Products We Source</h2>
              <p className="text-slate-600 max-w-xl">From consumer electronics to industrial machinery, we have deep experience across diverse product categories.</p>
            </div>
            <Link to="/products" className="bg-white hover:bg-slate-50 border border-slate-200 px-6 py-3 rounded-md font-semibold text-slate-900 shadow-sm transition-all flex items-center gap-2">
              All Categories <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Electronics & Tech", img: "electronics smart home gadgets", id: "prod-electronics" },
              { name: "Home & Furniture", img: "modern furniture home decor", id: "prod-furniture" },
              { name: "Apparel & Textiles", img: "fashion apparel clothing factory", id: "prod-apparel" },
              { name: "Kitchen & Dining", img: "kitchenware kitchen utensils", id: "prod-kitchen" },
              { name: "Outdoor & Sport", img: "outdoor gear sports equipment", id: "prod-sport" },
              { name: "Industrial Components", img: "industrial machinery metal parts", id: "prod-industrial" }
            ].map((prod) => (
              <div key={prod.id} className="group relative h-64 rounded-xl overflow-hidden shadow-md">
                <div 
                  className="absolute inset-0 bg-slate-800 transition-transform duration-500 group-hover:scale-110"
                  data-strk-bg-id={prod.id}
                  data-strk-bg={prod.img}
                  data-strk-bg-ratio="4x3"
                  data-strk-bg-width="600"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h4 className="text-white text-xl font-bold">{prod.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-900/30 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Scale Your Production?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Get personalized assistance from our expert team in China. We handle the complexity, you focus on growing your brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-blue-600 hover:bg-blue-50 px-10 py-5 rounded-md font-extrabold text-lg transition-all shadow-xl">
              Get a Free Sourcing Quote
            </Link>
            <button className="flex items-center justify-center gap-2 font-bold px-10 py-5 hover:text-white/80 transition-colors">
              <HelpCircle className="w-5 h-5" /> Speak to an Expert
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
           <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600">Common questions about importing from China with a sourcing agent.</p>
          </div>
          
          <div className="space-y-6">
            {[
              { q: "What are your service fees?", a: "We offer transparent pricing based on the scope of work. Typically, we charge a percentage of the total order value or a flat fee for specific services like factory audits." },
              { q: "Can you help with small orders (MOQ)?", a: "Yes, we work with both established brands and startups. We leverage our supplier network to find manufacturers that can accommodate lower MOQs." },
              { q: "How do you ensure product quality?", a: "We conduct multi-stage inspections (Initial, During, and Pre-shipment) based on AQL standards. You receive a detailed report with photos and videos for approval." }
            ].map((faq, idx) => (
              <div key={idx} className="border border-slate-100 rounded-xl p-6 bg-slate-50">
                <h4 className="font-bold text-lg mb-3 flex items-start gap-3">
                  <span className="text-blue-600">Q:</span> {faq.q}
                </h4>
                <p className="text-slate-600 leading-relaxed text-sm ml-8">
                  <span className="font-semibold text-slate-800 italic">A:</span> {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

