import { Zap, Shield, HeartHandshake, Clock } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'We respond to every inquiry within 24 hours. No waiting, no delays — just quick, helpful answers.',
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    description: 'Your information is safe with us. We never share your data with third parties.',
  },
  {
    icon: HeartHandshake,
    title: 'Dedicated Support',
    description: 'Our team is passionate about helping you succeed. We treat every client like a partner.',
  },
  {
    icon: Clock,
    title: 'Always Available',
    description: 'Reach out any time. We monitor messages around the clock so you\'re never left waiting.',
  },
];

const Features = () => {
  return (
    <section id="features" className="bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why work with us?
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            We make it easy to get in touch and even easier to get results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
