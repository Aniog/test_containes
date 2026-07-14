import { Zap, Shield, BarChart2, Clock, Users, Star } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Instant Capture',
    description: 'Every form submission is saved immediately to local storage — no delays, no lost data.',
    color: 'bg-yellow-100 text-yellow-600',
  },
  {
    icon: Shield,
    title: 'Private & Secure',
    description: 'Your contacts stay on your device. No third-party servers, no data sharing.',
    color: 'bg-indigo-100 text-indigo-600',
  },
  {
    icon: BarChart2,
    title: 'Easy Overview',
    description: 'Browse all your saved contacts in a clean, organized list with key details at a glance.',
    color: 'bg-cyan-100 text-cyan-600',
  },
  {
    icon: Clock,
    title: 'Timestamped',
    description: 'Every contact entry is automatically timestamped so you always know when they reached out.',
    color: 'bg-emerald-100 text-emerald-600',
  },
  {
    icon: Users,
    title: 'Unlimited Contacts',
    description: 'Save as many contacts as you need. There are no limits on how many people can reach you.',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    icon: Star,
    title: 'Simple & Beautiful',
    description: 'A clean, distraction-free experience that makes collecting contacts a pleasure.',
    color: 'bg-rose-100 text-rose-600',
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A straightforward contact collection tool built with simplicity and reliability in mind.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="p-6 rounded-2xl border border-gray-200 hover:border-indigo-200 hover:shadow-md transition-all group"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${feature.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
