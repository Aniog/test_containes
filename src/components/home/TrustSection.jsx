import { ShieldCheck, Users, Award, Clock, Globe, Headphones } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';

const trustPoints = [
  {
    icon: ShieldCheck,
    title: 'Verified Supplier Network',
    description: 'Every factory in our network has been personally visited and vetted by our team. We maintain ongoing relationships with 500+ verified manufacturers.',
  },
  {
    icon: Users,
    title: 'Bilingual Local Team',
    description: 'Our Guangzhou-based team speaks fluent Mandarin and English, eliminating communication barriers between you and Chinese suppliers.',
  },
  {
    icon: Award,
    title: 'ISO-Certified Processes',
    description: 'We follow structured quality management procedures for every inspection and audit, with detailed reports you can rely on.',
  },
  {
    icon: Clock,
    title: '48-Hour Response Time',
    description: 'We respond to all sourcing inquiries within 48 hours with initial supplier recommendations, pricing estimates, and next steps.',
  },
  {
    icon: Globe,
    title: '30+ Countries Served',
    description: 'We have helped businesses across North America, Europe, Australia, the Middle East, and Africa source products from China.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Account Manager',
    description: 'Every client is assigned a dedicated contact who knows your business, preferences, and sourcing history for consistent service.',
  },
];

export default function TrustSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <SectionHeading
          badge="Why Trust Us"
          title="Built on Reliability and Transparency"
          description="We earn trust through consistent results, clear communication, and a commitment to protecting your interests at every stage."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustPoints.map((point) => (
            <div key={point.title} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-11 h-11 bg-accent-50 rounded-lg flex items-center justify-center">
                  <point.icon className="w-5 h-5 text-accent-500" />
                </div>
              </div>
              <div>
                <h3 className="text-base font-bold text-navy-500 mb-2">{point.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
