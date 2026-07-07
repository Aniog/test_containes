import { Link } from 'react-router-dom'
import { storyContent } from '@/data/products'
import { getStrkImageSrc } from '@/lib/strkImage'

function StorySection() {
  return (
    <section id="about" className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="overflow-hidden rounded-[2.25rem] bg-stone-100 shadow-lg shadow-stone-950/5">
          <img
            src={getStrkImageSrc(storyContent.imageId)}
            alt="Jewelry designer arranging Velmora pieces"
            className="h-[420px] w-full object-cover sm:h-[540px]"
            data-strk-img-id={storyContent.imageId}
            data-strk-img="[story-description] [story-title]"
            data-strk-img-ratio="4x5"
            data-strk-img-width="1200"
          />
        </div>

        <div className="max-w-xl">
          <p className="text-xs uppercase tracking-[0.35em] text-amber-600">{storyContent.eyebrow}</p>
          <h2 id="story-title" className="mt-4 font-serif-display text-4xl leading-tight text-stone-950 sm:text-5xl">
            {storyContent.title}
          </h2>
          <p id="story-description" className="mt-6 text-base leading-8 text-stone-600 sm:text-lg">
            {storyContent.body}
          </p>
          <Link
            to="/shop"
            className="mt-8 inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-stone-900 transition duration-300 hover:text-amber-600"
          >
            {storyContent.linkLabel}
            <span className="h-px w-12 bg-stone-400" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default StorySection
