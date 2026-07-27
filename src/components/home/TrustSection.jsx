import { Award, Users, MapPin, Clock, FileCheck, Headphones } from 'lucide-react';

const trustPoints = [
  {
    icon: MapPin,
    title: 'China-Based Operations',
    description:
      'Our team is physically located in Shenzhen and Yiwu — the heart of Chinese manufacturing — giving us direct access to factories.',
  },
  {
    icon: Users,
    title: 'Dedicated Account Manager',
    description:
      'Every client gets a dedicated English-speaking account manager who handles communication and keeps you updated.',
  },
  {
    icon: FileCheck,
    title: 'Transparent Reporting',
    description:
      'We provide detailed inspection reports, factory audit summaries, and production updates with photos and documentation.',
  },
  {
    icon: Award,
    title: 'Verified Supplier Network',
    description:
      'Our supplier database is built from years of on-the-ground vetting — not just online directories or trade show contacts.',
  },
  {
    icon: Clock,
    title: '24-Hour Response Time',
    description:
      'We respond to all sourcing inquiries within one business day and provide supplier shortlists within 3–5 days.',
  },
  {
    icon: Headphones,
    title: 'Post-Order Support',
    description:
      'Our relationship doesn\'t end at shipment. We support you with reorders, supplier issues, and ongoing quality management.',
  },
];

const TrustSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <div>
            <span className="inline-block bg-blue-100 text-brand-blue text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              A Sourcing Partner You Can Rely On
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              We're not a marketplace or a directory. We're a hands-on sourcing team that works
              exclusively on your behalf — with no conflicts of interest and no hidden commissions
              from suppliers.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '500+', label: 'Verified Suppliers' },
                { value: '30+', label: 'Countries Served' },
                { value: '8 yrs', label: 'Experience' },
                { value: '98%', label: 'Client Retention' },
              ].map((stat) => (
                <div key={stat.label} className="bg-blue-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-brand-navy">{stat.value}</p>
                  <p className="text-sm text-slate-600 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {trustPoints.map((point) => {
              const Icon = point.icon;
              return (
                <div key={point.title} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex-shrink-0 w-9 h-9 bg-brand-blue rounded-lg flex items-center justify-center">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 mb-1">{point.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{point.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
