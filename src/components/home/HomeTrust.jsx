import { Users, Package, Globe, Award } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';

const stats = [
  { icon: Users, value: '500+', label: 'Buyers Served', sub: 'Across 40+ countries' },
  { icon: Package, value: '2,000+', label: 'Orders Managed', sub: 'From sample to delivery' },
  { icon: Globe, value: '15+', label: 'Years in China', sub: 'Deep local expertise' },
  { icon: Award, value: '98%', label: 'Client Satisfaction', sub: 'Based on post-project surveys' },
];

const trustPoints = [
  'On-the-ground team in Guangzhou, Shenzhen, Yiwu, and Ningbo',
  'Physical factory visits — not just online verification',
  'Transparent reporting with photos and written audit reports',
  'No hidden fees — clear, fixed-fee service structure',
  'Independent from suppliers — we work for you, not the factory',
  'Multilingual support: English, French, Spanish, German',
];

export default function HomeTrust() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Why SSourcing China"
          title="Built on Transparency and Results"
          subtitle="We are an independent sourcing agent — our only interest is getting you the best outcome."
        />

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center bg-blue-50 rounded-xl p-6 border border-blue-100">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-5 h-5 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
              <div className="font-semibold text-slate-700 text-sm mb-1">{stat.label}</div>
              <div className="text-slate-500 text-xs">{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* Trust points */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 md:p-10">
          <h3 className="text-xl font-bold text-slate-900 mb-6">What Makes Us Different</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {trustPoints.map((point) => (
              <div key={point} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-slate-700 text-sm leading-relaxed">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
