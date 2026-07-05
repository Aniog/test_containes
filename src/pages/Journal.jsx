import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {
  EarCuffArt,
  FloraNecklaceArt,
  HeirloomSetArt,
} from "@/components/jewelry-illustrations/JewelryArt";
import { POSTS_META } from "@/data/catalog";

const ART_BY_KEY = {
  EarCuffArt,
  FloraNecklaceArt,
  HeirloomSetArt,
};

const Journal = () => {
  return (
    <div className="pt-24 md:pt-28">
      <section className="container-velmora py-12 md:py-20">
        <p className="eyebrow">The Journal</p>
        <h1 className="mt-4 font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-balance">
          Notes from the <em className="not-italic text-accent">bench</em>
        </h1>
        <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
          Styling guides, behind-the-bench stories, and the small rituals that
          keep demi-fine jewelry luminous.
        </p>
      </section>

      <section className="container-velmora pb-24 md:pb-32">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {POSTS_META.map((post) => {
            const Art = ART_BY_KEY[post.artKey];
            return (
              <article key={post.id} className="group">
                <Link to={`/journal/${post.id}`} className="block">
                  <div className="aspect-[4/5] overflow-hidden bg-muted">
                    {Art ? (
                      <Art className="h-full w-full transition-transform duration-700 group-hover:scale-105" />
                    ) : (
                      <div className="h-full w-full bg-muted" />
                    )}
                  </div>
                  <div className="mt-5">
                    <p className="text-[11px] uppercase tracking-widest2 text-muted-foreground">
                      {post.category} · {post.date} · {post.readTime}
                    </p>
                    <h2 className="mt-3 font-serif text-2xl md:text-3xl leading-tight group-hover:text-accent transition-colors">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-widest2 text-ink group-hover:text-accent">
                      Read the story
                      <ArrowRight size={12} strokeWidth={1.5} />
                    </span>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Journal;
