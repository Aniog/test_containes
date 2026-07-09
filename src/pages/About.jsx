import { useImageLoader } from '@/hooks/useImageLoader'

export default function About() {
  const containerRef = useImageLoader()

  return (
    <div
      ref={containerRef}
      className="bg-velmora-cream min-h-screen pt-28 sm:pt-32 pb-20"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs uppercase tracking-widest text-velmora-taupe mb-4">
          About Velmora
        </p>
        <h1 className="font-serif text-4xl sm:text-6xl mb-8">
          Crafted to be Treasured
        </h1>
        <p className="text-velmora-taupe leading-relaxed mb-10">
          Velmora Fine Jewelry creates demi-fine pieces for modern women who
          value quality, longevity, and quiet luxury. Every design begins as a
          sketch in our studio and is brought to life using responsibly sourced
          brass and thick 18K gold plating. We believe the best jewelry is the
          kind you reach for every day — pieces that feel like an extension of
          you.
        </p>
        <div className="aspect-video bg-stone-300 overflow-hidden">
          <img
            data-strk-img-id="about-studio"
            data-strk-img="[about-title] jewelry studio workspace"
            data-strk-img-ratio="16x9"
            data-strk-img-width="1000"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora studio"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}
