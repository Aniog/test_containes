import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import StockImage from "@/components/ui/StockImage"

export default function ProductGallery({ product }) {
  const gallery = product.gallery && product.gallery.length > 0 ? product.gallery : [product.imgId, product.img2Id, product.imgId]
  const [active, setActive] = useState(0)

  const next = () => setActive((a) => (a + 1) % gallery.length)
  const prev = () => setActive((a) => (a - 1 + gallery.length) % gallery.length)

  return (
    <div className="flex flex-col-reverse sm:flex-row gap-3 sm:gap-4">
      {/* Thumbnails */}
      <div className="flex sm:flex-col gap-2 sm:gap-3 sm:w-20 lg:w-24 flex-shrink-0 overflow-x-auto sm:overflow-visible no-scrollbar">
        {gallery.map((imgId, i) => (
          <button
            key={`${imgId}-${i}`}
            type="button"
            onClick={() => setActive(i)}
            className={cn(
              "flex-shrink-0 relative w-16 sm:w-full aspect-square overflow-hidden rounded-sm transition-all",
              active === i
                ? "ring-1 ring-ink ring-offset-2 ring-offset-bone"
                : "opacity-65 hover:opacity-100"
            )}
            aria-label={`View image ${i + 1}`}
            aria-current={active === i}
          >
            <StockImage
              imgId={`${imgId}-thumb`}
              query={`[${product.descId}] [${product.nameId}] product photo angle ${i + 1}`}
              ratio="1x1"
              width={300}
              alt=""
              className="w-full h-full"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="relative flex-1">
        <div className="relative aspect-[4/5] sm:aspect-[3/4] bg-bone-2 overflow-hidden rounded-sm">
          <StockImage
            imgId={`${gallery[active]}-main`}
            query={`[${product.descId}] [${product.nameId}] detailed product photo`}
            ratio="3x4"
            width={1400}
            alt={product.name}
            priority
            className="w-full h-full"
            imgClassName="w-full h-full object-cover"
          />
          {gallery.length > 1 && (
            <>
              <button
                type="button"
                onClick={prev}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-bone/90 text-ink inline-flex items-center justify-center shadow-soft hover:bg-bone transition-colors"
              >
                <ChevronLeft size={18} strokeWidth={1.4} />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next image"
                className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-bone/90 text-ink inline-flex items-center justify-center shadow-soft hover:bg-bone transition-colors"
              >
                <ChevronRight size={18} strokeWidth={1.4} />
              </button>
            </>
          )}
          <div className="absolute bottom-3 right-3 text-[10px] uppercase tracking-eyebrow text-muted font-sans bg-bone/90 px-2.5 py-1 rounded-sm">
            {active + 1} / {gallery.length}
          </div>
        </div>
      </div>
    </div>
  )
}
