import { Shield, Users, Globe, Award, Clock, ThumbsUp } from 'lucide-react';

const stats = [
  { icon: Users, value: '500+', label: 'Buyers Served' },
  { icon: Factory, value: '2,000+', label: 'Factories Audited' },
  { icon: Globe, value: '30+', label: 'Countries Shipped To' },
  { icon: Award, value: '15+', label: 'Years Experience' },
];

import { Factory } from 'lucide-react';

const TrustPoints = () => {
  return (
    <section className="section-padding bg-navy-950 text-white">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <stat.icon className="w-8 h-8 text-brand-400 mx-auto mb-3" />
              <div className="text-3xl md:text-4xl font-extrabold text-white">{stat.value}</div>
              <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            {
              icon: Shield,
              title: 'Verified & Trusted',
              desc: 'Every supplier in our network has been physically audited. We verify business licenses, certifications, and production capabilities on-site.',
            },
            {
              icon: Clock,
              title: 'Real-Time Communication',
              desc: 'We operate in your time zone. Regular updates via WhatsApp, email, or your preferred channel with photos, videos, and reports.',
            },
            {
              icon: ThumbsUp,
              title: '100% Satisfaction Commitment',
              desc: 'If any shipment does not meet agreed specifications, we work with the factory to resolve the issue at no extra cost to you.',
            },
          ].map((item) => (
            <div key={item.title} className="bg-navy-900 rounded-xl p-8 border border-navy-700">
              <div className="w-12 h-12 rounded-xl bg-brand-600/20 flex items-center justify-center mb-5">
                <item.icon className="w-6 h-6 text-brand-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustPoints;
