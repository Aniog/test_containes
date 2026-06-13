import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white min-h-[600px] flex items-center">
        <div 
          className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
          data-strk-bg-id="home-hero-bg"
          data-strk-bg="busy shipping port loaded with containers"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed">
              We help overseas buyers find reliable suppliers, verify factories, inspect quality, and coordinate shipping. Your trusted partner on the ground.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-slate-900 bg-white hover:bg-slate-100 transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/how-it-works" 
                className="inline-flex items-center justify-center px-6 py-3 border border-slate-400 text-base font-medium rounded-md text-white hover:bg-slate-800 transition-colors"
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start">
              <CheckCircle2 className="h-8 w-8 text-blue-600 flex-shrink-0 mr-4" />
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">Local Presence</h3>
                <p className="text-slate-600 text-sm">We are on the ground in China, negotiating directly with factories.</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle2 className="h-8 w-8 text-blue-600 flex-shrink-0 mr-4" />
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">Strict Quality Control</h3>
                <p className="text-slate-600 text-sm">Pre-shipment inspections to ensure you receive what you paid for.</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle2 className="h-8 w-8 text-blue-600 flex-shrink-0 mr-4" />
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">Transparent Pricing</h3>
                <p className="text-slate-600 text-sm">No hidden fees or kickbacks. We work for you, not the factories.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro / Problems We Solve */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Sourcing from China shouldn't be a gamble.</h2>
              <p className="text-slate-600 mb-6 text-lg">
                Language barriers, time zone differences, and navigating a sea of unknown suppliers can lead to scams, poor quality, and delayed shipments.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="bg-red-100 p-1 rounded mr-3 mt-1">
                    <X className="h-4 w-4 text-red-600" />
                  </div>
                  <span className="text-slate-700">Suppliers disappearing after deposit is paid</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 p-1 rounded mr-3 mt-1">
                    <X className="h-4 w-4 text-red-600" />
                  </div>
                  <span className="text-slate-700">Receiving products that don't match the sample</span>
                </li>
                 <li className="flex items-start">
                  <div className="bg-red-100 p-1 rounded mr-3 mt-1">
                    <X className="h-4 w-4 text-red-600" />
                  </div>
                  <span className="text-slate-700">Hidden costs in shipping and customs</span>
                </li>
              </ul>
              <p className="text-slate-900 font-medium text-lg">
                SSourcing China acts as your localized procurement office to eliminate these risks.
              </p>
            </div>
            <div className="lg:w-1/2 w-full">
               <img 
                  data-strk-img-id="home-problem-img"
                  data-strk-img="checking product quality in factory"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Quality Control check"
                  className="rounded-lg shadow-xl w-full object-cover"
                />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="services-title" className="text-3xl font-bold text-slate-900 mb-4">Our End-to-End Sourcing Services</h2>
            <p className="text-slate-600 text-lg">We handle every step of the supply chain, so you can focus on growing your brand.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                id: 'sourcing',
                title: 'Supplier Sourcing',
                desc: 'Finding reliable, cost-effective factories that match your requirements.',
                imgStr: 'business meeting comparing product samples'
              },
              {
                id: 'audit',
                title: 'Factory Audit',
                desc: 'On-site verification to check licenses, production capacity, and working conditions.',
                imgStr: 'inspecting factory production line'
              },
              {
                id: 'qc',
                title: 'Quality Control',
                desc: 'Pre-shipment inspections (AQL) to ensure product specifications are met.',
                imgStr: 'close up examining product quality'
              },
              {
                id: 'shipping',
                title: 'Shipping Logistics',
                desc: 'Consolidating goods and managing sea/air freight and customs clearance.',
                imgStr: 'logistics shipping boxes warehouse'
              }
            ].map((service) => (
              <div key={service.id} className="bg-slate-50 rounded-xl overflow-hidden border border-slate-100 hover:shadow-md transition-shadow">
                <div className="aspect-[4/3] relative">
                  <img 
                    data-strk-img-id={`svc-img-${service.id}`}
                    data-strk-img={service.imgStr}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-600 mb-4">{service.desc}</p>
                  <Link to={`/services#${service.id}`} className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
             <Link to="/services" className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 shadow-sm text-base font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 transition-colors">
                View All Services
              </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to source securely from China?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Tell us about your product requirements, and our team will get back to you with a free sourcing quote within 24 hours.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-md text-blue-600 bg-white hover:bg-slate-100 shadow-lg hover:shadow-xl transition-all"
          >
            Get Your Free Quote Now
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;