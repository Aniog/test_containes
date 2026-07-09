import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section className="bg-velvet-900">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Image */}
        <div className="aspect-[4/5] md:aspect-auto bg-velvet-800 flex items-center justify-center">
          <span className="text-velvet-500 text-sm tracking-wider">CRAFT IMAGERY</span>
        </div>

        {/* Text */}
        <div className="flex items-center px-6 py-16 md:px-16 lg:px-24">
          <div className="max-w-md">
            <p className="text-xs tracking-super-wide uppercase text-gold-400 mb-6 font-medium">Our Story</p>
            <h2 className="heading-lg text-velvet-50 mb-6">
              The Art of Demi-Fine
            </h2>
            <div className="space-y-4 body-text">
              <p>
                Velmora was born from the belief that fine jewelry should feel personal — not precious.
                Each piece is designed in our London atelier and crafted in 18K gold plate over brass,
                balancing enduring quality with an accessible price point.
              </p>
              <p>
                We work with small-batch artisans who share our obsession with detail. From the weight
                of a huggie to the catch of a clasp, every element is considered.
              </p>
              <p>
                This is jewelry made to be worn, layered, loved, and passed on — not locked away.
              </p>
            </div>
            <Link to="/shop" className="btn-outline inline-flex mt-8">
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}