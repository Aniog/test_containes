import { Target, Shield, Truck, Award, Wrench, Users } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Precision Engineered',
    desc: 'Every rod, reel, and lure is crafted with precision engineering for maximum performance on the water.',
  },
  {
    icon: Shield,
    title: 'Built to Last',
    desc: 'Our gear is made from premium materials — corrosion-resistant, weather-proof, and built for years of use.',
  },
  {
    icon: Truck,
    title: 'Fast Shipping',
    desc: 'Get your gear delivered in 2–3 business days. Free shipping on all orders over $75.',
  },
  {
    icon: Award,
    title: 'Award-Winning Brands',
    desc: 'We carry only the most trusted brands in the fishing industry, vetted by professional anglers.',
  },
  {
    icon: Wrench,
    title: 'Expert Support',
    desc: 'Our team of experienced anglers is available 7 days a week to help you choose the right gear.',
  },
  {
    icon: Users,
    title: 'Angler Community',
    desc: 'Join 50,000+ anglers sharing tips, catches, and gear reviews in our active community.',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-teal-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-amber-600 text-sm font-bold uppercase tracking-widest">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mt-3 mb-4">
            Everything You Need to Fish Better
          </h2>
          <p className="text-teal-700 max-w-xl mx-auto text-base leading-relaxed">
            From beginner to pro, CastMaster equips every angler with the tools and knowledge to succeed.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-7 border border-teal-100 shadow-sm hover:shadow-lg transition-shadow group"
              >
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-teal-700 transition-colors">
                  <Icon className="w-6 h-6 text-teal-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-teal-900 mb-2">{feature.title}</h3>
                <p className="text-teal-700 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
