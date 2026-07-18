import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'

export default function About() {
  return (
    <div className="bg-paper pt-28">
      <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-24">
        <p className="text-xs uppercase tracking-[0.25em] text-gold">Our Story</p>
        <h1 className="mt-4 font-serif text-4xl md:text-6xl">Velmora Fine Jewelry</h1>
        <p className="mt-8 leading-relaxed text-stone">
          We believe that beautiful jewelry should feel effortless. Founded with a love for warm gold tones and wearable silhouettes, Velmora creates demi-fine pieces for the modern woman — designed for stacking, gifting, and treasuring for years.
        </p>
        <p className="mt-4 leading-relaxed text-stone">
          Every collection is shaped by a quiet-luxury ethos: refined materials, thoughtful details, and pricing that makes elegance accessible.
        </p>
        <Button variant="outline" className="mt-10" asChild>
          <Link to="/shop">Shop the Collection</Link>
        </Button>
      </div>
    </div>
  )
}
