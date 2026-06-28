import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const POSTS = [
  {
    id: "how-to-layer",
    titleId: "journal-title-how-to-layer",
    descId: "journal-desc-how-to-layer",
    imgId: "journal-img-how-to-layer-1a",
    title: "How to layer necklaces like a stylist",
    excerpt:
      "Three rules — start with the shortest chain, mix textures, never match the metal exactly.",
    category: "Styling",
    date: "June 18, 2026",
    query: "layered gold necklaces editorial styling neck",
  },
  {
    id: "gold-care",
    titleId: "journal-title-gold-care",
    descId: "journal-desc-gold-care",
    imgId: "journal-img-gold-care-2b",
    title: "A jeweler's guide to caring for gold-plated pieces",
    excerpt:
      "Plating lasts years — not weeks — if you treat it gently. Here's what we tell every customer.",
    category: "Care",
    date: "June 4, 2026",
    query: "gold jewelry care soft polish cloth still life",
  },
  {
    id: "gifting",
    titleId: "journal-title-gifting",
    descId: "journal-desc-gifting",
    imgId: "journal-img-gifting-3c",
    title: "The art of gifting jewelry",
    excerpt:
      "A short guide to choosing pieces that feel personal — without being too on-the-nose.",
    category: "Gifting",
    date: "May 22, 2026",
    query: "gold jewelry gift box linen wrap warm light",
  },
  {
    id: "behind",
    titleId: "journal-title-behind",
    descId: "journal-desc-behind",
    imgId: "journal-img-behind-4d",
    title: "Behind the bench: meet Clara",
    excerpt:
      "Twenty years at the jeweler's bench in Porto. We sat down with our lead metalsmith.",
    category: "Atelier",
    date: "May 9, 2026",
    query: "metalsmith jeweler bench hand tools warm workshop",
  },
];

export default function Journal() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 bg-[#F7F2EA]">
      <section className="border-b border-[#1A1410]/10 py-16 md:py-24 bg-[#EFE7DA] text-center">
        <p className="text-[11px] uppercase tracking-[0.4em] text-[#B8924A] mb-4">
          The Velmora Journal
        </p>
        <h1 className="font-serif font-light text-4xl md:text-6xl lg:text-7xl text-[#1A1410] tracking-tight">
          Notes on craft <em className="italic text-[#8E6E33]">&amp; care</em>.
        </h1>
        <p className="mt-5 max-w-xl mx-auto px-5 text-[#3D332A] leading-relaxed">
          Styling notes, care guides, and stories from our atelier in Lisbon.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {POSTS.map((post, i) => (
            <article key={post.id} className={i === 0 ? "md:col-span-2" : ""}>
              <Link to="#" className="group block">
                <div
                  className={`relative overflow-hidden bg-[#EFE7DA] ${
                    i === 0 ? "aspect-[16/9]" : "aspect-[4/3]"
                  }`}
                >
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}] ${post.query}`}
                    data-strk-img-ratio={i === 0 ? "16x9" : "4x3"}
                    data-strk-img-width={i === 0 ? "1400" : "900"}
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                </div>
                <div className="mt-6">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-[#B8924A]">
                    {post.category} · {post.date}
                  </p>
                  <h2
                    id={post.titleId}
                    className={`mt-3 font-serif font-light text-[#1A1410] tracking-tight leading-snug ${
                      i === 0 ? "text-3xl md:text-5xl" : "text-2xl md:text-3xl"
                    }`}
                  >
                    {post.title}
                  </h2>
                  <p
                    id={post.descId}
                    className="mt-4 text-[#3D332A] leading-relaxed max-w-prose"
                  >
                    {post.excerpt}
                  </p>
                  <span className="mt-5 inline-block text-[11px] uppercase tracking-[0.3em] text-[#1A1410] border-b border-[#1A1410]/40 pb-1 group-hover:border-[#B8924A] group-hover:text-[#B8924A] transition-colors">
                    Read article
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
