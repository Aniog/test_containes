import React from 'react';
import { Search, ShieldCheck, ClipboardCheck, Truck, Factory, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Search className="w-10 h-10 text-blue-900" />,
    title: "Supplier Sourcing",
    desc: "We find the best-matched factories for your specific requirements, bypassing middlemen to get you direct pricing."
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-blue-900" />,
    title: "Factory Verification",
    desc: "On-site audits to verify production capabilities, quality management systems, and business licenses before you pay."
  },
  {
    icon: <ClipboardCheck className="w-10 h-10 text-blue-900" />,
    title: "Quality Control",
    desc: "Professional QC inspectors perform pre-shipment inspections to ensure every unit meets your standards."
  },
  {
    icon: <Factory className="w-10 h-10 text-blue-900" />,
    title: "Production Follow-up",
    desc: "Real-time updates on your order status. We manage timelines and solve issues before they become delays."
  },
  {
    icon: <Truck className="w-10 h-10 text-blue-900" />,
    title: "Shipping & Logistics",
    desc: "Coordinating sea, air, or rail freight. We handle consolidation, documentation, and customs clearance."
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-blue-900" />,
    title: "Supply Chain Consulting",
    desc: "Optimizing your sourcing strategy in China to reduce costs, increase reliability, and mitigate risks."
  }
];

const ServicesOverview = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-900 font-bold text-lg uppercase tracking-wider mb-3">Our Core Services</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
            Everything You Need to Source from China
          </h3>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From initial factory search to final delivery at your warehouse, SSourcing China handles every step of the supply chain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div 
              key={i} 
              className="p-8 border border-slate-100 rounded-xl hover:shadow-xl transition-all hover:-translate-y-1 bg-slate-50 group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform">{service.icon}</div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed mb-6">{service.desc}</p>
              <Link to="/services" className="text-blue-700 font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                Learn More <span>→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
