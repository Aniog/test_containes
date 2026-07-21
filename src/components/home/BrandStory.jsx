import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import useStockImages from '@/lib/useStockImages'
import StockImage from '@/components/ui/StockImage'

export default function BrandStory() {
  const ref = useRef(null)
  useStockImages(ref, [])

  return (
    <section ref={ref} className="bg-cream-2 border-y border-line">
      <div className="container-x py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          {/* Image left */}
          <div className="md:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden bg-espresso">
              <StockImage
                imgId="brand-story-img"
                query="[brand-story-title] [brand-story-body] woman putting on gold necklace at vanity warm light editorial"
                ratio="4x5"
                width={900}
                alt="A woman putting on a Velmora gold necklace"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <p className="mt-4 eyebrow">Atelier · Lisbon, Portugal</p>
          </div>

          {/* Text right */}
          <div className="md:col-span-6">
            <p className="eyebrow mb-4">Our Story</p>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso leading-tight"
              style={{ fontWeight: 400 }}
            >
              Quietly made, <span className="italic">gently worn.</span>
            </h2>
            <p
              id="brand-story-body"
              className="mt-6 text-base md:text-lg text-ink/80 leading-relaxed font-light max-w-lg"
            >
              Velmora began at a kitchen table in Lisbon with a small brass press,
              a single sheet of gold, and a question: <em>why does everyday jewelry
              have to feel disposable?</em> Each piece is hand-finished by a small
              team of artisans in recycled brass, then plated in 18K gold by a
              family-run workshop two streets from the sea.
            </p>
            <p className="mt-4 text-base text-ink/70 leading-relaxed font-light max-w-lg">
              We design for the moments in between — coffee runs, first dates,
              quiet Sundays. The pieces that go on in the morning and only come
              off at night.
            </p>

            <div className="mt-9">
              <Link
                to="/about"
                className="inline-flex items-center gap-3 text-xs uppercase tracking-widest-2 text-espresso group"
              >
                <span className="link-underline">Read our story</span>
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={1.5}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
