import { useRef } from 'react'
import { Link } from 'react-router-dom'
import EditorialImage from '@/components/common/EditorialImage'
import { useImageLoader } from '@/hooks/useImageLoader'

const StorySection = () => {
  const sectionRef = useRef(null)
  useImageLoader(sectionRef, [])

  return (
    <section ref={sectionRef} id="story" className="bg-velmora-espresso px-5 py-20 text-velmora-ivory md:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
        <EditorialImage
          id="story-atelier-img-a42b"
          query="[story-body] [story-title] [story-eyebrow]"
          ratio="4x3"
          width="1000"
          alt="Gold jewelry arranged in a warm atelier setting"
          className="aspect-[4/5] rounded-t-full bg-velmora-champagne lg:aspect-[4/4]"
          imgClassName="hover:scale-105"
        />
        <div className="lg:pl-12">
          <p id="story-eyebrow" className="font-sans text-xs font-bold uppercase tracking-[0.34em] text-velmora-gold">Our point of view</p>
          <h2 id="story-title" className="mt-5 font-serif text-5xl font-semibold leading-tight text-velmora-ivory md:text-7xl">Jewelry with the ease of now and the warmth of forever.</h2>
          <p id="story-body" className="mt-7 max-w-xl font-sans text-base leading-8 text-velmora-champagne/85">
            Velmora designs demi-fine gold pieces for women who collect meaning in small, luminous details. Each style balances accessible luxury with the soft polish of heirloom jewelry.
          </p>
          <Link to="/shop" className="mt-9 inline-flex border-b border-velmora-gold pb-2 font-sans text-xs font-bold uppercase tracking-[0.26em] text-velmora-champagne transition hover:text-velmora-gold">
            Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}

export default StorySection
