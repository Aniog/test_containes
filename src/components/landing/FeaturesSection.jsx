import { Zap, Shield, Clock, HeartHandshake } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Fast Response',
    description: 'We aim to respond to every message within 24 hours on business days.',
  },
  {
    icon: Shield,
    title: 'Your Privacy Matters',
    description: 'Your contact details are stored securely and never shared with third parties.',
  },
  {
    icon: Clock,
    title: 'Always Available',
    description: 'Submit your message any time — our form is open 24/7, 365 days a year.',
  },
  {
    icon: HeartHandshake,
    title: 'Friendly Support',
    description: 'Real humans read every message. Expect a warm, personal reply every time.',
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="features-heading" className="text-3xl font-bold text-gray-900 mb-4">
            Why reach out to us?
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            We make it easy and comfortable to get in touch. Here's what you can expect.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
