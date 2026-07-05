import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { StoryArt } from "@/components/illustrations/JewelryArt";
import { PHOTO } from "@/data/products";

const VALUES = [
  {
    title: "Demi-fine, not disposable",
    body: "18K gold-plated brass with a thicker-than-standard plating. Pieces that age, not pieces that flake.",
  },
  {
    title: "Small-batch production",
    body: "We work with ateliers in Portugal and Thailand in runs of fifty to five hundred. Never more.",
  },
  {
    title: "Hypoallergenic, always",
    body: "Lead-free, nickel-free, water-resistant. Made to be worn — not stored in a box.",
  },
  {
    title: "Honest pricing",
    body: "No middlemen, no mall markups. The piece you see is the price it costs to make it well.",
  },
];

const AboutPage = () => {
  return (
    <main className="pt-20 md:pt-24 bg-ivory">
      {/* Hero */}
      <section className="bg-ink text-ivory overflow-hidden">
        <Container className="py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-sans text-[10px] uppercase tracking-eyebrow text-ivory/60 mb-4">
                Our Story
              </p>
              <h1 className="font-serif text-5xl md:text-7xl leading-[1.02]">
                Quiet pieces, made to be worn.
              </h1>
              <p className="mt-7 text-ivory/75 leading-relaxed text-lg max-w-md">
                Velmora began at a kitchen table in Lisbon. Today we work with small ateliers
                in Portugal and Thailand, plating solid brass in 18K gold and finishing
                every piece by hand.
              </p>
              <Button
                as={Link}
                to="/shop"
                variant="accent"
                size="lg"
                className="mt-10"
              >
                Shop the Collection
                <ArrowRight size={14} strokeWidth={1.5} />
              </Button>
            </div>
            <div className="aspect-[4/5] bg-mocha relative overflow-hidden">
              {PHOTO.story ? (
                <img
                  src={PHOTO.story}
                  alt="Atelier"
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
              ) : null}
              <div className="absolute inset-0">
                <StoryArt />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <Section tone="ivory" size="lg">
        <Container>
          <div className="text-center mb-14 md:mb-20">
            <p className="font-sans text-[10px] uppercase tracking-eyebrow text-taupe mb-3">
              What we believe
            </p>
            <h2 className="font-serif text-4xl md:text-6xl text-ink leading-[1.05]">
              Four things, kept simple.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 max-w-4xl mx-auto">
            {VALUES.map((v, i) => (
              <div key={v.title} className="border-t border-ink/15 pt-6">
                <p className="font-serif text-3xl text-ink mb-2">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-serif text-2xl text-ink mb-2">{v.title}</h3>
                <p className="text-ink/70 leading-relaxed text-[15px]">{v.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section tone="mocha" size="md" className="text-center">
        <Container>
          <h2 className="font-serif text-4xl md:text-5xl text-ivory leading-tight max-w-2xl mx-auto">
            Find the piece you'll still want to wear in ten years.
          </h2>
          <Button
            as={Link}
            to="/shop"
            variant="accent"
            size="lg"
            className="mt-10"
          >
            Shop the Collection
            <ArrowRight size={14} strokeWidth={1.5} />
          </Button>
        </Container>
      </Section>
    </main>
  );
};

export default AboutPage;
