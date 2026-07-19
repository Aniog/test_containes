import React from "react"

export default function SectionHeading({ eyebrow, title, copy, align = "center" }) {
  const isCenter = align === "center"

  return (
    <div className={isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-velmora-clay">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-4xl font-medium leading-none text-velmora-espresso md:text-6xl">
        {title}
      </h2>
      {copy && (
        <p className="mt-5 text-base leading-8 text-velmora-taupe md:text-lg">
          {copy}
        </p>
      )}
    </div>
  )
}
