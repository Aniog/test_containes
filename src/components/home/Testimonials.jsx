import { Star } from 'lucide-react'
import SectionHeading from '@/components/common/SectionHeading'
import { testimonials } from '@/data/products'

const Testimonials = () => {
  return (
    <section className="bg-velmora-espresso py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Loved by our community"
          title="A refined favorite for gifting and self-purchase"
          description="Short notes from women who wear Velmora on repeat."
          theme="dark"
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="rounded-[30px] border border-velmora-ivory/12 bg-white/5 p-7 text-velmora-ivory shadow-[0_20px_50px_rgba(0,0,0,0.14)] backdrop-blur-sm"
            >
              <div className="flex items-center gap-1 text-velmora-champagne">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={`${testimonial.id}-${index}`} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-6 text-base leading-8 text-velmora-ivory/86">
                “{testimonial.quote}”
              </p>
              <p className="mt-6 text-xs uppercase tracking-[0.34em] text-velmora-ivory/60">
                {testimonial.author}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
