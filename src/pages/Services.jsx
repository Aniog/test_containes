import React, { useEffect, useRef } from 'react';
import { Shield, Search, Factory, Truck, CheckCircle, ArrowRight, Package, Box, BarChart, Settings, Users } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import Layout from '@/Layout';

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const majorServices = [
    {
      title: 'Global Sourcing & Procurement',
      desc: 'We identify and vet top-tier manufacturers across China. Our deep network allows us to find specialized suppliers that aren’t listed on standard platforms.',
      features: ['Supplier screening & shortlist', 'Sample consolidation', 'Price negotiation', 'Niche supplier search'],
      icon: Search,
      imgQuery: 'sourcing manager office china supplier database',
      id: 'ms-1'
    },
    {
      title: 'Factory Audits & Verification',
      desc: 'Risk mitigation starts with knowing who you are buying from. We perform comprehensive on-site audits to verify legality, capacity, and ethics.',
      features: ['ISO 9001 compliance check', 'Social compliance (BSCI/SMETA)', 'Technical capacity analysis', 'Background check'],
      icon: Factory,
      imgQuery: 'factory audit inspector checking production line documentation',
      id: 'ms-2'
    },
    {
      title: 'End-to-End Quality Control',
      desc: 'Our QC team acts as your eyes on the ground. We catch defects before products leave the factory gate, saving you thousands in returns.',
      features: ['Pre-production inspection', 'In-process inspection (DUPRO)', 'Final random inspection', 'Lab testing coordination'],
      icon: Shield,
      imgQuery: 'quality control inspector measuring product electronics',
      id: 'ms-3'
    },
    {
      title: 'Logistics & Shipping',
      desc: 'Streamlined delivery from China to your destination. We handle the paperwork, customs, and consolidation to reduce your landed costs.',
      features: ['FCL & LCL coordination', 'Amazon FBA preparation', 'Customs documentation', 'Shipment tracking'],
      icon: Truck,
      imgQuery: 'shipping container port logistics cargo ship',
      id: 'ms-4'
    }
  ];

  return (
    <Layout>
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-primary py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Our Services</h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Comprehensive sourcing solutions designed to make importing from China safe, profitable, and effortless for businesses of all sizes.
          </p>
        </div>
      </section>

      {/* Main Services List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {majorServices.map((service, idx) => (
              <div key={service.id} className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 text-accent rounded-2xl mb-8">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl font-extrabold text-primary mb-6">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {service.desc}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3 text-primary font-medium">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-10">
                    <NavLink to="/contact" className="bg-accent text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-all inline-flex items-center gap-2">
                       Inquire about this service <ArrowRight className="h-5 w-5" />
                    </NavLink>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <img 
                    data-strk-img-id={`service-img-${service.id}`}
                    data-strk-img={service.imgQuery}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={service.title}
                    className="rounded-3xl shadow-2xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Services */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-primary mb-4">Supportive Solutions</h2>
            <p className="text-gray-600">Additional services to enhance your procurement strategy.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all">
              <Box className="h-10 w-10 text-accent mb-6" />
              <h3 className="text-xl font-bold text-primary mb-3">Sample Consolidation</h3>
              <p className="text-gray-500 text-sm leading-relaxed">We receive samples from multiple suppliers and ship them to you in one box, saving up to 70% on international express shipping.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all">
              <Settings className="h-10 w-10 text-accent mb-6" />
              <h3 className="text-xl font-bold text-primary mb-3">OEM & Product Dev</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Have a unique design? We coordinate with manufacturers to develop prototypes, custom tooling, and packaging tailored to your brand.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all">
              <BarChart className="h-10 w-10 text-accent mb-6" />
              <h3 className="text-xl font-bold text-primary mb-3">Market Price Intelligence</h3>
              <p className="text-gray-500 text-sm leading-relaxed">We provide bench-marking data on current material costs and factory pricing in China to ensure you always have a competitive edge.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8">Ready Effortless Sourcing from China?</h2>
          <NavLink to="/contact" className="bg-white text-accent px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl inline-flex items-center gap-2">
            Get Started with a Free Quote <ArrowRight className="h-6 w-6" />
          </NavLink>
        </div>
      </section>
    </div>
    </Layout>
  );
};

export default Services;
