import React from 'react';
import { Shield, Search, CheckCircle, Factory, Truck, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    {
      title: 'Supplier Audits',
      desc: 'On-site verification of factory certification, production capacity, and social compliance.',
      icon: Search,
    },
    {
      title: 'Product Sourcing',
      desc: 'Finding reliable manufacturers that meet your specific quality and price requirements.',
      icon: Factory,
    },
    {
      title: 'Quality Control',
      desc: 'In-depth inspections at every stage—pre-production, during production, and pre-shipment.',
      icon: CheckCircle,
    },
    {
      title: 'Logistics Support',
      desc: 'Coordinating efficient shipping methods and ensuring all export documentation is correct.',
      icon: Truck,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-24 lg:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none"
          data-strk-bg-id="hero-bg-china-sourcing"
          data-strk-bg="modern busy container port factory manufacturing overview [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:max-w-3xl">
            <h1 id="hero-title" className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              China Sourcing Agent for <span className="text-yellow-500">Global Buyers</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              We help you find reliable suppliers, verify factories, inspect quality, and manage logistics. Your on-the-ground partner for professional China sourcing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-lg font-bold rounded-lg text-slate-900 bg-yellow-500 hover:bg-yellow-400 transition-all shadow-lg shadow-yellow-500/20"
              >
                Get a Free Sourcing Quote
              </Link>
              <Link 
                to="/services" 
                className="inline-flex justify-center items-center px-8 py-4 border border-slate-700 text-lg font-bold rounded-lg text-white bg-slate-800/50 hover:bg-slate-800 transition-all"
              >
                Our Services
              </Link>
            </div>
            
            <div className="mt-12 flex items-center space-x-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-slate-700 border-2 border-slate-900 flex items-center justify-center text-xs font-bold text-slate-400">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-400">
                Trusted by <span className="text-white font-semibold">500+ buyers</span> across 40 countries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <span className="text-3xl font-bold text-slate-900 mb-1">10+ Years</span>
              <span className="text-sm text-slate-500 uppercase tracking-widest">Experience</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-3xl font-bold text-slate-900 mb-1">2000+</span>
              <span className="text-sm text-slate-500 uppercase tracking-widest">Verified Factories</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-3xl font-bold text-slate-900 mb-1">Q+ Audit</span>
              <span className="text-sm text-slate-500 uppercase tracking-widest">Standard Compliance</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-3xl font-bold text-slate-900 mb-1">USD 50M+</span>
              <span className="text-sm text-slate-500 uppercase tracking-widest">Monthly Export Value</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Core Sourcing Solutions</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive end-to-end services to minimize risk and maximize profit when buying from China.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center mb-6 text-slate-900">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us / Problems We Solve */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:gap-16">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <div className="relative">
                <img 
                  data-strk-img-id="qc-inspection-process"
                  data-strk-img="quality control inspector check products in factory china [hero-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                  className="rounded-3xl shadow-2xl relative z-10"
                  alt="Professional QC Inspection"
                />
                <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-yellow-400 rounded-3xl -z-0" />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
                Solving Your Toughest <span className="text-yellow-600">Sourcing Challenges</span>
              </h2>
              <div className="space-y-6">
                {[
                  { q: "Quality Discrepancies", a: "Our team performs on-ground inspections to ensure the final product matches your approved sample." },
                  { q: "Supplier Scams", a: "We physically visit every new supplier and verify their legal business licenses and export permits." },
                  { q: "Communication Barriers", a: "Our bilingual account managers possess deep manufacturing knowledge to provide accurate translations." },
                  { q: "Shipping Delays", a: "We monitor production daily and coordinate with freight forwarders to minimize port queuing times." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                      <Shield className="w-5 h-5 text-slate-900" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">{item.q}</h4>
                      <p className="text-slate-600 text-sm mt-1">{item.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 relative">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to Scale Your Sourcing?</h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Get professional representation in China starting today. Save time, reduce costs, and eliminate sourcing risks.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-10 py-5 bg-yellow-500 text-slate-900 font-bold text-lg rounded-xl hover:bg-yellow-400 transition-all shadow-xl shadow-yellow-500/10"
          >
            Start Your Free Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;