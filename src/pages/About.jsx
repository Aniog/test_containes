import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <main className="bg-ivory pt-24 md:pt-28">
      <section className="max-w-[1280px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center pb-20 md:pb-28">
        <div className="md:col-span-6">
          <div className="aspect-[4/5] overflow-hidden bg-cream">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Founder of Velmora in the studio, surrounded by gold pieces in progress"
              data-strk-img-id="about-founder"
              data-strk-img="[about-headline] founder of velmora fine jewelry in the studio surrounded by gold pieces in progress editorial"
              data-strk-img-ratio="4x5"
              data-strk-img-width="1000"
              loading="eager"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="md:col-span-6">
          <p className="text-[11px] uppercase tracking-eyebrow font-medium text-gold-deep">
            Our Story
          </p>
          <h1
            id="about-headline"
            className="mt-5 font-serif text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05]"
          >
            A studio of two, a kitchen table, and a small idea about heirlooms.
          </h1>
          <p className="mt-7 text-base md:text-lg text-ink-muted leading-relaxed">
            Velmora was founded in 2021 by two friends who loved the romance of
            fine jewelry but wanted pieces they could wear every day, on
            airplanes and at breakfast tables. We design in small batches,
            work with a small studio of jewelers in Porto, and ship every
            piece by hand.
          </p>
          <p className="mt-5 text-base text-ink-muted leading-relaxed">
            We believe in quiet luxury. In pieces that get better with wear.
            In jewelry that holds its own without being loud about it.
          </p>
          <div className="mt-10 flex items-center gap-4">
            <Link to="/shop">
              <Button variant="primary" size="md">Shop the Collection</Button>
            </Link>
            <Link
              to="/journal"
              className="text-xs uppercase tracking-button font-medium text-ink underline underline-offset-4 hover:text-gold-deep transition-colors duration-300"
            >
              Read the Journal
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
