import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function BrandStory() {
  const containerRef = useRef(null)
  const [imageRef, imageVisible] = useScrollAnimation(0.2)
  const [textRef, textVisible] = useScrollAnimation(0.2)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      // Image loading would happen here
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div ref={imageRef} className={`relative aspect-[4/5] overflow-hidden rounded-sm animate-slide-left ${imageVisible ? 'visible' : ''}`}>
            <div
              className="absolute inset-0"
              data-strk-bg-id="brand-story-bg-d4e5f6"
              data-strk-bg="[brand-story-title] [brand-story-subtitle]"
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="800"
              style={{ backgroundColor: '#D5CFC5' }}
            />
          </div>

          {/* Text */}
          <div ref={textRef} className={`md:pl-8 animate-slide-right ${textVisible ? 'visible' : ''}`}>
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Our Story</p>
            <h2 id="brand-story-title" className="serif-heading text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
              Jewelry That Tells<br />Your Story
            </h2>
            <p id="brand-story-subtitle" className="text-muted-foreground text-base leading-relaxed mb-4">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't cost a fortune. We craft demi-fine pieces using 18K gold plating over sterling silver, creating pieces that look and feel luxurious without the luxury markup.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Every piece is designed in-house, tested for hypoallergenic comfort, and made to be worn every day — not kept in a box for special occasions.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-accent text-sm uppercase tracking-widest hover:gap-3 transition-all duration-300"
            >
              Read More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
