import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Award, CheckCircle, Clock, Shield, Truck } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Supplier Sourcing",
      desc: "We identify and shortlist qualified manufacturers that match your product specifications, quality standards, and volume requirements.",
      details: ["Product requirement analysis", "Supplier database search", "Initial capability screening", "Shortlist presentation with comparison"]
    },
    {
      icon: Award,
      title: "Factory Verification",
      desc: "On-site audits assess production capacity, quality management systems, financial stability, and regulatory compliance.",
      details: ["Business license verification", "Production capacity assessment", "Quality system review", "Financial stability check"]
    },
    {
      icon: CheckCircle,
      title: "Quality Inspection",
      desc: "Comprehensive inspection services at every stage of production to ensure products meet your specifications.",
      details: ["Pre-production inspection", "During-production inspection", "Pre-shipment inspection", "Container loading supervision"]
    },
    {
      icon: Clock,
      title: "Production Monitoring",
      desc: "Weekly progress reports and milestone tracking keep you informed throughout the manufacturing process.",
      details: ["Production schedule tracking", "Weekly status updates", "Issue identification & resolution", "Photo and video documentation"]
    },
    {
      icon: Shield,
      title: "Compliance Support",
      desc: "We coordinate product testing and documentation to meet import regulations in your target market.",
      details: ["Testing lab coordination", "Certification guidance", "Documentation preparation", "Regulatory compliance review"]
    },
    {
      icon: Truck,
      title: "Logistics Coordination",
      desc: "End-to-end shipping management from factory to your warehouse, including freight booking and customs clearance.",
      details: ["Freight forwarder coordination", "Customs documentation", "Shipping schedule management", "Door-to-door delivery tracking"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-slate-900 rounded flex items-center justify-center"><span className="text-white font-semibold text-lg">SS</span></div>
            <span className="font-semibold text-xl text-slate-900">SSourcing China</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <Link to="/services" className="text-slate-900 font-medium">Services</Link>
            <Link to="/how-it-works" className="text-slate-600 hover:text-slate-900">How It Works</Link>
            <Link to="/products" className="text-slate-600 hover:text-slate-900">Products</Link>
            <Link to="/case-studies" className="text-slate-600 hover:text-slate-900">Case Studies</Link>
            <Link to="/blog" className="text-slate-600 hover:text-slate-900">Blog</Link>
            <Link to="/contact" className="text-slate-600 hover:text-slate-900">Contact</Link>
          </div>
          <Link to="/contact" className="px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded hover:bg-slate-800">Get a Free Quote</Link>
        </div>
      </nav>

      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-sm font-medium text-slate-400 tracking-widest mb-3">OUR CAPABILITIES</div>
          <h1 className="text-4xl font-semibold mb-4">Sourcing Services</h1>
          <p className="text-xl text-slate-300">Comprehensive support from supplier identification to final delivery.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="border border-gray-200 rounded-2xl p-10">
              <service.icon className="w-10 h-10 text-slate-700 mb-6" />
              <h3 className="text-2xl font-semibold mb-4 text-slate-900">{service.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">{service.desc}</p>
              <ul className="space-y-2">
                {service.details.map((detail, i) => (
                  <li key={i} className="flex items-start text-sm text-slate-600">
                    <span className="text-emerald-600 mr-2 mt-1">•</span> {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-50 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-slate-900">Need a custom solution?</h2>
          <p className="text-slate-600 mb-8">We tailor our services to your specific sourcing requirements and industry.</p>
          <Link to="/contact" className="inline-block px-8 py-3.5 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800">Discuss Your Project</Link>
        </div>
      </div>

      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 text-sm flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3 mb-4 md:mb-0"><div className="w-7 h-7 bg-white/10 rounded flex items-center justify-center"><span className="text-white text-xs font-semibold">SS</span></div><span>SSourcing China</span></div>
          <div>© {new Date().getFullYear()} SSourcing China. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
};

export default Services;