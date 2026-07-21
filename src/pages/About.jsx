import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { CartDrawer } from '@/components/layout/CartDrawer'
import { Newsletter } from '@/components/layout/Newsletter'
import { ResponsiveImage } from '@/components/ui/ResponsiveImage'
import { useImageLoader } from '@/hooks/useImageLoader'

export default function About() {
  const containerRef = useImageLoader([])

  return (
    <div ref={containerRef} className="min-h-screen bg-cream">
      <Navbar />
      <CartDrawer />

      <main className="pt-16">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-24">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">About Velmora</p>
          <h1 className="mt-4 font-serif text-4xl tracking-wide text-espresso sm:text-5xl md:text-6xl">
            Jewelry for the Way You Live
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-taupe sm:text-lg">
            Founded on the idea that luxury should feel personal, Velmora creates demi-fine pieces for women who value craftsmanship, versatility, and quiet confidence.
          </p>
        </div>

        <div className="relative aspect-[16/9] w-full overflow-hidden bg-cream-dark md:aspect-[21/9]">
          <ResponsiveImage
            imgId="about-hero"
            query="gold jewelry flatlay editorial warm neutral background delicate necklace earrings"
            ratio="21x9"
            width={1600}
            alt="Velmora jewelry flatlay"
            className="h-full w-full object-cover"
          />
        </div>

        <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="font-serif text-2xl tracking-wide text-espresso sm:text-3xl">
                Thoughtfully Made
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-taupe sm:text-base">
                Each design begins with a sketch and a question: will this still feel beautiful in ten years? We use 18K gold plating over hypoallergenic brass, rhodium-protected sterling silver, and hand-set crystals chosen for their clarity and warmth.
              </p>
            </div>
            <div>
              <h2 className="font-serif text-2xl tracking-wide text-espresso sm:text-3xl">
                Made to be Worn
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-taupe sm:text-base">
                We design for real life — pieces that transition from desk to dinner, from jeans to celebrations. Our jewelry is water-resistant where possible, lightweight, and finished with details meant to be admired up close.
              </p>
            </div>
          </div>
        </section>

        <Newsletter compact />
      </main>
      <Footer />
    </div>
  )
}
