import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import { Link } from "react-router-dom"
import strkImgConfig from "@/strk-img-config.json"

const tiles = [
  { label: "Earrings", id: "earrings", desc: "Sculptural drops, cuffs, and polished everyday pairs." },
  { label: "Necklaces", id: "necklaces", desc: "Delicate chains and crystal signatures for layering." },
  { label: "Huggies", id: "huggies", desc: "Close-fitting hoops with golden volume and ease." },
]

export default function CategoryTiles() {
  const sectionRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, sectionRef.current)
  }, [])

  return (
    <section ref={sectionRef} className="bg-velmora-cream py-16 text-velmora-ink sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mb-9 text-center">
          <p className="text-xs font-bold uppercase tracking-widerLuxe text-velmora-gold">Shop by Category</p>
          <h2 className="mt-3 font-serif text-5xl font-medium leading-none text-velmora-ink">Find Your Signature</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {tiles.map((tile) => (
            <Link key={tile.id} to={`/shop?category=${tile.label}`} className="group relative block aspect-[4/5] overflow-hidden bg-velmora-espresso text-velmora-cream shadow-soft">
              <img
                alt={tile.label}
                className="h-full w-full object-cover opacity-85 transition duration-700 group-hover:scale-105 group-hover:opacity-70"
                data-strk-img-id={`category-${tile.id}-tile`}
                data-strk-img={`[category-${tile.id}-desc] [category-${tile.id}-title]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/75 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 transition duration-500 md:translate-y-10 md:group-hover:translate-y-0">
                <h3 id={`category-${tile.id}-title`} className="font-serif text-4xl font-medium text-velmora-cream">{tile.label}</h3>
                <p id={`category-${tile.id}-desc`} className="mt-3 text-sm leading-6 text-velmora-linen opacity-100 md:opacity-0 md:transition md:duration-500 md:group-hover:opacity-100">
                  {tile.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
