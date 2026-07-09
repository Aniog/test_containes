import SectionLink from '@/components/shared/SectionLink.jsx'
import { useStrkImages } from '@/hooks/useStrkImages.js'

const StorySection = () => {
  const containerRef = useStrkImages([])

  return (
    <section className="bg-ivory py-16 md:py-24" id="story">
      <div className="page-shell grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div ref={containerRef} className="overflow-hidden rounded-[2.5rem] bg-velvet shadow-soft">
          <img
            alt="Velmora brand story"
            className="h-[520px] w-full object-cover"
            data-strk-img="[story-caption] [story-title]"
            data-strk-img-id="story-image"
            data-strk-img-ratio="4x3"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        </div>

        <div className="max-w-xl space-y-6">
          <p className="text-xs uppercase tracking-[0.28em] text-champagne">Brand story</p>
          <h2 id="story-title" className="font-editorial text-5xl leading-none text-velvet sm:text-6xl">
            Designed for the woman who values polish over noise
          </h2>
          <p id="story-caption" className="text-base leading-8 text-truffle">
            Velmora Fine Jewelry was created to bring premium editorial styling into an accessible everyday ritual. We focus on warm finishes, flattering proportions, and pieces that feel special from the first unboxing to the hundredth wear.
          </p>
          <p className="text-base leading-8 text-truffle">
            Every silhouette is developed for effortless layering, gifting, and versatile dressing — quietly luxurious, never overworked.
          </p>
          <SectionLink to="/shop">Our Story</SectionLink>
        </div>
      </div>
    </section>
  )
}

export default StorySection
