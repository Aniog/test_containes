import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image side */}
          <div className="aspect-[4/5] bg-velvet-100 rounded-sm overflow-hidden relative">
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(135deg, #d9c2a8 0%, #bfa384 50%, #a78b6c 100%)' }}
            />
            <div className="absolute inset-0 bg-velvet-950/10" />
          </div>

          {/* Text side */}
          <div className="max-w-md">
            <p className="font-sans text-xs uppercase tracking-[0.25em] text-gold-600 mb-4">
              Our Story
            </p>
            <h2 className="section-title mb-6 leading-tight">
              Where Craft<br />Meets Everyday<br />Elegance
            </h2>
            <p className="text-velvet-600 text-sm leading-relaxed mb-4">
              Velmora was born from a simple belief: that every woman deserves jewelry that feels luxurious without the luxury markup. We work directly with artisan workshops to craft pieces in 18K gold plate — designed to be worn, loved, and treasured for years.
            </p>
            <p className="text-velvet-600 text-sm leading-relaxed mb-8">
              Each piece is hand-finished, hypoallergenic, and created in small batches. No middlemen, no markups — just beautiful demi-fine jewelry, delivered to your door.
            </p>
            <Link to="#" className="btn-outline text-xs">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}