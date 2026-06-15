import React from 'react';
import { NavLink } from 'react-router-dom';
import { ShieldCheck, Truck, Search, Briefcase } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          data-strk-bg-id="hero-bg-1"
          data-strk-bg="China factory floor manufacturing high quality products global shipping"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        >
          <div className="absolute inset-0 bg-blue-900/60" />
        </div>
        
        <div className="container relative mx-auto px-4 text-center">
          <h1 id="hero-title" className="text-4xl md:text-6xl font-bold mb-6">China Sourcing Agent for Global Buyers</h1>
          <p id="hero-description" className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">Your reliable partner on the ground in China. We help you find suppliers, verify factories, and ensure quality production.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <NavLink to="/contact" className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-md transition-colors text-lg">
              Get a Free Sourcing Quote
            </NavLink>
            <NavLink to="/services" className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-3 px-8 rounded-md transition-all text-lg">
              Our Services
            </NavLink>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Search className="h-12 w-12 text-blue-900 mb-4" />
              <h3 className="text-lg font-bold mb-2">1,000+ Verified Suppliers</h3>
              <p className="text-slate-600 text-sm">Access to our extensive network of pre-audited manufacturers.</p>
            </div>
            <div className="flex flex-col items-center">
              <ShieldCheck className="h-12 w-12 text-blue-900 mb-4" />
              <h3 className="text-lg font-bold mb-2">Rigid QC Inspections</h3>
              <p className="text-slate-600 text-sm">Professional quality control following international AQL standards.</p>
            </div>
            <div className="flex flex-col items-center">
              <Briefcase className="h-12 w-12 text-blue-900 mb-4" />
              <h3 className="text-lg font-bold mb-2">10+ Years Experience</h3>
              <p className="text-slate-600 text-sm">Deep understanding of Chinese manufacturing and global trade.</p>
            </div>
            <div className="flex flex-col items-center">
              <Truck className="h-12 w-12 text-blue-900 mb-4" />
              <h3 className="text-lg font-bold mb-2">Full Shipping Support</h3>
              <p className="text-slate-600 text-sm">Coordinating logistics from factory to your warehouse door.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 id="services-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Comprehensive Sourcing Solutions</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">We handle all the legwork in China so you can focus on growing your business.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border rounded-lg hover:shadow-lg transition-shadow bg-slate-50">
              <div className="h-48 mb-6 overflow-hidden rounded-md">
                <img 
                  data-strk-img-id="serv-img-1" 
                  data-strk-img="sourcing and supplier search china" 
                  data-strk-img-ratio="3x2" 
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Supplier Sourcing"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Supplier Sourcing</h3>
              <p className="text-slate-600 mb-4">Finding the best manufacturers for your specific product requirements and budget.</p>
              <NavLink to="/services" className="text-blue-900 font-semibold hover:underline">Learn More →</NavLink>
            </div>
            <div className="p-8 border rounded-lg hover:shadow-lg transition-shadow bg-slate-50">
              <div className="h-48 mb-6 overflow-hidden rounded-md">
                <img 
                  data-strk-img-id="serv-img-2" 
                  data-strk-img="quality control inspection china factory" 
                  data-strk-img-ratio="3x2" 
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Quality Control"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Control</h3>
              <p className="text-slate-600 mb-4">Rigorous inspection at every production stage to ensure your standards are met.</p>
              <NavLink to="/services" className="text-blue-900 font-semibold hover:underline">Learn More →</NavLink>
            </div>
            <div className="p-8 border rounded-lg hover:shadow-lg transition-shadow bg-slate-50">
              <div className="h-48 mb-6 overflow-hidden rounded-md">
                <img 
                  data-strk-img-id="serv-img-3" 
                  data-strk-img="container shipping logistics china port" 
                  data-strk-img-ratio="3x2" 
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Shipping & Logistics"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Shipping & Logistics</h3>
              <p className="text-slate-600 mb-4">Managing customs, consolidation, and inland transport for a seamless delivery.</p>
              <NavLink to="/services" className="text-blue-900 font-semibold hover:underline">Learn More →</NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 italic">Ready to source from China with confidence?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">Stop worrying about communication gaps and product quality. Let SSourcing China be your local eyes and ears.</p>
          <NavLink to="/contact" className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-10 rounded-md transition-colors text-xl">
            Request a Free Quote Now
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Home;
