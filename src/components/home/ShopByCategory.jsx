import { Link } from "react-router-dom"
import ImageLoader, { PLACEHOLDER } from "@/components/ImageLoader"

const TILES = [
  { id: "earrings", name: "Earrings", imgId: "cat-earrings-velmora-1a", desc: "Drops, cuffs & arcs" },
  { id: "necklaces", name: "Necklaces", imgId: "cat-necklaces-velmora-2b", desc: "Chains & pendants" },
  { id: "huggies", name: "Huggies", imgId: "cat-huggies-velmora-3c", desc: "Everyday hoops" },
]

export default function ShopByCategory() {
  return (
    <ImageLoader as="section" className="mx-auto max-w-editorial px-6 py-20 md:px-10 md:py-28" deps={[]}>
      <div className="flex flex-col items-center text-center">
        <p className="eyebrow">Find Your Piece</p>
        <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">Shop by Category</h2>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
        {TILES.map((t) => (
          <Link key={t.id} to={`/shop?category=${t.id}`} className="group relative block overflow-hidden">
            <div className="aspect-[4/5] overflow-hidden bg-sand">
              <img
                alt={t.name}
                data-strk-img-id={t.imgId}
                data-strk-img={`[cat-${t.id}-name] [cat-${t.id}-desc] gold jewelry`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="700"
                src={PLACEHOLDER}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-ink/60 via-transparent to-transparent pb-8 transition-all duration-500 group-hover:from-ink/75">
              <h3
                id={`cat-${t.id}-name`}
                className="font-serif text-2xl uppercase tracking-widest3 text-cream"
              >
                {t.name}
              </h3>
              <p
                id={`cat-${t.id}-desc`}
                className="mt-1 text-xs uppercase tracking-widest2 text-cream/80"
              >
                {t.desc}
              </p>
              <span className="mt-3 text-[11px] uppercase tracking-widest2 text-gold opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                Shop Now
              </span>
            </div>
          </Link>
        ))}
      </div>
    </ImageLoader>
  )
}
