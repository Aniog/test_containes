import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import JewelImage from "@/components/ui/JewelImage";
import { SectionTitle } from "@/components/ui/SectionTitle";

const POSTS = [
  {
    id: "how-to-layer",
    eyebrow: "Style",
    title: "How to layer necklaces without the tangle.",
    excerpt: "Three lengths, three weights, and one rule of thumb — a quiet formula for a layered stack that lasts all day.",
    date: "July 14, 2026",
    read: "4 min read",
    shape: "pendant",
    bg: "dusk",
  },
  {
    id: "gold-care",
    eyebrow: "Care",
    title: "Five habits that keep gold plated jewelry glowing.",
    excerpt: "The small rituals — when to remove your pieces, where to store them, what to wipe them with — that make plating last for years.",
    date: "July 02, 2026",
    read: "3 min read",
    shape: "huggie",
    bg: "warm",
  },
  {
    id: "behind-the-set",
    eyebrow: "Atelier",
    title: "Inside the making of the Royal Heirloom Set.",
    excerpt: "From a hand-drawn sketch to a gift-ready box, a look at the 12-week process behind our most-loved set.",
    date: "June 18, 2026",
    read: "6 min read",
    shape: "set",
    bg: "velvet",
  },
  {
    id: "earring-styling",
    eyebrow: "Style",
    title: "The art of the second piercing.",
    excerpt: "How a single ear cuff can transform the shape of an entire stack — and three ways to wear our Vivid Aura.",
    date: "June 04, 2026",
    read: "4 min read",
    shape: "cuff",
    bg: "glow",
  },
];

export default function Journal() {
  return (
    <main className="page-fade pt-24 md:pt-32 bg-cream min-h-screen">
      <div className="mx-auto max-w-editorial px-5 md:px-10">
        <div className="flex flex-col items-center text-center gap-3 mb-14">
          <span className="eyebrow text-champagne-dark">The Velmora Journal</span>
          <h1 className="font-display text-5xl md:text-6xl text-ink leading-[1.02] max-w-2xl">
            Notes from a quiet bench.
          </h1>
          <p className="text-muted text-sm md:text-base max-w-md mt-3">
            Styling, care, and the slower stories behind our pieces.
          </p>
        </div>

        {/* Featured */}
        <article className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 mb-16">
          <div className="md:col-span-7 relative aspect-[4/3] md:aspect-auto md:min-h-[420px] overflow-hidden">
            <JewelImage shape={POSTS[0].shape} bg={POSTS[0].bg} alt={POSTS[0].title} className="absolute inset-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-cream">
              <span className="eyebrow text-champagne">{POSTS[0].eyebrow}</span>
              <h2 className="font-display text-3xl md:text-4xl mt-2 leading-tight">{POSTS[0].title}</h2>
            </div>
          </div>
          <div className="md:col-span-5 flex flex-col justify-center">
            <p className="text-muted leading-relaxed">{POSTS[0].excerpt}</p>
            <p className="text-xs text-muted mt-4">
              {POSTS[0].date} · {POSTS[0].read}
            </p>
            <Link to="#" className="mt-5 inline-flex items-center gap-2 eyebrow text-[0.7rem] text-ink link-underline self-start">
              Read story
              <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </div>
        </article>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {POSTS.slice(1).map((p) => (
            <article key={p.id} className="group flex flex-col gap-4">
              <div className="relative aspect-[4/3] overflow-hidden">
                <JewelImage
                  shape={p.shape}
                  bg={p.bg}
                  alt={p.title}
                  className="absolute inset-0 transition-transform duration-700 ease-velvet group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-3 text-xs text-muted">
                <span className="eyebrow text-champagne-dark text-[0.6rem]">{p.eyebrow}</span>
                <span>·</span>
                <span>{p.read}</span>
              </div>
              <h3 className="font-display text-2xl text-ink leading-snug">{p.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{p.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
