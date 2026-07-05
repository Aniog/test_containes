import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { StoryArt } from "@/components/jewelry-illustrations/JewelryArt";
import { TESTIMONIALS } from "@/data/catalog";
import StarRating from "@/components/ui/StarRating";

const About = () => {
  return (
    <div className="pt-24 md:pt-28">
      {/* Hero */}
      <section className="container-velmora py-12 md:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16 items-center">
          <div className="md:col-span-7 order-2 md:order-1">
            <p className="eyebrow">Our Story</p>
            <h1 className="mt-4 font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-balance">
              Made slowly. <em className="not-italic text-accent">Worn</em> for years.
            </h1>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-muted-foreground max-w-xl">
              Velmora began at a kitchen table in 2019 with a single 18K gold
              plated hoop and a belief that everyday jewelry could feel as
              considered as a family heirloom.
            </p>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-muted-foreground max-w-xl">
              Today we work with small ateliers in Jaipur and Arezzo to craft
              each piece in small batches — by hand, from recycled metals, in
              weights that feel real in your hand.
            </p>
          </div>
          <div className="md:col-span-5 order-1 md:order-2 aspect-[4/5] bg-muted overflow-hidden">
            <StoryArt className="h-full w-full" />
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-muted/60 border-y border-border">
        <div className="container-velmora py-20 md:py-28">
          <div className="text-center max-w-2xl mx-auto">
            <p className="eyebrow">What we believe</p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">
              Three quiet <em className="not-italic text-accent">promises</em>
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {[
              {
                title: "Demi-fine, never fast",
                body: "18K gold plating at 2.5 microns — five times industry standard. We don't use base metals you wouldn't be proud to wear.",
              },
              {
                title: "Small, by hand",
                body: "Each piece is finished in workshops of fewer than ten artisans. Nothing is mass produced. Nothing is stamped out by the thousand.",
              },
              {
                title: "Conscious, always",
                body: "Recycled metals, recyclable packaging, fair wages. The kind of work we'd be proud to show our daughters.",
              },
            ].map((p, i) => (
              <article
                key={i}
                className="bg-card border border-border p-8 md:p-10"
              >
                <p className="text-[11px] uppercase tracking-widest2 text-accent">
                  0{i + 1}
                </p>
                <h3 className="mt-4 font-serif text-2xl md:text-3xl">
                  {p.title}
                </h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  {p.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-velmora py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow">What they're saying</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">
            Worn <em className="not-italic text-accent">daily</em>, loved dearly
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              className="border border-border p-8 md:p-10 bg-card"
            >
              <StarRating value={t.rating} size={14} />
              <blockquote className="mt-5 font-serif text-xl md:text-2xl leading-snug">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 text-[11px] uppercase tracking-widest2 text-muted-foreground">
                {t.name} · Verified buyer
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-14 text-center">
          <Link
            to="/shop"
            className="inline-flex items-center justify-center gap-2 border border-ink px-8 py-4 text-[11px] font-medium uppercase tracking-widest2 text-ink transition-colors duration-300 hover:bg-ink hover:text-cream"
          >
            Shop the Collection
            <ArrowRight size={12} strokeWidth={1.5} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
