import { MapPin, Users, Award, Clock, Globe, ShieldCheck } from 'lucide-react';

const trustPoints = [
  { icon: MapPin, title: 'China-Based Team', desc: 'Our staff are physically located in Shenzhen and Yiwu — the heart of Chinese manufacturing.' },
  { icon: ShieldCheck, title: 'Independent Inspectors', desc: 'We are not affiliated with any factory, ensuring unbiased quality assessments.' },
  { icon: Globe, title: 'Multilingual Support', desc: 'We communicate in English, French, Spanish, and German to serve global buyers.' },
  { icon: Users, title: 'Dedicated Account Manager', desc: 'Every client gets a single point of contact who knows your business and requirements.' },
  { icon: Award, title: 'Transparent Reporting', desc: 'Detailed audit reports, inspection photos, and production updates — no surprises.' },
  { icon: Clock, title: 'Fast Turnaround', desc: 'Initial supplier shortlist within 5 business days. We respect your timelines.' },
];

export default function TrustSection() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <div className="text-center mb-14">
          <span className="text-brand-red text-sm font-semibold uppercase tracking-widest">Why SSourcing China</span>
          <h2 className="section-title mt-2">Built on Transparency & Trust</h2>
          <p className="section-subtitle">
            We operate as an extension of your team — with local expertise and international standards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPoints.map((point) => {
            const Icon = point.icon;
            return (
              <div key={point.title} className="flex gap-4 p-6 card-base">
                <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-blue text-base mb-1">{point.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{point.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats bar */}
        <div className="mt-14 bg-brand-blue rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            ['500+', 'Verified Suppliers'],
            ['200+', 'Clients Served'],
            ['15+', 'Industries'],
            ['8+', 'Years Experience'],
          ].map(([num, label]) => (
            <div key={label}>
              <div className="text-brand-gold text-3xl font-black mb-1">{num}</div>
              <div className="text-blue-200 text-sm">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
