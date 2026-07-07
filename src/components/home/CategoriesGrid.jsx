import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"
import { ProductImage } from "@/lib/imagery"

const TILES = [
  {
    id: "cat-earrings",
    title: "Earrings",
    blurb: "Cuffs, drops, studs",
    to: "/shop?cat=earrings",
  },
  {
    id: "cat-necklaces",
    title: "Necklaces",
    blurb: "Pendants & chains",
    to: "/shop?cat=necklaces",
  },
  {
    id: "cat-huggies",
    title: "Huggies",
    blurb: "The everyday gold",
    to: "/shop?cat=huggies",
  },
]

export function CategoriesGrid() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-editorial mx-auto px-6 md:px-10 lg:px-14">
        <div className="text-center mb-12 md:mb-16">
          <span className="eyebrow text-gold-300">Shop by Category</span>
          <h2 className="editorial-heading text-4xl md:text-5xl mt-3 max-w-2xl mx-auto">
            Begin with the basics, finish with the heirloom
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {TILES.map((t) => (
            <Link
              key={t.id}
              to={t.to}
              className="group relative block aspect-[4/5] overflow-hidden bg-cocoa"
            >
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                <ProductImage id={t.id} name={t.title} className="w-full h-full" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-cocoa/70 via-cocoa/10 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex items-end justify-between">
                <div>
                  <h3 className="font-serif text-3xl md:text-4xl text-bone">
                    {t.title}
                  </h3>
                  <span className="eyebrow text-gold-100 mt-2 block">
                    {t.blurb}
                  </span>
                </div>
                <span className="w-11 h-11 inline-flex items-center justify-center rounded-full bg-bone text-cocoa
                                 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0
                                 transition-all duration-500 ease-out">
                  <ArrowUpRight size={18} strokeWidth={1.5} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
