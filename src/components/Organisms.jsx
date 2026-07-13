const organisms = [
  {
    imgId: 'org-img-1-mc7g8h',
    titleId: 'org-title-1-mc7g8h',
    descId: 'org-desc-1-mc7g8h',
    name: 'Tardigrade',
    latin: 'Ramazzottius oberhaeuseri',
    desc: 'Known as "water bears," tardigrades can survive in outer space, extreme radiation, and complete dehydration.',
    tag: 'Extremophile',
    tagColor: 'text-amber-400 bg-amber-400/10 border-amber-400/30',
  },
  {
    imgId: 'org-img-2-mc7g8h',
    titleId: 'org-title-2-mc7g8h',
    descId: 'org-desc-2-mc7g8h',
    name: 'Diatom',
    latin: 'Bacillariophyta',
    desc: 'Single-celled algae encased in intricate glass-like silica shells, producing 20% of Earth\'s oxygen.',
    tag: 'Algae',
    tagColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30',
  },
  {
    imgId: 'org-img-3-mc7g8h',
    titleId: 'org-title-3-mc7g8h',
    descId: 'org-desc-3-mc7g8h',
    name: 'Paramecium',
    latin: 'Paramecium caudatum',
    desc: 'A slipper-shaped protozoan covered in thousands of tiny hair-like cilia used for movement and feeding.',
    tag: 'Protozoa',
    tagColor: 'text-violet-400 bg-violet-400/10 border-violet-400/30',
  },
  {
    imgId: 'org-img-4-mc7g8h',
    titleId: 'org-title-4-mc7g8h',
    descId: 'org-desc-4-mc7g8h',
    name: 'Radiolarian',
    latin: 'Polycystinea',
    desc: 'Marine protozoa with stunning geometric mineral skeletons that sink to form deep-sea sediment.',
    tag: 'Marine',
    tagColor: 'text-sky-400 bg-sky-400/10 border-sky-400/30',
  },
  {
    imgId: 'org-img-5-mc7g8h',
    titleId: 'org-title-5-mc7g8h',
    descId: 'org-desc-5-mc7g8h',
    name: 'Penicillium',
    latin: 'Penicillium chrysogenum',
    desc: 'The mold that gave us penicillin — one of the most important medical discoveries in human history.',
    tag: 'Fungi',
    tagColor: 'text-rose-400 bg-rose-400/10 border-rose-400/30',
  },
  {
    imgId: 'org-img-6-mc7g8h',
    titleId: 'org-title-6-mc7g8h',
    descId: 'org-desc-6-mc7g8h',
    name: 'Vorticella',
    latin: 'Vorticella convallaria',
    desc: 'A bell-shaped ciliate that attaches to surfaces with a coiled stalk, creating a mesmerizing feeding vortex.',
    tag: 'Ciliate',
    tagColor: 'text-cosmos-teal bg-cosmos-teal/10 border-cosmos-teal/30',
  },
];

const Organisms = () => {
  return (
    <section id="organisms" className="py-20 md:py-28 bg-cosmos-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="text-cosmos-teal text-sm font-sans font-medium tracking-[0.3em] uppercase mb-4">
            Featured Species
          </p>
          <h2
            id="org-section-title-mc7g8h"
            className="font-display font-bold text-4xl md:text-5xl text-cosmos-text mb-4"
          >
            Meet the Microorganisms
          </h2>
          <p
            id="org-section-sub-mc7g8h"
            className="text-cosmos-secondary text-lg max-w-2xl mx-auto"
          >
            Six remarkable creatures from the microscopic realm, each with extraordinary abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {organisms.map((org) => (
            <article
              key={org.imgId}
              className="group bg-cosmos-card border border-cosmos-border rounded-2xl overflow-hidden hover:border-cosmos-teal/40 hover:shadow-glow transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  data-strk-img-id={org.imgId}
                  data-strk-img={`[${org.descId}] [${org.titleId}] [org-section-sub-mc7g8h] [org-section-title-mc7g8h]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={org.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 bg-cosmos-navy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cosmos-card/80 to-transparent" />
                <span className={`absolute top-3 right-3 text-xs font-medium px-3 py-1 rounded-full border ${org.tagColor}`}>
                  {org.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 id={org.titleId} className="text-cosmos-text font-display font-semibold text-xl mb-1">
                  {org.name}
                </h3>
                <p className="text-cosmos-teal text-xs italic mb-3">{org.latin}</p>
                <p id={org.descId} className="text-cosmos-secondary text-sm leading-relaxed">
                  {org.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Organisms;
