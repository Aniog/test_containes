import { Building2, Users, Package, Globe, Award, FileCheck, Shield } from 'lucide-react';

const stats = [
  { icon: Building2, value: '500+', label: 'Factories Audited' },
  { icon: Users, value: '200+', label: 'Active Clients' },
  { icon: Package, value: '5,000+', label: 'Orders Managed' },
  { icon: Globe, value: '30+', label: 'Countries Served' },
];

const trustPoints = [
  {
    icon: Award,
    title: '10+ Years in China',
    desc: 'Deep local knowledge, established factory relationships, and on-the-ground presence in major manufacturing hubs.',
  },
  {
    icon: FileCheck,
    title: 'Rigorous Audit Process',
    desc: 'Every factory we recommend passes our 8-point verification covering licenses, capacity, quality systems, and compliance.',
  },
  {
    icon: Shield,
    title: 'Third-Party QC Available',
    desc: 'We work with accredited testing labs (SGS, Bureau Veritas, TÜV) for independent product testing when required.',
  },
];

export default function TrustSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="section-heading mb-4">Why Buyers Trust Us</h2>
          <p className="section-subheading mx-auto">
            Our track record speaks for itself. We bring experience, transparency, and results to every engagement.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-slate-50 rounded-xl border border-slate-100">
              <stat.icon className="w-8 h-8 text-brand-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-brand-900 mb-1">{stat.value}</div>
              <div className="text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustPoints.map((item) => (
            <div key={item.title} className="border border-slate-200 rounded-xl p-6 hover:border-brand-200 hover:shadow-md transition-all duration-300">
              <div className="w-11 h-11 bg-brand-50 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-brand-600" />
              </div>
              <h3 className="text-lg font-semibold text-brand-900 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
