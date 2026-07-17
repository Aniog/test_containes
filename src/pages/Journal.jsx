import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { JewelryImage } from "@/components/ui/JewelryImage";
import Newsletter from "@/components/layout/Newsletter";

const articles = [
  {
    id: "a1",
    title: "The Quiet Power of Layering",
    excerpt:
      "A short guide to building a stack that feels like you, not the algorithm.",
    palette: "amber",
    date: "May 14, 2026",
    read: "4 min read",
  },
  {
    id: "a2",
    title: "Demi-Fine, Demystified",
    excerpt:
      "What 18K gold plating actually means, and how to make it last.",
    palette: "honey",
    date: "Apr 28, 2026",
    read: "6 min read",
  },
  {
    id: "a3",
    title: "Gifting, Without the Guesswork",
    excerpt:
      "How to choose a piece that lands — whether it is for her, for you, or for the woman who has everything.",
    palette: "blush",
    date: "Apr 02, 2026",
    read: "5 min read",
  },
  {
    id: "a4",
    title: "Inside the Atelier",
    excerpt:
      "A morning with the families who hand-finish every Velmora piece.",
    palette: "champagne",
    date: "Mar 17, 2026",
    read: "8 min read",
  },
  {
    id: "a5",
    title: "A Care Routine That Actually Works",
    excerpt:
      "Three minutes a week, and your demi-fine will look new for years.",
    palette: "warm",
    date: "Mar 04, 2026",
    read: "3 min read",
  },
  {
    id: "a6",
    title: "The Huggies Diaries",
    excerpt:
      "Six women, one pair of earrings, six very different lives.",
    palette: "amber",
    date: "Feb 12, 2026",
    read: "7 min read",
  },
];

export default function Journal() {
  const featured = articles[0];
  const rest = articles.slice(1);
  return (
    <main className="bg-canvas pt-24 md:pt-28">
      <section className="container-editorial pb-12 pt-6">
        <p className="eyebrow">Journal</p>
        <h1 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">
          Stories, guides & quiet musings
        </h1>
        <p className="mt-3 max-w-xl text-ink-secondary leading-relaxed">
          A slow journal about demi-fine jewelry, considered gifting, and the
          small rituals that make a house feel like home.
        </p>
      </section>

      <section className="container-editorial pb-20 md:pb-28">
        <Link
          to="#"
          className="group block overflow-hidden border-t border-line pt-8"
        >
          <div className="grid gap-10 md:grid-cols-12 md:items-center md:gap-16">
            <div className="md:col-span-7">
              <div className="aspect-[4/3] overflow-hidden">
                <JewelryImage
                  art="story"
                  palette={featured.palette}
                  ratio="4/3"
                  className="h-full w-full transition-transform duration-700 group-hover:scale-105"
                  alt={featured.title}
                />
              </div>
            </div>
            <div className="md:col-span-5">
              <p className="text-[10px] uppercase tracking-wider3 text-gold">
                Featured · {featured.date}
              </p>
              <h2 className="mt-4 font-serif text-3xl leading-tight text-ink md:text-5xl">
                {featured.title}
              </h2>
              <p className="mt-5 text-ink-secondary leading-relaxed">
                {featured.excerpt}
              </p>
              <span className="mt-7 inline-flex items-center gap-2 link-underline text-ink">
                Read the story <ArrowRight size={14} strokeWidth={1.6} />
              </span>
            </div>
          </div>
        </Link>

        <div className="mt-20 grid gap-x-6 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((a) => (
            <Link key={a.id} to="#" className="group block">
              <div className="aspect-[4/5] overflow-hidden">
                <JewelryImage
                  art="story"
                  palette={a.palette}
                  ratio="4/5"
                  className="h-full w-full transition-transform duration-700 group-hover:scale-105"
                  alt={a.title}
                />
              </div>
              <div className="pt-5">
                <p className="text-[10px] uppercase tracking-wider3 text-ink-muted">
                  {a.date} · {a.read}
                </p>
                <h3 className="mt-3 font-serif text-2xl text-ink">{a.title}</h3>
                <p className="mt-2 text-sm text-ink-secondary leading-relaxed">
                  {a.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-wider2 text-ink">
                  Read <ArrowRight size={12} strokeWidth={1.6} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Newsletter />
    </main>
  );
}
