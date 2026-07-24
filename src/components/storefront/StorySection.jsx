import { Link } from 'react-router-dom'
import ImageTag from '@/components/ui/ImageTag.jsx'

export default function StorySection() {
  return (
    <section
      id="story"
      className="grid gap-8 overflow-hidden rounded-[2.25rem] border border-[#e5d5c8] bg-white/70 p-5 shadow-[0_18px_44px_rgba(36,29,31,0.06)] md:grid-cols-[1.05fr_0.95fr] md:p-8"
    >
      <div className="overflow-hidden rounded-[1.8rem] bg-[#efe3d6]">
        <ImageTag
          alt="Velmora craftsmanship"
          imgId="velmora-story-image-55de11"
          query="[story-copy] [story-title]"
          ratio="4x3"
          width="1000"
          className="aspect-[4/3] w-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-center px-2 py-3 md:px-6">
        <p className="text-xs uppercase tracking-[0.3em] text-[#8a6c5d]">Behind Velmora</p>
        <h2 id="story-title" className="mt-4 font-['Cormorant_Garamond'] text-4xl text-[#241d1f] md:text-5xl">
          Thoughtful details, made to stay in rotation
        </h2>
        <p id="story-copy" className="mt-5 max-w-xl text-base leading-8 text-[#5a4745]">
          Velmora was created for women who want the feel of fine jewelry with the ease of everyday styling. Each piece balances warmth, polish, and wearability, so gifting feels intimate and self-purchase feels special.
        </p>
        <Link
          to="/shop"
          className="mt-8 inline-flex w-fit items-center rounded-full border border-[#d9c7b7] px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#241d1f] transition hover:border-[#b78b54] hover:text-[#b78b54]"
        >
          Our Story
        </Link>
      </div>
    </section>
  )
}
