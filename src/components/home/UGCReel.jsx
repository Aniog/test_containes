import React from 'react'

const UGCReel = () => {
  const reelItems = [
    { id: 1, caption: "Summer Glow", img: "jewelry on sunlit model" },
    { id: 2, caption: "Everyday Staple", img: "gold huggie earrings on model close up" },
    { id: 3, caption: "The Gift Set", img: "jewelry box opening" },
    { id: 4, caption: "Stacking Goals", img: "layered gold necklaces on neck" },
    { id: 5, caption: "Evening Elegance", img: "jewelry on model wearing black dress" },
    { id: 6, caption: "Morning Ritual", img: "hands touching jewelry" },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-end mb-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif">As Seen on You</h2>
            <p className="text-[10px] uppercase tracking-[0.4em] opacity-40">Tag @velmora to be featured</p>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Reel */}
      <div className="w-full overflow-x-auto no-scrollbar pb-10">
        <div className="flex space-x-4 lg:space-x-6 px-6 lg:px-12 min-w-max">
          {reelItems.map((item) => (
            <div key={item.id} className="relative w-[280px] aspect-[9/16] overflow-hidden group">
              <img
                data-strk-img-id={`ugc-reel-${item.id}`}
                data-strk-img={`${item.img} lifestyle aesthetic mobile shot`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
                alt="Social feature"
                className="w-full h-full object-cover grayscale-[0.2] transition-transform duration-[2s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute bottom-10 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0">
                <p className="text-white text-xl font-serif italic text-center">"{item.caption}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UGCReel
