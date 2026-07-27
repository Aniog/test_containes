import { Shield, Users, Award, Clock, Globe, FileCheck } from 'lucide-react';

const trustPoints = [
  {
    icon: Shield,
    stat: '100%',
    label: 'Factory Verification Rate',
    description: 'Every supplier we recommend has been verified through on-site audits.',
  },
  {
    icon: Users,
    stat: '500+',
    label: 'Global Clients Served',
    description: 'Trusted by buyers from 40+ countries across North America, Europe, and beyond.',
  },
  {
    icon: Award,
    stat: '10+',
    label: 'Years of Experience',
    description: 'Deep knowledge of Chinese manufacturing, trade regulations, and logistics.',
  },
  {
    icon: Clock,
    stat: '24h',
    label: 'Response Time',
    description: 'Quick turnaround on inquiries, quotes, and production updates.',
  },
  {
    icon: Globe,
    stat: '40+',
    label: 'Countries Served',
    description: 'We coordinate shipping to destinations worldwide with reliable freight partners.',
  },
  {
    icon: FileCheck,
    stat: '10,000+',
    label: 'Inspections Completed',
    description: 'Thorough quality checks with detailed photo reports for every order.',
  },
];

export default function TrustSection() {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Buyers Trust SSourcing China</h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Numbers that reflect our commitment to reliable, transparent sourcing services.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {trustPoints.map((point, index) => (
            <div key={index} className="text-center">
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <point.icon className="w-7 h-7" />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-1">{point.stat}</div>
              <div className="text-sm font-semibold text-blue-200 mb-2">{point.label}</div>
              <p className="text-sm text-blue-100/80">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
