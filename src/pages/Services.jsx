import React from 'react';
import { Search, Factory, ShieldCheck, Ship, ArrowRight, PackageOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      id: 'sourcing',
      title: 'Product Sourcing',
      desc: 'We identify and evaluate multiple manufacturing candidates to find the best match for your quality, price, and MOQ requirements. We negotiate prices fairly directly with factories, bypassing trading company markups.',
      icon: <Search className="w-8 h-8" />
    },
    {
      id: 'audits',
      title: 'Factory Audits',
      desc: 'Before placing orders, we dispatch our boots-on-the-ground team to verify the factory exists, check their production lines, assess their quality management systems, and review their ethical compliance.',
      icon: <Factory className="w-8 h-8" />
    },
    {
      id: 'sampling',
      title: 'Sample Development',
      desc: 'We assist in conveying your exact requirements for prototypes, consolidate samples from multiple suppliers into one package, and ship them to you, saving you significant courier costs and time.',
      icon: <PackageOpen className="w-8 h-8" />
    },
    {
      id: 'inspection',
      title: 'Quality Inspection',
      desc: 'We perform During Production (DUPRO) and Pre-Shipment Inspections (PSI) strictly following AQL standards. You receive a detailed photographic report before paying the balance to the factory.',
      icon: <ShieldCheck className="w-8 h-8" />
    },
    {
      id: 'shipping',
      title: 'Logistics & Shipping',
      desc: 'We collaborate with robust forwarders to provide competitive freight rates. Whether it’s LCL, FCL, air freight, or door-to-door (DDP) to Amazon FBA, we manage customs clearance and documentation.',
      icon: <Ship className="w-8 h-8" />
    }
  ];

  return (
    <div className="bg-slate-50 py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Sourcing Services</h1>
          <p className="text-xl text-slate-600">
            A complete A to Z sourcing service in China. We handle the heavy lifting, 
            so you can focus on marketing and selling your products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={service.id} className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 flex flex-col">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 flex-grow leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
          
          <div className="bg-blue-600 rounded-xl p-8 shadow-sm border border-blue-600 flex flex-col justify-center items-center text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
            <p className="text-blue-100 mb-8">
              We also handle Amazon FBA prep, product kitting, customized packaging, and specialized manufacturing projects.
            </p>
            <Link to="/contact" className="bg-white text-blue-600 hover:bg-slate-50 px-6 py-3 rounded-md font-semibold transition-colors">
              Discuss Your Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}