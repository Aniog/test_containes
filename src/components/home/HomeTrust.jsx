import { Award, Users, MapPin, Clock, FileCheck, Headphones } from 'lucide-react';

const stats = [
  { value: '500+', label: 'Sourcing Projects Completed' },
  { value: '30+', label: 'Countries Served' },
  { value: '8+', label: 'Years in Operation' },
  { value: '95%', label: 'Client Retention Rate' },
];

const trustPoints = [
  {
    icon: MapPin,
    title: 'China-Based Team',
    description:
      'Our team is on the ground in China, with offices and QC staff in Guangzhou, Shenzhen, Yiwu, and Shanghai.',
  },
  {
    icon: FileCheck,
    title: 'Transparent Reporting',
    description:
      'Every project includes written reports, factory photos, inspection checklists, and clear communication throughout.',
  },
  {
    icon: Users,
    title: 'Bilingual Professionals',
    description:
      'Our sourcing managers are fluent in both Mandarin and English, eliminating miscommunication with suppliers.',
  },
  {
    icon: Award,
    title: 'No Kickbacks Policy',
    description:
      'We work exclusively for our clients. We do not accept commissions from suppliers — your interests come first.',
  },
  {
    icon: Clock,
    title: 'Fast Response Times',
    description:
      'We respond to all inquiries within 24 hours and provide weekly project updates as standard.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Account Manager',
    description:
      'Every client gets a single point of contact who manages your project from start to finish.',
  },
];

export default function HomeTrust() {
  return (
    <section className="section-padding bg-white">
      <div className="container-xl">
        {/* Stats bar */}
        <div className="bg-brand-navy rounded-2xl p-8 md:p-10 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{value}</div>
                <div className="text-blue-300 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust points */}
        <div className="text-center mb-12">
          <span className="section-label">Why SSourcing China</span>
          <h2 className="section-heading">What Sets Us Apart</h2>
          <p className="section-subtext max-w-2xl mx-auto">
            We operate as an extension of your team — with local expertise, transparent processes,
            and a genuine commitment to your sourcing success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPoints.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex gap-4 p-6 rounded-xl border border-brand-border hover:shadow-sm transition-shadow">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-brand-blue" />
              </div>
              <div>
                <h3 className="font-semibold text-brand-dark mb-1.5">{title}</h3>
                <p className="text-brand-mid text-sm leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
