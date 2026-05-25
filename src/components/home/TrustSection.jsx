import { Award, Users, Globe, Clock, ShieldCheck, FileCheck } from 'lucide-react';

const trustPoints = [
  {
    icon: Clock,
    value: '12+',
    label: 'Years in China Sourcing',
    description: 'Operating since 2012 with deep knowledge of Chinese manufacturing regions.',
  },
  {
    icon: Users,
    value: '300+',
    label: 'Global Clients Served',
    description: 'Buyers from the US, EU, Australia, Middle East, and Southeast Asia.',
  },
  {
    icon: Globe,
    value: '20+',
    label: 'Countries Shipped To',
    description: 'We handle international logistics to virtually any destination worldwide.',
  },
  {
    icon: ShieldCheck,
    value: '5,000+',
    label: 'Orders Completed',
    description: 'From small trial orders to large-scale production runs across all industries.',
  },
  {
    icon: FileCheck,
    value: '98%',
    label: 'On-Time Delivery Rate',
    description: 'Rigorous production monitoring keeps your orders on schedule.',
  },
  {
    icon: Award,
    value: 'ISO',
    label: 'Certified Inspection Process',
    description: 'Our QC inspections follow international AQL standards and client-specific checklists.',
  },
];

const TrustSection = () => {
  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-gold text-sm font-semibold uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-3">
            A Sourcing Partner You Can Trust
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-5" />
          <p className="text-white/75 text-lg max-w-2xl mx-auto">
            We've built our reputation on transparency, reliability, and measurable results for global importers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPoints.map((point) => {
            const Icon = point.icon;
            return (
              <div key={point.label} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-colors">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-white/15 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <div className="text-3xl font-bold text-white">{point.value}</div>
                </div>
                <h3 className="text-white font-semibold text-base mb-1">{point.label}</h3>
                <p className="text-white/65 text-sm leading-relaxed">{point.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
