import { MapPin, Award, Users, Clock, Globe, ShieldCheck } from 'lucide-react';

const trustPoints = [
  {
    icon: MapPin,
    title: 'Based in China',
    desc: 'Our team is physically located in Guangzhou — the heart of Chinese manufacturing — giving us direct access to suppliers.',
  },
  {
    icon: Award,
    title: 'Certified Inspectors',
    desc: 'Our quality control team holds internationally recognized inspection certifications and follows ANSI/ASQ sampling standards.',
  },
  {
    icon: Users,
    title: 'Dedicated Account Manager',
    desc: 'Every client gets a dedicated point of contact who speaks your language and understands your business.',
  },
  {
    icon: Clock,
    title: '24-Hour Response Time',
    desc: 'We respond to all sourcing inquiries within one business day with a preliminary assessment and next steps.',
  },
  {
    icon: Globe,
    title: 'Global Client Base',
    desc: 'We serve buyers from over 40 countries including the US, UK, Australia, Germany, and the Middle East.',
  },
  {
    icon: ShieldCheck,
    title: 'Transparent Reporting',
    desc: 'You receive detailed audit reports, inspection photos, and production updates — no hidden information.',
  },
];

export default function TrustSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-3">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-5">
              A Sourcing Partner You Can Rely On
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-6">
              SSourcing China has been operating in the Chinese manufacturing sector for over 12 years. We combine local expertise with international business standards to deliver a sourcing service that global buyers can trust.
            </p>
            <p className="text-slate-600 text-base leading-relaxed">
              We don't just find suppliers — we verify them, monitor production, inspect quality, and stay with you until your goods arrive safely. Our fee structure is transparent, and we never take commissions from suppliers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {trustPoints.map((point) => {
              const Icon = point.icon;
              return (
                <div key={point.title} className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-brand-blue-light rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 text-sm mb-1">{point.title}</h4>
                    <p className="text-slate-600 text-xs leading-relaxed">{point.desc}</p>
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
