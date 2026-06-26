import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Search, PackageCheck, Ship, Target, CheckCircle2, ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const services = [
    {
      title: 'Supplier Sourcing',
      desc: 'Find verified, cost-effective manufacturers capable of meeting your specific requirements.',
      icon: Search,
      id: 'supplier-sourcing'
    },
    {
      title: 'Factory Verification',
      desc: 'On-site audits to verify production capacity, quality systems, and working conditions.',
      icon: ShieldCheck,
      id: 'factory-verification'
    },
    {
      title: 'Quality Inspection',
      desc: 'Pre-shipment inspections (PSI) and during production checks (DUPRO) to ensure standards.',
      icon: PackageCheck,
      id: 'quality-inspection'
    },
    {
      title: 'Shipping & Logistics',
      desc: 'Coordinate sea/air freight, handle customs clearance, and deliver to your warehouse or FBA.',
      icon: Ship,
      id: 'shipping-logistics'
    }
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-slate-900 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-40 mix-blend-overlay bg-cover bg-center"
          data-strk-bg-id="home-hero-bg"
          data-strk-bg="[hero-subtitle] [hero-title] container ship port logistics"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl text-white font-extrabold tracking-tight leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-slate-200 font-normal leading-relaxed mb-10 max-w-2xl">
              We help overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping from China.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-md transition-colors duration-200 shadow-md text-center">
                Get a Free Sourcing Quote
              </Link>
              <Link to="/services" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold py-4 px-8 rounded-md transition-colors duration-200 text-center backdrop-blur-sm">
                Explore Our Services
              </Link>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/20 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <p className="text-3xl font-bold text-white mb-1">10+</p>
                <p className="text-sm text-slate-300">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white mb-1">500+</p>
                <p className="text-sm text-slate-300">Verified Factories</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white mb-1">10k+</p>
                <p className="text-sm text-slate-300">Shipments Handled</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white mb-1">98%</p>
                <p className="text-sm text-slate-300">Client Retention</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="problems-title" className="text-3xl md:text-4xl text-slate-900 font-bold tracking-tight mb-4">Are you facing these sourcing challenges?</h2>
            <p className="text-lg text-slate-600">Sourcing from China can be complex. We act as your local office to mitigate risks.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4">
              <div className="shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                <span className="text-red-600 font-bold">X</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Communication Barriers</h3>
                <p className="text-slate-600">Language differences and time zones causing misunderstandings and delays in production.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4">
              <div className="shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                <span className="text-red-600 font-bold">X</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Quality Inconsistencies</h3>
                <p className="text-slate-600">Receiving products that do not match the approved sample or have high defect rates.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4">
              <div className="shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                <span className="text-red-600 font-bold">X</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Scams & Fake Factories</h3>
                <p className="text-slate-600">Dealing with trading companies posing as factories or outright scams losing your deposit.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4">
              <div className="shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                <span className="text-red-600 font-bold">X</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Logistics Nightmares</h3>
                <p className="text-slate-600">Hidden shipping costs, customs clearance issues, or delayed deliveries to your warehouse.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="services-title" className="text-3xl md:text-4xl text-slate-900 font-bold tracking-tight mb-4">Complete China Sourcing Solutions</h2>
            <p className="text-lg text-slate-600">End-to-end supply chain management tailored to your business needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white border border-slate-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200 group">
                  <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 id={`service-title-${service.id}`} className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                  <p id={`service-desc-${service.id}`} className="text-slate-600 mb-6 flex-grow">{service.desc}</p>
                  <Link to="/services" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800">
                    Learn more <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Points / Why Choose Us */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 id="trust-title" className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Your Team on the Ground in China</h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                We don't just act as middlemen; we integrate with your business to construct a resilient supply chain. Our goal is to secure your pricing, protect your quality, and ensure timely delivery.
              </p>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="shrink-0 mt-1"><CheckCircle2 className="w-6 h-6 text-blue-400" /></div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1">100% Transparent Pricing</h4>
                    <p className="text-slate-400">No hidden kickbacks from factories. We charge a clear service fee so our interests align with yours in negotiating the lowest factory price.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="shrink-0 mt-1"><CheckCircle2 className="w-6 h-6 text-blue-400" /></div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1">Direct Factory Access</h4>
                    <p className="text-slate-400">We bypass trading companies and deal directly with manufacturers to ensure better communication and lower costs.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="shrink-0 mt-1"><CheckCircle2 className="w-6 h-6 text-blue-400" /></div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1">Strict Quality Control</h4>
                    <p className="text-slate-400">Our native QC inspectors visit factories at crucial production stages to catch and resolve issues before shipment.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="rounded-xl overflow-hidden relative shadow-2xl">
              <img
                data-strk-img-id="home-trust-img"
                data-strk-img="[trust-title] quality control inspection china factory"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Quality Inspection"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 border border-white/10 rounded-xl pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-white font-bold tracking-tight mb-6">Ready to streamline your China sourcing?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Tell us about your product requirements, and our sourcing experts will get back to you with an initial assessment within 24 hours.
          </p>
          <Link to="/contact" className="inline-block bg-white text-blue-700 hover:bg-slate-50 font-bold py-4 px-10 rounded-md transition-colors duration-200 shadow-xl text-lg">
            Start Your Sourcing Project
          </Link>
        </div>
      </section>
    </div>
  );
}
