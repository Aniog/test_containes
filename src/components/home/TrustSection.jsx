import { Building2, Users, PackageCheck, Globe, Award, Clock } from 'lucide-react';

const stats = [
  { icon: Building2, value: '5,000+', label: 'Pre-Vetted Factories' },
  { icon: Users, value: '500+', label: 'Buyers Worldwide' },
  { icon: PackageCheck, value: '15,000+', label: 'Inspections Completed' },
  { icon: Globe, value: '40+', label: 'Countries Served' },
  { icon: Award, value: '12+', label: 'Years Experience' },
  { icon: Clock, value: '24h', label: 'Response Time' },
];

const trustPoints = [
  'ISO 9001 certified quality management',
  'On-the-ground team in major manufacturing hubs',
  'No upfront payment for buyer matching',
  'Weekly production reports with photos',
  'Third-party lab testing available',
  'Bilingual contracts reviewed by legal counsel',
];

export default function TrustSection() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-brand-600 font-semibold text-sm uppercase tracking-wider">Why Trust Us</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-steel-900">
            Your Reliable Partner in China
          </h2>
          <p className="mt-4 text-lg text-steel-500 leading-relaxed">
            We have spent over a decade building relationships with quality-focused factories and helping
            buyers like you succeed.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="inline-flex rounded-full bg-brand-50 p-3 text-brand-600 mb-3">
                <stat.icon className="h-6 w-6" />
              </div>
              <p className="text-2xl sm:text-3xl font-extrabold text-steel-900">{stat.value}</p>
              <p className="text-xs text-steel-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto">
          {trustPoints.map((point) => (
            <div key={point} className="flex items-center gap-2 rounded-lg bg-steel-50 px-4 py-3">
              <svg className="h-5 w-5 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm font-medium text-steel-700">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
