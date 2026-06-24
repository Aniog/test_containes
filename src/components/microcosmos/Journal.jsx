import { Calendar } from "lucide-react";

const entries = [
  {
    id: "01",
    date: "Jun 14, 2026",
    location: "Foss Brook, Yorkshire",
    title: "Three diatoms at sunset",
    excerpt:
      "We pulled a single droplet from a slow eddy and counted thirty-one species before our coffee went cold.",
  },
  {
    id: "02",
    date: "May 30, 2026",
    location: "Tide pool · Cornwall",
    title: "The first dinoflagellate of the season",
    excerpt:
      "A storm of bioluminescent cells lit the slide blue under polarized light — a small ocean glowing back at us.",
  },
  {
    id: "03",
    date: "May 11, 2026",
    location: "Mossy log · Białowieża",
    title: "Tardigrades, alive and indignant",
    excerpt:
      "Rehydrated after eight years of dust on a museum shelf, they shook themselves off and went looking for breakfast.",
  },
];

const Journal = () => {
  return (
    <section id="journal" className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div className="max-w-2xl">
            <span
              id="journal-eyebrow"
              className="text-xs font-mono uppercase tracking-[0.25em] text-cosmos-accent"
            >
              05 / Field journal
            </span>
            <h2
              id="journal-title"
              className="mt-4 font-display text-3xl md:text-5xl tracking-tight text-cosmos-fg"
            >
              Notes from the eyepiece.
            </h2>
          </div>
          <a
            href="#cta"
            className="text-sm font-mono uppercase tracking-[0.2em] text-cosmos-accent hover:text-cosmos-fg transition"
          >
            All entries →
          </a>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {entries.map((e) => (
            <a
              key={e.id}
              href="#"
              className="group rounded-2xl border border-cosmos-border bg-cosmos-surface/70 backdrop-blur p-7 hover:border-cosmos-accent/50 hover:bg-cosmos-surface-2 transition flex flex-col"
            >
              <div className="flex items-center gap-3 text-xs font-mono text-cosmos-muted">
                <Calendar className="w-3.5 h-3.5" />
                <span>{e.date}</span>
                <span className="w-1 h-1 rounded-full bg-cosmos-border" />
                <span>{e.location}</span>
              </div>
              <h3 className="mt-5 font-display text-xl text-cosmos-fg group-hover:text-cosmos-accent transition">
                {e.title}
              </h3>
              <p className="mt-3 text-sm text-cosmos-muted leading-relaxed">{e.excerpt}</p>
              <span className="mt-6 text-xs font-mono uppercase tracking-[0.25em] text-cosmos-accent">
                Read entry →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journal;
