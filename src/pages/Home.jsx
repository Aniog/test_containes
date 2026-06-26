import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, ShieldCheck, ClipboardCheck, PackageCheck, Ship, CheckCircle2, Factory, Globe2 } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { cn } from '@/lib/utils';

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Attempting to load images if SDK has the method, wrapping in try/catch to avoid errors if SDK is mocked without it
    try {
      if (ImageHelper && ImageHelper.loadImages && strkImgConfig) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    } catch (e) {
      console.log('ImageHelper not available or configured yet');
    }
  }, []);

  const services = [
    {
      title: "Supplier Sourcing",
      desc: "We find and evaluate the best manufacturers matching your exact requirements, bypassing middlemen to get direct factory prices.",
      icon: <Search className="w-8 h-8 text-primary" />,
      id: "service-sourcing"
    },
    {
      title: "Factory Verification",
      desc: "On-site audits to verify factory licenses, production capacity, working conditions, and quality management systems.",
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      id: "service-verify"
    },
    {
      title: "Sample & Production",
      desc: "We manage prototyping, negotiate terms, draft solid contracts, and closely follow production to ensure timelines are met.",
      icon: <Factory className="w-8 h-8 text-primary" />,
      id: "service-production"
    },
    {
      title: "Quality Inspection",
      desc: "Pre-shipment and during-production quality control (AQL standards) to guarantee you receive exactly what you ordered.",
      icon: <ClipboardCheck className="w-8 h-8 text-primary" />,
      id: "service-quality"
    },
    {
      title: "Warehousing & Consolidation",
      desc: "We collect goods from multiple suppliers, verify them at our warehouse, and consolidate them to save on shipping costs.",
      icon: <PackageCheck className="w-8 h-8 text-primary" />,
      id: "service-warehouse"
    },
    {
      title: "Global Shipping",
      desc: "Complete logistics solutions including sea freight, air freight, customs clearance, and Amazon FBA prep services.",
      icon: <Ship className="w-8 h-8 text-primary" />,
      id: "service-shipping"
    }
  ];

  const processSteps = [
    { num: "01", title: "Submit Inquiry", desc: "Tell us what products you need, target price, and specifications." },
    { num: "02", title: "Supplier Match", desc: "We provide quotes from 3-5 verified direct manufacturers." },
    { num: "03", title: "Sample Approval", desc: "We consolidate and send samples to you for final approval." },
    { num: "04", title: "Production & QC", desc: "Production begins. We conduct inspections during and after production." },
    { num: "05", title: "Global Delivery", desc: "We arrange shipping directly to your warehouse or FBA center." }
  ];

  const trustPoints = [
    { metric: "10+", label: "Years Experience" },
    { metric: "500+", label: "Verified Factories" },
    { metric: "100%", label: "Quality Guarantee" },
    { metric: "30+", label: "Countries Served" }
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-40 overflow-hidden bg-slate-900 text-white">
        <div 
          className="absolute inset-0 opacity-40 mix-blend-overlay"
          data-strk-bg-id="hero-bg-2a4b"
          data-strk-bg="cargo ship leaving busy port aerial shot"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
        
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight" id="hero-title">
              China Sourcing Agent for Global Buyers
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl" id="hero-desc">
              We help e-commerce sellers, brands, and importers find reliable suppliers, verify factories, inspect quality, and ship worldwide with zero hidden costs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-md font-medium text-lg flex items-center justify-center transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/how-it-works" 
                className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-md font-medium text-lg flex items-center justify-center transition-colors border border-slate-700"
              >
                See How It Works
              </Link>
            </div>
            
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm font-medium text-slate-400">
              <div className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2" />
                No Upfront Fees
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2" />
                Direct Factory Prices
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2" />
                100% Quality Inspected
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b py-10">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-slate-100">
            {trustPoints.map((point, index) => (
              <div key={index} className="text-center px-4">
                <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{point.metric}</div>
                <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* End-to-End Services */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" id="services-title">
              Complete End-to-End Sourcing Solutions
            </h2>
            <p className="text-lg text-slate-600" id="services-desc">
              From finding the right factory to delivering goods to your door, we act as your dedicated team on the ground in China.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3" id={`service-title-${index}`}>
                  {service.title}
                </h3>
                <p className="text-slate-600" id={`service-desc-${index}`}>
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors">
              View all service details <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How We Work vs Traditional */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Why Work With A Professional Sourcing Agent?
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Buying directly from Alibaba or Alibaba often leads to hidden issues: trading companies pretending to be factories, poor quality control, and communication barriers.
              </p>
              
              <div className="space-y-6">
                <div className="flex bg-slate-50 p-4 rounded-lg">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-slate-900">Real Factory Prices</h4>
                    <p className="text-slate-600 mt-1">We bypass trading companies and find direct manufacturers, passing the savings fully to you.</p>
                  </div>
                </div>
                <div className="flex bg-slate-50 p-4 rounded-lg">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-slate-900">Quality Guaranteed</h4>
                    <p className="text-slate-600 mt-1">We don't get paid fully until we physically inspect your goods and verify they meet your standards.</p>
                  </div>
                </div>
                <div className="flex bg-slate-50 p-4 rounded-lg">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-slate-900">Native Communication</h4>
                    <p className="text-slate-600 mt-1">No more misunderstandings. Our bilingual team ensures your exact specifications are understood and met.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-square lg:aspect-[4/3] bg-slate-100">
                <img 
                  data-strk-img-id="factory-audit-visual-b3x"
                  data-strk-img="quality control inspector examining factory products on assembly line"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Quality control inspector at factory"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-slate-100 hidden md:block">
                <div className="flex items-center space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <ShieldCheck className="w-8 h-8 text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-xl">100% Secure</div>
                    <div className="text-slate-500 text-sm">Protected Transactions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              A Transparent, 5-Step Process
            </h2>
            <p className="text-lg text-slate-400">
              Our proven methodology takes the risk out of international trade, keeping you informed at every step of the journey.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[50%] w-full h-[2px] bg-slate-800 -z-10"></div>
                )}
                <div className="w-16 h-16 mx-auto bg-slate-800 border-2 border-primary rounded-full flex items-center justify-center text-xl font-bold text-white mb-6 relative z-10">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-center mb-3">{step.title}</h3>
                <p className="text-slate-400 text-center text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" id="cat-title">
                Products We Source
              </h2>
              <p className="text-lg text-slate-600" id="cat-desc">
                From simple promotional items to complex electronics, our sourcing network covers all major manufacturing hubs in China.
              </p>
            </div>
            <Link to="/products-we-source" className="hidden md:inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors">
              View target industries <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Home & Garden", id: "cat-home", img: "modern clean home interior decor items products" },
              { title: "Consumer Electronics", id: "cat-elec", img: "modern smart home electronics gadgets minimal" },
              { title: "Apparel & Textiles", id: "cat-apparel", img: "clothing manufacturing textiles fabric samples" },
              { title: "Pet Supplies", id: "cat-pet", img: "premium pet products dog toys accessories" }
            ].map((cat, i) => (
              <div key={i} className="group relative rounded-xl overflow-hidden shadow-sm aspect-[4/5] bg-slate-100 flex items-end">
                <div className="absolute inset-0">
                  <img 
                    data-strk-img-id={`cat-img-${i}b`}
                    data-strk-img={cat.img}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent" />
                </div>
                <div className="relative z-10 p-6 w-full">
                  <h3 className="text-xl font-bold text-white" id={cat.id}>{cat.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link to="/products-we-source" className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors">
              View target industries <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}>
        </div>
        <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10 text-center">
          <Globe2 className="w-16 h-16 text-white/80 mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to find the perfect supplier?
          </h2>
          <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
            Tell us about your product requirements. We will analyze your project and provide a customized sourcing plan and quote.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center bg-white text-primary hover:bg-slate-50 px-8 py-4 rounded-md font-bold text-lg transition-colors shadow-lg"
          >
            Submit Your Inquiry Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <p className="text-primary-200 mt-6 text-sm">
            No commitment required. We respond within 24 hours.
          </p>
        </div>
      </section>
    </div>
  );
}
