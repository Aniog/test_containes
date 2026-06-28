import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, CheckCircle, Shield, Truck, Search, Factory, FileText, BarChart } from 'lucide-react';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const features = [
    { title: 'Supplier Verification', icon: Shield, desc: 'We verify factory licenses, certifications, and production capacity to ensure you work with real manufacturers.' },
    { title: 'Quality Control', icon: CheckCircle, desc: 'On-site inspections during and after production to ensure your quality standards are strictly met.' },
    { title: 'Vast Network', icon: Factory, desc: 'Direct access to thousands of vetted suppliers across various industries in major China manufacturing hubs.' },
    { title: 'Shipping Logistics', icon: Truck, desc: 'Full coordination of sea, air, and rail freight including customs clearance and door-to-door delivery.' },
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-slate-50">
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          data-strk-bg-id="hero-bg-9922"
          data-strk-bg="[hero-title] [hero-subtitle] china manufacturing factory"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              China Sourcing Agent for <span className="text-blue-600">Global Buyers</span>
            </h1>
            <p id="hero-subtitle" className="text-xl text-slate-600 mb-10 leading-relaxed">
              We help you find reliable suppliers, verify factories, inspect quality, and coordinate shipping. Your complete supply chain partner in China.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-700 transition-all text-center shadow-xl shadow-blue-200">
                Get a Free Sourcing Quote
              </Link>
              <Link to="/services" className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-md font-bold text-lg hover:bg-slate-50 transition-all text-center">
                Explore Services
              </Link>
            </div>
            <div className="mt-12 flex items-center gap-6 text-sm text-slate-500 font-medium">
              <span className="flex items-center gap-2 animate-pulse"><CheckCircle className="w-5 h-5 text-green-500" /> 10+ Years Experience</span>
              <span className="flex items-center gap-2 animate-pulse"><CheckCircle className="w-5 h-5 text-green-500" /> 500+ Verified Suppliers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Global Buyers Trust SSourcing China</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-16">
            We operate as your local office in China, eliminating communication barriers and mitigating risks in international trade.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((f, i) => (
              <div key={i} className="p-8 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all group bg-slate-50/50">
                <div className="w-14 h-14 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <f.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  data-strk-img-id="qc-inspect-image"
                  data-strk-img="quality control inspection china factory"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                  alt="Quality Inspection" 
                  className="rounded-2xl shadow-2xl relative z-10"
                />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600 rounded-2xl -z-0"></div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Comprehensive China Sourcing Solutions</h2>
              <p className="text-slate-600 mb-8">
                From initial product search to final delivery, we provide the expertise needed to navigate the complexities of Chinese manufacturing.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  '1-on-1 dedicated sourcing specialist',
                  'Rigorous factory auditing process',
                  'Price negotiation for best margins',
                  'Customs brokerage and door-to-door shipping'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle className="w-5 h-5 text-blue-600" /> {item}
                  </li>
                ))}
              </ul>
              <Link to="/services" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all">
                Learn more about our services <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Products We Source</h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">We have deep expertise across multiple industries, helping you find competitive pricing without compromising quality.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'Electronics', query: 'consumer electronics china' },
              { name: 'Apparel', query: 'clothing garment factory' },
              { name: 'Home Decor', query: 'home decor accessories' },
              { name: 'Machinery', query: 'industrial machinery parts' },
              { name: 'Packaging', query: 'packaging boxes bottles' },
              { name: 'Toys', query: 'children toys manufacturing' }
            ].map((prod, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-square rounded-xl bg-slate-100 mb-3 overflow-hidden">
                  <img 
                    data-strk-img-id={`prod-img-${i}`}
                    data-strk-img={`${prod.query}`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="300"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={prod.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <span className="text-sm font-bold text-slate-800 text-center block">{prod.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div 
            className="bg-blue-600 rounded-3xl p-12 lg:p-20 text-center text-white relative overflow-hidden shadow-2xl"
            data-strk-bg-id="cta-bg"
            data-strk-bg="abstract blue tech pattern"
            data-strk-bg-ratio="2x1"
            data-strk-bg-width="1200"
          >
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Source from China?</h2>
              <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                Get professional help from sourcing experts. We provide free consultations and detailed quotes within 48 hours.
              </p>
              <Link to="/contact" className="bg-white text-blue-600 px-10 py-5 rounded-full font-extrabold text-xl hover:bg-slate-50 transition-all shadow-xl">
                Get a Free Sourcing Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
