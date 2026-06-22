import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from "@/components/ui/card";
import { 
  CheckCircle2, 
  Search, 
  ShieldCheck, 
  PackageSearch, 
  Ship, 
  ArrowRight,
  Globe,
  Factory,
  ThumbsUp
} from 'lucide-react';
import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div className="flex flex-col w-full" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative w-full bg-slate-900 text-white min-h-[600px] flex items-center">
        <div 
          className="absolute inset-0 z-0 opacity-40 mix-blend-overlay"
          data-strk-bg-id="hero-bg-ssourcing"
          data-strk-bg="[hero-headline] [hero-subheadline]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="container mx-auto px-4 md:px-6 relative z-10 w-full max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 id="hero-headline" className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight text-white">
              China Sourcing Agent for <span className="text-blue-400">Global Buyers</span>
            </h1>
            <p id="hero-subheadline" className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
              We help overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping from China.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 h-14">
                <Link to="/contact">Get a Free Sourcing Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 h-14 bg-white/10 hover:bg-white/20 border-white/20 text-white border">
                <Link to="/how-it-works">See How It Works</Link>
              </Button>
            </div>
            
            <div className="mt-12 flex items-center gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-400" />
                <span>Verified Suppliers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-400" />
                <span>Quality Guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-400" />
                <span>Timely Shipping</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white w-full">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="services-title" className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">Our Core Sourcing Services</h2>
            <p id="services-subtitle" className="text-lg text-slate-600">End-to-end supply chain management tailored to your business needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow bg-slate-50">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <Search className="w-6 h-6" />
                </div>
                <h3 id="service-1" className="text-xl font-bold text-slate-900 mb-3">Supplier Search</h3>
                <p className="text-slate-600 mb-4">We find and vet reliable manufacturers capable of meeting your exact quality and volume requirements.</p>
                <Link to="/services" className="text-blue-600 font-medium flex items-center gap-1 hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow bg-slate-50">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 id="service-2" className="text-xl font-bold text-slate-900 mb-3">Factory Audit</h3>
                <p className="text-slate-600 mb-4">On-site verification to ensure your suppliers are legitimate, well-equipped, and comply with standards.</p>
                <Link to="/services" className="text-blue-600 font-medium flex items-center gap-1 hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow bg-slate-50">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <PackageSearch className="w-6 h-6" />
                </div>
                <h3 id="service-3" className="text-xl font-bold text-slate-900 mb-3">Quality Control</h3>
                <p className="text-slate-600 mb-4">Rigorous pre-shipment inspections to guarantee products meet your exact specifications before leaving China.</p>
                <Link to="/services" className="text-blue-600 font-medium flex items-center gap-1 hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow bg-slate-50">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <Ship className="w-6 h-6" />
                </div>
                <h3 id="service-4" className="text-xl font-bold text-slate-900 mb-3">Logistics & Shipping</h3>
                <p className="text-slate-600 mb-4">Optimized freight forwarding solutions by sea, air, or rail securely to your warehouse destination.</p>
                <Link to="/services" className="text-blue-600 font-medium flex items-center gap-1 hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust/Problems Solved Section */}
      <section className="py-20 bg-slate-50 w-full">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2">
              <img 
                data-strk-img-id="home-trust-img"
                data-strk-img="[trust-title] [trust-points]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Quality Inspection in China Factory"
                className="rounded-xl shadow-xl w-full object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 id="trust-title" className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">Why Partner With SSourcing China?</h2>
              <p className="text-lg text-slate-600 mb-8">
                Sourcing from overseas can be fraught with risks—from communication barriers to quality issues and delayed shipments. We act as your eyes and ears on the ground.
              </p>
              
              <ul id="trust-points" className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <Globe className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-1">Local Expertise, Global Standards</h4>
                    <p className="text-slate-600">Native Chinese agents who understand Western business expectations and international quality standards.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <Factory className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-1">Direct Factory Relationships</h4>
                    <p className="text-slate-600">We bypass middlemen to connect you directly with actual manufacturers, securing better pricing and control.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <ThumbsUp className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-1">Risk Mitigation</h4>
                    <p className="text-slate-600">Strict verification processes and contract negotiations to protect your capital and intellectual property.</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-10">
                 <Button asChild>
                    <Link to="/about">More About Us</Link>
                 </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white w-full">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Streamline Your China Sourcing?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Tell us about your product requirements, and our sourcing experts will get back to you within 24 hours with a customized action plan.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8 h-14 bg-white text-blue-600 hover:bg-slate-100">
            <Link to="/contact">Get a Free Sourcing Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}