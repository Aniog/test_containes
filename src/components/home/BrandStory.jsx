import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { StoryArt } from "@/components/illustrations/JewelryArt";
import { PHOTO } from "@/data/products";

const BrandStory = () => {
  return (
    <Section tone="surface" size="lg">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
          <div className="aspect-[4/5] bg-mocha relative overflow-hidden">
            {PHOTO.story ? (
              <img
                src={PHOTO.story}
                alt="Velmora atelier"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
            ) : null}
            <div className="absolute inset-0">
              <StoryArt />
            </div>
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(27,23,20,0.2) 0%, rgba(27,23,20,0.4) 100%)",
              }}
            />
          </div>
          <div className="md:pl-4">
            <p className="font-sans text-[10px] uppercase tracking-eyebrow text-taupe mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05]">
              Fine enough to feel like a ritual.{" "}
              <em className="text-gold not-italic">Accessible enough to be yours.</em>
            </h2>
            <p className="mt-6 text-ink/75 leading-relaxed text-base md:text-lg max-w-xl">
              Velmora began at a kitchen table in Lisbon — two friends obsessed with the pieces
              that mark a life. We work in small batches with ateliers in Portugal and
              Thailand, plating solid brass in 18K gold, then finishing every piece by hand.
              No mass production. No markups for the mall. Just jewelry you'll still want
              to wear ten years from now.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-button text-ink border-b border-ink/40 hover:border-ink pb-1 transition-colors"
            >
              Our Story
              <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default BrandStory;
