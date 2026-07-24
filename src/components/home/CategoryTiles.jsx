import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const tiles = [
  {
    label: "Earrings",
    image:
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80",
    href: "/shop?category=earrings",
  },
  {
    label: "Necklaces",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    href: "/shop?category=necklaces",
  },
  {
    label: "Huggies",
    image:
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80",
    href: "/shop?category=huggies",
  },
];

export default function CategoryTiles() {
  return (
    <section className="py-16 sm:py-24 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-xs font-sans font-medium tracking-[0.2em] uppercase text-accent mb-3">
            Browse
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-wide">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {tiles.map((tile) => (
            <Link
              key={tile.label}
              to={tile.href}
              className="group relative aspect-[4/5] overflow-hidden bg-ink/5"
            >
              <img
                src={tile.image}
                alt={tile.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/20 group-hover:bg-ink/30 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h3 className="font-serif text-2xl sm:text-3xl font-medium tracking-wide">
                  {tile.label}
                </h3>
                <span className="mt-3 flex items-center gap-2 text-xs font-sans font-medium tracking-[0.15em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-1 group-hover:translate-y-0">
                  Explore <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
