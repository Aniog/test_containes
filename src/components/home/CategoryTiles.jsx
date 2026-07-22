import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

const TILES = [
  {
    id: "earrings",
    name: "Earrings",
    href: "/shop?cat=earrings",
    query: "gold earrings editorial still life cream background warm light",
  },
  {
    id: "necklaces",
    name: "Necklaces",
    href: "/shop?cat=necklaces",
    query: "gold necklace pendant on cream linen flat lay editorial",
  },
  {
    id: "huggies",
    name: "Huggies",
    href: "/shop?cat=huggies",
    query: "gold huggie hoop earrings on ear close up editorial",
  },
]

export default function CategoryTiles() {
  return (
    <section className="section bg-cream reveal" id="categories">
      <div className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="text-center max-w-xl mx-auto mb-12 md:mb-16">
          <p className="eyebrow text-gold">Shop by Category</p>
          <h2 className="mt-3 font-serif text-ink text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05]">
            Find your <span className="italic font-normal">forever piece.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {TILES.map((t) => (
            <Link
              key={t.id}
              to={t.href}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-ink"
            >
              <img
                alt={t.name}
                data-strk-img-id={`cat-tile-${t.id}`}
                data-strk-img={`[cat-tile-${t.id}-name] ${t.query}`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover img-placeholder transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(27,23,20,0) 40%, rgba(27,23,20,0.6) 100%)",
                }}
                aria-hidden="true"
              />
              <div className="absolute inset-0 flex items-end p-6 md:p-8">
                <div className="w-full flex items-end justify-between text-cream">
                  <h3
                    id={`cat-tile-${t.id}-name`}
                    className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] leading-none"
                  >
                    {t.name}
                  </h3>
                  <span className="inline-flex items-center gap-2 eyebrow text-cream/80 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500">
                    Shop <ArrowRight size={14} strokeWidth={1.5} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
