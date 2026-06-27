import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { brandStory } from "@/data/site";
import { useReveal } from "@/hooks/useReveal";
import Container from "@/components/layout/Container";

export default function BrandStory() {
  const ref = useReveal();
  return (
    <section className="bg-cream py-20 md:py-28" ref={ref}>
      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
          <div className="reveal md:col-span-6 relative aspect-[4/5] overflow-hidden bg-taupe order-1">
            <img
              src={brandStory.image}
              alt={brandStory.imageAlt}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="reveal md:col-span-6 order-2">
            <p className="text-label text-muted">{brandStory.eyebrow}</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-espresso mt-4 leading-[1.1]">
              {brandStory.headline}
            </h2>
            <div className="mt-6 w-12 hairline-gold" />
            <p className="mt-8 text-base md:text-lg text-espresso-soft leading-relaxed max-w-lg">
              {brandStory.body}
            </p>
            <Link
              to={brandStory.linkHref}
              className="mt-10 inline-flex items-center gap-2 text-label text-espresso link-underline pb-1"
            >
              {brandStory.linkLabel}
              <ArrowRight strokeWidth={1.25} className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}