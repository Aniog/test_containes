import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Search, CheckCircle, Ship, Factory, BarChart3, ArrowRight, Star, Users, MessageSquare } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const services = [
    {
      title: "Supplier Sourcing",
      description: "Find reliable manufacturers from our extensive database and network in China's industrial hubs.",
      icon: <Search className="text-amber-600" size={32} />,
      imgId: "service-sourcing-a1"
    },
    {
      title: "Factory Audit",
      description: "On-site verification of business licenses, production capacity, and social compliance.",
      icon: <Factory className="text-amber-600" size={32} />,
      imgId: "service-audit-b2"
    },
    {
      title: "Quality Control",
      description: "Professional pre-shipment inspections following AQL standards to ensure specifications are met.",
      icon: <ShieldCheck className="text-amber-600" size={32} />,
      imgId: "service-qc-c3"
    },
    {
      title: "Shipping & Logistics",
      description: "Consolidation, customs clearance, and global shipping management for LCL and FCL.",
      icon: <Ship className="text-amber-600" size={32} />,
      imgId: "service-shipping-d4"
    }
  ];

  const steps = [
    { number: "01", title: "Product Inquiry", desc: "Share your specifications and requirements with us." },
    { number: "02", title: "Supplier Selection", desc: "We shortlist and verify top factories for your product." },
    { number: "03", title: "Sampling & Production", desc: "We manage sampling and supervise production quality." },
    { number: "04", title: "QC & Loading", desc: "On-site inspection and supervision during container loading." },
    { number: "05", title: "Final Delivery", desc: "Wait for your goods at your destination warehouse." }
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center bg-blue-900 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none"
          data-strk-bg-id="hero-bg-99"
          data-strk-bg="[hero-title] [hero-subtitle] factory warehouse shipping"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="container mx-auto px-4 relative z-10 text-white py-20">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed">
              We help you find reliable suppliers, verify factories, inspect quality, and coordinate shipping from China with total transparency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 rounded-md font-bold text-lg text-center transition-all">
                Get a Free Sourcing Quote
              </Link>
              <Link to="/services" className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-10 py-4 rounded-md font-bold text-lg text-center backdrop-blur-sm transition-all">
                Our Services
              </Link>
            </div>
            <div className="mt-12 flex items-center gap-6 text-sm text-slate-400">
              <span className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> 10+ Years Experience</span>
              <span className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> On-the-ground Presence</span>
              <span className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Zero Hidden Fees</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all">
            <div className="text-2xl font-bold text-slate-400">TRUSTED BY 500+ GLOBAL BUSINESSES</div>
            {/* Logo placeholders would go here */}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="services-title" className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Complete Sourcing Solutions</h2>
            <p className="text-lg text-slate-600">From initial factory search to final delivery, we provide end-to-end support to minimize your risks and maximize profits.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow group border border-slate-100">
                <div className="mb-6 p-4 bg-amber-50 rounded-lg w-fit group-hover:bg-amber-100 transition-colors">
                  {service.icon}
                </div>
                <h3 id={`service-title-${idx}`} className="text-xl font-bold text-blue-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                <div className="relative h-40 rounded-lg overflow-hidden bg-slate-100">
                  <img 
                    data-strk-img-id={service.imgId}
                    data-strk-img={`[service-title-${idx}] factory professional`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 id="process-title" className="text-3xl md:text-4xl font-bold mb-6">Our 5-Step Sourcing Process</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">We make importing from China simple, safe, and efficient with our proven methodology.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-blue-800 z-0"></div>
            {steps.map((step, idx) => (
              <div key={idx} className="relative z-10 text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 border-4 border-blue-900">
                  {step.number}
                </div>
                <h4 className="text-lg font-bold mb-3">{step.title}</h4>
                <p className="text-sm text-slate-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                data-strk-img-id="problem-solving-img"
                data-strk-img="quality control inspection bad products factory"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Quality Inspection"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/10"></div>
            </div>
            <div>
              <h2 id="problems-title" className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">Stop Worrying About Your China Sourcing</h2>
              <p className="text-lg text-slate-600 mb-8 font-medium">Buying from China shouldn't be a gamble. We eliminate the most common headaches for overseas buyers:</p>
              <ul className="space-y-6">
                {[
                  { title: "Avoid Scams", desc: "We verify every factory on-site to ensure they are real manufacturers, not just professional-looking websites." },
                  { title: "No Quality Surprises", desc: "Our QC team checks goods against your specific golden sample before they leave the factory." },
                  { title: "Communication Made Easy", desc: "Native English-speaking account managers who understand both Western standards and Chinese culture." },
                  { title: "Logistics Optimization", desc: "Consolidate goods from multiple suppliers into one shipment to save on shipping costs." }
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4">
                    <div className="shrink-0 mt-1">
                      <CheckCircle className="text-amber-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-900 text-lg mb-1">{item.title}</h4>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 id="faq-title" className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-slate-600">Common questions about our sourcing services and processes.</p>
          </div>
          <div className="space-y-6">
            {[
              { q: "Why do I need a sourcing agent?", a: "A sourcing agent acts as your local office in China. We verify suppliers on-site, negotiate in the local language, perform strict quality inspections, and handle complex logistics, significantly reducing your risk and saving you time." },
              { q: "How do you verify a factory?", a: "We don't just check websites. We visit the factory on-site to verify business licenses, production capacity, machine condition, worker conditions, and certificates. We provide a full audit report with photos and videos." },
              { q: "What are your service fees?", a: "We offer flexible pricing: one-time sourcing starting at $299, or a commission-based model (3-7%) for ongoing production management. Contact us for a custom quote based on your volume." },
              { q: "Can you handle custom (OEM) products?", a: "Yes, we specialize in OEM/ODM projects. We can help with prototype development, mold opening, and private labeling while ensuring your intellectual property is protected." },
              { q: "How do you ensure quality?", a: "We perform inspections at various stages: Pre-production, During production, and Pre-shipment (PSI) following international AQL standards. You receive a detailed report and must approve it before we allow the factory to ship." }
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-slate-50 border border-slate-100">
                <h4 className="text-lg font-bold text-blue-900 mb-3">{item.q}</h4>
                <p className="text-slate-700 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-slate-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-blue-900 rounded-2xl p-8 md:p-16 text-center text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-amber-600 rounded-full opacity-10 blur-3xl"></div>
            <div className="relative z-10">
              <h2 id="cta-title" className="text-3xl md:text-5xl font-bold mb-8">Ready to Scale Your Production?</h2>
              <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">Contact us today for a free consultation and let us find your next reliable supplier in China.</p>
              <Link to="/contact" className="inline-flex items-center gap-3 bg-amber-600 hover:bg-amber-700 text-white px-10 py-5 rounded-md font-bold text-xl transition-all shadow-lg hover:scale-105">
                Request a Free Quote <ArrowRight size={24} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
