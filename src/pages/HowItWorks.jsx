import React, { useEffect, useRef } from 'react';
import { Search, ShieldAlert, FileText, CheckCircle, ArrowRight, ClipboardCheck, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Step = ({ number, title, desc, icon, id }) => (
  <div className="flex flex-col md:flex-row gap-8 items-start relative pb-20 last:pb-0">
    {/* Line connector for desktop */}
    <div className="hidden md:block absolute left-[27px] top-14 bottom-0 w-0.5 bg-slate-200 -z-10 group-last:hidden"></div>

    <div className="flex-shrink-0 w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center font-black text-xl shadow-lg relative z-10">
      {number}
    </div>

    <div className="flex-grow bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
        <div className="flex-grow">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-primary">{icon}</span>
            <h3 id={`${id}-title`} className="text-2xl font-extrabold text-secondary">{title}</h3>
          </div>
          <p id={`${id}-desc`} className="text-slate-600 font-medium leading-relaxed max-w-2xl">
            {desc}
          </p>
        </div>
        <div className="flex-shrink-0 lg:w-64">
           <img
            data-strk-img-id={`step-img-${id}`}
            data-strk-img={`[${id}-desc] [${id}-title] sourcing process china factory production`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="w-full h-32 object-cover rounded-xl"
            alt={title}
          />
        </div>
      </div>
    </div>
  </div>
);

const HowItWorks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const steps = [
    {
      id: "step-enquiry",
      number: "01",
      title: "Initial Consultation",
      desc: "We discuss your product requirements, target price, and quality standards. This free consultation helps us understand if we are the right fit for your needs.",
      icon: <ClipboardCheck size={28} />
    },
    {
      id: "step-matching",
      number: "02",
      title: "Supplier Matching & Quoting",
      desc: "We scout our verified supplier network and the wider market to provide you with 3-5 qualified quotes, complete with factory profiles and sample availability.",
      icon: <Search size={28} />
    },
    {
      id: "step-sampling",
      number: "03",
      title: "Sample Development & Consolidation",
      desc: "We coordinate samples from multiple suppliers, inspect them in our warehouse, and ship them to you in one package to save on international courier costs.",
      icon: <FileText size={28} />
    },
    {
      id: "step-inspection",
      number: "04",
      title: "Order Placement & QC Inspection",
      desc: "Once you approve a supplier, we manage the contracts and perform on-site inspections during production and before final container loading.",
      icon: <ShieldAlert size={28} />
    },
    {
      id: "step-logistics",
      number: "05",
      title: "Shipping & Documentation",
      desc: "We handle the logistics coordination, ensuring all export documents are correct for smooth customs clearance and delivery to your destination.",
      icon: <Truck size={28} />
    }
  ];

  return (
    <div ref={containerRef} className="bg-slate-50 min-h-screen">
      <section className="bg-secondary py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              A Transparent <br />
              <span className="text-accent">Sourcing Process</span>
            </h1>
            <p className="text-slate-300 text-xl font-medium leading-relaxed">
              We've refined our workflow over a decade to eliminate the common pitfalls of China sourcing, ensuring high quality and on-time delivery.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="space-y-4">
            {steps.map((step, index) => (
              <Step key={index} {...step} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-secondary mb-12">Why Buyers Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="w-16 h-16 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={32} />
              </div>
              <h4 className="text-xl font-bold mb-4">No Hidden Fees</h4>
              <p className="text-slate-600 font-medium leading-relaxed">
                Transparent service fees or commission-based models. No markups on factory prices.
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={32} />
              </div>
              <h4 className="text-xl font-bold mb-4">Local Expertise</h4>
              <p className="text-slate-600 font-medium leading-relaxed">
                Native Chinese agents who speak the language and understand the local business culture.
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={32} />
              </div>
              <h4 className="text-xl font-bold mb-4">Risk Mitigation</h4>
              <p className="text-slate-600 font-medium leading-relaxed">
                We identify red flags early, protecting you from scammers and low-quality workshops.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black mb-8">Ready to simplify your sourcing?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/contact" className="w-full sm:w-auto bg-white text-primary font-bold py-4 px-12 rounded-lg hover:bg-blue-50 transition text-lg shadow-xl">
              Get Started
            </Link>
            <Link to="/services" className="w-full sm:w-auto border-2 border-white text-white font-bold py-4 px-12 rounded-lg hover:bg-white/10 transition text-lg">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
