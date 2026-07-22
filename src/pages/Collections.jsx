import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { ArrowRight } from "lucide-react";

const COLLECTIONS = [
  {
    id: "heirloom",
    name: "The Heirloom Collection",
    tagline: "A new chapter in our atelier",
    description:
      "Hand-engraved filigree and crystal clusters, designed to be passed down.",
    image: "gold filigree crystal jewelry heirloom collection editorial warm still life",
    href: "/shop?category=earrings",
  },
  {
    id: "everyday",
    name: "The Everyday Collection",
    tagline: "Wear it through everything",
    description:
      "Sculpted huggies, fine chains, and ear cuffs for the small daily rituals.",
    image: "chunky gold huggie earrings everyday collection editorial warm still life",
    href: "/shop?category=huggies",
  },
  {
    id: "flora",
    name: "The Flora Collection",
    tagline: "A small garden, in gold",
    description:
      "Multicolor crystals in soft champagne, blush, and peridot — a wearable garden.",
    image: "multicolor floral crystal jewelry flora collection editorial warm still life",
    href: "/shop?category=necklaces",
  },
  {
    id: "gifts",
    name: "The Gift Edit",
    tagline: "For the people you love most",
    description:
      "Hand-tied, gift-boxed sets ready to give — a small ceremony.",
    image: "gold jewelry gift box ivory ribbon gift edit editorial warm still life",
    href: "/shop?category=sets",
  },
];

export default function Collections() {
  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const root = document.getElementById("collections-root");
      if (root) ImageHelper.loadImages(strkImgConfig, root);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <div id="collections-root" className="bg-cream pt-24 md:pt-28">
      <section className="border-b border-ink/10">
        <div className="container-shell py-16 md:py-20 text-center max-w-2xl mx-auto">
          <span className="eyebrow">The Atelier</span>
          <h1 className="font-display text-5xl md:text-7xl mt-4 text-ink">
            Collections
          </h1>
          <p className="mt-6 text-ink-soft text-lg leading-relaxed">
            Each collection is drawn around a feeling, a season, or a story —
            then hand-finished in our atelier.
          </p>
        </div>
      </section>

      <section className="container-shell py-16 md:py-24 space-y-16 md:space-y-24">
        {COLLECTIONS.map((c, i) => (
          <article
            key={c.id}
            className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 items-center ${
              i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="md:col-span-7 aspect-[4/3] bg-blush overflow-hidden relative">
              <div
                className="absolute inset-0 transition-transform duration-700 ease-out-soft hover:scale-[1.03]"
                data-strk-bg-id={`collection-${c.id}`}
                data-strk-bg={c.image}
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="1200"
              />
            </div>
            <div className="md:col-span-5">
              <span className="eyebrow">{c.tagline}</span>
              <h2 className="font-display text-4xl md:text-5xl mt-3 text-ink leading-[1.05]">
                {c.name}
              </h2>
              <p className="mt-6 text-ink-soft leading-relaxed text-lg">
                {c.description}
              </p>
              <Link
                to={c.href}
                className="mt-8 inline-flex items-center gap-3 text-[11px] font-medium tracking-wider-3 uppercase text-ink hover:text-champagne-deep transition-colors duration-300"
              >
                Explore the Collection
                <span className="w-8 h-px bg-current" />
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
