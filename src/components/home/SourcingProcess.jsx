import React from 'react';
import { ClipboardList, UserSearch, Building2, Eye, BarChart3, Truck } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: ClipboardList,
    title: 'Submit Your Requirements',
    desc: 'Tell us about your product, target price, order volume, and quality expectations. We create a detailed sourcing brief.',
  },
  {
    step: '02',
    icon: UserSearch,
    title: 'Supplier Identification',
    desc: 'Our team identifies and shortlists 3-5 qualified manufacturers matching your criteria from our vetted network.',
  },
  {
    step: '03',
    icon: Building2,
    title: 'Factory Audit & Verification',
    desc: 'We conduct on-site audits of shortlisted factories — verifying licenses, production capacity, equipment, and certifications.',
  },
  {
    step: '04',
    icon: Eye,
    title: 'Sampling & Negotiation',
    desc: 'We arrange samples, facilitate price negotiations, and help you select the best supplier for your needs.',
  },
  {
    step: '05',
    icon: BarChart3,
    title: 'Production & QC Monitoring',
    desc: 'We track production milestones, conduct in-process and pre-shipment inspections, and resolve issues proactively.',
  },
  {
    step: '06',
    icon: Truck,
    title: 'Shipping & Delivery',
    desc: 'We manage freight, customs documentation, and logistics to deliver your goods on time and on budget.',
  },
];

const SourcingProcess = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight mb-4">
            How We Work
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A structured 6-step process designed to minimize risk and deliver consistent results for every sourcing project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.step} className="relative bg-white rounded-xl p-6 border border-gray-100 group hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 bg-navy rounded-lg flex items-center justify-center">
                  <s.icon className="w-5 h-5 text-gold" />
                </div>
                <span className="text-3xl font-extrabold text-gray-100 group-hover:text-gold/20 transition-colors">
                  {s.step}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-navy mb-2">{s.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SourcingProcess;
