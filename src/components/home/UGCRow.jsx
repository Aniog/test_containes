import { useEffect, useRef } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const ugcItems = [
  { id: 'ugc-1', caption: 'Everyday elegance', query: 'gold earrings worn ear closeup woman' },
  { id: 'ugc-2', caption: 'Layered perfection', query: 'gold necklace layered woman collarbone' },
  { id: 'ugc-3', caption: 'Stacked & styled', query: 'gold huggie earrings stacked ear' },
  { id: 'ugc-4', caption: 'Golden hour glow', query: 'gold jewelry woman sunlight warm' },
  { id: 'ugc-5', caption: 'Minimal & chic', query: 'minimal gold jewelry woman elegant' },
  { id: 'ugc-6', caption: 'Statement piece', query: 'gold drop earrings woman statement' },
]

export default function UGCRow() {
  const scrollRef = useRef(null)
  const containerRef = useRef(null)
  const [titleRef, titleVisible] = useScrollAnimation(0.2)
  const [scrollContainerRef, scrollVisible] = useScrollAnimation(0.1)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      // Image loading would happen here
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-20 bg-[#F5F0EB] overflow-hidden">
      <div ref={titleRef} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 animate-fade-up ${titleVisible ? 'visible' : ''}`}>
        <h2 className="serif-heading text-3xl md:text-4xl text-center">
          As Worn By You
        </h2>
        <p className="text-muted-foreground text-center text-sm mt-3">
          Tag @velmora to be featured
        </p>
      </div>

      <div
        ref={scrollContainerRef}
        className={`flex gap-4 md:gap-6 overflow-x-auto pb-4 px-4 sm:px-6 lg:px-8 snap-x snap-mandatory scrollbar-hide animate-fade-up ${scrollVisible ? 'visible' : ''}`}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ugcItems.map((item, index) => (
          <div
            key={item.id}
            className={`flex-shrink-0 w-[200px] md:w-[240px] snap-start animate-scale-in delay-${(index + 1) * 100} ${scrollVisible ? 'visible' : ''}`}
          >
            <div className="relative aspect-[9/16] overflow-hidden rounded-sm">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                data-strk-bg-id={`ugc-bg-${item.id}`}
                data-strk-bg={item.query}
                data-strk-bg-ratio="9x16"
                data-strk-bg-width="400"
                style={{ backgroundColor: '#D5CFC5' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="serif-heading text-white text-lg italic">
                  {item.caption}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
