import { useState } from "react";

const specimens = [
  {
    id: "tardigrade",
    name: "Tardigrade",
    latin: "Hypsibius dujardini",
    habitat: "Damp moss, gutters, glaciers",
    size: "0.5 mm",
    note: "Survives radiation, vacuum, and a decade of dehydration. Often called the water bear for its lumbering, eight-legged gait.",
  },
  {
    id: "diatom",
    name: "Diatom",
    latin: "Stephanodiscus niagarae",
    habitat: "Freshwater lakes",
    size: "30 µm",
    note: "Single-celled algae that build their cell walls from glassy silica, producing kaleidoscopic geometric ornament.",
  },
  {
    id: "paramecium",
    name: "Paramecium",
    latin: "Paramecium caudatum",
    habitat: "Standing pond water",
    size: "200 µm",
    note: "A single ciliated cell that swims through pond water by beating thousands of tiny hairs in coordinated waves.",
  },
  {
    id: "rotifer",
    name: "Rotifer",
    latin: "Philodina roseola",
    habitat: "Mosses and freshwater films",
    size: "0.3 mm",
    note: "A microscopic animal with a spinning crown of cilia used to sweep prey into a transparent, ever-busy gut.",
  },
];

const Specimens = () => {
  const [active, setActive] = useState(specimens[0].id);
  const current = specimens.find((s) => s.id === active);

  return (
    <section id="specimens" className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl">
          <span
            id="specimens-eyebrow"
            className="text-xs font-mono uppercase tracking-[0.25em] text-cosmos-accent"
          >
            04 / Specimen of the week
          </span>
          <h2
            id="specimens-title"
            className="mt-4 font-display text-3xl md:text-5xl tracking-tight text-cosmos-fg"
          >
            Meet the residents of the microcosm.
          </h2>
        </div>

        <div className="mt-12 grid lg:grid-cols-[280px_1fr] gap-8">
          {/* Tabs */}
          <ul role="tablist" className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible">
            {specimens.map((s, i) => {
              const selected = active === s.id;
              return (
                <li key={s.id} className="flex-shrink-0">
                  <button
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setActive(s.id)}
                    className={`w-full text-left rounded-2xl border px-5 py-4 transition ${
                      selected
                        ? "border-cosmos-accent/60 bg-cosmos-surface-2 text-cosmos-fg shadow-[0_0_30px_-12px_rgba(124,249,216,0.6)]"
                        : "border-cosmos-border bg-cosmos-surface/60 text-cosmos-muted hover:text-cosmos-fg hover:border-cosmos-border"
                    }`}
                  >
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-cosmos-accent">
                      0{i + 1}
                    </span>
                    <p className="mt-1 font-display text-lg text-cosmos-fg">{s.name}</p>
                    <p className="text-xs italic text-cosmos-muted">{s.latin}</p>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Detail panel */}
          <article className="relative rounded-3xl border border-cosmos-border bg-cosmos-surface/70 backdrop-blur overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative min-h-[280px] md:min-h-[420px]">
                <img
                  alt={current.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  data-strk-img-id={`microcosmos-specimen-${current.id}-d4f2`}
                  data-strk-img={`[specimen-${current.id}-note] [specimen-${current.id}-title] microscope ${current.latin}`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-cosmos-bg/40 via-transparent to-transparent" />
              </div>
              <div className="p-7 md:p-10 flex flex-col">
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-cosmos-accent">
                  Specimen file · {current.id.toUpperCase()}
                </span>
                <h3
                  id={`specimen-${current.id}-title`}
                  className="mt-3 font-display text-3xl md:text-4xl text-cosmos-fg"
                >
                  {current.name}
                </h3>
                <p className="text-cosmos-muted italic mt-1">{current.latin}</p>

                <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-cosmos-muted">
                      Habitat
                    </dt>
                    <dd className="text-cosmos-fg mt-1">{current.habitat}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-cosmos-muted">
                      Typical size
                    </dt>
                    <dd className="text-cosmos-fg mt-1">{current.size}</dd>
                  </div>
                </dl>

                <p
                  id={`specimen-${current.id}-note`}
                  className="mt-6 text-cosmos-fg/90 leading-relaxed"
                >
                  {current.note}
                </p>

                <div className="mt-auto pt-8">
                  <a
                    href="#journal"
                    className="inline-flex items-center text-sm font-mono uppercase tracking-[0.25em] text-cosmos-accent hover:text-cosmos-fg transition"
                  >
                    Read field notes →
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Specimens;
