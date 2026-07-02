import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center">
      {/* Background */}
      <div className="absolute inset-0 bg-velvet-950">
        <div
          className="absolute inset-0 opacity-70"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(212, 152, 47, 0.15) 0%, transparent 70%), linear-gradient(180deg, rgba(26, 22, 20, 0.4) 0%, rgba(26, 22, 20, 0.6) 50%, rgba(26, 22, 20, 0.9) 100%)',
          }}
        />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1600&q=80)',
            backgroundPosition: 'center 30%',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-xl">
          <p className="text-gold-400 text-[11px] tracking-widest-plus uppercase mb-6 font-medium">
            Demi-Fine Jewelry
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1.05] font-medium mb-6">
            Crafted to be<br />Treasured
          </h1>
          <p className="text-velvet-200 text-base md:text-lg max-w-md leading-relaxed mb-10">
            18K gold-plated pieces designed for everyday elegance. For the woman who invests in herself.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2.5 bg-gold-500 text-white px-8 py-3.5 text-xs tracking-widest-plus uppercase font-medium hover:bg-gold-400 transition-all duration-300"
          >
            Shop the Collection
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  )
}