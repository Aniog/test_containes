const REALMS = [
  {
    id: "water",
    eyebrow: "Realm I",
    title: "Water",
    desc: "A single drop is an ocean. Inside, ciliates spin, rotifers dance, and tiny crustaceans graze among algae meadows in liquid gravity.",
    bgId: "realm-water-bg-1a2b3c",
    ratio: "16x9",
    width: 1600,
  },
  {
    id: "soil",
    eyebrow: "Realm II",
    title: "Soil",
    desc: "Beneath every footstep, fungal threads stretch for miles, weaving rock, root, and microbe into the living memory of the earth.",
    bgId: "realm-soil-bg-4d5e6f",
    ratio: "16x9",
    width: 1600,
  },
  {
    id: "skin",
    eyebrow: "Realm III",
    title: "Skin",
    desc: "Our outer surface is a coral reef of bacteria and yeast, an ecosystem each of us carries — invisible, personal, and quietly alive.",
    bgId: "realm-skin-bg-7g8h9i",
    ratio: "16x9",
    width: 1600,
  },
  {
    id: "ice",
    eyebrow: "Realm IV",
    title: "Ice",
    desc: "Frozen brine channels host tardigrades and psychrophiles — slow lifeforms thriving where chemistry itself nearly stands still.",
    bgId: "realm-ice-bg-0j1k2l",
    ratio: "16x9",
    width: 1600,
  },
];

export default function Realms() {
  return (
    <section id="realms" className="relative py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-cosmos-accent-2">
            02 · The Four Realms
          </p>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-medium tracking-tight text-cosmos-text">
            Where the small
            <span className="text-cosmos-muted italic"> lives.</span>
          </h2>
          <p className="mt-6 text-cosmos-muted leading-relaxed">
            MicroCosmos is organized as four habitats, each a chapter in the
            archive of the unseen. Hover to step inside.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {REALMS.map((realm) => (
            <article
              key={realm.id}
              className="group relative rounded-3xl overflow-hidden border border-cosmos-line min-h-[360px] md:min-h-[440px] flex"
            >
              <div
                className="absolute inset-0 transition-transform duration-[1500ms] ease-out group-hover:scale-110"
                data-strk-bg-id={realm.bgId}
                data-strk-bg={`[realm-${realm.id}-desc] [realm-${realm.id}-title]`}
                data-strk-bg-ratio={realm.ratio}
                data-strk-bg-width={realm.width}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cosmos-bg via-cosmos-bg/60 to-cosmos-bg/10" />
              <div className="absolute inset-0 bg-gradient-to-r from-cosmos-bg/70 to-transparent" />

              <div className="relative z-10 p-8 md:p-10 mt-auto w-full">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-cosmos-accent">
                  {realm.eyebrow}
                </p>
                <h3
                  id={`realm-${realm.id}-title`}
                  className="mt-3 font-display text-3xl md:text-4xl text-cosmos-text"
                >
                  {realm.title}
                </h3>
                <p
                  id={`realm-${realm.id}-desc`}
                  className="mt-4 max-w-lg text-cosmos-muted leading-relaxed"
                >
                  {realm.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
