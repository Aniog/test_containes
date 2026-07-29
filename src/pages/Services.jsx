import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, ShieldCheck, Factory, ClipboardCheck, Truck, BarChart3, Users, FileText, Globe } from 'lucide-react';

const fullServices = [
  {
    title: 'Product Sourcing & Quotation',
    desc: 'We identify and vet top-tier manufacturers that match your specific requirements. We don’t just find suppliers; we negotiate the best terms and verify their true factory status.',
    icon: Search,
    details: ['Market research', 'Supplier shortlisting', 'Price negotiation', 'Cost analysis']
  },
  {
    title: 'Supplier Audits & Verification',
    desc: 'Don’t buy from a middleman pretending to be a factory. We perform on-site audits to verify production capacity, quality systems, and legal compliance.',
    icon: ShieldCheck,
    details: ['Business license check', 'ISO certification verify', 'Social compliance', 'Production capacity audit']
  },
  {
    title: 'Sample Consolidation',
    desc: 'Testing multiple suppliers? We collect all samples in our warehouse and ship them to you in one box, saving you up to 70% in international courier costs.',
    icon: Globe,
    details: ['Warehouse storage', 'Consolidated shipping', 'Sample evaluation', 'Technical feedback']
  },
  {
    title: 'Order Monitoring',
    desc: 'Our staff visits the factory during production to ensure they are on schedule. No more "surprise" delays at the last minute.',
    icon: Factory,
    details: ['Production scheduling', 'Raw material check', 'In-line inspection', 'Weekly reports']
  },
  {
    title: 'Quality Control Inspection',
    desc: 'Our certified inspectors perform Pre-Shipment Inspections (PSI) randomly across the whole batch, following international AQL standards.',
    icon: ClipboardCheck,
    details: ['Function testing', 'Packaging verification', 'Labeling check', 'Detailed photo/video reports']
  },
  {
    title: 'Logistics & Custom Clearance',
    desc: 'We manage the entire shipping process, from documentation (CI, PL, CO) to final delivery at your doorstep, whether by sea, air, or rail.',
    icon: Truck,
    details: ['Freight forwarding', 'Customs documentation', 'FBA preparation', 'Insurance handling']
  }
];

const Services = () => {
  return (
    <div className="services-page">
      {/* Header */}
      <section className="bg-slate-900 text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Sourcing Services</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Comprehensive end-to-end solutions for businesses sourcing from China. We handle the complexity, you focus on growth.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {fullServices.map((s, i) => (
              <div key={i} className="flex flex-col h-full bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-blue-200 transition-colors">
                <div className="w-14 h-14 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-200">
                  <s.icon size={28} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">{s.title}</h2>
                <p className="text-slate-600 mb-8 flex-grow leading-relaxed">{s.desc}</p>
                
                <ul className="space-y-3">
                  {s.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-slate-700 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-3" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Need a Custom Sourcing Solution?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Every business has unique needs. Let's discuss how we can tailor our services to your specific requirements.
          </p>
          <button className="bg-white text-blue-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-slate-100 transition-colors shadow-xl">
            Schedule a Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;
