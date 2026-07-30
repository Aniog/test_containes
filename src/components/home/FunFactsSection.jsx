import { Zap, Globe, Droplets, Smile } from 'lucide-react';

const facts = [
  {
    icon: Globe,
    color: 'bg-fanta-orange',
    number: '190+',
    label: 'Countries',
    description: 'Fanta is sold in more than 190 countries, making it one of the most globally recognized beverage brands.',
  },
  {
    icon: Droplets,
    color: 'bg-fanta-purple',
    number: '100+',
    label: 'Unique Flavors',
    description: 'From classic orange to exotic dragon fruit, Fanta offers over 100 distinct flavors around the world.',
  },
  {
    icon: Zap,
    color: 'bg-fanta-red',
    number: '80+',
    label: 'Years of Fun',
    description: 'Since 1940, Fanta has been bringing sparkling joy to generations of soda lovers worldwide.',
  },
  {
    icon: Smile,
    color: 'bg-fanta-green',
    number: '1B+',
    label: 'Servings Daily',
    description: 'Over a billion servings of Fanta are enjoyed every single day across the globe.',
  },
];

const FunFactsSection = () => {
  return (
    <section id="facts" className="py-24 bg-fanta-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-fanta-orange/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-fanta-purple/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-fanta-orange/20 text-fanta-orange font-poppins font-semibold text-sm rounded-full px-4 py-1 mb-4 uppercase tracking-widest">
            Did You Know?
          </span>
          <h2 className="font-poppins font-black text-4xl md:text-5xl text-white mb-4">
            Fanta by the Numbers
          </h2>
          <p className="font-poppins text-gray-400 text-lg max-w-xl mx-auto">
            The numbers behind the world's most colorful soda brand.
          </p>
        </div>

        {/* Facts grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facts.map((fact) => {
            const Icon = fact.icon;
            return (
              <div
                key={fact.label}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
              >
                <div className={`${fact.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <p className="font-poppins font-black text-4xl text-white mb-1">{fact.number}</p>
                <p className="font-poppins font-bold text-fanta-orange text-sm uppercase tracking-wide mb-3">
                  {fact.label}
                </p>
                <p className="font-poppins text-gray-400 text-sm leading-relaxed">
                  {fact.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Fun quote */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-fanta-orange to-fanta-yellow p-px rounded-2xl">
            <div className="bg-fanta-dark rounded-2xl px-8 py-6">
              <p className="font-poppins font-black text-2xl md:text-3xl text-white italic">
                "More Fanta, Less Serious!"
              </p>
              <p className="font-poppins text-gray-400 mt-2 text-sm">— The Fanta Motto</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFactsSection;
