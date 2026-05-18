import { Droplets, Leaf, ShieldCheck, Zap, Wind, Heart } from 'lucide-react';

const benefits = [
  {
    icon: Droplets,
    title: 'Naturally Filtered',
    description:
      'Filtered through layers of granite and limestone over hundreds of years, removing impurities without chemicals.',
    color: 'text-cyan-600',
    bg: 'bg-cyan-50',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly Source',
    description:
      'Our spring is sustainably managed to protect the surrounding ecosystem and ensure water flows for generations.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    icon: ShieldCheck,
    title: 'Lab Tested & Certified',
    description:
      'Every batch is independently tested for purity, mineral balance, and safety before it reaches your hands.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: Zap,
    title: 'Rich in Minerals',
    description:
      'Naturally contains calcium, magnesium, and potassium — essential minerals your body needs every day.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
  {
    icon: Wind,
    title: 'Crisp & Refreshing',
    description:
      'A perfectly balanced pH of 7.4 gives AquaPure its signature clean, crisp taste that hydrates deeply.',
    color: 'text-sky-600',
    bg: 'bg-sky-50',
  },
  {
    icon: Heart,
    title: 'Supports Wellbeing',
    description:
      'Proper hydration with mineral-rich water supports heart health, digestion, and mental clarity.',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-600 text-sm uppercase tracking-widest font-semibold mb-3">
            Why AquaPure
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            The Benefits of True Spring Water
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Not all water is created equal. Discover what makes spring water the
            purest, most nourishing choice for your body.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map(({ icon: Icon, title, description, color, bg }) => (
            <div
              key={title}
              className="rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow bg-white"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${bg} mb-5`}>
                <Icon className={`w-6 h-6 ${color}`} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
              <p className="text-slate-600 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
