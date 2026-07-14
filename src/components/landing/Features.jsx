import { Rocket, Shield, BarChart2, Users, Zap, HeartHandshake } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Launch Faster',
    description: 'Go from idea to production in record time with our streamlined workflow tools.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption and compliance built in from day one, not bolted on.',
  },
  {
    icon: BarChart2,
    title: 'Real-time Analytics',
    description: 'Understand your users with live dashboards and actionable insights.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Invite your whole team and work together seamlessly across projects.',
  },
  {
    icon: Zap,
    title: 'Blazing Performance',
    description: 'Optimized infrastructure that scales automatically with your growth.',
  },
  {
    icon: HeartHandshake,
    title: 'Dedicated Support',
    description: '24/7 support from real humans who care about your success.',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Everything you need to succeed
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Powerful features designed to help your business grow and your team thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-indigo-600" />
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

export default Features;
