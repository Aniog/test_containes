import { Users, Globe2, CheckCircle, Star, Award, Clock } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';

const stats = [
  { value: '500+', label: 'Buyers Served', icon: Users },
  { value: '30+', label: 'Countries Covered', icon: Globe2 },
  { value: '98%', label: 'On-Time Delivery Rate', icon: Clock },
  { value: '10+', label: 'Years of Experience', icon: Award },
];

const trustPoints = [
  'China-based team with on-the-ground access to factories',
  'Fluent in Mandarin — direct communication with suppliers',
  'Independent from suppliers — we work for you, not them',
  'Transparent reporting with photos, videos, and written reports',
  'Flexible engagement: one-time project or ongoing partnership',
  'Covered by professional liability insurance',
];

export default function HomeTrust() {
  return (
    <section className="py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="A Sourcing Partner You Can Trust"
          subtitle="We are independent, transparent, and fully committed to protecting your interests."
        />

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map(({ value, label, icon: Icon }) => (
            <div key={label} className="bg-white rounded-xl p-6 text-center border border-gray-100 shadow-sm">
              <Icon className="w-8 h-8 text-brand-red mx-auto mb-3" />
              <div className="text-3xl font-bold text-brand-navy mb-1">{value}</div>
              <div className="text-brand-slate text-sm">{label}</div>
            </div>
          ))}
        </div>

        {/* Trust points */}
        <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
          <h3 className="text-brand-navy font-bold text-xl mb-6">What Sets Us Apart</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {trustPoints.map((point) => (
              <div key={point} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                <span className="text-brand-slate text-sm leading-relaxed">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
