import { useState } from "react"
import { PLACEHOLDER } from "@/lib/strk"

export default function ProductGallery({ images, titleId, descId, name }) {
  const [active, setActive] = useState(0)

  return (
    <div className="flex flex-col-reverse gap-4 md:flex-row">
      {/* Thumbnails */}
      <div className="flex gap-3 md:flex-col">
        {images.map((img, i) => (
          <button
            key={img.imgId}
            type="button"
            onClick={() => setActive(i)}
            className={`relative aspect-[4/5] w-16 shrink-0 overflow-hidden border md:w-20 ${
              active === i ? "border-gold" : "border-sand"
            }`}
          >
            <img
              alt={`${name} view ${i + 1}`}
              data-strk-img-id={`${img.imgId}-thumb`}
              data-strk-img={`[${descId}] [${titleId}]`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="200"
              src={PLACEHOLDER}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="relative flex-1 aspect-[4/5] overflow-hidden bg-sand/40">
        <img
          alt={name}
          data-strk-img-id={images[active].imgId}
          data-strk-img={`[${descId}] [${titleId}]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="900"
          src={PLACEHOLDER}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  )
}
