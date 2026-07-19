import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import ProductImage from "@/components/product/ProductImage";

export default function About() {
  return (
    <>
      <section className="bg-ivory border-b border-hairline">
        <div className="container-wide py-20 md:py-28 text-center">
          <p className="eyebrow mb-4">Our Story</p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] max-w-2xl mx-auto">
            Heirlooms, <em className="italic font-light">within reach.</em>
          </h1>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[560px]">
          <div className="relative aspect-[4/5] md:aspect-auto overflow-hidden order-2 md:order-1">
            <ProductImage
              imgId="about-portrait-img"
              query="[about-quote-1] [about-title] Velmora fine jewelry founder"
              ratio="4x5"
              width={900}
              alt="Founder portrait"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center px-8 md:px-14 lg:px-20 py-16 md:py-24 order-1 md:order-2">
            <h2
              id="about-title"
              className="font-serif text-3xl md:text-4xl lg:text-5xl"
            >
              The kitchen-table beginning
            </h2>
            <p
              id="about-quote-1"
              className="mt-6 text-base md:text-lg text-espresso/80 leading-relaxed font-light"
            >
              Velmora began in 2024 at a kitchen table in Lisbon — sketches in a
              notebook, a single gold-plated sample, and the belief that fine
              jewelry shouldn't wait for a milestone.
            </p>
            <p className="mt-4 text-base md:text-lg text-espresso/80 leading-relaxed font-light">
              Each piece is finished in 18K gold plating over hypoallergenic
              brass, hand-set where it matters, and shipped in velvet — because
              the unwrapping should feel as considered as the jewelry inside.
            </p>
            <p className="mt-4 text-base md:text-lg text-espresso/80 leading-relaxed font-light">
              We work in small batches, with a small team, in a small studio.
              That is, intentionally, the point.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-sand py-20 md:py-28">
        <div className="container-wide grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: "Demi-fine, by design",
              body: "18K gold plating over a hypoallergenic base — the look and feel of fine jewelry, at a price you can wear daily.",
            },
            {
              title: "Hand-finished",
              body: "Each setting, each polish, each velvet pouch is touched by a person who has made jewelry for twenty years.",
            },
            {
              title: "Made in small batches",
              body: "We never overproduce. If a piece is sold out, we'll make more — slowly, in the same studio, with the same care.",
            },
          ].map((b) => (
            <div key={b.title}>
              <h3 className="font-serif text-2xl md:text-3xl">{b.title}</h3>
              <p className="mt-3 text-sm md:text-base text-espresso/75 leading-relaxed font-light">
                {b.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ivory py-20 md:py-28 text-center">
        <div className="container-content">
          <p className="eyebrow mb-3">Step inside</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl max-w-2xl mx-auto">
            Find a piece you want to wear tomorrow.
          </h2>
          <Link
            to="/shop"
            className="btn-primary mt-8 inline-flex"
          >
            Shop the Collection <ArrowUpRight className="w-3.5 h-3.5 ml-2" strokeWidth={1.5} />
          </Link>
        </div>
      </section>
    </>
  );
}
