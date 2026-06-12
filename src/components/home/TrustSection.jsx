import { Award, Users, MapPin, FileCheck, Globe, Headphones } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';

const trustPoints = [
  {
    icon: MapPin,
    title: 'China-Based Team',
    desc: 'Our agents are on the ground in Guangzhou, Shenzhen, Yiwu, and other key manufacturing hubs — not managing remotely from overseas.',
  },
  {
    icon: FileCheck,
    title: 'Transparent Reporting',
    desc: 'Every factory visit, inspection, and production update comes with a written report, photos, and video evidence.',
  },
  {
    icon: Users,
    title: 'Dedicated Account Manager',
    desc: 'You work with one point of contact who knows your business, your products, and your standards.',
  },
  {
    icon: Globe,
    title: 'Bilingual Communication',
    desc: 'We bridge the language gap between you and your suppliers, ensuring nothing is lost in translation.',
  },
  {
    icon: Award,
    title: 'No Hidden Fees',
    desc: 'Our pricing is clear and agreed upfront. We do not take supplier commissions that could compromise our objectivity.',
  },
  {
    icon: Headphones,
    title: 'Responsive Support',
    desc: 'We respond within one business day. For urgent issues during production, we are available across time zones.',
  },
];

export default function TrustSection() {
  return (
    <section className="py-20 md:py-28 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          overline="Why Choose Us"
          title="What Makes SSourcing China Different"
          subtitle="We operate as an extension of your team — with local expertise, independent oversight, and a commitment to your interests."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPoints.map((point) => {
            const Icon = point.icon;
            return (
              <div key={point.title} className="bg-white rounded-xl p-6 border border-neutral-200 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-brand-blue" />
                </div>
                <h3 className="text-neutral-900 font-bold text-base mb-2">{point.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{point.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
