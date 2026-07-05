import { Link } from "react-router-dom"

export default function About() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="max-w-3xl">
        <h1 className="section-title">Our Story</h1>
        <p className="mt-6 text-brand-muted leading-relaxed">
          Velmora Fine Jewelry was founded with a clear purpose: to create jewelry that feels both luxurious and livable. We believe the best pieces are the ones you reach for every day — not the ones you save for special occasions.
        </p>
        <p className="mt-4 text-brand-muted leading-relaxed">
          Our designs draw inspiration from quiet luxury and modern heirlooms. Each piece is crafted in 18K gold-plated brass, chosen for its warmth, durability, and wearability. We work with small ateliers that share our commitment to quality and ethical sourcing.
        </p>
        <p className="mt-4 text-brand-muted leading-relaxed">
          From our studio to your jewelry box, we obsess over the details so you can enjoy the moment.
        </p>
        <Link to="/shop" className="btn-primary mt-8 inline-flex">Shop the Collection</Link>
      </div>
    </section>
  )
}
