import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { ArrowUpRight } from "lucide-react"
import { useReveal } from "@/hooks/useReveal"

const TILES = [
  {
    id: "cat-earrings",
    label: "Earrings",
    query: "gold earrings flat lay on warm dark editorial background",
    imgId: "cat-earrings-img-3a91bc",
    to: "/shop?cat=earrings",
  },
  {
    id: "cat-necklaces",
    label: "Necklaces",
    query: "gold crystal necklace on warm dark editorial background",
    imgId: "cat-necklaces-img-4d22ef",
    to: "/shop?cat=necklaces",
  },
  {
    id: "cat-huggies",
    label: "Huggies",
    query: "gold huggie hoop earrings pair on warm dark editorial background",
    imgId: "cat-huggies-img-91bcde",
    to: "/shop?cat=huggies",
  },
]

function Tile({ tile, big }) {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])
  return (
    <Link
      to={tile.to}
      ref={ref}
      className="group relative block w-full overflow-hidden bg-umber"
    >
      <div
        className={`relative w-full ${
          big ? "aspect-[3/4]" : "aspect-[3/4]"
        }`}
      >
        <div
          data-strk-bg-id={tile.imgId}
          data-strk-bg={tile.query}
          data-strk-bg-ratio="3x4"
          data-strk-bg-width="900"
          className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-ink/65 transition-opacity duration-500 group-hover:opacity-90" />
        <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
          <p className="text-[11px] tracking-widest3 uppercase text-bone/75">
            Shop
          </p>
          <div className="mt-2 flex items-end justify-between">
            <h3 className="font-serif text-[28px] md:text-[34px] text-bone leading-tight">
              {tile.label}
            </h3>
            <span className="w-10 h-10 rounded-full border border-bone/30 text-bone flex items-center justify-center transition-all duration-300 group-hover:bg-gold group-hover:border-gold group-hover:text-ink">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function CategoryTiles() {
  const [ref, visible] = useReveal()
  return (
    <section
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} bg-ink text-bone`}
    >
      <div className="mx-auto max-w-editorial px-6 md:px-10 py-20 md:py-28">
        <div className="mb-10 md:mb-14">
          <p
            id="cats-eyebrow"
            className="text-[11px] tracking-widest3 uppercase text-bone/60"
          >
            Shop by
          </p>
          <h2
            id="cats-title"
            className="mt-3 font-serif text-[36px] md:text-[48px] leading-[1.05]"
          >
            Category
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {TILES.map((t, i) => (
            <Tile key={t.id} tile={t} big={i === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}
