import { CheckCircle, Users, Globe, Award, TrendingUp, Handshake } from 'lucide-react';

const trustPoints = [
  {
    icon: Users,
    value: '500+',
    label: 'Verified Suppliers',
  },
  {
    icon: Globe,
    value: '30+',
    label: 'Countries Served',
  },
  {
    icon: Award,
    value: '10+',
    label: 'Years of Experience',
  },
  {
    icon: TrendingUp,
    value: '5,000+',
    label: 'Orders Managed',
  },
  {
    icon: CheckCircle,
    value: '98%',
    label: 'Client Satisfaction',
  },
  {
    icon: Handshake,
    value: '200+',
    label: 'Long-term Clients',
  },
];

export default function TrustPoints() {
  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Why Buyers Trust SSourcing China
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Proven track record with global buyers across industries and product categories.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {trustPoints.map((point) => (
            <div key={point.label} className="text-center">
              <div className="w-14 h-14 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <point.icon className="w-7 h-7 text-accent" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">{point.value}</div>
              <div className="text-sm text-white/60">{point.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white/5 rounded-lg border border-white/10">
            <h4 className="font-semibold text-white mb-2">On-the-Ground Presence</h4>
            <p className="text-sm text-white/60 leading-relaxed">
              Based in Shenzhen with team members across major manufacturing hubs in Guangdong, Zhejiang, and Jiangsu.
            </p>
          </div>
          <div className="p-6 bg-white/5 rounded-lg border border-white/10">
            <h4 className="font-semibold text-white mb-2">No Conflict of Interest</h4>
            <p className="text-sm text-white/60 leading-relaxed">
              We work exclusively for you, the buyer. We don't take commissions from suppliers, ensuring unbiased recommendations.
            </p>
          </div>
          <div className="p-6 bg-white/5 rounded-lg border border-white/10">
            <h4 className="font-semibold text-white mb-2">Transparent Reporting</h4>
            <p className="text-sm text-white/60 leading-relaxed">
              Detailed inspection reports with photos, factory audit findings, and production updates shared in real time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
