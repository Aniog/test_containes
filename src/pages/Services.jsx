import React from 'react';
import Layout from '@/Layout';
import { Search, Factory, ShieldCheck, Truck, Package, RefreshCw, BarChart3, Users, BarChart } from 'lucide-react';

const Services = () => {
  const allServices = [
    {
      title: "Product Sourcing",
      desc: "We scan the market and filter out the best factories based on your specific requirements and price point. You get a detailed sourcing report with 5-10 verified options.",
      icon: <Search className="w-12 h-12 text-[#0F4C81]" />,
      features: ["Supplier background checks", "Price negotiation", "Certificates verification", "Production capacity audit"]
    },
    {
      title: "Factory Audits",
      desc: "Our auditors visit factories in person to verify their legal status, actual manufacturing capability, quality management systems, and social compliance (BSCI/Sedex).",
      icon: <Factory className="w-12 h-12 text-[#0F4C81]" />,
      features: ["In-person facility walkthrough", "Employee verification", "QC process audit", "Machine & equipment check"]
    },
    {
      title: "Quality Control",
      desc: "We perform strict on-site inspections using AQL standards. We catch issues at the factory, not after the goods arrive at your warehouse.",
      icon: <ShieldCheck className="w-12 h-12 text-[#0F4C81]" />,
      features: ["During Production Inspection (DUPRO)", "Pre-Shipment Inspection (PSI)", "Container Loading Supervision", "Defect sorting"]
    },
    {
      title: "Consolidated Shipping",
      desc: "We consolidate goods from different suppliers in our China warehouses to save you logistics costs. We handle export documents and sea/air/rail freight.",
      icon: <Truck className="w-12 h-12 text-[#0F4C81]" />,
      features: ["Free warehouse storage (30 days)", "Customs clearance in China", "Door-to-door delivery", "Cargo insurance"]
    },
    {
      title: "Production Monitoring",
      desc: "We act as your on-site production manager. We follow up with the factory daily to ensure they meet your deadlines and quality standards.",
      icon: <RefreshCw className="w-12 h-12 text-[#0F4C81]" />,
      features: ["Timeline management", "Raw material verification", "Packaging design support", "Risk management"]
    },
    {
      title: "Project Management",
      desc: "Full end-to-end management for complex OEM/ODM projects. From 3D prototypes and molding to final mass production and labeling.",
      icon: <BarChart3 className="w-12 h-12 text-[#0F4C81]" />,
      features: ["Sample development", "Molding fee negotiation", "NDA agreements", "IP protection"]
    }
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-24 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">End-to-End Sourcing Solutions</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">Minimize risks and maximize profits with our comprehensive range of services tailored for global buyers.</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {allServices.map((svc, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-8 items-start">
                <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100">{svc.icon}</div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{svc.title}</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">{svc.desc}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {svc.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center text-sm text-gray-700">
                        <ShieldCheck className="w-4 h-4 text-green-600 mr-2" /> {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0F4C81] rounded-3xl p-12 lg:p-20 text-white relative overflow-hidden">
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Why work with a China-based agent?</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="bg-white/10 p-2 rounded-full h-fit"><Users className="w-6 h-6" /></div>
                    <p><b>Boots on the ground:</b> We visit the factories so you don't have to. Real-time feedback and video calls during inspections.</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-white/10 p-2 rounded-full h-fit"><ShieldCheck className="w-6 h-6" /></div>
                    <p><b>Zero Commissions from Factories:</b> We work solely for you. We don't take "kickbacks" from suppliers, ensuring you get the real factory price.</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-white/10 p-2 rounded-full h-fit"><RefreshCw className="w-6 h-6" /></div>
                    <p><b>Language & Culture:</b> We bridge the communication gap, handling negotiations in native Mandarin to secure better terms.</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <blockquote className="text-lg italic text-gray-200 mb-6">
                  "SSourcing China saved us from a $20k disaster by catching a major production error during their mid-way inspection. Their attention to detail is why we trust them with all our orders."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-600 rounded-full" />
                  <div>
                    <div className="font-bold">Mark Stevenson</div>
                    <div className="text-sm text-gray-400">CEO, Adventure Gear UK</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
