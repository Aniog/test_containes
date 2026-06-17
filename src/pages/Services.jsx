import React from 'react';
import { Search, ShieldCheck, Factory, Truck, CheckCircle, BarChart, FileText } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Search className="w-12 h-12 text-blue-600" />,
      title: "Supplier Sourcing",
      desc: "We search deeper than Alibaba. Our team identifies verified manufacturers directly in China's industrial clusters to find the best price-quality ratio for your products."
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-blue-600" />,
      title: "Factory Audit",
      desc: "Stop worrying about scams or middlemen. We conduct on-site factory audits to verify their business licenses, production capacity, quality management systems, and social compliance."
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-blue-600" />,
      title: "Quality Control",
      desc: "We perform pre-shipment inspections following international AQL standards. We check everything from packaging to functionality, ensuring you receive exactly what you ordered."
    },
    {
      icon: <Truck className="w-12 h-12 text-blue-600" />,
      title: "Shipping & Logistics",
      desc: "Whether it's FCL, LCL, or Air Freight, we coordinate with reliable forwarders to handle documentation, customs clearance, and delivery to your warehouse."
    },
    {
      icon: <FileText className="w-12 h-12 text-blue-600" />,
      title: "Sample Consolidation",
      desc: "Save on shipping costs. We collect samples from multiple suppliers, inspect them in our office, and ship them to you in one single package."
    },
    {
      icon: <BarChart className="w-12 h-12 text-blue-600" />,
      title: "Production Monitoring",
      desc: "We follow up on your production schedule weekly, identifying potential delays early and pushing the factory to meet your deadlines."
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-900 py-20 lg:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">End-to-End Sourcing Services</h1>
            <p className="text-xl text-slate-400 mb-0">From initial product research to final delivery, we provide the expertise needed to manage your China supply chain efficiently.</p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 skew-x-12 translate-x-1/2"></div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((s, i) => (
              <div key={i} className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="mb-6 inline-block p-3 bg-blue-50 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {s.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{s.title}</h3>
                <p className="text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8 leading-tight">Your Local Partner in China</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">Operating as SSourcing China, we act as your local eyes and ears. Our team is based in key industrial hubs like Shenzhen, Guangzhou, and Ningbo, allowing us to respond quickly to any production or quality issues.</p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-blue-700 mb-1">10+</div>
                  <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-700 mb-1">5,000+</div>
                  <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">QC Inspections</div>
                </div>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="bg-white p-2 rounded-2xl shadow-lg border border-slate-100 overflow-hidden aspect-video">
                 <img
                    data-strk-img-id="services-team-img"
                    data-strk-img="sourcing agent office china team meeting"
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt="Our Team"
                    className="w-full h-full object-cover rounded-xl"
                  />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
