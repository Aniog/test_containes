import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import SmartImage from "@/components/ui/SmartImage";
import Reveal from "@/components/ui/Reveal";
import Newsletter from "@/components/layout/Newsletter";

const COLLECTIONS = [
  {
    slug: "everyday-gold",
    name: "Everyday Gold",
    description:
      "Pieces you forget you're wearing — until the compliments start.",
    query: "stack of delicate gold necklaces and bracelets on warm skin editorial closeup",
  },
  {
    slug: "after-dark",
    name: "After Dark",
    description:
      "Sculptural, statement silhouettes for the hours that begin at 6pm.",
    query: "gold statement earrings on model against dark velvet backdrop editorial",
  },
  {
    slug: "gifted",
    name: "Gifted",
    description:
      "Beautifully boxed, ready to be remembered. The art of a great gift.",
    query: "velvet jewelry gift box with gold pieces and ribbon warm light",
  },
  {
    slug: "the-bridal-edit",
    name: "The Bridal Edit",
    description:
      "Pieces for the morning of. Refined, modern, and never try-hard.",
    query: "delicate gold bridal earrings and necklace on lace and soft white linen",
  },
];

export default function Collections() {
  const containerRef = useRef(null);
  useEffect(() => {
    const node = containerRef.current;
    if (!node) return undefined;
    return ImageHelper.loadImages(strkImgConfig, node);
  }, []);

  return (
    <div className="bg-cream" ref={containerRef}>
      <section className="bg-ivory border-b border-tan/40">
        <div className="container-editorial py-16 md:py-24 text-center">
          <Reveal>
            <p className="eyebrow text-gold-deep">Curated edits</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-4 font-serif text-5xl md:text-7xl text-ink leading-tight">
              <em className="italic font-normal text-mauve">The</em> Collections
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-5 text-mauve text-[15px] md:text-[16px] max-w-prose mx-auto">
              Four carefully edited corners of the Velmora universe. Find the
              edit that already feels like you.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-editorial py-16 md:py-24">
        <ul className="space-y-20 md:space-y-32">
          {COLLECTIONS.map((c, i) => {
            const reverse = i % 2 === 1;
            return (
              <Reveal key={c.slug}>
                <li
                  className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center ${
                    reverse ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative aspect-[5/6] md:aspect-[4/5] overflow-hidden bg-ivory group">
                    <SmartImage
                      alt={c.name}
                      query={c.query}
                      ratio="4x3"
                      width={1200}
                      imgId={`collection-${c.slug}`}
                      className="w-full h-full"
                      imgClassName="transition-transform duration-[800ms] ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className={reverse ? "md:pr-8" : "md:pl-8"}>
                    <p className="eyebrow text-gold-deep">
                      Collection 0{i + 1}
                    </p>
                    <h2 className="mt-4 font-serif text-4xl md:text-5xl text-ink leading-tight">
                      {c.name}
                    </h2>
                    <p className="mt-5 text-mauve text-[16px] leading-relaxed max-w-prose">
                      {c.description}
                    </p>
                    <div className="mt-8">
                      <Link
                        to={`/shop`}
                        className="btn-outline"
                      >
                        Shop the edit
                      </Link>
                    </div>
                  </div>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </section>

      <Newsletter variant="ink" />
    </div>
  );
}
