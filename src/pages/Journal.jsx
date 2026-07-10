import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    id: "j-1",
    title: "How to care for gold-plated jewelry",
    excerpt:
      "A quiet routine — water, a soft cloth, and a few small habits — that will keep your pieces glowing for years.",
    image: "https://picsum.photos/seed/velmora-journal-care/1200/900",
    readTime: "4 min",
  },
  {
    id: "j-2",
    title: "The everyday jewelry wardrobe",
    excerpt:
      "Three pieces you can wear with everything — and a few quiet ways to layer them, from the studio.",
    image: "https://picsum.photos/seed/velmora-journal-wardrobe/1200/900",
    readTime: "6 min",
  },
  {
    id: "j-3",
    title: "A short history of the huggie",
    excerpt:
      "From 1980s Madrid to your everyday rotation — a small piece with a long, quiet story.",
    image: "https://picsum.photos/seed/velmora-journal-huggie/1200/900",
    readTime: "5 min",
  },
];

export default function Journal() {
  return (
    <div className="bg-cream pt-24 md:pt-28">
      <div className="container-editorial py-10 md:py-16 border-b border-hairline">
        <div className="eyebrow mb-4">Journal</div>
        <h1 className="font-serif text-4xl md:text-6xl text-ink leading-[1.05] text-balance max-w-3xl">
          Quiet reading on jewelry, craft, and care.
        </h1>
      </div>

      <div className="container-editorial py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {articles.map((a) => (
            <article key={a.id} className="group">
              <Link to={`/journal/${a.id}`} className="block">
                <div className="aspect-[4/3] bg-hairline/40 overflow-hidden">
                  <img
                    src={a.image}
                    alt={a.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1200ms] ease-elegant group-hover:scale-[1.04]"
                    style={{ filter: "sepia(0.18) saturate(1.1) brightness(0.95)" }}
                  />
                </div>
                <div className="pt-6">
                  <div className="text-[10px] uppercase tracking-widest2 text-taupe mb-2">
                    {a.readTime} read
                  </div>
                  <h2 className="font-serif text-2xl md:text-3xl text-ink leading-[1.15] group-hover:text-gold-600 transition-colors text-balance">
                    {a.title}
                  </h2>
                  <p className="text-sm text-taupe leading-relaxed mt-3">{a.excerpt}</p>
                  <div className="inline-flex items-center gap-2 mt-5 text-[11px] uppercase tracking-widest2 font-medium text-ink group-hover:text-gold-600 transition-colors">
                    Read article
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
