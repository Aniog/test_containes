import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { CATEGORY_ART } from "@/components/illustrations/JewelryArt";

const CATS = [
  { slug: "earrings", label: "Earrings" },
  { slug: "necklaces", label: "Necklaces" },
  { slug: "huggies", label: "Huggies" },
];

const CategoryTile = ({ slug, label, index }) => {
  const Art = CATEGORY_ART[slug];
  return (
    <Link
      to={`/shop?category=${slug}`}
      className="group block relative aspect-[4/5] overflow-hidden bg-mocha"
    >
      {Art ? <Art /> : <div className="absolute inset-0 bg-mocha" />}
      {/* darken on hover for legibility */}
      <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/30 transition-colors duration-500" />
      <div className="absolute inset-0 flex flex-col items-center justify-end p-6 md:p-8 text-ivory">
        <span className="font-sans text-[10px] uppercase tracking-eyebrow text-ivory/70 mb-2">
          Shop
        </span>
        <span className="font-serif text-4xl md:text-5xl">{label}</span>
        <span className="mt-4 inline-flex items-center gap-2 font-sans text-[10px] uppercase tracking-button text-ivory/80 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          Discover
          <ArrowRight size={12} strokeWidth={1.5} />
        </span>
      </div>
    </Link>
  );
};

const Categories = () => {
  return (
    <Section tone="ivory" size="lg">
      <Container>
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <div>
            <p className="font-sans text-[10px] uppercase tracking-eyebrow text-taupe mb-3">
              Find your edit
            </p>
            <h2 className="font-serif text-4xl md:text-6xl text-ink leading-[1.05]">
              Shop by category
            </h2>
          </div>
          <Link
            to="/shop"
            className="hidden md:inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-button text-ink border-b border-ink/40 hover:border-ink pb-1 transition-colors"
          >
            View all
            <ArrowRight size={14} strokeWidth={1.5} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {CATS.map((c, i) => (
            <CategoryTile key={c.slug} {...c} index={i} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Categories;
