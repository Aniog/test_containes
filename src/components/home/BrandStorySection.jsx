import { Link } from 'react-router-dom'
import ImageLoaderSection from '@/components/shared/ImageLoaderSection'

const BrandStorySection = () => {
  return (
    <ImageLoaderSection className="border-y border-stone-200 bg-white py-16 md:py-24" deps={[]}>
      <section className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8" id="about">
        <div className="overflow-hidden rounded-[2.2rem] border border-stone-200 bg-stone-100 shadow-xl shadow-stone-900/5">
          <img
            alt="Velmora brand story"
            className="aspect-[4/5] w-full object-cover"
            data-strk-img="[story-body] [story-title]"
            data-strk-img-id="velmora-story-image-7ab221"
            data-strk-img-ratio="4x3"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        </div>
        <div className="max-w-xl">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-700">About Velmora</p>
          <h2 className="mt-4 font-display text-4xl leading-none text-neutral-950 sm:text-5xl" id="story-title">
            Jewelry that feels personal, polished, and quietly precious.
          </h2>
          <p className="mt-6 text-base leading-8 text-stone-600 sm:text-lg" id="story-body">
            Velmora was shaped around the idea that everyday jewelry should feel intimate and elevated, with premium finishes, flattering silhouettes, and effortless wearability. Each piece is designed to move between gifting moments and self-purchase with the same sense of care.
          </p>
          <Link
            className="mt-8 inline-flex items-center rounded-full border border-stone-300 px-6 py-4 text-sm font-medium uppercase tracking-[0.28em] text-neutral-950 transition hover:border-amber-700 hover:text-amber-700"
            to="/shop"
          >
            Our Story
          </Link>
        </div>
      </section>
    </ImageLoaderSection>
  )
}

export default BrandStorySection
