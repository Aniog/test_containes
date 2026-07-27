import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, Ship, Box, TrendingUp, Search } from 'lucide-react';

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          data-strk-bg-id="home-hero-bg"
          data-strk-bg="[hero-subtitle] [hero-title] factory containers shipping"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="container relative z-20 mx-auto px-4 text-center text-white">
          <h1 id="hero-title" className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="hero-subtitle" className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-200">
            We help overseas buyers find reliable suppliers, verify factories, inspect quality, 
            follow production, and coordinate shipping.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white border-0" asChild>
              <Link to="/contact">Get a Free Sourcing Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20" asChild>
              <Link to="/how-it-works">See How It Works</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Points / Problems We Solve */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 id="problems-title" className="text-3xl font-bold text-gray-900">Your Local Partner in China</h2>
            <p id="problems-subtitle" className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Eliminate timezone differences, language barriers, and quality risks with our boots-on-the-ground team.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Supplier Sourcing</h3>
              <p className="text-gray-600">Find real manufacturers, negotiate best prices, and avoid middlemen trading companies.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Control</h3>
              <p className="text-gray-600">Rigorous pre-shipment inspections to ensure products meet your exact specifications.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Ship className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Logistics & Shipping</h3>
              <p className="text-gray-600">Consolidate shipments, handle customs clearance, and deliver to your door globally.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 id="process-title" className="text-3xl font-bold text-gray-900">Our Sourcing Process</h2>
            <p id="process-subtitle" className="text-gray-600 mt-4 max-w-2xl mx-auto">
              A transparent, systematic approach to manage your supply chain in China from inquiry to delivery.
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl z-10 group-hover:scale-110 transition-transform">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Inquiry & Sourcing</h3>
                  <p className="text-gray-600">Send us your product details. We source suitable factories, analyze costs, and provide a comprehensive quote.</p>
                </div>
              </div>
              
              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl z-10 group-hover:scale-110 transition-transform">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Sample Making</h3>
                  <p className="text-gray-600">We arrange samples from selected suppliers, consolidate them, and send to you for approval.</p>
                </div>
              </div>
              
              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl z-10 group-hover:scale-110 transition-transform">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Order & Production</h3>
                  <p className="text-gray-600">Draft legal contracts, place official orders, and closely monitor the production schedule to ensure timely delivery.</p>
                </div>
              </div>
              
              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl z-10 group-hover:scale-110 transition-transform">4</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Inspection & Shipping</h3>
                  <p className="text-gray-600">Perform AQL inspections, issue detailed reports, block defective goods, and arrange optimal shipping paths.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories We Source */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 id="categories-title" className="text-3xl font-bold text-gray-900">Products We Source</h2>
            <p id="categories-subtitle" className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Extensive network across thousands of verified factories in various industries.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { id: 'electronics', name: 'Consumer Electronics', desc: 'Gadgets, accessories, smart home' },
              { id: 'home', name: 'Home & Kitchen', desc: 'Decor, appliances, furniture' },
              { id: 'apparel', name: 'Apparel & Textiles', desc: 'Clothing, fabrics, accessories' },
              { id: 'outdoor', name: 'Sports & Outdoors', desc: 'Camping, fitness, gear' },
              { id: 'toys', name: 'Toys & Hobbies', desc: 'Educational, games, models' },
              { id: 'beauty', name: 'Beauty & Personal Care', desc: 'Tools, packaging, cosmetics' },
              { id: 'hardware', name: 'Hardware & Tools', desc: 'Building materials, instruments' },
              { id: 'custom', name: 'Custom OEM/ODM', desc: 'Your unique product designs' },
            ].map(cat => (
              <div key={cat.id} className="bg-white overflow-hidden rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                <div className="h-40 overflow-hidden bg-gray-200">
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.name}
                    data-strk-img-id={`cat-${cat.id}-img`}
                    data-strk-img={`[cat-${cat.id}-name] [categories-title] wholesale manufacturing`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="400"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 id={`cat-${cat.id}-name`} className="font-bold text-lg mb-1">{cat.name}</h3>
                  <p className="text-sm text-gray-500">{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button variant="outline" asChild>
              <Link to="/products">View All Categories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="cta-bg"
          data-strk-bg="manufacturing factory abstract pattern"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Optimize Your Supply Chain?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get a comprehensive sourcing quotation within 48 hours. No obligation.
          </p>
          <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 text-lg px-8 py-6" asChild>
            <Link to="/contact">Request a Quick Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
