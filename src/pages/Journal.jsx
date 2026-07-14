import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const posts = [
  {
    id: "journal-1",
    slug: "how-to-style-huggies",
    title: "How to Style Huggies: 7 Ways to Wear Them Now",
    excerpt:
      "The one piece you'll never take off — and how to make it work with everything in your closet.",
    category: "Styling",
    readTime: "4 min",
    imgId: "journal-1-img-7e2a",
    titleId: "journal-1-title",
    excerptId: "journal-1-excerpt",
  },
  {
    id: "journal-2",
    slug: "gold-filled-vs-gold-plated",
    title: "Gold-Filled vs. Gold-Plated — What You Should Actually Know",
    excerpt:
      "The difference between $30 and $300 jewelry is not what you think. A plain-English guide.",
    category: "Education",
    readTime: "6 min",
    imgId: "journal-2-img-1b8d",
    titleId: "journal-2-title",
    excerptId: "journal-2-excerpt",
  },
  {
    id: "journal-3",
    slug: "the-everyday-ear-stack",
    title: "The Everyday Ear Stack: A Formula That Just Works",
    excerpt:
      "Two huggies, one stud, one cuff. How our team builds the ear stack they never edit.",
    category: "Styling",
    readTime: "5 min",
    imgId: "journal-3-img-3f0a",
    titleId: "journal-3-title",
    excerptId: "journal-3-excerpt",
  },
  {
    id: "journal-4",
    slug: "gifts-under-100",
    title: "8 Thoughtful Gifts Under $100 (That Don't Feel Like It)",
    excerpt:
      "For the friend who has everything — and the sister, mother, and partner who deserve more.",
    category: "Gifting",
    readTime: "7 min",
    imgId: "journal-4-img-2c4e",
    titleId: "journal-4-title",
    excerptId: "journal-4-excerpt",
  },
  {
    id: "journal-5",
    slug: "how-we-make-it",
    title: "Inside the Atelier: How a Velmora Piece Is Born",
    excerpt:
      "From hand-carved wax to the final polish — a look at the 11 steps behind every piece.",
    category: "Behind the Scenes",
    readTime: "8 min",
    imgId: "journal-5-img-9b1d",
    titleId: "journal-5-title",
    excerptId: "journal-5-excerpt",
  },
  {
    id: "journal-6",
    slug: "mixing-metals",
    title: "Mixing Metals: The Rule We're Breaking in 2026",
    excerpt:
      "Gold and silver together, on purpose. Why the old rule no longer applies.",
    category: "Styling",
    readTime: "3 min",
    imgId: "journal-6-img-4e7f",
    titleId: "journal-6-title",
    excerptId: "journal-6-excerpt",
  },
];

export default function Journal() {
  const gridRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, gridRef.current);
  }, []);

  const [featured, ...rest] = posts;

  return (
    <div className="bg-cream pt-12 md:pt-20 pb-20">
      <header className="mx-auto max-w-editorial px-5 sm:px-8 lg:px-12 mb-12 md:mb-16 text-center">
        <p className="eyebrow">The Journal</p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-espresso mt-3">
          Stories & Styling
        </h1>
        <p className="mt-5 text-sm md:text-base text-ash max-w-lg mx-auto leading-relaxed">
          A quiet look at how to wear, gift, and care for your jewelry — plus
          the occasional behind-the-scenes from the atelier.
        </p>
      </header>

      <section
        ref={gridRef}
        className="mx-auto max-w-editorial px-5 sm:px-8 lg:px-12"
      >
        {/* Featured */}
        <article className="group grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-20 md:mb-28">
          <Link to={`/journal/${featured.slug}`} className="block relative aspect-[4/3] md:aspect-[5/4] overflow-hidden bg-sand">
            <img
              alt={featured.title}
              data-strk-img-id={featured.imgId}
              data-strk-img={`[${featured.excerptId}] [${featured.titleId}] Velmora journal editorial lifestyle gold jewelry warm`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-105"
              loading="eager"
            />
          </Link>
          <div className="flex flex-col justify-center max-w-md">
            <p className="eyebrow">Featured · {featured.category}</p>
            <h2
              id={featured.titleId}
              className="font-serif text-3xl md:text-4xl text-espresso mt-4 leading-tight"
            >
              <Link
                to={`/journal/${featured.slug}`}
                className="hover:text-gold transition"
              >
                {featured.title}
              </Link>
            </h2>
            <p
              id={featured.excerptId}
              className="mt-5 text-base text-ash leading-relaxed"
            >
              {featured.excerpt}
            </p>
            <p className="mt-5 text-[11px] tracking-widest2 uppercase text-ash">
              {featured.readTime} read
            </p>
            <Link
              to={`/journal/${featured.slug}`}
              className="mt-7 inline-flex items-center gap-2 text-[12px] tracking-widest2 uppercase text-espresso border-b border-espresso pb-1 hover:text-gold hover:border-gold transition group"
            >
              Read Article
              <ArrowRight
                size={14}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </article>

        {/* Rest */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-14">
          {rest.map((post) => (
            <article key={post.id} className="group">
              <Link
                to={`/journal/${post.slug}`}
                className="block relative aspect-[4/3] overflow-hidden bg-sand"
              >
                <img
                  alt={post.title}
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[${post.excerptId}] [${post.titleId}] Velmora journal ${post.category.toLowerCase()} gold jewelry editorial`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-105"
                  loading="lazy"
                />
              </Link>
              <p className="mt-5 eyebrow">{post.category}</p>
              <h3
                id={post.titleId}
                className="font-serif text-xl text-espresso mt-2 leading-snug"
              >
                <Link
                  to={`/journal/${post.slug}`}
                  className="hover:text-gold transition"
                >
                  {post.title}
                </Link>
              </h3>
              <p
                id={post.excerptId}
                className="mt-3 text-sm text-ash leading-relaxed"
              >
                {post.excerpt}
              </p>
              <p className="mt-3 text-[10px] tracking-widest2 uppercase text-ash">
                {post.readTime} read
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
