import { Shield, Users, Award, Clock, Globe, FileCheck } from 'lucide-react';

const trustPoints = [
  {
    icon: Shield,
    title: 'Verified Suppliers Only',
    description: 'Every supplier in our network has passed our on-site verification process.',
  },
  {
    icon: Users,
    title: 'Dedicated Sourcing Team',
    description: 'A personal sourcing agent assigned to your account for consistent communication.',
  },
  {
    icon: Award,
    title: '10+ Years Experience',
    description: 'Deep knowledge of Chinese manufacturing across multiple industries.',
  },
  {
    icon: Clock,
    title: 'Fast Response Time',
    description: 'We respond to inquiries within 24 hours and provide regular progress updates.',
  },
  {
    icon: Globe,
    title: 'Global Client Base',
    description: 'Serving buyers from 50+ countries across North America, Europe, and beyond.',
  },
  {
    icon: FileCheck,
    title: 'Transparent Reporting',
    description: 'Detailed inspection reports with photos and videos at every production stage.',
  },
];

export default function TrustPoints() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Why Buyers Trust Us</h2>
          <p className="section-subtitle mx-auto">
            We build long-term partnerships through transparency, reliability, and consistent results.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustPoints.map((item, index) => (
            <div key={index} className="flex items-start gap-4 p-6 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <item.icon className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
