const facts = [
  {
    imgId: 'fact-img-1-mc9i0j',
    titleId: 'fact-title-1-mc9i0j',
    descId: 'fact-desc-1-mc9i0j',
    number: '01',
    title: 'Older Than the Stars',
    desc: 'Microbial life on Earth dates back 3.5 billion years — predating the formation of most stars in our galaxy. Stromatolites, built by cyanobacteria, are the oldest known fossils.',
  },
  {
    imgId: 'fact-img-2-mc9i0j',
    titleId: 'fact-title-2-mc9i0j',
    descId: 'fact-desc-2-mc9i0j',
    number: '02',
    title: 'You Are Mostly Microbes',
    desc: 'The human body contains roughly 38 trillion microbial cells — nearly equal to the number of human cells. Your gut microbiome alone weighs up to 2 kilograms.',
  },
  {
    imgId: 'fact-img-3-mc9i0j',
    titleId: 'fact-title-3-mc9i0j',
    descId: 'fact-desc-3-mc9i0j',
    number: '03',
    title: 'Oxygen Factories',
    desc: 'Cyanobacteria and marine phytoplankton produce over half of the world\'s oxygen. Every second breath you take comes from microscopic ocean life.',
  },
  {
    imgId: 'fact-img-4-mc9i0j',
    titleId: 'fact-title-4-mc9i0j',
    descId: 'fact-desc-4-mc9i0j',
    number: '04',
    title: 'Extreme Survivors',
    desc: 'Extremophile microbes thrive in boiling hydrothermal vents, frozen Antarctic ice, highly acidic hot springs, and even inside nuclear reactors.',
  },
];

const Facts = () => {
  return (
    <section id="facts" className="py-20 md:py-28 bg-cosmos-navy">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="text-cosmos-teal text-sm font-sans font-medium tracking-[0.3em] uppercase mb-4">
            Did You Know
          </p>
          <h2
            id="facts-section-title-mc9i0j"
            className="font-display font-bold text-4xl md:text-5xl text-cosmos-text mb-4"
          >
            Astonishing Microbial Facts
          </h2>
          <p
            id="facts-section-sub-mc9i0j"
            className="text-cosmos-secondary text-lg max-w-2xl mx-auto"
          >
            The microscopic world is full of surprises that challenge everything we think we know.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facts.map((fact) => (
            <div
              key={fact.imgId}
              className="group flex flex-col md:flex-row gap-6 bg-cosmos-card border border-cosmos-border rounded-2xl overflow-hidden hover:border-cosmos-teal/40 hover:shadow-glow transition-all duration-300"
            >
              <div className="relative w-full md:w-48 flex-shrink-0 aspect-square md:aspect-auto overflow-hidden">
                <img
                  data-strk-img-id={fact.imgId}
                  data-strk-img={`[${fact.descId}] [${fact.titleId}] [facts-section-sub-mc9i0j] [facts-section-title-mc9i0j]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="300"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={fact.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 bg-cosmos-navy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-cosmos-card/30 md:bg-gradient-to-b md:from-transparent md:to-cosmos-card/30" />
              </div>
              <div className="p-6 md:pl-0 flex flex-col justify-center">
                <span className="text-cosmos-teal/40 font-display font-bold text-4xl leading-none mb-3">
                  {fact.number}
                </span>
                <h3 id={fact.titleId} className="text-cosmos-text font-display font-semibold text-xl mb-3">
                  {fact.title}
                </h3>
                <p id={fact.descId} className="text-cosmos-secondary text-sm leading-relaxed">
                  {fact.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facts;
