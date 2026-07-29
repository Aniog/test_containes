import React, { useEffect, useRef } from 'react';
import HomeHero from '../components/home/HomeHero';
import ServicesOverview from '../components/home/ServicesOverview';
import ProcessSteps from '../components/home/ProcessSteps';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';
import { Shield, Target, Users, Zap, MessageSquare } from 'lucide-react';

const homeStats = [
  { label: "Suppliers in Network", value: "5,000+" },
  { label: "Successful Projects", value: "1,200+" },
  { label: "Team Members", value: "25+" },
  { label: "Audit Cities", value: "45+" }
];

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <HomeHero />
      
      {/* Stats Section */}
      <section className="bg-slate-50 py-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {homeStats.map((stat, i) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-extrabold text-blue-900 mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServicesOverview />

      {/* Featured Products/Industries */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-blue-900 font-bold text-lg uppercase tracking-wider mb-3">Industries We Serve</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">Products We Source Directly</h3>
            </div>
            <Link to="/products" className="text-amber-600 font-bold hover:underline">View All Categories →</Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            {[
              { title: "Consumer Electronics", id: "cat-electronics" },
              { title: "Home & Garden", id: "cat-home" },
              { title: "Industrial Machinery", id: "cat-industrial" },
              { title: "Textiles & Apparel", id: "cat-textiles" },
              { title: "Furniture & Decor", id: "cat-furniture" },
              { title: "Kitchenware", id: "cat-kitchen" },
              { title: "Outdoor & Sports", id: "cat-outdoor" },
              { title: "Auto Parts", id: "cat-auto" }
            ].map((cat, i) => (
              <div key={cat.id} className="group relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-md transition-all">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    data-strk-img-id={`cat-img-${cat.id}`}
                    data-strk-img={`${cat.title} manufacturing products`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="400"
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h4 id={`cat-title-${cat.id}`} className="font-bold text-slate-800 group-hover:text-blue-900 transition-colors uppercase text-sm tracking-tight">{cat.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps />

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-blue-900 font-bold text-lg uppercase tracking-wider mb-3">Why Us?</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 underline decoration-amber-500 decoration-4 underline-offset-8">
              Reliable Representation on the Ground
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Shield className="w-8 h-8" />, title: "Risk Mitigation", desc: "We identify scam suppliers and factory issues before you send any money." },
              { icon: <Target className="w-8 h-8" />, title: "Precision Matchmaking", desc: "Connecting you with factories that actually fit your specific order size and quality requirements." },
              { icon: <Zap className="w-8 h-8" />, title: "Fast Lead Times", desc: "Localized management means we push for your production to stay on schedule." },
              { icon: <Users className="w-8 h-8" />, title: "Native Team", desc: "Fluent in both Chinese and business English, ensuring nothing is lost in translation." },
              { icon: <MessageSquare className="w-8 h-8" />, title: "Transparent Communication", desc: "Honest, direct, and timely reports on your suppliers and production." },
              { icon: <Shield className="w-8 h-8" />, title: "Cost Efficiency", desc: "We negotiate local prices, not 'international' prices that include hidden markups." }
            ].map((reason, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center text-blue-900 flex-shrink-0">
                  {reason.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{reason.title}</h4>
                  <p className="text-slate-600">{reason.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Inquiry Form Section Snippet */}
      <section className="py-24 bg-blue-900 text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          data-strk-bg-id="cta-bg-001"
          data-strk-bg="China skyline containers shipping port"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        ></div>
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8">Ready to Scale Your China Sourcing?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Get a comprehensive sourcing report and factory quotes within 48 hours. No upfront risk.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 rounded-lg font-extrabold text-xl transition-all shadow-xl hover:-translate-y-1"
          >
            Start Your Free Consultation
          </Link>
          <p className="mt-8 text-blue-300 font-medium italic">"Average savings of 15-20% for our global partners."</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
