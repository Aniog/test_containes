import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, Truck, Factory, BarChart3, Users } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const trustPoints = [
    { icon: <ShieldCheck className="w-10 h-10 text-blue-600" />, title: 'Factory Verification', desc: 'On-site background checks and documentation audit.' },
    { icon: <CheckCircle2 className="w-10 h-10 text-blue-600" />, title: 'Quality Control', desc: 'Pre-shipment inspection following AQL standards.' },
    { icon: <Truck className="w-10 h-10 text-blue-600" />, title: 'Shipping Support', desc: 'Port coordination and customs documentation management.' },
    { icon: <Factory className="w-10 h-10 text-blue-600" />, title: 'Supplier Sourcing', desc: 'Finding the most competitive and reliable manufacturers.' },
  ];

  return (
    <div ref={containerRef} className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-white pt-20 pb-24 lg:pt-32 lg:pb-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 id="hero-title" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                China Sourcing Agent for <span className="text-blue-700">Global Buyers</span>
              </h1>
              <p id="hero-subtitle" className="text-lg sm:text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Reliable sourcing, factory verification, quality control, and shipping coordination. We help you scale your business safely in China.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/contact" className="px-8 py-4 bg-blue-700 text-white rounded-lg font-bold text-lg hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                  Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/services" className="px-8 py-4 bg-slate-100 text-slate-800 rounded-lg font-bold text-lg hover:bg-slate-200 transition-all flex items-center justify-center">
                  Explore Services
                </Link>
              </div>
              <div className="mt-10 flex items-center justify-center lg:justify-start gap-3 text-sm text-slate-500 font-medium">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Client" />
                    </div>
                  ))}
                </div>
                <span>Trusted by 500+ international buyers</span>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                <img
                  data-strk-img-id="hero-img-china-factory"
                  data-strk-img="[hero-subtitle] [hero-title] professional china sourcing factory qc"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="China Sourcing Agent"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl hidden sm:block border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <ShieldCheck className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Verified Suppliers Only</p>
                    <p className="text-xs text-slate-500">100% on-site background checks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Complete China Supply Chain Solution</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">We provide a bridge between international buyers and Chinese manufacturers, mitigating risks and ensuring quality at every step.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustPoints.map((point, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-100">
                <div className="mb-6">{point.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{point.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                <img
                  data-strk-img-id="problems-solved-img"
                  data-strk-img="factory inspection china quality control worker"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Quality Inspection"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 mb-12 lg:mb-0">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Stop Worrying About Your China Sourcing</h2>
              <ul className="space-y-6">
                {[
                  { title: "Communication Barriers", desc: "Our team speaks fluent Mandarin and understands the local business culture to eliminate misunderstandings." },
                  { title: "Quality Discrepancies", desc: "We perform strict pre-shipment inspections to ensure the goods match your exact specifications." },
                  { title: "Unreliable Suppliers", desc: "We filter out middlemen and scammers, connecting you directly with reputable manufacturers." },
                  { title: "Complex Logistics", desc: "We handle all shipping documents and coordination, ensuring your goods arrive on time." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-blue-700" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link to="/contact" className="text-blue-700 font-bold flex items-center gap-2 hover:gap-3 transition-all leading-none">
                  Learn how we can help your business <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-700 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Start Sourcing?</h2>
              <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">Get in touch with our sourcing experts today and receive a free quote for your project.</p>
              <Link to="/contact" className="inline-block px-10 py-4 bg-white text-blue-700 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-lg">
                Contact Us Now
              </Link>
            </div>
            {/* Background pattern */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-blue-600 rounded-full opacity-50 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-800 rounded-full opacity-50 blur-3xl"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
