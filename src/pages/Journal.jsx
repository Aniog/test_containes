import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import { ArrowRight } from "lucide-react";
import strkImgConfig from "@/strk-img-config.json";

const POSTS = [
  {
    id: "p1",
    eyebrow: "Styling",
    title: "Three ways to layer the Flora Nectar",
    excerpt: "From a single whisper of color to a fully stacked moment — the Flora Nectar is a quiet workhorse.",
    query: "layered gold floral necklaces on linen editorial flat lay",
  },
  {
    id: "p2",
    eyebrow: "Materials",
    title: "What 18K gold plated really means",
    excerpt: "Demi-fine is a generous, lived-in kind of luxury. Here's how we plate ours.",
    query: "macro detail of gold plating process warm bench light",
  },
  {
    id: "p3",
    eyebrow: "Care",
    title: "How to care for your huggies",
    excerpt: "Three small habits that will keep your huggies glowing for years.",
    query: "gold huggie earrings next to suede pouch on linen",
  },
];

export default function Journal() {
  const ref = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <div ref={ref} className="bg-cream pt-24 md:pt-28">
      <section className="border-b border-hairline pb-14">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
          <p className="eyebrow">Journal</p>
          <h1 className="display-lg mt-4 text-ink">Notes from the atelier</h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-10 lg:px-16">
          <ul className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-10">
            {POSTS.map((p) => (
              <li key={p.id} className="group">
                <Link to="#" className="block">
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-bone">
                    <img
                      alt={p.title}
                      data-strk-img-id={`journal-${p.id}`}
                      data-strk-img={`[${p.title}] [${p.eyebrow}] ${p.query}`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-105"
                    />
                  </div>
                  <p className="eyebrow mt-5">{p.eyebrow}</p>
                  <h2 className="mt-3 font-serif text-2xl text-ink">{p.title}</h2>
                  <p className="mt-3 font-serif text-[15px] italic text-taupe">
                    {p.excerpt}
                  </p>
                  <span className="link-underline mt-5 inline-flex items-center gap-2">
                    Read More
                    <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
