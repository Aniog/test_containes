import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { useReveal } from "@/lib/useReveal.js";

const articles = [
  {
    id: "j1",
    imgId: "journal-1-1f3a",
    title: "How to Layer Necklaces Without the Tangle",
    excerpt:
      "Three chains, two pendants, and a few quiet tricks from our atelier on getting the lengths to sit just right.",
    date: "May 2025",
    minutes: 4,
    titleId: "journal-1-title",
  },
  {
    id: "j2",
    imgId: "journal-2-7e1c",
    title: "The Floral Edit, in Three Moods",
    excerpt:
      "We photographed the new collection in late afternoon Lisbon light — here's the story behind the stones.",
    date: "April 2025",
    minutes: 6,
    titleId: "journal-2-title",
  },
  {
    id: "j3",
    imgId: "journal-3-4d0b",
    title: "Why Demi-Fine, and What It Actually Means",
    excerpt:
      "A short, honest guide to plating thickness, base metals, and how to spot the difference at a glance.",
    date: "March 2025",
    minutes: 5,
    titleId: "journal-3-title",
  },
  {
    id: "j4",
    imgId: "journal-4-8a72",
    title: "Care Notes for the Long Wear",
    excerpt:
      "Six small habits that will keep your gold bright for years — and the one we recommend you ignore.",
    date: "February 2025",
    minutes: 3,
    titleId: "journal-4-title",
  },
  {
    id: "j5",
    imgId: "journal-5-2c9d",
    title: "A Quiet Gift Guide, For Everyone on Your List",
    excerpt:
      "From the new mother to the friend with very particular taste — jewelry that says the right thing.",
    date: "December 2024",
    minutes: 7,
    titleId: "journal-5-title",
  },
  {
    id: "j6",
    imgId: "journal-6-6b14",
    title: "Behind the Atelier Doors in Porto",
    excerpt:
      "A morning with the team: the first pour of plating, the second round of polishing, and the studio playlist.",
    date: "November 2024",
    minutes: 8,
    titleId: "journal-6-title",
  },
];

export default function Journal() {
  const ref = useReveal();
  const gridRef = useRef(null);

  useEffect(() => {
    if (!gridRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, gridRef.current);
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="bg-cream-100 pt-32 sm:pt-40 pb-14 sm:pb-20 text-center border-b border-hairline/60">
        <div className="mx-auto max-w-editorial px-4 sm:px-6 lg:px-10">
          <p className="eyebrow text-muted-500">The Journal</p>
          <h1 className="mt-3 font-serif text-5xl sm:text-6xl lg:text-7xl text-ink-800">
            Notes from the Atelier
          </h1>
          <p className="mt-5 max-w-md mx-auto text-sm text-muted-500 leading-relaxed">
            Slow reads on jewelry, materials, and the people who wear them.
          </p>
        </div>
      </section>

      {/* Featured (first) article */}
      <section className="bg-cream-100 py-14 sm:py-20">
        <div className="mx-auto max-w-editorial px-4 sm:px-6 lg:px-10">
          <Featured article={articles[0]} />
        </div>
      </section>

      {/* Grid */}
      <section ref={ref} className="reveal bg-sand-100 py-20 sm:py-24">
        <div className="mx-auto max-w-editorial px-4 sm:px-6 lg:px-10">
          <h2 className="font-serif text-3xl sm:text-4xl text-ink-800 mb-10">More to Read</h2>
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.slice(1).map((a) => (
              <JournalCard key={a.id} article={a} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Featured({ article }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);
  return (
    <article ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
      <Link to="#" className="lg:col-span-7 block">
        <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-ink-700 to-ink-900">
          <img
            alt={article.title}
            data-strk-img-id={article.imgId}
            data-strk-img={`[${article.titleId}]`}
            data-strk-img-ratio="16x10"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 10'/%3E"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
          />
        </div>
      </Link>
      <div className="lg:col-span-5">
        <p className="text-[11px] tracking-[0.28em] uppercase text-muted-500">
          {article.date} · {article.minutes} min read
        </p>
        <h2
          id={article.titleId}
          className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl text-ink-800 leading-[1.05]"
        >
          {article.title}
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink-800/85 max-w-md">
          {article.excerpt}
        </p>
        <Link to="#" className="link-underline mt-6 inline-flex items-center gap-2 group">
          Read the Story
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.5} />
        </Link>
      </div>
    </article>
  );
}

function JournalCard({ article }) {
  return (
    <article className="bg-cream-100 border border-hairline/60 group flex flex-col">
      <Link to="#" className="block">
        <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-ink-700 to-ink-900">
          <img
            alt={article.title}
            data-strk-img-id={article.imgId}
            data-strk-img={`[${article.titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="700"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        </div>
      </Link>
      <div className="p-6 flex flex-col flex-1">
        <p className="text-[11px] tracking-[0.28em] uppercase text-muted-500">
          {article.date} · {article.minutes} min read
        </p>
        <h3
          id={article.titleId}
          className="mt-3 font-serif text-2xl text-ink-800 leading-snug"
        >
          {article.title}
        </h3>
        <p className="mt-3 text-sm text-ink-800/80 leading-relaxed flex-1">
          {article.excerpt}
        </p>
        <Link to="#" className="link-underline mt-5 inline-flex items-center gap-2 self-start group">
          Read More
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.5} />
        </Link>
      </div>
    </article>
  );
}
