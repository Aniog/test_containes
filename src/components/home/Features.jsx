import { Heart, ShieldCheck, Zap, Apple, Droplets, Brain } from 'lucide-react';

const features = [
  {
    icon: <Heart className="w-7 h-7 text-[#2d7a4f]" />,
    title: 'Heart Health',
    description: 'Learn which foods strengthen your cardiovascular system and reduce the risk of heart disease.',
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-[#2d7a4f]" />,
    title: 'Immune Boost',
    description: 'Discover nutrient-rich foods packed with vitamins and antioxidants to keep your immune system strong.',
  },
  {
    icon: <Zap className="w-7 h-7 text-[#2d7a4f]" />,
    title: 'Energy & Vitality',
    description: 'Fuel your day with the right balance of carbohydrates, proteins, and healthy fats for sustained energy.',
  },
  {
    icon: <Apple className="w-7 h-7 text-[#2d7a4f]" />,
    title: 'Weight Management',
    description: 'Achieve and maintain a healthy weight through mindful eating and balanced, satisfying meals.',
  },
  {
    icon: <Droplets className="w-7 h-7 text-[#2d7a4f]" />,
    title: 'Hydration & Detox',
    description: 'Understand the role of hydration and detoxifying foods in keeping your body clean and energized.',
  },
  {
    icon: <Brain className="w-7 h-7 text-[#2d7a4f]" />,
    title: 'Mental Clarity',
    description: 'Explore brain-boosting foods that improve focus, memory, and overall cognitive performance.',
  },
];

const Features = () => (
  <section id="benefits" className="py-20 bg-white">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-14">
        <span className="text-[#2d7a4f] text-sm font-semibold uppercase tracking-widest">Why It Matters</span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
          The Benefits of Healthy Eating
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
          Good nutrition is the foundation of a healthy life. Explore how the right food choices can transform your body and mind.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((f) => (
          <div
            key={f.title}
            className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-[#e8f5ee] rounded-xl flex items-center justify-center mb-4">
              {f.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{f.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
