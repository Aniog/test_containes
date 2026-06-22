import { Award, Users, Globe, Clock, FileCheck, Headphones } from 'lucide-react';

const trustPoints = [
  {
    icon: Globe,
    title: 'China-Based Team',
    desc: 'Our team is physically located in China — in Guangzhou, Shenzhen, and Yiwu — giving us direct access to factories and markets.',
  },
  {
    icon: Users,
    title: 'Bilingual Professionals',
    desc: 'We communicate fluently in both Chinese and English, eliminating misunderstandings between you and your supplier.',
  },
  {
    icon: Award,
    title: 'Verified Supplier Network',
    desc: 'Every supplier in our network has been audited in person. We only work with factories that meet our quality and compliance standards.',
  },
  {
    icon: FileCheck,
    title: 'Transparent Reporting',
    desc: 'You receive detailed inspection reports, factory audit summaries, and production updates — all in clear, readable English.',
  },
  {
    icon: Clock,
    title: '24-Hour Response',
    desc: 'We respond to all sourcing inquiries within one business day and keep you updated throughout the entire process.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Account Manager',
    desc: 'Every client gets a single point of contact who knows your business, your products, and your standards.',
  },
];

const stats = [
  { value: '500+', label: 'Verified Suppliers' },
  { value: '12+', label: 'Years in China Sourcing' },
  { value: '40+', label: 'Countries Served' },
  { value: '98%', label: 'Client Satisfaction Rate' },
];

export default function HomeTrust() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats bar */}
        <div className="bg-primary rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-blue-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-12">
          <span className="inline-block bg-light-blue text-primary text-sm font-semibold px-3 py-1 rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            Why Global Buyers Trust SSourcing China
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're not a marketplace or a directory. We're a hands-on sourcing team that works exclusively on your behalf.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPoints.map((point) => {
            const Icon = point.icon;
            return (
              <div key={point.title} className="flex gap-4 p-6 rounded-xl border border-gray-200 bg-white hover:shadow-sm transition-shadow">
                <div className="w-12 h-12 bg-light-blue rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-dark mb-1">{point.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{point.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
