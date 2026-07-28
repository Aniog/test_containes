import { Award, Users, Globe, Clock, ShieldCheck, BarChart3 } from 'lucide-react';

const trustPoints = [
  {
    icon: Globe,
    value: '40+',
    label: 'Countries Served',
    description: 'Buyers from North America, Europe, Australia, and the Middle East trust us.',
  },
  {
    icon: Users,
    value: '500+',
    label: 'Verified Suppliers',
    description: 'Pre-audited manufacturer network across China\'s key industrial regions.',
  },
  {
    icon: Clock,
    value: '12+',
    label: 'Years in Business',
    description: 'Over a decade of hands-on sourcing experience in the Chinese market.',
  },
  {
    icon: ShieldCheck,
    value: '98%',
    label: 'Client Satisfaction',
    description: 'Based on post-project feedback from our international buyer clients.',
  },
  {
    icon: BarChart3,
    value: '2,000+',
    label: 'Orders Managed',
    description: 'Successfully completed sourcing projects across diverse product categories.',
  },
  {
    icon: Award,
    value: 'ISO',
    label: 'Certified Process',
    description: 'Our QC and audit processes follow internationally recognized standards.',
  },
];

export default function HomeTrust() {
  return (
    <section className="py-20 md:py-28 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-white/10 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Buyers Worldwide
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Our track record speaks for itself. Here's what makes SSourcing China a reliable partner for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPoints.map((point) => {
            const Icon = point.icon;
            return (
              <div key={point.label} className="bg-white/5 border border-white/10 rounded-xl p-7 hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-brand-blue/30 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-blue-300" />
                  </div>
                  <div className="text-3xl font-black text-white">{point.value}</div>
                </div>
                <h3 className="font-semibold text-white mb-2">{point.label}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{point.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
