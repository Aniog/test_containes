import { ArrowRight } from 'lucide-react'
import StrkImage from '@/components/common/StrkImage'
import { useImageLoader } from '@/hooks/useImageLoader'

export default function BrandStory() {
  const storyRef = useImageLoader([])

  return (
    <section ref={storyRef} id="story" className="bg-velmora-ivory px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.5rem] border border-velmora-sand bg-velmora-porcelain shadow-velvet lg:grid-cols-2">
        <div className="min-h-[420px] bg-velmora-mist">
          <StrkImage id="brand-story-atelier-b73a2c" query="[brand-story-copy] [brand-story-title]" ratio="3x2" width="1100" alt="Velmora jewelry atelier detail" className="h-full w-full object-cover" />
        </div>
        <div className="flex items-center p-8 text-velmora-espresso sm:p-12 lg:p-16">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-velmora-umber">Our story</p>
            <h2 id="brand-story-title" className="font-serif text-4xl font-medium leading-tight md:text-6xl">Jewelry with a keepsake soul, made for real life.</h2>
            <p id="brand-story-copy" className="mt-6 text-base leading-8 text-velmora-umber md:text-lg">Velmora was created for women who want the romance of fine jewelry without waiting for an occasion. Each piece is designed in considered drops, plated in warm 18K gold, and finished to feel special from first unboxing to daily wear.</p>
            <a href="#" className="mt-8 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-velmora-espresso transition hover:text-velmora-champagne">Our Story <ArrowRight className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </section>
  )
}
