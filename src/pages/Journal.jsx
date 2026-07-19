import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const posts = [
  {
    id: "journal-1",
    title: "How to Style Gold Huggies",
    excerpt: "Three ways to wear the everyday huggie, from minimal to stacked.",
    titleId: "journal-1-title",
    descId: "journal-1-desc",
    imgId: "journal-1-img",
  },
  {
    id: "journal-2",
    title: "Caring for Gold Plated Jewelry",
    excerpt: "A simple ritual to keep your pieces warm and luminous for years.",
    titleId: "journal-2-title",
    descId: "journal-2-desc",
    imgId: "journal-2-img",
  },
  {
    id: "journal-3",
    title: "The Gifting Edit",
    excerpt: "Considered gifts for the people you treasure most.",
    titleId: "journal-3-title",
    descId: "journal-3-desc",
    imgId: "journal-3-img",
  },
];

export default function Journal() {
  const ref = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      <section className="bg-cream border-b border-sand">
        <div className="max-w-3xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4">
            The Journal
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-ink">
            Notes on Gold
          </h1>
          <p className="mt-6 text-sm text-taupe">
            Styling, care, and the stories behind our pieces.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {posts.map((p) => (
            <article key={p.id} className="group">
              <Link to="/shop" className="block aspect-[4/3] overflow-hidden bg-espresso">
                <img
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  data-strk-img-id={p.imgId}
                  data-strk-img={`[${p.descId}] [${p.titleId}] gold jewelry editorial`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </Link>
              <h2
                id={p.titleId}
                className="mt-5 font-serif text-2xl text-ink uppercase tracking-[0.08em]"
              >
                {p.title}
              </h2>
              <p id={p.descId} className="mt-2 text-sm text-taupe leading-relaxed">
                {p.excerpt}
              </p>
              <Link
                to="/shop"
                className="mt-4 inline-block text-xs uppercase tracking-[0.18em] text-gold border-b border-gold pb-0.5 hover:text-gold-deep transition-colors"
              >
                Read More
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
