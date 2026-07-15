import { Zap, Shield, BarChart2, Users, Clock, Headphones } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Deploy in seconds with our optimized infrastructure. Zero downtime, maximum performance.',
    color: 'text-yellow-500',
    bg: 'bg-yellow-50',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption and compliance built in. Your data is always safe with us.',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
  },
  {
    icon: BarChart2,
    title: 'Powerful Analytics',
    description: 'Real-time insights and dashboards to help you make data-driven decisions.',
    color: 'text-cyan-500',
    bg: 'bg-cyan-50',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Invite your whole team and work together seamlessly across projects.',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50',
  },
  {
    icon: Clock,
    title: 'Save Time',
    description: 'Automate repetitive tasks and focus on what actually moves the needle.',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Our expert team is always available to help you succeed.',
    color: 'text-rose-500',
    bg: 'bg-rose-50',
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block bg-indigo-50 text-indigo-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Everything you need to succeed
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Packed with powerful features designed to help your team move faster and build better.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-md hover:border-indigo-200 transition-all duration-200"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${feature.bg} mb-4`}>
                  <Icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
