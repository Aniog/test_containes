const essentials = [
  {
    icon: '🥖',
    title: 'Le Pain',
    subtitle: 'Bread',
    description: 'The baguette is a national symbol. French law even regulates what a "traditional baguette" can contain. Bread accompanies every meal.',
  },
  {
    icon: '🧀',
    title: 'Le Fromage',
    subtitle: 'Cheese',
    description: 'With over 500 varieties — from creamy Brie to pungent Roquefort — France produces more cheese types than any other country.',
  },
  {
    icon: '🍷',
    title: 'Le Vin',
    subtitle: 'Wine',
    description: 'Wine is inseparable from French dining. Bordeaux, Burgundy, Champagne, and Rhône are among the world\'s most celebrated wine regions.',
  },
  {
    icon: '🧈',
    title: 'Le Beurre',
    subtitle: 'Butter',
    description: 'French butter — especially from Normandy and Brittany — is prized for its high fat content and rich, complex flavour.',
  },
  {
    icon: '🌿',
    title: 'Les Herbes',
    subtitle: 'Herbs & Aromatics',
    description: 'Bouquet garni, herbes de Provence, and fines herbes are the aromatic foundations of French cooking, adding depth and fragrance.',
  },
  {
    icon: '🫙',
    title: 'Les Sauces',
    subtitle: 'The Mother Sauces',
    description: 'Béchamel, Velouté, Espagnole, Hollandaise, and Sauce Tomat — the five mother sauces form the backbone of classical French cuisine.',
  },
];

const EssentialsSection = () => {
  return (
    <section className="bg-[#8B1A2F] py-20 md:py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#C9A84C] text-sm font-medium tracking-[0.3em] uppercase mb-3">
            The Building Blocks
          </p>
          <h2 className="font-['Playfair_Display'] text-3xl md:text-5xl font-bold text-white mb-6">
            French Food Essentials
          </h2>
          <div className="w-16 h-0.5 bg-[#C9A84C] mx-auto mb-8" />
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Understanding French cuisine begins with its essential ingredients and techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {essentials.map((item) => (
            <div
              key={item.title}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-colors"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-['Playfair_Display'] text-xl font-bold text-white mb-1">
                {item.title}
              </h3>
              <p className="text-[#C9A84C] text-sm font-medium italic mb-3">{item.subtitle}</p>
              <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EssentialsSection;
