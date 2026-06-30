import { useImageLoader } from '@/hooks/useImageLoader'

export default function About() {
  const containerRef = useImageLoader()

  return (
    <main ref={containerRef} className="min-h-screen bg-velmora-base">
      <div className="border-b border-velmora-taupe/30 bg-velmora-base-light">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <p className="mb-2 font-sans text-xs uppercase tracking-[0.25em] text-velmora-gold">
            Our Story
          </p>
          <h1 className="font-serif text-4xl tracking-wide sm:text-5xl">
            About Velmora
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative mb-12 aspect-[16/9] overflow-hidden bg-velmora-taupe/10">
          <img
            id="about-story-title"
            data-strk-img-id="about-hero-velmora"
            data-strk-img={`[about-story-title] [about-section-desc]`}
            data-strk-img-ratio="16x9"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora jewelry craftsmanship"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="space-y-6 leading-relaxed text-velmora-taupe-light">
          <p id="about-section-desc">
            Velmora Fine Jewelry was founded on a simple belief: that luxury
            should feel effortless. We create demi-fine jewelry for the modern
            woman — pieces that transition seamlessly from morning meetings to
            evening occasions, designed to be worn, loved, and treasured.
          </p>
          <p>
            Every piece in our collection is thoughtfully crafted using 18K gold
            plating, premium brass, and hypoallergenic materials. Our designs
            balance classic elegance with a contemporary edge, offering
            timeless essentials at an accessible price point.
          </p>
          <p>
            Whether you are treating yourself or searching for the perfect gift,
            Velmora is here to help you celebrate life&apos;s quiet luxuries.
          </p>
        </div>

        <div className="mt-16 grid gap-8 border-t border-velmora-taupe/30 pt-12 md:grid-cols-3">
          {[
            { title: '18K Gold Plated', desc: 'Long-lasting warmth and shine in every piece.' },
            { title: 'Hypoallergenic', desc: 'Designed for sensitive skin and everyday wear.' },
            { title: 'Sustainable Packaging', desc: 'Recyclable boxes and cotton pouches.' },
          ].map((item) => (
            <div key={item.title} className="text-center">
              <h3 className="font-serif text-xl tracking-wide text-velmora-ivory">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-velmora-taupe-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
