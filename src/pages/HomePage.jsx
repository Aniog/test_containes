import { ImageHelper } from "@strikingly/sdk";
import { ArrowRight, MoveRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/products/ProductCard.jsx";
import RatingStars from "../components/shared/RatingStars.jsx";
import SectionHeading from "../components/shared/SectionHeading.jsx";
import {
  categoryTiles,
  journalEntries,
  placeholderSrc,
  products,
  testimonials,
  trustHighlights,
  ugcMoments,
} from "../data/storefront.js";
import { useStorefront } from "../hooks/useStorefront.jsx";
import strkImgConfig from "../strk-img-config.json";

const HomePage = () => {
  const { addToCart } = useStorefront();
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="relative isolate min-h-screen overflow-hidden bg-stone-950 text-stone-50">
        <div
          className="absolute inset-0"
          data-strk-bg-id="velmora-hero-bg-a1"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/55 to-stone-950/20" />
        <div className="container-shell relative flex min-h-screen items-end pb-24 pt-32 sm:pb-28 lg:pb-24">
          <div className="max-w-2xl space-y-7">
            <p className="eyebrow text-stone-200">Quiet luxury for every day</p>
            <h1 id="hero-title" className="editorial-heading text-5xl text-stone-50 sm:text-6xl lg:text-7xl">
              Crafted to be Treasured
            </h1>
            <p id="hero-subtitle" className="max-w-xl text-lg leading-8 text-stone-200 sm:text-xl">
              Warm-toned demi-fine jewelry designed for self-gifting, easy layering,
              and modern heirloom moments.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link className="button-primary" to="/shop">
                Shop the Collection
              </Link>
              <Link className="button-secondary border-stone-400 bg-transparent text-stone-50 hover:bg-stone-50 hover:text-stone-950" to="/#story">
                Discover Velmora
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="border-y border-stone-200 bg-stone-100">
        <div className="container-shell grid gap-4 py-4 text-center sm:grid-cols-2 lg:grid-cols-4">
          {trustHighlights.map((item) => (
            <p key={item} className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-600 sm:text-sm">
              {item}
            </p>
          ))}
        </div>
      </div>

      <section className="section-shell container-shell" id="bestsellers">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Bestsellers"
            title="The pieces everyone keeps reaching for"
            description="Our most-loved earrings, huggies, and gifting set — designed to look elevated on arrival and effortless in daily wear."
          />
          <Link className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-stone-600 transition hover:text-amber-700" to="/shop">
            View all <MoveRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {products.map((product, index) => (
            <ProductCard
              key={product.slug}
              idPrefix="home-bestsellers"
              onAddToCart={addToCart}
              priority={index < 2}
              product={product}
            />
          ))}
        </div>
      </section>

      <section className="section-shell border-y border-stone-200 bg-stone-100/70">
        <div className="container-shell">
          <SectionHeading
            align="center"
            eyebrow="Worn by Velmora women"
            title="A reel of warm-lit everyday styling"
            description="An editorial take on the social strip: soft portraits, ear stacks, and effortless layers shot up close."
          />
          <div className="hide-scrollbar mt-10 flex gap-4 overflow-x-auto pb-2 sm:gap-6">
            {ugcMoments.map((moment) => {
              const titleId = `${moment.id}-title`;
              const captionId = `${moment.id}-caption`;
              return (
                <article key={moment.id} className="group relative min-w-[230px] max-w-[230px] overflow-hidden rounded-[2rem] bg-stone-950 text-stone-50 shadow-lg sm:min-w-[270px] sm:max-w-[270px]">
                  <img
                    alt={moment.title}
                    className="aspect-[9/16] w-full object-cover transition duration-500 group-hover:scale-105"
                    data-strk-img-id={`${moment.id}-img`}
                    data-strk-img={`[${captionId}] [${titleId}]`}
                    data-strk-img-ratio="9x16"
                    data-strk-img-width="700"
                    src={placeholderSrc}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 id={titleId} className="editorial-heading text-3xl text-stone-50">
                      {moment.title}
                    </h3>
                    <p id={captionId} className="mt-2 text-sm leading-6 text-stone-200">
                      {moment.caption}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell container-shell" id="collections">
        <SectionHeading
          eyebrow="Shop by Category"
          title="Refined silhouettes, grouped by how you wear them"
          description="Whether you are collecting layers or choosing a gift, start with the category that matches the moment."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {categoryTiles.map((tile) => {
            const titleId = `${tile.id}-title`;
            const descId = `${tile.id}-desc`;
            return (
              <Link
                key={tile.id}
                className="group relative overflow-hidden rounded-[2rem] bg-stone-950 text-stone-50"
                to={`/shop?category=${encodeURIComponent(tile.label)}`}
              >
                <div
                  className="absolute inset-0 transition duration-500 group-hover:scale-105"
                  data-strk-bg-id={`${tile.id}-bg`}
                  data-strk-bg={`[${descId}] [${titleId}]`}
                  data-strk-bg-ratio="3x4"
                  data-strk-bg-width="900"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/35 to-transparent" />
                <div className="relative flex aspect-[4/5] items-end p-7">
                  <div>
                    <h3 id={titleId} className="editorial-heading text-4xl text-stone-50">
                      {tile.label}
                    </h3>
                    <p id={descId} className="mt-2 max-w-xs text-sm leading-6 text-stone-200 opacity-90 transition group-hover:opacity-100">
                      {tile.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="section-shell border-y border-stone-200 bg-stone-100/70" id="story">
        <div className="container-shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="overflow-hidden rounded-[2rem] bg-stone-200 shadow-lg">
            <img
              alt="Velmora brand story portrait"
              className="aspect-[4/5] w-full object-cover"
              data-strk-img-id="story-image-a1"
              data-strk-img="[story-copy] [story-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1000"
              src={placeholderSrc}
            />
          </div>
          <div className="max-w-xl space-y-6">
            <p className="eyebrow">Our Story</p>
            <h2 id="story-title" className="editorial-heading text-4xl sm:text-5xl">
              Velmora was created for jewelry that feels considered, wearable, and quietly special.
            </h2>
            <p id="story-copy" className="text-base leading-8 text-stone-600 sm:text-lg">
              Every piece is designed to bridge self-purchase and meaningful gifting — refined enough to elevate an everyday look, accessible enough to become part of a daily ritual. We work with warm finishes, soft sculptural shapes, and gift-ready details that feel elevated from unboxing to wear.
            </p>
            <Link className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-stone-700 transition hover:text-amber-700" to="/shop">
              Our Story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-shell container-shell">
        <SectionHeading
          align="center"
          eyebrow="Testimonials"
          title="What they are saying"
          description="Short notes from women gifting Velmora to others and to themselves."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.id} className="soft-card p-7">
              <RatingStars rating={5} centered />
              <p className="mt-6 text-base leading-8 text-stone-700">
                “{testimonial.quote}”
              </p>
              <p className="mt-6 product-name text-xs text-stone-500">{testimonial.author}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell border-y border-stone-200 bg-stone-950 text-stone-50" id="journal">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Journal"
            title="Notes on gifting, styling, and collecting"
            description="Editorial guidance that helps our pieces fold naturally into everyday wardrobes and special occasions."
            align="center"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {journalEntries.map((entry) => (
              <article key={entry.id} className="rounded-[2rem] border border-stone-800 bg-stone-900/80 p-7">
                <p className="eyebrow text-stone-400">Editorial</p>
                <h3 className="editorial-heading mt-4 text-3xl text-stone-50">{entry.title}</h3>
                <p className="mt-4 text-sm leading-7 text-stone-300">{entry.excerpt}</p>
                <Link className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-amber-300 transition hover:text-amber-200" to="/shop">
                  Read more <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell container-shell" id="newsletter">
        <div className="rounded-[2.5rem] bg-amber-100 px-6 py-10 sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-2xl">
            <p className="eyebrow text-stone-600">Newsletter</p>
            <h2 className="editorial-heading mt-3 text-4xl sm:text-5xl">
              Join for 10% off your first order
            </h2>
            <p className="mt-4 text-base leading-8 text-stone-700">
              Receive first access to limited drops, styling notes, and gifting edits curated by the Velmora team.
            </p>
          </div>
          <form
            className="mt-8 flex max-w-xl flex-col gap-3 sm:flex-row lg:mt-0 lg:w-full lg:max-w-lg"
            onSubmit={(event) => {
              event.preventDefault();
              if (!email.trim()) {
                return;
              }
              setJoined(true);
              setEmail("");
            }}
          >
            <input
              type="email"
              required
              className="premium-input flex-1"
              placeholder="Email address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <button type="submit" className="button-primary whitespace-nowrap">
              Join Velmora
            </button>
          </form>
          {joined ? (
            <p className="mt-4 text-sm font-medium text-stone-700 lg:mt-3">
              You are in — your welcome offer is on its way.
            </p>
          ) : null}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
