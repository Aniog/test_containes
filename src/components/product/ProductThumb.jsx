import React from "react"
import { cn } from "../../lib/utils"

// Small thumbnail for the cart drawer. We don't tag this with the strk-img
// stock-image system because the product arrives as a runtime prop and the
// strk-img plugin's static analyzer can't trace the value. The cart drawer
// is a transient surface — the same product is fully rendered on the shop
// and product detail pages where the image system can run.
export default function ProductThumb({ product, className }) {
  const initials = (product?.name || "")
    .split(" ")
    .slice(0, 2)
    .map((s) => s[0])
    .join("")
    .toUpperCase()

  return (
    <div
      className={cn(
        "luxury-tone relative flex aspect-[4/5] items-center justify-center overflow-hidden",
        className
      )}
      aria-hidden="true"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-champagne/40">
        <span className="font-serif text-base text-champagne-100">{initials || "V"}</span>
      </div>
    </div>
  )
}
