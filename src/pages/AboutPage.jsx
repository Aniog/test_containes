import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <div className="bg-parchment min-h-screen">
      <div className="container-narrow pt-28 pb-16">
        <h1 className="font-serif text-3xl md:text-4xl text-stone-900 mb-6">About Velmora</h1>
        <div className="max-w-3xl space-y-6 text-stone-600 leading-relaxed">
          <p>
            Velmora Fine Jewelry was founded with a simple belief: beautiful jewelry should be accessible, 
            personal, and made to last. We design demi-fine pieces that feel luxurious without the luxury price tag.
          </p>
          <p>
            Every Velmora piece is designed in our London studio and crafted using 18K gold-plated materials 
            and ethically sourced crystals. We work with skilled artisans who share our commitment to quality 
            and sustainability.
          </p>
          <p>
            Our name comes from the Latin "velum" (veil) and "mora" (pause) — a reminder to slow down 
            and appreciate the beauty in everyday moments.
          </p>
          <div className="pt-8">
            <Link to="/shop" className="btn-primary">Shop the Collection</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
