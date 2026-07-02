import React from 'react'
import { IMAGE_PLACEHOLDER } from '@/data/products'
import { useStrkImages } from '@/lib/useStrkImages'

export default function About() {
  const containerRef = React.useRef(null)
  useStrkImages(containerRef, [])

  return (
    <div ref={containerRef} className="bg-stone-100 text-stone-900">
      <section className="border-b border-stone-200 bg-stone-950 px-4 pb-12 pt-28 text-stone-50 sm:px-6 lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-200">About Velmora</p>
          <h1 id="about-title" className="mt-4 max-w-4xl font-display text-5xl text-stone-50 sm:text-6xl">
            Quiet luxury designed to be worn, gifted, and kept close.
          </h1>
          <p id="about-copy" className="mt-6 max-w-2xl text-base leading-8 text-stone-300">
            Velmora Fine Jewelry creates demi-fine gold pieces that feel intimate, polished, and premium without the traditional fine-jewelry markup.
          </p>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-16">
        <div className="overflow-hidden rounded-[2rem] border border-stone-200 bg-stone-200 shadow-[0_22px_70px_-44px_rgba(28,25,23,0.45)]">
          <img
            alt="Velmora atelier mood"
            className="aspect-[4/5] h-full w-full object-cover"
            data-strk-img-id="about-image"
            data-strk-img="[about-copy] [about-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="1200"
            src={IMAGE_PLACEHOLDER}
          />
        </div>
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Our approach</p>
          <h2 className="font-display text-4xl text-stone-950">Made for women who appreciate softness, polish, and simplicity.</h2>
          <p className="text-base leading-8 text-stone-600">
            Every Velmora piece is designed with a styling-first perspective: elegant enough to gift, easy enough to wear every day, and subtle enough to feel timeless rather than trend-led.
          </p>
          <p className="text-base leading-8 text-stone-600">
            We focus on demi-fine finishes, light-catching textures, and thoughtful presentation so the experience feels elevated from first click to final ribbon.
          </p>
        </div>
      </div>
    </div>
  )
}
