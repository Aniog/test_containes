import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { ArrowUpRight } from "lucide-react";

const POSTS = [
  {
    id: "1",
    title: "How to Layer Necklaces Without Looking Like You Tried",
    excerpt:
      "Three rules from our atelier for the kind of stack that whispers, not shouts.",
    category: "Styling",
    date: "March 14, 2025",
    readTime: "4 min",
    image: "layered gold necklaces editorial flat lay warm",
  },
  {
    id: "2",
    title: "Behind the Atelier: A Day in the Polishing Room",
    excerpt:
      "Inside the small studio in Lisbon where every Velmora piece is hand-finished.",
    category: "Atelier",
    date: "February 22, 2025",
    readTime: "6 min",
    image: "atelier jewelry polishing room editorial warm light",
  },
  {
    id: "3",
    title: "Demi-Fine, Explained",
    excerpt:
      "Why we chose 18K gold plating over solid gold — and what it means for you.",
    category: "Materials",
    date: "January 30, 2025",
    readTime: "5 min",
    image: "gold jewelry flat lay editorial materials warm",
  },
  {
    id: "4",
    title: "The Gift Edit: For the Friend Who Already Has Everything",
    excerpt:
      "Six small, considered pieces for the people who are impossible to shop for.",
    category: "Gifting",
    date: "December 12, 2024",
    readTime: "3 min",
    image: "gold jewelry gift box holiday editorial warm",
  },
  {
    id: "5",
    title: "Ear Cuffs, Demystified",
    excerpt:
      "The no-piercing piece you have been seeing everywhere — and how to wear it.",
    category: "Styling",
    date: "November 8, 2024",
    readTime: "4 min",
    image: "model wearing gold ear cuff editorial portrait",
  },
  {
    id: "6",
    title: "A Brief History of the Huggie",
    excerpt:
      "From 90s hip-hop to the red carpet — a small hoop with a long story.",
    category: "Heritage",
    date: "October 21, 2024",
    readTime: "5 min",
    image: "vintage gold huggie hoop editorial still life warm",
  },
];

export default function Journal() {
  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const root = document.getElementById("journal-root");
      if (root) ImageHelper.loadImages(strkImgConfig, root);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const featured = POSTS[0];
  const rest = POSTS.slice(1);

  return (
    <div id="journal-root" className="bg-cream pt-24 md:pt-28">
      <section className="border-b border-ink/10">
        <div className="container-shell py-16 md:py-20 text-center max-w-2xl mx-auto">
          <span className="eyebrow">The Journal</span>
          <h1 className="font-display text-5xl md:text-7xl mt-4 text-ink">
            Stories
          </h1>
          <p className="mt-6 text-ink-soft text-lg leading-relaxed">
            Notes on jewelry, materials, and the small daily rituals worth
            remembering.
          </p>
        </div>
      </section>

      <section className="container-shell py-16 md:py-20">
        {/* Featured */}
        <article className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 items-center pb-16 border-b border-ink/10">
          <div className="md:col-span-7 aspect-[4/3] bg-blush overflow-hidden relative group">
            <div
              className="absolute inset-0 transition-transform duration-700 ease-out-soft group-hover:scale-[1.03]"
              data-strk-bg-id={`journal-${featured.id}`}
              data-strk-bg={featured.image}
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="1200"
            />
          </div>
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 text-[10px] tracking-wider-3 uppercase text-mute">
              <span className="text-champagne-deep">{featured.category}</span>
              <span>·</span>
              <span>{featured.readTime} read</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl mt-4 text-ink leading-[1.1]">
              {featured.title}
            </h2>
            <p className="mt-5 text-ink-soft leading-relaxed">{featured.excerpt}</p>
            <div className="mt-6 flex items-center justify-between">
              <span className="text-[10px] tracking-wider-3 uppercase text-mute">
                {featured.date}
              </span>
              <button className="inline-flex items-center gap-2 text-[11px] font-medium tracking-wider-3 uppercase text-ink hover:text-champagne-deep transition-colors duration-300">
                Read More
                <ArrowUpRight className="w-4 h-4" strokeWidth={1.25} />
              </button>
            </div>
          </div>
        </article>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 pt-16">
          {rest.map((p) => (
            <article key={p.id} className="group">
              <div className="aspect-[4/5] bg-blush overflow-hidden">
                <div
                  className="absolute inset-0 transition-transform duration-700 ease-out-soft group-hover:scale-[1.04]"
                  data-strk-bg-id={`journal-${p.id}`}
                  data-strk-bg={p.image}
                  data-strk-bg-ratio="4x5"
                  data-strk-bg-width="800"
                />
              </div>
              <div className="pt-6">
                <div className="flex items-center gap-3 text-[10px] tracking-wider-3 uppercase text-mute">
                  <span className="text-champagne-deep">{p.category}</span>
                  <span>·</span>
                  <span>{p.readTime}</span>
                </div>
                <h3 className="font-display text-2xl mt-3 text-ink leading-snug group-hover:text-champagne-deep transition-colors duration-300">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-ink-soft leading-relaxed">
                  {p.excerpt}
                </p>
                <p className="mt-4 text-[10px] tracking-wider-3 uppercase text-mute">
                  {p.date}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
