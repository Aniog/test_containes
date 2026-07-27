import { Shield, Users, Globe, Award, Clock, Headphones } from 'lucide-react';

const trustPoints = [
  {
    icon: Shield,
    stat: '10+',
    label: 'Years of Experience',
    description: 'Deep expertise in China manufacturing and global trade',
  },
  {
    icon: Users,
    stat: '500+',
    label: 'Happy Clients',
    description: 'Businesses worldwide trust us with their sourcing',
  },
  {
    icon: Globe,
    stat: '50+',
    label: 'Countries Served',
    description: 'From USA to Australia, we ship worldwide',
  },
  {
    icon: Award,
    stat: '200+',
    label: 'Verified Suppliers',
    description: 'Network of thoroughly vetted manufacturers',
  },
  {
    icon: Clock,
    stat: '24h',
    label: 'Response Time',
    description: 'Quick turnaround on inquiries and updates',
  },
  {
    icon: Headphones,
    stat: '100%',
    label: 'Dedicated Support',
    description: 'Personal account managers for every client',
  },
];

const TrustSection = () => {
  return (
    <section className="section-spacing bg-white border-y border-neutral-100">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="badge-primary mb-4">Why Choose Us</span>
          <h2 className="section-heading mb-4">
            Trusted by Businesses Worldwide
          </h2>
          <p className="section-subheading mx-auto">
            Our track record speaks for itself. Here's what sets us apart as your China sourcing partner.
          </p>
        </div>

        {/* Trust Points Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {trustPoints.map((point) => {
            const Icon = point.icon;
            return (
              <div key={point.label} className="text-center p-6">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary-700" />
                </div>
                <div className="text-4xl font-bold text-primary-800 mb-2">
                  {point.stat}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  {point.label}
                </h3>
                <p className="text-neutral-500 text-sm">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Certifications & Logos */}
        <div className="mt-12 pt-12 border-t border-neutral-100">
          <p className="text-center text-neutral-400 text-sm mb-6">
            Trusted by leading brands and compliant with international standards
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            {['ISO 9001', 'SGS', 'BV', 'Intertek', 'TUV'].map((cert) => (
              <div key={cert} className="px-4 py-2 bg-neutral-100 rounded-lg">
                <span className="font-semibold text-neutral-600">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
