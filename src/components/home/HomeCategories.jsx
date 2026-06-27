import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const TILES = [
  {
    id: "earrings",
    label: "Earrings",
    image:
      "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=1100&q=85",
  },
  {
    id: "necklaces",
    label: "Necklaces",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1100&q=85",
  },
  {
    id: "huggies",
    label: "Huggies",
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1100&q=85",
  },
];

export default function HomeCategories() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Shop By Category"
          title="Find your signature"
          description="Three small collections, made to layer — start with what feels like you."
          align="center"
          className="mx-auto items-center"
        />
      </Container>

      <Container className="mt-12 md:mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {TILES.map((tile) => (
            <Link
              key={tile.id}
              to={`/shop?category=${tile.id}`}
              className="group relative overflow-hidden bg-[var(--color-ink)] aspect-[4/5] md:aspect-[3/4]"
            >
              <img
                src={tile.image}
                alt={tile.label}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                style={{ objectPosition: "center 30%" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/70 via-[var(--color-ink)]/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9 flex items-end justify-between">
                <div>
                  <p className="text-[0.65rem] uppercase tracking-eyebrow text-[var(--color-gold-soft)] mb-2 font-medium">
                    Explore
                  </p>
                  <h3 className="font-serif text-3xl sm:text-4xl text-[var(--color-bone)] leading-none">
                    {tile.label}
                  </h3>
                </div>
                <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[var(--color-bone)]/40 flex items-center justify-center text-[var(--color-bone)] transition-all duration-500 group-hover:bg-[var(--color-bone)] group-hover:text-[var(--color-ink)]">
                  <ArrowUpRight size={16} strokeWidth={1.5} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}