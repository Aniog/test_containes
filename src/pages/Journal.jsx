import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const ARTICLES = [
  {
    id: "layering-rules",
    title: "The Quiet Rules of Layering",
    excerpt: "Three of our stylists on stacking necklaces without ever overdoing it.",
    category: "Styling",
    date: "June 2026",
    titleId: "journal-layering-title",
    descId: "journal-layering-desc",
    imgId: "journal-layering-img-a1c2",
  },
  {
    id: "gifting-edit",
    title: "A Gifting Edit, For Yourself",
    excerpt: "Six pieces that arrived ribbon-tied and never came off.",
    category: "Gifting",
    date: "May 2026",
    titleId: "journal-gifting-title",
    descId: "journal-gifting-desc",
    imgId: "journal-gifting-img-b2d3",
  },
  {
    id: "patina-care",
    title: "Caring for Your Patina",
    excerpt: "Why warm gold ages well — and how to keep it warmer for longer.",
    category: "Care",
    date: "April 2026",
    titleId: "journal-patina-title",
    descId: "journal-patina-desc",
    imgId: "journal-patina-img-c3e4",
  },
  {
    id: "atelier-visit",
    title: "Inside the Atelier",
    excerpt: "A morning with the artisans who finish every Velmora piece by hand.",
    category: "Behind the Bench",
    date: "March 2026",
    titleId: "journal-atelier-title",
    descId: "journal-atelier-desc",
    imgId: "journal-atelier-img-d4f5",
  },
];

export default function Journal() {
  const containerRef = useRef(null);
  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-ivory">
      <div className="border-b border-hairline">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-16 md:py-20 text-center">
          <p className="font-sans text-[11px] uppercase tracking-[0.32em] text-gold mb-3">The Journal</p>
          <h1 className="font-serif font-light text-5xl md:text-6xl tracking-tight text-onyx">
            Notes from the Atelier
          </h1>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
          {ARTICLES.map((a) => (
            <article key={a.id} className="group cursor-pointer">
              <Link to="#" className="block">
                <div className="relative aspect-[4/3] overflow-hidden bg-bone">
                  <img
                    alt={a.title}
                    data-strk-img-id={a.imgId}
                    data-strk-img={`[${a.descId}] [${a.titleId}] gold jewelry editorial warm tone close up`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="900"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="pt-6">
                  <p className="font-sans text-[11px] uppercase tracking-[0.28em] text-gold">
                    {a.category} · {a.date}
                  </p>
                  <h2
                    id={a.titleId}
                    className="mt-3 font-serif font-light text-2xl md:text-3xl text-onyx leading-tight group-hover:text-gold transition-colors"
                  >
                    {a.title}
                  </h2>
                  <p
                    id={a.descId}
                    className="mt-3 font-sans text-espresso/80 leading-relaxed"
                  >
                    {a.excerpt}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
