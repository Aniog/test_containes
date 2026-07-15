import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="bg-cream pt-24 md:pt-28 pb-20 md:pb-28">
      <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
        <h1 className="font-serif text-3xl md:text-5xl tracking-wide text-espresso">Our Story</h1>
        <div className="w-12 h-px bg-gold mx-auto mt-4 mb-10" />

        <p className="font-serif text-xl md:text-2xl text-espresso leading-relaxed italic">
          Born from a belief that fine jewelry should be accessible, Velmora crafts each piece with the same care and attention as the world's top maisons.
        </p>

        <div className="mt-10 space-y-6 font-sans text-warm-500 leading-relaxed text-base md:text-lg text-left">
          <p>
            Velmora was founded with a simple vision: to create demi-fine jewelry that doesn't compromise on quality, design, or ethics. Every piece in our collection is 18K gold-plated, hypoallergenic, and tarnish-resistant — designed to be worn and loved every day.
          </p>
          <p>
            Our design studio draws inspiration from architecture, nature, and the quiet elegance of everyday moments. We believe that the jewelry you reach for each morning should feel as special as the pieces you save for occasion — because true luxury is lived in.
          </p>
          <p>
            From our artisans to your jewelry box, each Velmora piece undergoes rigorous quality checks. We use only premium materials and sustainable practices, because beautiful jewelry should never come at a cost to our planet.
          </p>
        </div>

        <Link
          to="/shop"
          className="inline-block mt-10 bg-gold hover:bg-gold-hover text-white font-sans text-xs tracking-product uppercase px-10 py-4 transition-colors"
        >
          Explore the Collection
        </Link>
      </div>
    </div>
  )
}
