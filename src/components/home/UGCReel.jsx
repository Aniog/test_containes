import { useEffect, useRef } from 'react'
import { Heart } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const ugcItems = [
  { id: 'ugc-1', caption: 'My everyday stack', handle: '@sofiamartin', likes: '2.4k' },
  { id: 'ugc-2', caption: 'Date night ready', handle: '@emmawilson', likes: '1.8k' },
  { id: 'ugc-3', caption: 'The perfect gift', handle: '@clairedumont', likes: '3.1k' },
  { id: 'ugc-4', caption: 'Layering goals', handle: '@isabellachen', likes: '2.7k' },
  { id: 'ugc-5', caption: 'Brunch & gold', handle: '@natalierosse', likes: '1.5k' },
]

export default function UGCReel() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="py-20 md:py-24 bg-linen overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-manrope text-[10px] tracking-widest3 text-gold mb-3">AS WORN</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-obsidian">The Velmora Edit</h2>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 font-manrope text-xs tracking-widest text-muted hover:text-gold transition-colors duration-300">
            @VELMORA
          </a>
        </div>
      </div>

      <div ref={containerRef} className="flex gap-4 overflow-x-auto pb-4 px-4 md:px-8 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {ugcItems.map(item => (
          <div key={item.id} className="flex-shrink-0 w-48 md:w-56 group cursor-pointer">
            <div className="relative overflow-hidden rounded-sm" style={{ aspectRatio: '9/16' }}>
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                data-strk-img-id={`${item.id}-img`}
                data-strk-img={`[${item.id}-caption] gold jewelry worn`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p id={`${item.id}-caption`} className="font-serif text-sm italic text-ivory leading-snug">{item.caption}</p>
                <p className="font-manrope text-[10px] text-ivory/60 mt-1">{item.handle}</p>
              </div>
              {/* Like */}
              <div className="absolute top-3 right-3 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Heart className="w-3.5 h-3.5 text-ivory fill-ivory" strokeWidth={0} />
                <span className="font-manrope text-[10px] text-ivory">{item.likes}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
