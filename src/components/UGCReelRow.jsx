import React from 'react'

const ugcItems = [
  { id: 1, image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&h=711&fit=crop', caption: 'Everyday elegance ✨' },
  { id: 2, image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=711&fit=crop', caption: 'Stacking my favorites' },
  { id: 3, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=711&fit=crop', caption: 'Golden hour glow' },
  { id: 4, image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&h=711&fit=crop', caption: 'New favorite piece' },
  { id: 5, image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=711&fit=crop', caption: 'Gifted myself today 🎁' },
]

export default function UGCReelRow() {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-4">#VelmoraMoments</h2>
        <p className="font-sans text-gray-600 text-center">Tag us @velmora for a chance to be featured</p>
        <div className="w-16 h-px bg-amber-600 mx-auto mt-6" />
      </div>

      {/* Horizontal scroll container */}
      <div className="flex gap-4 overflow-x-auto px-4 pb-4 scrollbar-hide" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
        {ugcItems.map((item) => (
          <div 
            key={item.id} 
            className="flex-shrink-0 w-64 md:w-72 relative group cursor-pointer"
            style={{aspectRatio: '9/16'}}
          >
            <img 
              src={item.image} 
              alt="UGC jewelry"
              className="w-full h-full object-cover"
            />
            
            {/* Caption overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                          flex items-end p-4">
              <p className="text-white font-sans text-sm italic">
                "{item.caption}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
