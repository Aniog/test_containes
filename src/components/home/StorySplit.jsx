import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { ProductImage } from "@/lib/imagery"

export function StorySplit() {
  return (
    <section className="bg-sand">
      <div className="max-w-editorial mx-auto grid grid-cols-1 md:grid-cols-2">
        <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[600px] order-1 md:order-1">
          <ProductImage id="editorial" name="Our Story" className="w-full h-full" />
        </div>
        <div className="flex items-center order-2 md:order-2 px-6 md:px-14 lg:px-20 py-16 md:py-24">
          <div className="max-w-md flex flex-col gap-6">
            <span className="eyebrow text-gold-300">Our Story</span>
            <h2 className="editorial-heading text-4xl md:text-5xl lg:text-6xl">
              Heirlooms, made for now.
            </h2>
            <p className="text-cocoa-100 leading-relaxed">
              Velmora began at a kitchen table in Lisbon — a small sketchbook, a single
              spool of gold wire, and the belief that fine jewelry shouldn't be reserved
              for special occasions. Today, every piece is designed in our studio and
              crafted in small batches by artisans we've known for years.
            </p>
            <p className="text-cocoa-100 leading-relaxed">
              We use 18K gold-plated brass and hand-set crystals because we want you
              to wear what you love every day — not save it for someday.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 eyebrow text-cocoa hover:text-gold-300 transition-colors mt-2"
            >
              <span className="border-b border-cocoa pb-0.5 hover:border-gold-300 transition-colors">
                Read Our Story
              </span>
              <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
