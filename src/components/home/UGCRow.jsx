import React from 'react'
import { Play } from 'lucide-react'

export default function UGCRow() {
  const items = [
    { id: 1, user: '@sarah.style', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80', caption: 'Everyday luxury ✨' },
    { id: 2, user: '@emily.jewelry', image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80', caption: 'Layering season' },
    { id: 3, user: '@jessica.gold', image: 'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=400&q=80', caption: 'New favorite' },
    { id: 4, user: '@anna.wears', image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&q=80', caption: 'Gift ready' },
    { id: 5, user: '@lisa.gems', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80', caption: 'Date night' },
  ]

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl md:text-3xl text-center mb-8 tracking-wide">As Seen On</h2>
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {items.map((item) => (
            <div key={item.id} className="flex-shrink-0 w-40 md:w-48 relative group cursor-pointer">
              <div className="aspect-[9/16] bg-gray-100 rounded-lg overflow-hidden relative">
                <img src={item.image} alt={item.caption} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Play className="w-4 h-4 text-white fill-white" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-white text-xs font-medium">{item.user}</p>
                  <p className="text-white/80 text-xs mt-1 line-clamp-2">{item.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
