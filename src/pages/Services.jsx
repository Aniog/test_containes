import React from 'react';
import { NavLink } from 'react-router-dom';
import { Search, ShieldCheck, Factory, ClipboardCheck, Truck, BarChart2 } from 'lucide-react';

const Services = () => {
  const serviceList = [
    {
      icon: <Search className="h-10 w-10 text-blue-900" />,
      title: "Supplier Sourcing",
      description: "We identify the most suitable manufacturers for your products, comparing price, quality, and reliability.",
      details: ["Manufacturer identification", "Price negotiation", "Sample consolidation", "Technical specification review"],
      imgId: "serv-detail-1",
      imgQuery: "businessman reviewing factory samples china sourcing"
    },
    {
      icon: <Factory className="h-10 w-10 text-blue-900" />,
      title: "Factory Verification",
      description: "Don't risk your money. We visit the factory to verify their legitimacy, production capacity, and certificates.",
      details: ["On-site factory audit", "Document & certificate check", "Production capacity assessment", "Social compliance audit"],
      imgId: "serv-detail-2",
      imgQuery: "quality control inspector verifying factory documents china"
    },
    {
      icon: <ClipboardCheck className="h-10 w-10 text-blue-900" />,
      title: "Quality Control (QC)",
      description: "Our inspectors perform rigorous checks during and after production to ensure your quality standards are strictly met.",
      details: ["During Production Inspection (DPI)", "Pre-Shipment Inspection (PSI)", "AQL inspection standards", "Detailed inspection reports"],
      imgId: "serv-detail-3",
      imgQuery: "electronics quality control inspection China factory"
    },
    {
      icon: <BarChart2 className="h-10 w-10 text-blue-900" />,
      title: "Production Monitoring",
      description: "We stay on top of the production schedule to identify potential delays early and ensure on-time delivery.",
      details: ["Production timeline management", "Weekly status reports", "Raw material verification", "Immediate problem resolution"],
      imgId: "serv-detail-4",
      imgQuery: "production manager monitoring factory line china"
    },
    {
      icon: <Truck className="h-10 w-10 text-blue-900" />,
      title: "Shipping & Logistics",
      description: "Seamless coordination of container loading, customs clearance, and global shipping to your final destination.",
      details: ["Container Loading Supervision (CLS)", "Shipping document preparation", "Logistics cost optimization", "Door-to-door delivery coordination"],
      imgId: "serv-detail-5",
      imgQuery: "container port shipping logistics china global trade"
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-blue-900" />,
      title: "Payment Protection",
      description: "Assistance in secure payment methods and escrow services to protect your funds during international transactions.",
      details: ["Secure payment facilitation", "Milestone payment management", "Supplier background financial check"],
      imgId: "serv-detail-6",
      imgQuery: "global trade financial payment security"
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Sourcing Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">From initial supplier search to final delivery, we provide end-to-end support for your China sourcing operations.</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {serviceList.map((service, index) => (
              <div 
                key={index} 
                className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="lg:w-1/2">
                  <div className="mb-6">{service.icon}</div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">{service.title}</h2>
                  <p className="text-lg text-slate-600 mb-6">{service.description}</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-slate-700">
                        <div className="h-2 w-2 bg-amber-500 rounded-full" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:w-1/2 w-full">
                  <div className="rounded-xl overflow-hidden shadow-2xl">
                    <img 
                      data-strk-img-id={service.imgId}
                      data-strk-img={service.imgQuery}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={service.title}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Not sure which service you need?</h2>
          <p className="text-slate-600 mb-10 max-w-2xl mx-auto">Contact our experts for a free consultation. we'll help you design a sourcing strategy that works for your business model.</p>
          <NavLink to="/contact" className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-10 rounded-md transition-colors text-lg">
            Talk to a Specialist
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Services;
