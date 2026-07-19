import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const articles = [
  {
    id: "stack-the-spheres",
    title: "How to Stack the Spheres",
    excerpt:
      "Three ways to wear the Golden Sphere huggies — from second-piercing solo to a quiet full ear.",
    imgId: "journal-1-img",
  },
  {
    id: "care-101",
    title: "Demi-Fine Care 101",
    excerpt:
      "Five small habits to keep your gold plated pieces looking new, year after year.",
    imgId: "journal-2-img",
  },
  {
    id: "the-heirloom-edit",
    title: "The Heirloom Edit",
    excerpt:
      "How to gift jewelry that is meant to be kept — wrapping, notes, and the small details.",
    imgId: "journal-3-img",
  },
];

export default function Journal() {
  const ref = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <div ref={ref} className="bg-cream-100 pt-28 md:pt-32">
      <header className="mx-auto max-w-editorial px-5 pb-10 md:px-10 md:pb-14 lg:px-14">
        <p className="eyebrow eyebrow-gold">Journal</p>
        <h1 className="mt-3 font-serif text-4xl text-ink-300 md:text-6xl">
          Notes from the studio
        </h1>
      </header>

      <div className="mx-auto grid max-w-editorial grid-cols-1 gap-x-8 gap-y-12 px-5 pb-24 md:grid-cols-3 md:px-10 md:pb-32 lg:px-14">
        {articles.map((a) => (
          <article key={a.id}>
            <Link to="#" className="group block">
              <div className="aspect-[4/5] overflow-hidden bg-cream-200">
                <img
                  alt={a.title}
                  data-strk-img-id={a.imgId}
                  data-strk-img="[journal-eyebrow] [journal-headline] editorial jewelry still life"
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="eyebrow mt-5 text-ink-50">Editorial</p>
              <h2 className="mt-2 font-serif text-2xl text-ink-300">
                {a.title}
              </h2>
              <p className="mt-2 text-sm text-ink-100">{a.excerpt}</p>
              <span className="btn-ghost mt-4">Read</span>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
