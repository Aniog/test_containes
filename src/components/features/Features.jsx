import { Truck, Leaf, Heart, Shield } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: 'Handpicked Quality',
    description: 'Every plant is personally selected by our expert growers to ensure it arrives healthy and vibrant.',
    color: 'bg-green-100 text-green-700',
  },
  {
    icon: Truck,
    title: 'Fast & Safe Delivery',
    description: 'Specially designed packaging keeps your plants safe. Free delivery on orders over $40.',
    color: 'bg-emerald-100 text-emerald-700',
  },
  {
    icon: Heart,
    title: 'Care Guides Included',
    description: 'Each plant comes with a personalised care guide so you can keep it thriving for years.',
    color: 'bg-teal-100 text-teal-700',
  },
  {
    icon: Shield,
    title: '30-Day Guarantee',
    description: "If your plant doesn't survive the first 30 days, we'll replace it — no questions asked.",
    color: 'bg-lime-100 text-lime-700',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20" style={{ background: 'linear-gradient(180deg, #f1f8e9 0%, #e8f5e9 100%)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 bg-green-200 text-green-800 text-xs font-semibold rounded-full mb-3 uppercase tracking-wide">
            Why GreenNest
          </span>
          <h2 className="text-4xl font-extrabold text-green-900 mb-4">
            We Make Plant Parenting Easy
          </h2>
          <p className="text-green-700 max-w-xl mx-auto">
            From selection to delivery and beyond, we're with you every step of the way.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-green-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-green-700 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
