import { Award, Users, Globe, Clock, ShieldCheck, Star } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';

const stats = [
  { value: '500+', label: 'Sourcing Projects Completed', icon: Award },
  { value: '200+', label: 'Verified Supplier Partners', icon: Users },
  { value: '30+', label: 'Countries Served', icon: Globe },
  { value: '8+', label: 'Years in China Sourcing', icon: Clock },
];

const trustBadges = [
  { icon: ShieldCheck, title: 'Factory Audited', desc: 'Every recommended supplier is audited on-site before engagement.' },
  { icon: Star, title: 'Quality Guaranteed', desc: 'Pre-shipment inspections on every order above minimum threshold.' },
  { icon: Globe, title: 'Bilingual Team', desc: 'Native Chinese speakers handle all supplier negotiations.' },
  { icon: Award, title: 'Transparent Reporting', desc: 'Detailed audit and inspection reports shared with every client.' },
];

const TrustSection = () => {
  return (
    <section className="py-16 md:py-24 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="Built on Trust, Backed by Results"
          subtitle="We've helped hundreds of global buyers source from China with confidence. Here's what sets us apart."
        />

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="bg-white rounded-xl p-6 text-center border border-neutral-200 shadow-sm">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 text-brand-blue" />
                </div>
                <div className="text-3xl font-bold text-brand-navy mb-1">{stat.value}</div>
                <div className="text-sm text-neutral-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustBadges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div key={badge.title} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-neutral-200">
                <div className="w-10 h-10 bg-brand-gold/15 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 mb-1">{badge.title}</h4>
                  <p className="text-sm text-neutral-600 leading-relaxed">{badge.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
