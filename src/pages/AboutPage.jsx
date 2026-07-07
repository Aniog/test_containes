import { Link } from 'react-router-dom'
import Button from '@/components/ui/Button'

export default function AboutPage() {
  return (
    <div className="bg-warm-white pb-20">
      <div className="border-b border-line bg-champagne/30 py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <p className="text-xs uppercase tracking-[0.25em] text-stone">About Velmora</p>
          <h1 className="mt-4 font-serif text-4xl text-ink md:text-6xl">
            Jewelry for Real Life
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-16 md:px-6">
        <p className="font-serif text-2xl leading-relaxed text-ink md:text-3xl">
          We believe luxury should feel personal, not precious. Velmora designs
          demi-fine pieces for the moments you want to remember — and the
          ordinary days worth elevating.
        </p>

        <div className="mt-12 space-y-6 leading-relaxed text-stone">
          <p>
            Every piece begins with a sketch and ends with careful finishing. We
            use 18k gold-plated brass, handset crystals, and hypoallergenic posts
            so our jewelry feels as good as it looks.
          </p>
          <p>
            Our collections are produced in small batches to reduce waste and
            maintain quality. From the first sample to the final polish, we
            prioritize craftsmanship you can see and feel.
          </p>
          <p>
            Whether you are treating yourself or searching for the perfect gift,
            Velmora is here to help you find something worth treasuring.
          </p>
        </div>

        <Button variant="primary" className="mt-10" asChild>
          <Link to="/shop">Shop the Collection</Link>
        </Button>
      </div>
    </div>
  )
}
