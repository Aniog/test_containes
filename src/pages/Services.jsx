import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import { Search, ShieldCheck, Factory, Truck, Quote, Globe, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import strkImgConfig from '@/strk-img-config.json';

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const serviceDetails = [
    {
      icon: <Search className="w-12 h-12" />,
      title: "Supplier Sourcing",
      desc: "Identifying the right manufacturing partner is the most critical step. We go beyond Alibaba to find actual factories that don't always advertise in English.",
      features: ["Factory price negotiation", "Supplier background checks", "Risk assessment", "Capacity evaluation"],
      imgId: "serv-detail-1"
    },
    {
      icon: <ShieldCheck className="w-12 h-12" />,
      title: "Factory Audit",
      desc: "Don't take their word for it. We visit factories personally to verify certifications, equipment, and social compliance (BSCI, ISO).",
      features: ["On-site facility inspection", "Legal documentation review", "Quality management system audit", "Production line verification"],
      imgId: "serv-detail-2"
    },
    {
      icon: <CheckCircle className="w-12 h-12" />,
      title: "Quality Control",
      desc: "Our QC inspectors act as your eyes in China. We perform inspections at different stages to catch errors before they ship.",
      features: ["Pre-production inspection", "During production check", "Final random inspection (FRI)", "Container loading supervision"],
      imgId: "serv-detail-3"
    },
    {
      icon: <Truck className="w-12 h-12" />,
      title: "Logistics Management",
      desc: "Efficient shipping saves thousands. We coordinate sea, air, and train freight with trusted forwarders to ensure timely delivery.",
      features: ["Freight cost optimization", "Amazon FBA preparation", "Customs documentation", "Duty and tax calculation"],
      imgId: "serv-detail-4"
    }
  ];

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-slate-900 py-20 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" data-strk-bg-id="serv-bg" data-strk-bg="China factory quality control warehouse" data-strk-bg-ratio="16x9" data-strk-bg-width="1920" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Sourcing Services</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">Comprehensive, professional, and transparent solutions for all your China sourcing needs.</p>
        </div>
      </section>

      {/* Main Services List */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-32">
            {serviceDetails.map((service, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}>
                <div className="lg:w-1/2">
                  <div className="text-secondary mb-6">{service.icon}</div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">{service.title}</h2>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">{service.desc}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2 text-slate-700 font-medium">
                        <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-bold rounded-xl px-10">
                    <Link to="/contact">Inquire About This Service</Link>
                  </Button>
                </div>
                <div className="lg:w-1/2">
                  <div className="rounded-3xl overflow-hidden shadow-2xl relative">
                    <img
                      data-strk-img-id={service.imgId}
                      data-strk-img={`${service.title} professional service China sourcing`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={service.title}
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 border-[16px] border-white/10 rounded-3xl pointer-events-none" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Global Importers Trust Us</h2>
            <p className="text-slate-600">We are more than just an agent; we are your local partner in China.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <FeatureItem title="100% Transparency" desc="No hidden commissions. No kickbacks from factories. You pay exactly what the factory quotes." />
            <FeatureItem title="Native Presence" desc="Our team members are locals who understand the language, culture, and business practices of China." />
            <FeatureItem title="Risk Mitigation" desc="We identify red flags early, protecting your investment from fraud and quality issues." />
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureItem = ({ title, desc }) => (
  <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100">
    <h3 className="text-xl font-bold mb-4 text-slate-900">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{desc}</p>
  </div>
);

export default Services;
