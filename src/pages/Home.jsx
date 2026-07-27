import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { cn } from '@/lib/utils';
import { ArrowRight, CheckCircle2, ShieldCheck, Search, FileSignature, MapPin, Truck } from 'lucide-react';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div
          className="absolute inset-0"
          data-strk-bg-id="home-hero-bg"
          data-strk-bg="China sourcing agent international business cargo port"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-slate-900/65" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            China Sourcing Agent for Global Buyers
          </h1>
          <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
            Reliable supplier verification, rigorous quality control, and hassle-free shipping. Your trusted partner on the ground in China.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-md font-semibold hover:bg-blue-700 transition lg:text-lg"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Overcome China Sourcing Challenges</h2>
            <p className="text-lg text-slate-600">Sourcing directly can be risky. We eliminate the uncertainty.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Search className="w-10 h-10 text-red-500 mb-4" />,
                title: "Finding Real Manufacturers",
                desc: "Many online accounts are trading companies posing as factories. We find and verify the real manufacturers for you."
              },
              {
                icon: <ShieldCheck className="w-10 h-10 text-red-500 mb-4" />,
                title: "Quality Inconsistencies",
                desc: "Sample quality rarely matches bulk production unless closely monitored. We inspect thoroughly before shipping."
              },
              {
                icon: <Truck className="w-10 h-10 text-red-500 mb-4" />,
                title: "Shipping & Logistics Nightmares",
                desc: "Hidden fees, delayed shipments, and customs issues. We manage end-to-end logistics reliably."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
                {item.icon}
                <h3 className="text-xl font-semibold mb-3 text-slate-900">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4" id="services-title">End-to-End Sourcing Services</h2>
            <p className="text-lg text-slate-600">Comprehensive support from product idea to final delivery.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Supplier Search", desc: "Finding the best-match factory for your product requirements and budget.", imgId: "home-serv-search" },
              { title: "Factory Audit", desc: "On-site verification of factory capabilities, certifications, and working conditions.", imgId: "home-serv-audit" },
              { title: "Quality Inspection", desc: "Pre-shipment (PSI) and During Production (DUPRO) quality checks.", imgId: "home-serv-qc" },
              { title: "Shipping & Customs", desc: "Consolidating cargo, arranging sea/air freight, and handling export/import customs.", imgId: "home-serv-ship" }
            ].map((s, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4 relative bg-slate-100">
                  <img
                    data-strk-img-id={s.imgId}
                    data-strk-img={`[services-title] ${s.title} B2B professional`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-slate-900">{s.title}</h3>
                <p className="text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="/services" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700">
              View All Services <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center text-slate-200">
            <div>
              <div className="text-4xl font-bold text-white mb-2">10+</div>
              <div>Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div>Verified Factories</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">30+</div>
              <div>Countries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div>Satisfaction Focus</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to Optimize Your China Supply Chain?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Tell us about your sourcing needs, and we'll reply with a preliminary assessment and quote within 24 hours.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Start Your Sourcing Project Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
