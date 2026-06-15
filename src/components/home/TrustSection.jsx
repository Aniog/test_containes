import { Award, Users, Globe, Clock, ShieldCheck, FileText } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';

const trustPoints = [
  {
    icon: Award,
    title: '10+ Years of Experience',
    description: 'Over a decade of hands-on experience sourcing products from China\'s major manufacturing hubs including Guangdong, Zhejiang, and Jiangsu.',
  },
  {
    icon: Users,
    title: 'Dedicated Sourcing Manager',
    description: 'Every client gets a dedicated point of contact who manages your project from start to finish and communicates in your language.',
  },
  {
    icon: Globe,
    title: 'Buyers in 30+ Countries',
    description: 'We\'ve helped importers, retailers, and brands across North America, Europe, Australia, and Southeast Asia source successfully from China.',
  },
  {
    icon: ShieldCheck,
    title: 'Verified Supplier Network',
    description: 'Our supplier database includes only factories that have passed our on-site audit process. No unverified listings.',
  },
  {
    icon: FileText,
    title: 'Transparent Reporting',
    description: 'You receive detailed audit reports, inspection reports, and production updates — not just verbal assurances.',
  },
  {
    icon: Clock,
    title: 'Fast Response Times',
    description: 'We respond to all inquiries within 24 hours and provide initial supplier shortlists within 3–5 business days.',
  },
];

export default function TrustSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="Why Buyers Trust SSourcing China"
          subtitle="We operate with transparency, accountability, and a practical understanding of how Chinese manufacturing works."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {trustPoints.map((point) => {
            const Icon = point.icon;
            return (
              <div key={point.title} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-primary-dark mb-1">{point.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{point.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
