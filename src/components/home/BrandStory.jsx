import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight } from 'lucide-react'

export default function BrandStory() {
  const sectionRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, sectionRef.current)
  }, [])

  return (
    <section className="section-pad py-20 md:py-28 max-w-[1440px] mx-auto" ref={sectionRef}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {/* Image */}
        <div className="aspect-[4/5] md:aspect-auto bg-velvet-100 overflow-hidden">
          <img
            alt="Velmora craftsmanship"
            data-strk-img-id="brand-story-img"
            data-strk-img={`[brand-story-text] gold jewelry craftsmanship`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center px-6 md:px-14 lg:px-20 py-12 md:py-0 bg-cream-50">
          <p className="text-xs font-sans tracking-widest uppercase text-warm-600 mb-4">Our Story</p>
          <h2 className="font-serif text-3xl md:text-4xl text-velvet-800 leading-snug mb-6">
            Jewelry meant to be <span className="italic">lived in</span>
          </h2>
          <p
            id="brand-story-text"
            className="text-velvet-600 font-sans text-sm leading-relaxed mb-8 max-w-md"
          >
            Velmora was born from the belief that fine jewelry shouldn't be reserved for special occasions. 
            Each piece is designed in our London studio and crafted with 18K gold plating over brass or sterling silver — 
            luxurious materials at a considered price. No markups, no middlemen, just exceptional jewelry delivered to your door. 
            These are pieces to wear every day, layer, stack, and pass down.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-xs font-sans font-medium tracking-wider uppercase text-velvet-800 border-b border-velvet-800/30 pb-1 hover:border-velvet-800 transition-colors"
          >
            Read More <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
