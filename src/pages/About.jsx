import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="min-h-screen bg-[#F6F3EF] pb-20 pt-28 text-[#1A1512]">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-[#C49A6C]">
          About Velmora
        </p>
        <h1 className="font-serif text-4xl md:text-5xl">Our Story</h1>
        <p className="mt-6 text-lg leading-relaxed text-[#6B6259]">
          Velmora Fine Jewelry was founded on the belief that luxury should feel personal, not performative. We create demi-fine pieces for women who appreciate quiet elegance — jewelry that complements rather than competes.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-[#6B6259]">
          Every collection is designed in-house, crafted with 18k gold plating, and finished with care. From our signature huggies to our most intricate necklaces, each piece is made to be worn, loved, and treasured.
        </p>
        <Link
          to="/shop"
          className="mt-10 inline-block border border-[#1A1512] px-8 py-3 text-xs font-medium uppercase tracking-[0.15em] transition-colors hover:bg-[#1A1512] hover:text-[#F6F3EF]"
        >
          Explore the Collection
        </Link>
      </div>
    </div>
  )
}
