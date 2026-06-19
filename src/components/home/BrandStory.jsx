import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="aspect-[4/5] bg-[#F0E9DF] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=900&q=80"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-md">
            <p className="font-sans text-[11px] tracking-[0.12em] uppercase text-[#C69C6D] mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2D2A24] leading-tight mb-6">
              Jewelry that feels<br />like it was always yours
            </h2>
            <div className="w-12 h-[1px] bg-[#C69C6D] mb-6" />
            <p className="font-sans text-sm md:text-base text-[#8C867C] leading-relaxed mb-6">
              Velmora was born from a simple belief: great jewelry shouldn't cost a fortune or sacrifice quality. 
              We source ethically, plate in multiple layers of 18K gold, and design every piece to last — 
              because the things you treasure most deserve to be worn, not kept in a box.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-sans text-sm tracking-[0.08em] uppercase text-[#C69C6D] hover:text-[#A67C4E] transition-colors group"
            >
              Read More
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}