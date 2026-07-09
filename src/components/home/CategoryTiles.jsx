import { Link } from "react-router-dom"

const categories = [
  { label: "Earrings", href: "/shop?category=earrings" },
  { label: "Necklaces", href: "/shop?category=necklaces" },
  { label: "Huggies", href: "/shop?category=huggies" },
]

export function CategoryTiles() {
  return (
    <section className="bg-velmora-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat.label}
              to={cat.href}
              className="group relative aspect-[3/4] overflow-hidden bg-velmora-stone"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/70 via-velmora-espresso/20 to-transparent transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 flex items-end justify-center p-6">
                <span className="font-serif text-2xl uppercase tracking-[0.2em] text-white transition-transform duration-300 group-hover:-translate-y-2">
                  {cat.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
