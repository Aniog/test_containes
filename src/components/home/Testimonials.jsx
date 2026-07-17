import { Star } from 'lucide-react'
const reviews = [
  { name: 'Maya R.', text: 'The huggies look far more expensive than they are. I wear them almost every day.' },
  { name: 'Elena T.', text: 'Beautiful packaging and a delicate glow. It felt like a perfect self-gift.' },
  { name: 'Sofia L.', text: 'The necklace catches light softly without feeling too sparkly. So elegant.' },
]
export default function Testimonials() {
  return <section className="bg-velmora-ivory py-16 text-velmora-ink md:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mb-10 text-center"><p className="text-xs font-bold uppercase tracking-[0.32em] text-velmora-gold">Notes from customers</p><h2 className="mt-3 font-serif text-5xl text-velmora-ink md:text-6xl">Quietly adored</h2></div><div className="grid gap-5 md:grid-cols-3">{reviews.map((review) => <article key={review.name} className="border border-velmora-line bg-velmora-parchment p-7 text-velmora-ink shadow-soft"><div className="mb-5 flex gap-1 text-velmora-gold" aria-label="5 star rating">{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-velmora-gold" />)}</div><p className="font-serif text-2xl leading-snug text-velmora-ink">“{review.text}”</p><p className="mt-6 text-xs font-bold uppercase tracking-[0.26em] text-velmora-muted">{review.name}</p></article>)}</div></div></section>
}
