import SectionHeading from '@/components/shared/SectionHeading'
import { testimonials } from '@/data/store'
import StarRating from '@/components/shared/StarRating'

function TestimonialsSection() {
  return (
    <section className="bg-stone-950 py-16 text-stone-50 sm:py-20">
      <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved for the finish, kept for the feeling"
          description="A few words from customers who wear Velmora often, gift it well, and come back for another piece."
          inverted
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((review) => (
            <article
              key={review.id}
              className="rounded-[2rem] border border-stone-800 bg-stone-900 p-7 shadow-xl shadow-black/10"
            >
              <StarRating value="5.0" reviews="verified" dark />
              <p className="mt-6 font-serif text-3xl leading-tight text-stone-50">
                “{review.quote}”
              </p>
              <p className="mt-6 text-xs uppercase tracking-[0.35em] text-stone-300">
                {review.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
