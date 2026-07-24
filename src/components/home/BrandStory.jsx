import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import StrkImg from '@/components/ui/StrkImg'
import Reveal from '@/components/ui/Reveal'

export default function BrandStory() {
  return (
    <section className="border-y border-line bg-cream">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:gap-16 md:px-10 md:py-28">
        <Reveal className="relative">
          <div className="aspect-[4/5] overflow-hidden bg-sand">
            <StrkImg
              imgId="story-img-2a3b4c5d"
              query="[story-heading] [story-text] artisan jeweler hands crafting gold"
              ratio="4x5"
              width={900}
              alt="Velmora atelier, crafting gold jewelry by hand"
              className="h-full w-full"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden bg-ivory px-8 py-6 shadow-[0_20px_40px_-24px_rgba(43,33,24,0.35)] md:block">
            <p className="font-display text-4xl font-light text-gold">18K</p>
            <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.24em] text-mocha">
              Gold Plated, Always
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-gold">Our Story</p>
          <h2 id="story-heading" className="mt-4 font-display text-3xl font-light leading-tight text-espresso md:text-5xl">
            Jewelry that whispers,
            <br />
            <span className="italic">never shouts.</span>
          </h2>
          <p id="story-text" className="mt-6 max-w-lg text-sm leading-relaxed text-mocha md:text-base">
            Velmora began at a single jeweler&rsquo;s bench with a simple belief: fine jewelry
            should not wait for special occasions. Each piece is handcrafted in small batches —
            warm 18K gold over recycled brass, hypoallergenic, made to be worn every day and
            treasured for years.
          </p>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-mocha md:text-base">
            No markups of tradition. No compromise on craft. Just quiet luxury, made accessible.
          </p>
          <Link
            to="/about"
            className="group mt-8 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-espresso transition-colors duration-300 hover:text-gold-deep"
          >
            Discover Our Story
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
