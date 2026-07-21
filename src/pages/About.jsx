import { useRef } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "../strk-img-config.json";

const values = [
  {
    title: "Made to be worn",
    body: "We design for the everyday — pieces that survive showers, commutes, and travel. Jewelry that doesn't ask to be taken off.",
  },
  {
    title: "Demi-fine, by design",
    body: "2 microns of 18K gold plating on a solid brass base. The feel of fine at the price of fashion — without the compromise.",
  },
  {
    title: "Small, slow, honest",
    body: "We release two small collections a year, restock the bestsellers, and skip the discounts. Quiet luxury is a discipline.",
  },
];

export default function About() {
  const ref = useRef(null);
  useEffect(() => { return ImageHelper.loadImages(strkImgConfig, ref.current); }, []);;

  return (
    <div ref={ref} className="bg-ivory pt-24 md:pt-28">
      {/* Hero */}
      <section className="container-velmora py-12 md:py-20 text-center max-w-3xl mx-auto">
        <p className="eyebrow">Our story</p>
        <h1 className="heading-display text-4xl md:text-6xl lg:text-7xl mt-3">
          A studio bench,
          <br className="hidden md:block" />{" "}
          <em className="not-italic text-gold-deep">a quiet idea.</em>
        </h1>
        <p className="mt-6 font-sans text-base md:text-lg text-ink-soft leading-relaxed">
          Velmora is a demi-fine jewelry house, founded in 2021 by a small
          team in Brooklyn who believed that the everyday deserves better
          materials — and a slower, more thoughtful way of making.
        </p>
      </section>

      {/* Editorial image */}
      <section className="container-velmora">
        <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-champagne">
          <img
            alt="Inside the Velmora studio"
            data-strk-img-id="about-hero-img"
            data-strk-img="[about-body] [about-title] studio still life editorial"
            data-strk-img-ratio="21x9"
            data-strk-img-width="1800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Long-form text */}
      <section
        id="about-title"
        className="container-velmora py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-10"
      >
        <div className="md:col-span-3">
          <p className="eyebrow">Founders</p>
          <h2 className="font-serif text-3xl mt-3 leading-tight text-espresso">
            A note from our atelier.
          </h2>
        </div>
        <div className="md:col-span-7 md:col-start-5 max-w-2xl">
          <p
            id="about-body"
            className="font-sans text-base md:text-[17px] leading-relaxed text-ink-soft"
          >
            We started Velmora because the jewelry we wanted to wear every day
            didn't exist at the price we could afford. Fine jewelry felt
            unreachable; fashion jewelry felt disposable. So we sat down at a
            workbench and started making what we wanted — in 18K gold-plated
            brass, with handset crystals and stainless-steel posts, finished
            by hand in small batches.
          </p>
          <p className="mt-5 font-sans text-base md:text-[17px] leading-relaxed text-ink-soft">
            Today, twelve thousand people in thirty-eight countries wear a
            piece of Velmora every day. We release two small collections a
            year, restock the pieces you tell us you love, and never run
            sales. The result is jewelry that feels like treasure — and the
            quiet kind, not the loud kind.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-champagne border-y border-sand py-20 md:py-24">
        <div className="container-velmora grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {values.map((v) => (
            <article key={v.title}>
              <h3 className="font-serif text-2xl md:text-3xl text-espresso">
                {v.title}
              </h3>
              <p className="mt-3 font-sans text-base text-ink-soft leading-relaxed">
                {v.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-velmora py-20 md:py-24 text-center">
        <h2 className="heading-display text-3xl md:text-4xl">
          See what we’ve been making.
        </h2>
        <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link to="/shop" className="btn-primary">
            Shop the Collection
          </Link>
          <Link to="/journal" className="btn-outline">
            Read the Journal
          </Link>
        </div>
      </section>
    </div>
  );
}
