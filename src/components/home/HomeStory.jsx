import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useStrkImages } from "@/lib/useStrkImages";

export default function HomeStory() {
  const ref = useRef(null);
  useStrkImages(ref);

  return (
    <section ref={ref} className="bg-ivory-100">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:gap-16 lg:px-12">
        <div className="relative aspect-[4/5] overflow-hidden bg-ink-800">
          <img
            alt="Founder portrait at the workbench"
            data-strk-img-id="story-portrait-7b4e"
            data-strk-img="Founder portrait at the workbench Our Story warm natural light"
            data-strk-img-ratio="4x5"
            data-strk-img-width="1200"
            loading="lazy"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="eyebrow">Our Story</p>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl text-ink-800 text-balance">
            Jewelry, considered —
            <br />
            <span className="italic font-light">made to last.</span>
          </h2>
          <p className="mt-6 max-w-lg text-ink-600 leading-relaxed text-pretty">
            Velmora began at a small workbench, with one question: what if
            fine-feeling jewelry didn't have to come with a fine-jewelry price
            tag? Each piece is designed in-house, plated in 18K gold, and
            hand-finished by a maker we know by name.
          </p>
          <p className="mt-4 max-w-lg text-ink-600 leading-relaxed text-pretty">
            We work in small batches — never more, never less than the
            women who will wear them.
          </p>
          <Link
            to="/about"
            className="link-underline mt-8 inline-flex items-center gap-2 font-sans uppercase tracking-widest2 text-[11px] text-ink-800"
          >
            Read our story
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
