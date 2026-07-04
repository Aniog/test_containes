import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container.jsx";
import { homeImagery } from "@/data/products.js";

const BrandStory = () => (
  <section className="bg-rose">
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center py-20 sm:py-24 lg:py-28">
        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-sm order-1">
          {homeImagery.brandStory}
        </div>

        {/* Text */}
        <div className="order-2 lg:pl-6">
          <p className="eyebrow">Our story</p>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl text-ink leading-[1.1]">
            Jewelry made to live in,
            <br />
            <span className="italic font-light">not saved for later.</span>
          </h2>
          <p className="mt-6 font-sans text-[1rem] text-mute leading-relaxed max-w-lg">
            Velmora began at a small workbench in 2019 — a single jeweler,
            a sketchbook, and a belief that demi-fine could feel like fine.
            Today, every piece is still hand-finished, plated in 18K gold,
            and made for the everyday.
          </p>
          <p className="mt-4 font-sans text-[1rem] text-mute leading-relaxed max-w-lg">
            We design in small batches. We use recycled metals where we can.
            And we package every order like a gift — because it usually is.
          </p>

          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 font-sans uppercase tracking-wider2 text-[0.78rem] text-ink hover:text-bronze group"
          >
            Read our story
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </Container>
  </section>
);

export default BrandStory;
