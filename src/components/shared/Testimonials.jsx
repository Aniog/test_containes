import { Star } from 'lucide-react'

export default function Testimonials({ items }) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {items.map((item) => (
        <article
          key={item.name}
          className="rounded-[2rem] border border-velmora-line bg-velmora-panel p-7 shadow-card"
        >
          <div className="flex items-center gap-1 text-velmora-gold-deep">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <p className="mt-5 text-base leading-8 text-velmora-stone">“{item.quote}”</p>
          <p className="mt-6 text-xs uppercase tracking-[0.28em] text-velmora-cocoa">
            {item.name}
          </p>
        </article>
      ))}
    </div>
  )
}
