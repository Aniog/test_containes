import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, TrendingUp, Search, Package, Ship, CheckCircle2, ArrowRight, MessageSquare } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const features = [
    {
      title: 'Supplier Verification',
      description: 'We conduct thorough background checks and on-site visits to ensure you work with legitimate, reliable manufacturers.',
      icon: <ShieldCheck className="w-10 h-10 text-primary" />,
    },
    {
      title: 'Price Negotiation',
      description: 'Our local expertise allows us to negotiate the best terms and prices with suppliers on your behalf.',
      icon: <TrendingUp className="w-10 h-10 text-primary" />,
    },
    {
      title: 'Quality Inspection',
      description: 'Rigorous QC during and after production. We catch defects before they leave the factory.',
      icon: <CheckCircle2 className="w-10 h-10 text-primary" />,
    },
  ];

  const steps = [
    { title: 'Source', desc: 'Find relevant suppliers' },
    { title: 'Verify', desc: 'Factory audits & samples' },
    { title: 'Inspect', desc: 'Quality control checks' },
    { title: 'Ship', desc: 'Consolidation & shipping' },
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gray-900/60 z-10" 
          aria-hidden="true" 
        />
        <div
          data-strk-bg-id="hero-bg-ssourcing"
          data-strk-bg="[hero-subtitle] [hero-title] modern warehouse shipping containers factory"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          className="absolute inset-0 bg-cover bg-center"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-xl md:text-2xl font-light text-gray-200 mb-10 leading-relaxed">
              Find reliable suppliers, verify factories, inspect quality, and coordinate shipping with SSourcing China. Your local eyes and ears in the world's factory.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-accent hover:bg-amber-700 text-white px-8 py-4 rounded-md text-lg font-bold transition-all text-center shadow-lg"
              >
                Get a Free Sourcing Quote
              </Link>
              <Link
                to="/services"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-md text-lg font-bold transition-all text-center"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust points / Stats */}
      <section className="bg-primary py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <p className="text-4xl font-bold mb-1">10+</p>
              <p className="text-blue-200 text-sm uppercase tracking-wider">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-1">500+</p>
              <p className="text-blue-200 text-sm uppercase tracking-wider">Suppliers Verified</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-1">20+</p>
              <p className="text-blue-200 text-sm uppercase tracking-wider">Industries Served</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-1">98%</p>
              <p className="text-blue-200 text-sm uppercase tracking-wider">Client Retention</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Summary */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="services-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive China Sourcing Solutions
            </h2>
            <p id="services-subtitle" className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide end-to-end support for your sourcing needs, from initial contact to final delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/services" className="text-primary font-semibold flex items-center justify-center gap-2 hover:gap-3 transition-all">
              See all sourcing services <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* How it Works / Process */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 id="process-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Sourcing Process
              </h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Importing from China shouldn't be complicated. We have streamlined our workflow to ensure speed, quality, and transparency.
              </p>
              
              <div className="space-y-8">
                {steps.map((step, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center shrink-0 border border-blue-100">
                      <span className="text-primary font-bold">{idx + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{step.title}</h4>
                      <p className="text-gray-600">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12">
                <Link to="/how-it-works" className="bg-gray-900 text-white px-8 py-4 rounded-md font-bold hover:bg-black transition-colors">
                  Learn More About Our Process
                </Link>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  data-strk-img-id="process-image"
                  data-strk-img="[process-title] sourcing agent team working in office professional"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Process"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-500 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-100 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us / Problems we solve */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="why-title" className="text-3xl md:text-4xl font-bold mb-16">Why SSourcing China?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <p className="text-amber-500 font-bold mb-4">Eliminate Risks</p>
              <h4 className="text-xl font-bold mb-3">Verified Partners</h4>
              <p className="text-gray-400 text-sm">Say goodbye to scammers and middle-men posing as manufacturers.</p>
            </div>
            <div>
              <p className="text-amber-500 font-bold mb-4">Save Costs</p>
              <h4 className="text-xl font-bold mb-3">Direct-to-Factory</h4>
              <p className="text-gray-400 text-sm">We find direct manufacturers to cut out extra margins and fees.</p>
            </div>
            <div>
              <p className="text-amber-500 font-bold mb-4">Ensure Quality</p>
              <h4 className="text-xl font-bold mb-3">Strict Inspection</h4>
              <p className="text-gray-400 text-sm">Your specs are our guide. We inspect to your standards.</p>
            </div>
            <div>
              <p className="text-amber-500 font-bold mb-4">Local Presence</p>
              <h4 className="text-xl font-bold mb-3">Ground Support</h4>
              <p className="text-gray-400 text-sm">Based in Shenzhen, we can reach any factory in China quickly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-amber-600 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 italic">Ready to Scale Your Sourcing?</h2>
          <p className="text-xl text-amber-50 mb-12 max-w-2xl mx-auto">
            Contact us today for a free initial consultation and supplier search estimate.
          </p>
          <div className="flex justify-center">
            <Link to="/contact" className="bg-white text-amber-600 hover:bg-gray-100 px-10 py-5 rounded-md text-xl font-black transition-all shadow-xl">
              Get a Free Sourcing Quote
            </Link>
          </div>
        </div>
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-amber-500/30 rounded-full" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/30 rounded-full" />
      </section>
    </div>
  );
};

export default Home;
