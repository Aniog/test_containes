import {
  ShieldCheck,
  Globe,
  Users,
  Award,
  Clock,
  CheckCircle,
} from 'lucide-react';

const stats = [
  { value: '200+', label: 'Buyers Served Worldwide' },
  { value: '10+', label: 'Years of Experience' },
  { value: '1,500+', label: 'Factory Visits Completed' },
  { value: '98%', label: 'Client Satisfaction Rate' },
];

const trustPoints = [
  {
    icon: ShieldCheck,
    title: 'Independent & Objective',
    desc: 'We work for you, not the factory. Our inspections and reports are unbiased and transparent.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    desc: 'We serve buyers from the US, Europe, Australia, Middle East, and Southeast Asia.',
  },
  {
    icon: Users,
    title: 'Local Expertise',
    desc: 'Our bilingual team is based in Shenzhen with direct access to manufacturing hubs.',
  },
  {
    icon: Award,
    title: 'Industry Knowledge',
    desc: 'Deep category expertise across electronics, machinery, textiles, hardware, and packaging.',
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    desc: 'Initial supplier shortlists delivered within 3-5 business days of receiving your brief.',
  },
  {
    icon: CheckCircle,
    title: 'Transparent Pricing',
    desc: 'Clear, fixed-fee service pricing with no hidden commissions from factories.',
  },
];

export default function TrustSection() {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white rounded-xl p-6 border border-slate-200 text-center"
            >
              <div className="text-3xl md:text-4xl font-extrabold text-brand mb-1">
                {s.value}
              </div>
              <div className="text-sm text-slate-500 font-medium">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Trust Points */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 bg-light-blue text-brand text-xs font-semibold uppercase tracking-wide rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Trust Built on Transparency & Results
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Our clients rely on us because we prioritize their interests,
            communicate clearly, and deliver consistent results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPoints.map((tp) => (
            <div
              key={tp.title}
              className="flex gap-4 bg-white rounded-xl p-6 border border-slate-200"
            >
              <div className="w-10 h-10 bg-light-blue rounded-lg flex items-center justify-center shrink-0">
                <tp.icon className="w-5 h-5 text-brand" />
              </div>
              <div>
                <h3 className="text-base font-bold text-navy mb-1">{tp.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {tp.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
