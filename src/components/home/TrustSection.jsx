import { Users, Globe, ClipboardCheck, Award, Building2, TrendingUp } from 'lucide-react';

const stats = [
  { value: '300+', label: 'Global Buyers Served', icon: Users },
  { value: '20+', label: 'Industries Covered', icon: Globe },
  { value: '1,200+', label: 'Inspections Completed', icon: ClipboardCheck },
  { value: '8 Years', label: 'China Sourcing Experience', icon: Award },
  { value: '500+', label: 'Verified Suppliers', icon: Building2 },
  { value: '98%', label: 'On-Time Delivery Rate', icon: TrendingUp },
];

export default function TrustSection() {
  return (
    <section className="section-padding bg-brand-navy">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-brand-orange text-sm font-semibold uppercase tracking-widest mb-3">By the Numbers</p>
          <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Why Global Buyers Trust SSourcing China
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
            Our track record speaks for itself. We've helped hundreds of importers source smarter, reduce risk, and grow their businesses.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="text-center p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-200">
                <div className="w-12 h-12 bg-brand-orange/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-brand-orange" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-slate-300 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
