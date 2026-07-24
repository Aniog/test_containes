import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionEyebrow from '@/components/common/SectionEyebrow'

const BrandStory = () => {
  return (
    <section className="grid gap-6 rounded-[36px] border border-velvet/10 bg-white p-6 shadow-soft md:grid-cols-[1.05fr_0.95fr] md:p-8 xl:p-10">
      <div className="overflow-hidden rounded-[28px] bg-ivory">
        <img
          alt="Velmora craftsmanship"
          className="aspect-[4/5] w-full object-cover"
          data-strk-img-id="brand-story-image-a5b9d2"
          data-strk-img="[brand-story-copy] [brand-story-title]"
          data-strk-img-ratio="4x3"
          data-strk-img-width="1000"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
      </div>
      <div className="flex items-center">
        <div className="space-y-6 px-2 py-2 md:px-8">
          <SectionEyebrow>Maison notes</SectionEyebrow>
          <div className="space-y-5">
            <h2 id="brand-story-title" className="font-serif text-5xl leading-none text-velvet md:text-6xl">
              Modern heirlooms, made to feel personal.
            </h2>
            <p id="brand-story-copy" className="max-w-lg text-sm leading-8 text-velvet/70 md:text-base">
              Velmora Fine Jewelry was created for women who want pieces that elevate the everyday without feeling overdone. From softly sculpted huggies to crystal-set gifting sets, every design is finished to look luminous, refined, and enduring.
            </p>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-eyebrow text-velvet transition hover:text-gold-deep"
          >
            Our Story
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BrandStory
