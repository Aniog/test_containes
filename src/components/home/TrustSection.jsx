import { Award, Users, MapPin, Clock, FileCheck, Headphones } from 'lucide-react';

const trustPoints = [
  {
    icon: MapPin,
    title: 'China-Based Operations',
    desc: 'Our team is physically located in China, giving us direct access to factories, trade shows, and supplier networks.',
  },
  {
    icon: FileCheck,
    title: 'Transparent Reporting',
    desc: 'You receive detailed audit reports, inspection photos, and production updates — no guesswork, full visibility.',
  },
  {
    icon: Users,
    title: 'Dedicated Account Manager',
    desc: 'Every client gets a dedicated English-speaking account manager who handles communication and coordination.',
  },
  {
    icon: Award,
    title: 'Industry Experience',
    desc: 'Over 8 years of sourcing experience across electronics, furniture, apparel, machinery, and more.',
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    desc: 'We typically deliver supplier shortlists within 5–7 business days of receiving your sourcing request.',
  },
  {
    icon: Headphones,
    title: 'Responsive Support',
    desc: 'We respond to client inquiries within 24 hours and provide regular updates throughout the sourcing process.',
  },
];

export default function TrustSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#e8621a] mb-3">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d2340] mb-5">
              A Sourcing Partner You Can Rely On
            </h2>
            <p className="text-[#5a6a7e] text-base leading-relaxed mb-8">
              We understand that trust is earned, not claimed. Our approach is built on transparency, accountability, and consistent results for our clients.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {trustPoints.slice(0, 4).map((point) => {
                const Icon = point.icon;
                return (
                  <div key={point.title} className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-[#f4f6f9] rounded-lg flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-[#1a4f8a]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#0d2340] mb-1">{point.title}</h4>
                      <p className="text-xs text-[#5a6a7e] leading-relaxed">{point.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Stats + remaining points */}
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: '500+', label: 'Projects' },
                { value: '30+', label: 'Countries' },
                { value: '98%', label: 'Satisfaction' },
              ].map((stat) => (
                <div key={stat.label} className="bg-[#0d2340] rounded-xl p-5 text-center">
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-[#a8b8cc]">{stat.label}</div>
                </div>
              ))}
            </div>

            {trustPoints.slice(4).map((point) => {
              const Icon = point.icon;
              return (
                <div key={point.title} className="bg-[#f4f6f9] rounded-xl p-5 flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shrink-0 shadow-sm">
                    <Icon className="w-5 h-5 text-[#1a4f8a]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#0d2340] mb-1">{point.title}</h4>
                    <p className="text-sm text-[#5a6a7e] leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
