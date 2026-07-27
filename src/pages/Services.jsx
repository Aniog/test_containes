import React from 'react';
import { Search, ShieldAlert, BadgeCheck, BarChart3, Globe2, Truck, UserCheck, MessageSquare } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Supplier Sourcing & Research",
      desc: "We look beyond Alibaba and Global Sources to find authentic manufacturers and factory-direct pricing. Our deep matching process ensures suppliers meet your specific quality, compliance, and volume requirements.",
      features: ["Price Negotiation", "Sample Development", "Sourcing from Private Databases", "Alternative Material Options"],
      icon: <Search className="w-8 h-8 text-amber-500" />
    },
    {
      title: "Factory Audits & Verification",
      desc: "Stop scams before they happen. We visit factories in person to verify their business licenses, production capacity, quality management systems, and social compliance (BSCI, SEDEX).",
      features: ["Video Verification", "Capacity Certification", "Financial Due Diligence", "Management Interview"],
      icon: <ShieldAlert className="w-8 h-8 text-amber-500" />
    },
    {
      title: "Quality Control Inspections",
      desc: "Professional AQL-standard inspections at various stages: During Production (DUPRO), Pre-Shipment Inspection (PSI), and Container Loading Supervisions (CLS).",
      features: ["Defect Analysis", "Functional Testing", "Packaging & Labeling Review", "Real-time Inspection Video"],
      icon: <BadgeCheck className="w-8 h-8 text-amber-500" />
    },
    {
      title: "Logistics & Consolidations",
      desc: "Optimizing your freight to save up to 30% in costs. We manage the entire flow from multiple factory pickups to customs clearance and final delivery.",
      features: ["Free Warehousing (30 Days)", "Sea/Air/Rail Freight Management", "Customs Paperwork", "Insurance Handling"],
      icon: <Truck className="w-8 h-8 text-amber-500" />
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-900 py-20 text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="services-header-bg"
          data-strk-bg="[services-page-title] [services-page-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 id="services-page-title" className="text-4xl md:text-5xl font-bold mb-6">Our Core Services</h1>
          <p id="services-page-subtitle" className="text-xl text-slate-400 max-w-3xl mx-auto">Providing a safe, transparent, and efficient way to source products from China since 2011.</p>
        </div>
      </section>

      {/* Service List */}
      <section className="py-24">
        <div className="container mx-auto px-4 space-y-24">
          {services.map((srv, idx) => (
            <div key={idx} className={cn("grid grid-cols-1 lg:grid-cols-2 gap-16 items-center", idx % 2 === 1 ? "lg:flex-row-reverse" : "")}>
              <div className={cn(idx % 2 === 1 ? "lg:order-last" : "")}>
                <div className="inline-flex items-center justify-center p-3 bg-amber-50 rounded-2xl mb-6">
                  {srv.icon}
                </div>
                <h2 id={`srv-title-${idx}`} className="text-3xl font-bold text-slate-900 mb-6">{srv.title}</h2>
                <p id={`srv-desc-${idx}`} className="text-lg text-slate-600 mb-8 leading-relaxed">{srv.desc}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {srv.features.map((f, i) => (
                    <div key={i} className="flex items-center text-slate-700">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3" />
                      <span className="text-sm font-medium">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img 
                  data-strk-img-id={`srv-img-${idx}`}
                  data-strk-img={`[srv-title-${idx}] [srv-desc-${idx}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="1000"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={srv.title}
                  className="rounded-2xl shadow-xl border border-slate-100"
                />
                <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full border-2 border-slate-100 rounded-2xl" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Models */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Transparent Pricing Models</h2>
          <p className="text-slate-600">Choose the best fit for your business scale.</p>
        </div>
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Sourcing Finder",
              price: "$499/Project",
              bestFor: "One-off product sourcing",
              features: ["3-5 Qualified Suppliers", "Initial Quote Analysis", "Sample Consolidation", "Risk Assessment Report"]
            },
            {
              name: "Full Managed",
              price: "5-10% of Order",
              bestFor: "Growing e-commerce brands",
              features: ["Everything in Sourcing Finder", "Production Monitoring", "In-line Quality Inspection", "Customs & Logistics Support"],
              highlight: true
            },
            {
              name: "QC Only",
              price: "From $250/Day",
              bestFor: "Factory-direct buyers",
              features: ["Full Inspection Report", "Video & Photo Proof", "Packaging Check", "Container Loading Check"]
            }
          ].map((plan, i) => (
            <div key={i} className={cn("bg-white p-10 rounded-2xl shadow-sm border transition-transform hover:-translate-y-2", plan.highlight ? "border-amber-500 ring-4 ring-amber-50/50" : "border-slate-100")}>
              {plan.highlight && <span className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-4 block">Most Popular</span>}
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-slate-500 text-sm mb-6">{plan.bestFor}</p>
              <div className="text-3xl font-bold mb-8">{plan.price}</div>
              <ul className="space-y-4 text-left mb-10">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start text-sm text-slate-600">
                    <UserCheck className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className={cn("inline-block w-full py-4 rounded-xl font-bold transition-all text-center", plan.highlight ? "bg-amber-500 text-white hover:bg-amber-600" : "bg-slate-900 text-white hover:bg-slate-800")}>
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;

// Helper to use cn in pages
function cn(...inputs) {
  return inputs.filter(Boolean).join(' ');
}
