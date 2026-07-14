import { Shield, Clock, BarChart2, Globe } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Secure Storage',
    description: 'All contact information is stored safely and privately, accessible only to you.',
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    icon: Clock,
    title: 'Instant Access',
    description: 'View and manage all your saved contacts anytime, from any device.',
    color: 'bg-cyan-50 text-cyan-600',
  },
  {
    icon: BarChart2,
    title: 'Easy Overview',
    description: 'A clean dashboard gives you a clear picture of everyone who has reached out.',
    color: 'bg-violet-50 text-violet-600',
  },
  {
    icon: Globe,
    title: 'Simple Form',
    description: 'A friendly contact form that anyone can fill out in seconds — no friction.',
    color: 'bg-emerald-50 text-emerald-600',
  },
];

const Features = () => {
  return (
    <section id="features" className="bg-slate-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Everything You Need
          </h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            A straightforward way to collect contacts and keep them organized — no complexity, just results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className={`w-11 h-11 rounded-lg flex items-center justify-center mb-4 ${feature.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
