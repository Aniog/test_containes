import { Shield, Award, Users, Globe, FileCheck, Headphones } from 'lucide-react';

const trustPoints = [
  {
    icon: Shield,
    title: 'Verified Suppliers Only',
    desc: 'Every supplier in our network undergoes a rigorous on-site audit before we recommend them to clients.',
  },
  {
    icon: Award,
    title: '12+ Years of Experience',
    desc: 'Established in 2012, we have deep industry knowledge and long-standing relationships with top manufacturers.',
  },
  {
    icon: FileCheck,
    title: 'ISO-Certified QC Process',
    desc: 'Our quality control procedures follow international standards with detailed inspection checklists and reports.',
  },
  {
    icon: Users,
    title: 'Bilingual Team',
    desc: 'Our team speaks fluent English and Mandarin, eliminating communication gaps between you and the factory.',
  },
  {
    icon: Globe,
    title: 'Global Clientele',
    desc: 'We serve buyers from 50+ countries across North America, Europe, Australia, and the Middle East.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Account Manager',
    desc: 'You get a single point of contact who manages your entire sourcing project from start to finish.',
  },
];

export default function TrustSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Why Choose SSourcing China
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            We combine local expertise with international standards to deliver reliable sourcing outcomes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustPoints.map((point) => (
            <div key={point.title} className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-navy/10 flex items-center justify-center">
                <point.icon className="w-6 h-6 text-brand-navy" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">{point.title}</h3>
                <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{point.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}