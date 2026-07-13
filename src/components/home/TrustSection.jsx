import { Users, Globe, Package, Award, Clock, ThumbsUp } from 'lucide-react';

const stats = [
  { icon: Users, value: '200+', label: 'Global Buyers Served' },
  { icon: Globe, value: '30+', label: 'Countries Covered' },
  { icon: Package, value: '1,500+', label: 'Orders Completed' },
  { icon: Award, value: '8+', label: 'Years in China Sourcing' },
  { icon: Clock, value: '24h', label: 'Average Response Time' },
  { icon: ThumbsUp, value: '97%', label: 'Client Satisfaction Rate' },
];

const trustPoints = [
  {
    title: 'China-Based Team',
    desc: 'Our team is physically located in China — in Shenzhen, Guangzhou, and Yiwu — giving us direct access to manufacturers and markets.',
  },
  {
    title: 'No Hidden Fees',
    desc: 'We operate on a transparent fee structure. You know exactly what you\'re paying for before we start any work.',
  },
  {
    title: 'Independent from Suppliers',
    desc: 'We work for you, not the factory. Our recommendations are based solely on your best interests.',
  },
  {
    title: 'Bilingual Communication',
    desc: 'Our team communicates fluently in both English and Chinese, eliminating misunderstandings with suppliers.',
  },
];

export default function TrustSection() {
  return (
    <section className="section-padding bg-brand-light-blue">
      <div className="section-container">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="text-center">
                <div className="w-12 h-12 bg-brand-navy rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-brand-dark">{stat.value}</div>
                <div className="text-brand-muted text-xs mt-1 leading-tight">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Trust Points */}
        <div className="text-center mb-12">
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-2 mb-4">
            Why Buyers Trust SSourcing China
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {trustPoints.map((point) => (
            <div key={point.title} className="bg-white rounded-xl p-6 border border-brand-border flex gap-4">
              <div className="w-2 bg-brand-orange rounded-full flex-shrink-0" />
              <div>
                <h3 className="text-base font-semibold text-brand-dark mb-2">{point.title}</h3>
                <p className="text-brand-body text-sm leading-relaxed">{point.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
