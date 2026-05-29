import { Shield, Users, Award, Clock, Globe, FileCheck } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';

const trustPoints = [
  {
    icon: Shield,
    title: 'China-Based Team',
    description: 'Our sourcing managers are physically located in Shenzhen, Yiwu, and Guangzhou — where manufacturing happens.',
    color: 'text-blue-600 bg-blue-50',
  },
  {
    icon: Users,
    title: '10+ Years of Experience',
    description: 'Our team has been sourcing for international buyers since 2013, across dozens of product categories.',
    color: 'text-amber-600 bg-amber-50',
  },
  {
    icon: Award,
    title: 'Verified Supplier Network',
    description: 'Every supplier in our network has passed a multi-point audit covering licenses, capacity, and quality systems.',
    color: 'text-green-600 bg-green-50',
  },
  {
    icon: Clock,
    title: '24-Hour Response Time',
    description: 'We respond to all sourcing inquiries within one business day and provide a preliminary supplier report within 5 days.',
    color: 'text-purple-600 bg-purple-50',
  },
  {
    icon: Globe,
    title: 'Buyers in 30+ Countries',
    description: 'We work with importers, retailers, and brands from the US, EU, Australia, Middle East, and Southeast Asia.',
    color: 'text-rose-600 bg-rose-50',
  },
  {
    icon: FileCheck,
    title: 'Transparent Reporting',
    description: 'Every inspection, audit, and production update comes with a detailed written report and supporting photos.',
    color: 'text-teal-600 bg-teal-50',
  },
];

const stats = [
  { value: '500+', label: 'Verified Suppliers' },
  { value: '1,200+', label: 'Orders Completed' },
  { value: '30+', label: 'Countries Served' },
  { value: '98%', label: 'Client Satisfaction' },
];

export default function TrustSection() {
  return (
    <section className="section-navy">
      <div className="container-xl">
        <SectionHeader
          label="Why Choose Us"
          title="Why Buyers Trust SSourcing China"
          subtitle="We're not a marketplace or a directory. We're your dedicated sourcing team on the ground in China."
          light
        />

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center bg-white/10 rounded-xl p-6 border border-white/10">
              <p className="text-4xl font-bold text-amber-400 mb-1">{stat.value}</p>
              <p className="text-slate-300 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Trust points */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {trustPoints.map((point) => {
            const Icon = point.icon;
            return (
              <div key={point.title} className="bg-white/10 border border-white/10 rounded-xl p-6 hover:bg-white/15 transition-colors duration-200">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${point.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-white font-bold mb-2">{point.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{point.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
