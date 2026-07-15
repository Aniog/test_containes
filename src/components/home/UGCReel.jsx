import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const ugcItems = [
  {
    id: "ugc-1",
    caption: "My new daily staples \u2728",
    user: "@clairem",
    imgId: "velmora-ugc-daily-staples",
  },
  {
    id: "ugc-2",
    caption: "Gifted myself these huggies and I have no regrets",
    user: "@sarahk",
    imgId: "velmora-ugc-huggies-gift",
  },
  {
    id: "ugc-3",
    caption: "The perfect layering necklace",
    user: "@olivia_r",
    imgId: "velmora-ugc-layering-necklace",
  },
  {
    id: "ugc-4",
    caption: "Obsessed with the new arrivals",
    user: "@emmaj",
    imgId: "velmora-ugc-new-arrivals",
  },
  {
    id: "ugc-5",
    caption: "Demi-fine gold that actually stays gold",
    user: "@maya.n",
    imgId: "velmora-ugc-stays-gold",
  },
  {
    id: "ugc-6",
    caption: "Heirloom vibes without the heirloom price",
    user: "@jessw",
    imgId: "velmora-ugc-heirloom-vibes",
  },
]

export default function UGCReel() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 lg:py-20 bg-velvet-50/50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-serif text-2xl lg:text-3xl text-midnight-900">
              As Seen On You
            </h2>
            <p className="text-xs text-velvet-500 mt-1 tracking-wide">
              Tag @velmora to be featured
            </p>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto hide-scrollbar snap-x-mandatory">
        <div className="flex gap-4 px-4 lg:px-8 pb-4" style={{ minWidth: "max-content" }}>
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="snap-start flex-shrink-0 w-[180px] lg:w-[220px]"
            >
              <div className="aspect-[9/16] bg-velvet-100 rounded-lg overflow-hidden relative group cursor-pointer">
                <img
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[ugc-user-${item.id}] [ugc-cap-${item.id}]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`UGC by ${item.user}`}
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay + caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p
                    id={`ugc-cap-${item.id}`}
                    className="text-white text-xs font-serif italic leading-snug"
                  >
                    {item.caption}
                  </p>
                  <p
                    id={`ugc-user-${item.id}`}
                    className="text-white/60 text-[10px] mt-1 tracking-wide"
                  >
                    {item.user}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}