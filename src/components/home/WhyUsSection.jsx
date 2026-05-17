import { Truck, Leaf, Heart, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: <Leaf className="w-8 h-8 text-brand-green" />,
    title: 'Hand-Picked Quality',
    description: 'Every plant is personally selected by our team for health, beauty, and vitality before it ships.',
  },
  {
    icon: <Truck className="w-8 h-8 text-brand-green" />,
    title: 'Safe Home Delivery',
    description: 'We package each plant with care so it arrives fresh, upright, and ready to thrive in your space.',
  },
  {
    icon: <Heart className="w-8 h-8 text-brand-green" />,
    title: 'Care Guides Included',
    description: 'Every order comes with a simple care guide so even beginners can keep their plants happy.',
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-brand-green" />,
    title: 'Happiness Guarantee',
    description: "Not satisfied? We'll replace your plant or give you a full refund — no questions asked.",
  },
];

const WhyUsSection = () => (
  <section id="why-us" className="bg-brand-green py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <span className="text-brand-green-pale font-bold text-sm uppercase tracking-widest">Why Choose Us</span>
        <h2 className="text-white font-black text-4xl md:text-5xl mt-2 mb-4">
          Plants You Can Trust
        </h2>
        <p className="text-white/80 text-lg max-w-xl mx-auto leading-relaxed">
          We are passionate about plants and committed to making your home greener, healthier, and more beautiful.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-start gap-4 hover:bg-white/20 transition-colors"
          >
            <div className="bg-brand-green-pale rounded-xl p-3">
              {feature.icon}
            </div>
            <h3 className="text-white font-bold text-lg">{feature.title}</h3>
            <p className="text-white/75 text-sm leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
