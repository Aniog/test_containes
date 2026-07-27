import { Shield, Users, Globe, Award, Clock, FileCheck } from 'lucide-react';

const trustPoints = [
  {
    icon: Shield,
    title: 'On-the-Ground Presence',
    description: 'Our team is based in China with direct access to factories, trade shows, and supplier networks across major manufacturing hubs.',
  },
  {
    icon: Users,
    title: 'Bilingual Team',
    description: 'We communicate fluently in both Chinese and English, eliminating misunderstandings between you and your suppliers.',
  },
  {
    icon: Globe,
    title: 'International Standards',
    description: 'We apply internationally recognized inspection standards (AQL, ISO) and work with accredited third-party inspection agencies.',
  },
  {
    icon: Award,
    title: 'Verified Supplier Network',
    description: 'Our supplier database is built from years of on-site audits, not just online directories. Every supplier has been physically visited.',
  },
  {
    icon: Clock,
    title: 'Transparent Reporting',
    description: 'You receive detailed reports at every stage — factory audit reports, inspection reports, and shipping updates with photos and documentation.',
  },
  {
    icon: FileCheck,
    title: 'No Hidden Fees',
    description: 'Our fee structure is clear and agreed upfront. We do not take undisclosed commissions from suppliers.',
  },
];

export default function TrustSection() {
  return (
    <section className="py-16 md:py-24 bg-brand-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-brand-orange text-sm font-semibold uppercase tracking-wide">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
            What Makes SSourcing China Different
          </h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            We operate as an extension of your team in China, with the local knowledge and professional standards you need to source with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPoints.map((point) => {
            const Icon = point.icon;
            return (
              <div key={point.title} className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-brand-orange/20 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-brand-orange" />
                </div>
                <h3 className="text-base font-semibold text-white mb-3">{point.title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{point.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
