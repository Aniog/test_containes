import { Link } from "react-router-dom";

const POSTS = [
  {
    id: "care-guide",
    title: "How to care for your demi-fine jewelry",
    excerpt:
      "A few quiet habits to keep your Velmora pieces glowing for years to come.",
    date: "October 12, 2026",
    read: "3 min read",
  },
  {
    id: "styling",
    title: "Three ways to layer the new Lumière chain",
    excerpt:
      "From a single whisper of gold to a considered stack — the art of layering, with examples.",
    date: "September 28, 2026",
    read: "4 min read",
  },
  {
    id: "materials",
    title: "What 18K gold plating actually means",
    excerpt:
      "Demystifying the language of demi-fine jewelry, and why the details matter.",
    date: "September 8, 2026",
    read: "5 min read",
  },
  {
    id: "atelier",
    title: "Inside the Velmora atelier",
    excerpt:
      "A quiet morning with our makers, the women who hand-finish every Velmora piece.",
    date: "August 22, 2026",
    read: "6 min read",
  },
];

export default function Journal() {
  return (
    <div className="bg-bone min-h-screen pt-24 md:pt-28 pb-20">
      <div className="px-6 md:px-10 lg:px-16 max-w-[1100px] mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <p className="text-[10px] uppercase tracking-wider3 text-gold-deep mb-3">
            The Journal
          </p>
          <h1 className="font-serif text-ink text-4xl md:text-6xl font-light leading-tight">
            Stories, slowly
          </h1>
          <p className="mt-4 text-muted text-sm md:text-base max-w-md mx-auto">
            Notes on craft, materials, and the art of slow adornment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
          {POSTS.map((p, i) => (
            <article
              key={p.id}
              className={`group ${i === 0 ? "md:col-span-2" : ""}`}
            >
              <Link
                to={`/journal/${p.id}`}
                className="block"
              >
                <div className={`relative overflow-hidden bg-ivory ${i === 0 ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-champagne to-bone" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-serif text-ink/30 text-7xl md:text-9xl italic">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
                <div className="mt-6 max-w-2xl">
                  <p className="text-[10px] uppercase tracking-wider2 text-muted">
                    {p.date} · {p.read}
                  </p>
                  <h2 className="mt-3 font-serif text-ink text-2xl md:text-3xl font-light leading-snug group-hover:text-gold-deep transition-colors">
                    {p.title}
                  </h2>
                  <p className="mt-3 text-ink/75 text-base leading-relaxed">{p.excerpt}</p>
                  <span className="mt-4 inline-block text-[11px] uppercase tracking-wider2 text-ink group-hover:text-gold-deep transition-colors border-b border-ink group-hover:border-gold-deep pb-0.5">
                    Read more
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
