import { Link } from "react-router-dom";
import Reveal from "@/components/ui/Reveal";

const POSTS = [
  {
    id: "stack-the-ear",
    title: "How to stack an ear, in three quiet moves",
    excerpt: "A short guide to the ear stack that works in coffee shops, boardrooms, and on long Sundays.",
    date: "May 18, 2026",
    read: "4 min read",
    cat: "Style guide",
  },
  {
    id: "inside-the-bench",
    title: "Inside the bench: how a Velmora piece is made",
    excerpt: "From sketch to polishing cloth — a look at the six hands a single pair of huggies passes through.",
    date: "May 02, 2026",
    read: "6 min read",
    cat: "Behind the bench",
  },
  {
    id: "gift-edit",
    title: "The quiet gift edit: for the woman who has everything",
    excerpt: "A short, considered gift guide — for the mother, the friend, the partner, and yourself.",
    date: "April 22, 2026",
    read: "5 min read",
    cat: "Gifting",
  },
];

export default function Journal() {
  return (
    <div>
      <div className="h-16 md:h-20" aria-hidden="true" />
      <header className="bg-ivory-50 border-b border-hairline">
        <div className="container-x py-12 md:py-20">
          <Reveal>
            <p className="eyebrow">Journal</p>
            <h1 className="h-display mt-3 text-display-lg text-espresso-900 text-balance">
              Letters from the studio.
            </h1>
            <p className="mt-4 text-espresso-500 text-[15px] max-w-xl">
              Slow reads on style, gifting, materials, and the people who make
              your jewelry.
            </p>
          </Reveal>
        </div>
      </header>
      <section className="container-x py-16 md:py-24">
        <ul className="grid md:grid-cols-3 gap-10">
          {POSTS.map((p, i) => (
            <Reveal key={p.id} delay={i * 100}>
              <li className="group">
                <Link to={`/journal/${p.id}`} className="block">
                  <div className="aspect-[4/5] bg-ivory-200 overflow-hidden">
                    <div
                      className="w-full h-full transition-transform duration-1000 ease-elegant group-hover:scale-[1.03]"
                      style={{
                        background: "linear-gradient(135deg, #F1EADC 0%, #E5DDD0 100%)",
                      }}
                    />
                  </div>
                  <p className="mt-5 text-[11px] uppercase tracking-[0.22em] text-gold-600">
                    {p.cat} · {p.read}
                  </p>
                  <h2 className="h-display mt-3 text-2xl text-espresso-900 group-hover:text-gold-600 transition-colors">
                    {p.title}
                  </h2>
                  <p className="mt-3 text-sm text-espresso-700 leading-relaxed">
                    {p.excerpt}
                  </p>
                  <p className="mt-4 text-[11px] uppercase tracking-[0.22em] text-espresso-500">
                    {p.date}
                  </p>
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>
    </div>
  );
}
