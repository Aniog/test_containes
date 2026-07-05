import { Star } from 'lucide-react'

const reviews = [
  { name: 'Maya L.', text: 'The huggies feel substantial but never heavy. They make every outfit look intentional.' },
  { name: 'Arielle K.', text: 'Beautiful packaging and the gold tone is so warm. It made a perfect birthday gift.' },
  { name: 'Nina R.', text: 'Quietly elegant, exactly what I wanted for everyday jewelry that still feels special.' },
]

export default function Testimonials() {
  return (
    <section className="bg-[#F7F1E8] px-5 py-20 text-[#17110D] md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#B9853B]">Kind words</p>
          <h2 className="mt-3 font-serif text-4xl text-[#17110D] md:text-5xl">Loved for gifting and keeping.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <figure key={review.name} className="border border-[#17110D]/10 bg-[#FBF8F2] p-7 text-[#17110D] shadow-[0_16px_45px_rgba(23,17,13,0.05)]">
              <div className="flex gap-1 text-[#B9853B]" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 font-serif text-2xl leading-9 text-[#17110D]">“{review.text}”</blockquote>
              <figcaption className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-[#8D7463]">{review.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
