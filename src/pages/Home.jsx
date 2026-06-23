import { ArrowRight, CheckCircle2, Search, FileCheck, Truck, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-slate-900 text-white relative">
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <img 
            data-strk-bg-id="home-hero-bg" 
            data-strk-bg="[hero-headline] [hero-subheadline]" 
            data-strk-bg-ratio="16x9" 
            data-strk-bg-width="1920" 
            className="w-full h-full object-cover" 
            alt="Hero Background"
          />
        </div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 id="hero-headline" className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subheadline" className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl">
              We help you find reliable suppliers, verify factories, inspect quality, and coordinate shipping from China with zero hassle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-semibold text-lg transition flex items-center justify-center">
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/how-it-works" className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-md font-semibold text-lg transition flex items-center justify-center">
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-slate-50 py-10 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-wider mb-6">Trusted by businesses in 50+ countries</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale">
            {/* These would normally be client logos */}
            <div className="text-2xl font-bold">CLIENT LOGO</div>
            <div className="text-2xl font-bold">CLIENT LOGO</div>
            <div className="text-2xl font-bold">CLIENT LOGO</div>
            <div className="text-2xl font-bold">CLIENT LOGO</div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="services-headline" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Sourcing Services</h2>
            <p className="text-lg text-slate-600">Everything you need to successfully manufacture and import products from China.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Search, title: 'Supplier Sourcing', desc: 'We find and verify manufacturers that meet your specific quality and price requirements.' },
              { icon: FileCheck, title: 'Factory Audits', desc: 'On-site inspections to verify factory capabilities, working conditions, and certifications.' },
              { icon: ShieldCheck, title: 'Quality Control', desc: 'Pre-shipment inspections to ensure your products meet your exact specifications.' },
              { icon: Truck, title: 'Shipping & Logistics', desc: 'Consolidation, customs clearance, and cost-effective shipping to your destination.' }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
                <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6 text-blue-600">
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-4">{service.desc}</p>
                <Link to="/services" className="text-blue-600 font-medium flex items-center hover:text-blue-700">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
               <img 
                data-strk-img-id="why-choose-us-img"
                data-strk-img="[why-title] [why-desc]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Our China team inspecting products" 
                className="rounded-xl shadow-lg w-full object-cover"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 id="why-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Why Partner With SSourcing China?</h2>
              <p id="why-desc" className="text-lg text-slate-600 mb-8">
                Navigating the Chinese manufacturing landscape can be complex and risky. We act as your local team in China, protecting your interests at every step.
              </p>
              
              <div className="space-y-4">
                {[
                  'Local team based in Guangzhou, China',
                  '10+ years of China sourcing experience',
                  'Transparent pricing with no hidden fees',
                  'Strict IP protection for your designs',
                  'Bilingual English & Chinese communication',
                ].map((point, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-slate-700 text-lg">{point}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                 <Link to="/about" className="text-blue-600 font-semibold text-lg flex items-center hover:text-blue-700">
                  More about our company <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 relative overflow-hidden">
        {/* Abstract background shapes */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-blue-500 opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-700 opacity-50 blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Optimize Your China Supply Chain?</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            Tell us about your product requirements, and our sourcing experts will provide a customized plan and quote within 24 hours.
          </p>
          <Link to="/contact" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-md font-bold text-lg shadow-lg hover:shadow-xl hover:bg-slate-50 transition transform hover:-translate-y-1">
            Start Your Sourcing Project Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;