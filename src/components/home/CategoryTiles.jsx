import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { categoryTiles } from "@/data/site";
import { useReveal } from "@/hooks/useReveal";
import Container from "@/components/layout/Container";

export default function CategoryTiles() {
  const ref = useReveal();
  return (
    <section className="bg-bone py-20 md:py-28" ref={ref}>
      <Container size="wide">
        <div className="reveal mb-12 md:mb-16 text-center">
          <p className="text-label text-muted">Shop By Category</p>
          <h2 className="font-serif text-4xl md:text-6xl text-espresso mt-3 leading-tight">
            Find your daily ritual
          </h2>
        </div>

        <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categoryTiles.map((tile) => (
            <Link
              key={tile.id}
              to={tile.href}
              className="group relative aspect-[2/3] md:aspect-[3/4] overflow-hidden bg-taupe block"
            >
              <img
                src={tile.image}
                alt={tile.label}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-espresso/10 via-transparent to-espresso/70" />
              <div className="absolute inset-0 flex flex-col items-center justify-end p-6 md:p-10 text-bone">
                <h3 className="font-serif text-3xl md:text-4xl tracking-wide">
                  {tile.label}
                </h3>
                <span className="mt-4 inline-flex items-center gap-2 text-label opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  Shop {tile.label}
                  <ArrowUpRight strokeWidth={1.25} className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}