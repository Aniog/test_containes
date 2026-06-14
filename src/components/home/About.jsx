import React from 'react';
import { Factory, ShieldCheck, Gauge, Users } from 'lucide-react';

const stats = [
  { label: 'Years of Experience', value: '25+' },
  { label: 'Machines Delivered', value: '500+' },
  { label: 'Countries Served', value: '40+' },
  { label: 'Customer Satisfaction', value: '98%' },
];

const values = [
  {
    icon: Factory,
    title: 'Precision Engineering',
    description: 'Every machine is built with meticulous attention to detail, ensuring consistent accuracy across every fold.',
  },
  {
    icon: ShieldCheck,
    title: 'Built to Last',
    description: 'Heavy-duty construction and premium components mean our machines withstand the toughest production environments.',
  },
  {
    icon: Gauge,
    title: 'Performance Driven',
    description: 'Optimized workflows and rapid cycle times keep your production line moving at peak efficiency.',
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    description: 'From installation to ongoing maintenance, our team stands behind every machine we deliver.',
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 id="about-title" className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Engineering Excellence in Every Fold
            </h2>
            <p id="about-subtitle" className="text-lg text-slate-600 mb-6 leading-relaxed">
              ARTITECT MACHINERY was founded on a simple principle: industrial equipment should be
              as precise as it is powerful. Our double folding machines, sheet metal folders, and
              metal folding machines are designed by engineers who understand the demands of modern fabrication.
            </p>
            <p className="text-slate-600 leading-relaxed">
              With over two decades of experience, we have refined every aspect of our machinery —
              from the rigidity of the frame to the responsiveness of the control system. The result
              is equipment that delivers repeatable, high-quality bends with minimal operator intervention.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden bg-slate-100 flex items-center justify-center">
              <div className="text-center text-slate-500">
                <Factory className="w-16 h-16 mx-auto mb-2 opacity-40" />
                <p className="text-sm font-medium">Manufacturing Facility</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
              <div className="text-sm text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-xl border border-slate-200 bg-slate-50 hover:border-slate-300 transition-colors"
            >
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
