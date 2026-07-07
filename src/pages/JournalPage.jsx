import { Link } from "react-router-dom";
import Newsletter from "@/components/home/Newsletter";

const articles = [
  {
    id: "stack-the-huggies",
    title: "How to stack huggies without overdoing it",
    excerpt:
      "A short guide to mixing metals, sizes, and stones — straight from our design team.",
    image:
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=900&q=80",
    read: "4 min read",
  },
  {
    id: "care-guide",
    title: "Care for your gold plate (and make it last)",
    excerpt:
      "The four habits our community swears by to keep their pieces looking new.",
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=80",
    read: "3 min read",
  },
  {
    id: "behind-the-studio",
    title: "Inside our Porto atelier",
    excerpt:
      "Meet the hands behind every Velmora piece — three generations of platers, one small studio.",
    image:
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=900&q=80",
    read: "6 min read",
  },
  {
    id: "gifts-that-keep",
    title: "Gifts that actually keep",
    excerpt:
      "The pieces we've seen passed down, restacked, and re-gifted more than any other.",
    image:
      "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=900&q=80",
    read: "5 min read",
  },
];

export default function JournalPage() {
  return (
    <>
      <section className="pt-32 md:pt-40 bg-ivory">
        <div className="max-w-container mx-auto px-5 md:px-10 text-center pb-16 md:pb-24">
          <p className="text-[11px] uppercase tracking-[0.3em] text-muted mb-4">
            Journal
          </p>
          <h1 className="font-serif text-5xl md:text-7xl tracking-tight">
            Notes from the studio
          </h1>
        </div>
      </section>

      <section className="pb-24 bg-ivory">
        <div className="max-w-container mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          {articles.map((a) => (
            <article key={a.id} className="group">
              <div className="aspect-[4/3] overflow-hidden bg-sand">
                <img
                  src={a.image}
                  alt={a.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="pt-5">
                <p className="text-[11px] uppercase tracking-editorial text-muted mb-2">
                  {a.read}
                </p>
                <h2 className="font-serif text-2xl md:text-3xl tracking-tight leading-snug">
                  {a.title}
                </h2>
                <p className="mt-2 text-muted leading-relaxed">{a.excerpt}</p>
                <Link
                  to="#"
                  className="mt-4 inline-block text-[12px] uppercase tracking-editorial text-ink border-b border-ink/40 hover:border-champagne hover:text-champagne pb-1 transition-colors"
                >
                  Read more
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Newsletter />
    </>
  );
}
