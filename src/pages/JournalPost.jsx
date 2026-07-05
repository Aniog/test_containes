import React, { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  EarCuffArt,
  FloraNecklaceArt,
  HeirloomSetArt,
} from "@/components/jewelry-illustrations/JewelryArt";
import { POSTS_META, POST_BODIES } from "@/data/catalog";

const ART_BY_KEY = {
  EarCuffArt,
  FloraNecklaceArt,
  HeirloomSetArt,
};

const renderBlock = (block, i) => {
  if (block.type === "h2") {
    return (
      <h2
        key={i}
        className="mt-12 font-serif text-2xl md:text-3xl leading-tight text-ink"
      >
        {block.text}
      </h2>
    );
  }
  if (block.type === "lede") {
    return (
      <p
        key={i}
        className="mt-8 font-serif text-xl md:text-2xl leading-relaxed text-ink/90 italic"
      >
        {block.text}
      </p>
    );
  }
  return (
    <p
      key={i}
      className="mt-6 text-base md:text-[17px] leading-relaxed text-muted-foreground"
    >
      {block.text}
    </p>
  );
};

const JournalPost = () => {
  const { slug } = useParams();
  const post = POSTS_META.find((p) => p.id === slug);
  const body = POST_BODIES[slug];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [slug]);

  if (!post || !body) {
    return <Navigate to="/journal" replace />;
  }

  const Art = ART_BY_KEY[post.artKey];
  const others = POSTS_META.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <div className="pt-24 md:pt-28">
      {/* Header */}
      <section className="container-velmora py-12 md:py-16">
        <Link
          to="/journal"
          className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-widest2 text-muted-foreground hover:text-ink transition-colors"
        >
          <ArrowLeft size={12} strokeWidth={1.5} />
          Back to the journal
        </Link>
        <p className="eyebrow mt-8">
          {post.category} · {post.date} · {post.readTime}
        </p>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
          {post.title}
        </h1>
        <p className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
          {post.excerpt}
        </p>
      </section>

      {/* Hero image */}
      <section className="container-velmora">
        <div className="aspect-[16/9] w-full overflow-hidden bg-muted">
          {Art ? <Art className="h-full w-full" /> : null}
        </div>
      </section>

      {/* Body */}
      <article className="container-velmora max-w-2xl py-16 md:py-20">
        {body.map(renderBlock)}

        <hr className="hairline my-16" />

        <p className="text-[11px] uppercase tracking-widest2 text-muted-foreground">
          With love, the Velmora bench
        </p>
        <p className="mt-4 font-serif text-2xl text-ink">
          Continue reading
        </p>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          {others.map((other) => {
            const OtherArt = ART_BY_KEY[other.artKey];
            return (
              <Link
                key={other.id}
                to={`/journal/${other.id}`}
                className="group block"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  {OtherArt ? (
                    <OtherArt className="h-full w-full transition-transform duration-700 group-hover:scale-105" />
                  ) : null}
                </div>
                <p className="mt-4 text-[11px] uppercase tracking-widest2 text-muted-foreground">
                  {other.category} · {other.readTime}
                </p>
                <h3 className="mt-2 font-serif text-xl leading-tight text-ink group-hover:text-accent transition-colors">
                  {other.title}
                </h3>
                <span className="mt-4 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-widest2 text-ink group-hover:text-accent">
                  Read the story
                  <ArrowRight size={12} strokeWidth={1.5} />
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-16">
          <Link
            to="/shop"
            className="inline-flex items-center gap-3 border border-ink px-10 py-4 text-[11px] font-medium uppercase tracking-widest2 text-ink transition-colors duration-300 hover:bg-ink hover:text-cream"
          >
            Shop the collection
            <ArrowRight size={12} strokeWidth={1.5} />
          </Link>
        </div>
      </article>
    </div>
  );
};

export default JournalPost;
