import { MoveRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { getStockImageUrl } from '@/lib/stockImageConfig'

const StorySection = () => {
  return (
    <section id="about" className="section-shell py-16 sm:py-20">
      <div className="grid gap-8 overflow-hidden rounded-[2rem] border border-line bg-pearl shadow-float lg:grid-cols-[1.05fr,0.95fr]">
        <div className="relative min-h-[24rem] bg-bark">
          <img
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
            src={getStockImageUrl('story-bg')}
          />
        </div>
        <div className="flex items-center px-6 py-10 sm:px-10 lg:px-14">
          <div className="max-w-xl">
            <p className="section-kicker">Quiet luxury</p>
            <h2 id="story-title" className="mt-4 font-serif text-4xl text-ink sm:text-5xl">
              Designed for the moments that stay with you.
            </h2>
            <p id="story-copy" className="mt-6 text-base leading-8 text-muted sm:text-lg">
              Velmora pieces are created to feel intimate and elevated — soft gold tones, polished forms, and subtle sparkle that move effortlessly between workdays, dinners, and milestone gifting.
            </p>
            <Link to="/#journal" className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-caps text-ink transition-colors duration-300 hover:text-gold">
              Our Story <MoveRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StorySection
