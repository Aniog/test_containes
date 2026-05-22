import { Flame, Wheat, Leaf, Clock, Award, Heart } from 'lucide-react';

const features = [
  {
    icon: Flame,
    title: 'Wood-Fired Oven',
    description: 'Our 900°F oak-wood oven gives every pizza its signature leopard-spotted crust and smoky depth.',
  },
  {
    icon: Wheat,
    title: '72-Hour Dough',
    description: 'Cold-fermented for three days, our dough develops complex flavor and a light, airy texture.',
  },
  {
    icon: Leaf,
    title: 'Fresh Ingredients',
    description: 'Imported San Marzano tomatoes, DOP mozzarella, and seasonal produce sourced daily.',
  },
  {
    icon: Clock,
    title: 'Ready in 90 Seconds',
    description: 'The intense heat of our oven cooks each pizza in under two minutes — fast, but never rushed.',
  },
  {
    icon: Award,
    title: 'Award-Winning Recipes',
    description: 'Recognized by the Associazione Verace Pizza Napoletana for authentic Neapolitan craft.',
  },
  {
    icon: Heart,
    title: 'Made with Love',
    description: 'Every pizza is hand-stretched and topped by our team who genuinely love what they do.',
  },
];

const FeaturesSection = () => (
  <section id="features" className="bg-dark-brown py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <p className="text-warm-orange text-xs tracking-widest uppercase font-semibold mb-3">
          Why Napoli's
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-4">
          The Napoli's Difference
        </h2>
        <p className="text-cream/60 text-lg max-w-xl mx-auto leading-relaxed">
          We don't cut corners. Every detail — from the flour we use to the
          wood we burn — is chosen with intention.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 transition"
            >
              <div className="w-12 h-12 bg-pizza-red/20 rounded-xl flex items-center justify-center mb-5">
                <Icon className="w-6 h-6 text-warm-orange" />
              </div>
              <h3 className="font-display text-xl font-semibold text-cream mb-3">
                {feature.title}
              </h3>
              <p className="text-cream/60 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
