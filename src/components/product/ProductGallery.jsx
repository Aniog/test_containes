import { useState } from "react"

export default function ProductGallery({ images }) {
  const [active, setActive] = useState(0)

  return (
    <div className="flex flex-col-reverse md:flex-row gap-3">
      <div className="flex md:flex-col gap-3">
        {images.map((src, idx) => (
          <button
            key={src}
            onClick={() => setActive(idx)}
            className={`overflow-hidden rounded-lg border ${
              active === idx ? "border-brand-ink" : "border-transparent"
            }`}
          >
            <img src={src} alt="" className="h-16 w-16 md:h-20 md:w-20 object-cover" />
          </button>
        ))}
      </div>
      <div className="flex-1 overflow-hidden rounded-xl bg-brand-warm">
        <img src={images[active]} alt="Product" className="h-full w-full object-cover" />
      </div>
    </div>
  )
}
