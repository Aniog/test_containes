import { Award, Users, Clock, Shield, MapPin, CheckCircle } from 'lucide-react';

const trustPoints = [
  {
    icon: Award,
    stat: '10+ Years',
    label: 'Industry Experience',
    description: 'Over a decade of sourcing expertise in China manufacturing.',
  },
  {
    icon: Users,
    stat: '500+',
    label: 'Global Clients',
    description: 'Trusted by buyers from 40+ countries across all continents.',
  },
  {
    icon: Clock,
    stat: '24h',
    label: 'Response Time',
    description: 'We respond to all inquiries within 24 hours, guaranteed.',
  },
  {
    icon: Shield,
    stat: '100%',
    label: 'Verified Suppliers',
    description: 'Every supplier passes our rigorous verification process.',
  },
  {
    icon: MapPin,
    stat: 'Shenzhen',
    label: 'Local Office',
    description: 'Based in Shenzhen, the heart of China manufacturing.',
  },
  {
    icon: CheckCircle,
    stat: '98%',
    label: 'Client Satisfaction',
    description: 'Consistently high satisfaction ratings from repeat clients.',
  },
];

export default function TrustSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Why Buyers Trust SSourcing China</h2>
          <p className="section-subtitle mx-auto">
            We have built our reputation on transparency, reliability, and results. Here is what sets us apart.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPoints.map((point, index) => (
            <div key={index} className="text-center p-6">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <point.icon className="w-7 h-7 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-1">{point.stat}</div>
              <div className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">{point.label}</div>
              <p className="text-slate-600 text-sm">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
