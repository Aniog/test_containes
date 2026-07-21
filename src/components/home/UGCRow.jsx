import React from 'react'
import { Play } from 'lucide-react'
import { ugcItems } from '@/data/products'

const UGCRow = () => {
  return (
    <section className="py-16 md:py-24 bg-[#FAFAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-2xl md:text-3xl text-[#1C1917] mb-3">As Seen On</h2>
          <p className="text-sm text-[#78716C]">Follow us @velmorajewelry</p>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
          {ugcItems.map(item => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[160px] sm:w-[200px] group cursor-pointer"
            >
              <div className="relative aspect-[9/16] bg-[#E7E5E4] rounded-xl overflow-hidden mb-3">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white text-xs font-medium line-clamp-2">{item.caption}</p>
                </div>
              </div>
              <p className="text-xs text-[#78716C] text-center">{item.user}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UGCRow
