import { Zap, Shield, HeartHandshake } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Fast Response',
    description: 'We aim to respond to every inquiry within 24 hours on business days.',
  },
  {
    icon: Shield,
    title: 'Your Privacy Matters',
    description: 'Your information is kept safe and never shared with third parties.',
  },
  {
    icon: HeartHandshake,
    title: 'Friendly Support',
    description: 'Our team is here to help you with any questions or concerns you have.',
  },
];

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 flex flex-col items-start gap-4">
    <div className="bg-indigo-50 text-indigo-600 p-3 rounded-xl">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>
);

const Features = () => (
  <section className="py-20 px-4 bg-gray-50">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Reach Out?</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          We make it easy and comfortable to get in touch. Here's what you can expect.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </div>
    </div>
  </section>
);

export default Features;
