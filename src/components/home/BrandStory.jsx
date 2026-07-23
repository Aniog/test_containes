import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PLACEHOLDER_IMG } from "@/data/products";
import Reveal from "@/components/ui/Reveal";

export default function BrandStory() {
  return (
    <section className="border-y border-champagne bg-sand/60 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        <Reveal className="relative">
          <div className="aspect-[4/5] overflow-hidden bg-espresso">
            <img
              src={PLACEHOLDER_IMG}
              alt="Velmora atelier — gold jewelry being hand finished"
              loading="lazy"
              data-strk-img-id="story-atelier-img"
              data-strk-img="[story-body] [story-heading] jewelry atelier artisan hands finishing gold jewelry warm light"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -right-3 hidden bg-gold px-7 py-5 md:block">
            <p className="font-display text-3xl font-semibold text-cream">2019</p>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-cream/85">
              Est. with love
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
            Our Story
          </p>
          <h2
            id="story-heading"
            className="mt-4 font-display text-4xl font-medium leading-tight text-espresso md:text-5xl"
          >
            Quiet luxury, made for every day
          </h2>
          <div className="mt-6 h-px w-16 bg-gold" />
          <p
            id="story-body"
            className="mt-6 text-base leading-relaxed text-mocha"
          >
            Velmora began at a small atelier bench with a simple belief: fine
            jewelry should not wait for special occasions. We plate every piece
            in a generous layer of 18k gold over recycled metals — jewelry that
            looks and feels like heirloom, at a price that invites daily wear.
          </p>
          <p className="mt-4 text-base leading-relaxed text-mocha">
            Each design is sketched, cast, and hand-finished in limited runs, so
            what you wear feels personal — never mass-produced.
          </p>
          <Link
            to="/about"
            className="group mt-8 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-espresso transition-colors hover:text-gold"
          >
            Read Our Story
            <span className="h-px w-10 bg-current transition-all duration-300 group-hover:w-14" />
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
