import { Link } from "react-router-dom";
import { CATEGORIES } from "@/data/products";

export default function CategoryTiles() {
  return (
    <section className="bg-[#F7F2EA] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[11px] uppercase tracking-[0.4em] text-[#B8924A] mb-4">
            Find Yours
          </p>
          <h2 className="font-serif font-light text-4xl md:text-5xl lg:text-6xl text-[#1A1410] tracking-tight">
            Shop by category.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {CATEGORIES.map((c) => (
            <Link
              key={c.id}
              to={`/shop?category=${c.id}`}
              className="group relative block aspect-[3/4] overflow-hidden bg-[#EFE7DA]"
            >
              <img
                alt={c.label}
                data-strk-img-id={c.imgId}
                data-strk-img={`[cat-blurb-${c.id}] [cat-label-${c.id}] ${c.query}`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
              />
              {/* Gradient for label */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1410]/70 via-[#1A1410]/10 to-transparent" />

              {/* Label, always visible; gets a subtle nudge on hover */}
              <div className="absolute inset-x-0 bottom-0 p-8 transition-all duration-500 group-hover:pb-10">
                <p
                  id={`cat-label-${c.id}`}
                  className="font-serif text-3xl md:text-4xl text-[#F7F2EA] tracking-wide"
                >
                  {c.label}
                </p>
                <p
                  id={`cat-blurb-${c.id}`}
                  className="mt-2 text-xs uppercase tracking-[0.3em] text-[#D9BE85] opacity-90"
                >
                  {c.blurb}
                </p>
                <span className="mt-4 inline-block text-[11px] uppercase tracking-[0.3em] text-[#F7F2EA] border-b border-[#F7F2EA]/60 pb-1 transition-colors group-hover:border-[#D9BE85] group-hover:text-[#D9BE85]">
                  Shop {c.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
