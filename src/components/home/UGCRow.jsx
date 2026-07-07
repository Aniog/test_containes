import React from 'react'

const REELS = [
  { id: 'reel-1', title: "Everyday Ear Stack", query: "close up ear wearing multiple small gold huggie earrings woman" },
  { id: 'reel-2', title: "Layering Lesson", query: "woman wearing layered gold delicate necklaces editorial" },
  { id: 'reel-3', title: "Golden Hour Glow", query: "sunlight golden hour woman wearing gold jewelry" },
  { id: 'reel-4', title: "The Perfect Gift", query: "hands opening small jewelry box with gold earrings inside" },
  { id: 'reel-5', title: "Date Night Details", query: "elegant woman night out wearing statement gold earrings" },
  { id: 'reel-6', title: "Coffee Run Casual", query: "casual outfit woman wearing simple gold jewelry holding coffee" }
]

export const UGCRow = () => {
  return (
    <section className="py-24 bg-background overflow-hidden border-t border-border/20">
      <div className="container mx-auto px-4 mb-10 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-foreground">As Seen On You</h2>
        <p className="font-sans text-sm text-muted-foreground mt-3">Tag @velmora to be featured</p>
      </div>

      <div className="w-full flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 px-4 gap-4 md:gap-6">
        {/* We add some padding at the start so the first item doesn't touch the edge perfectly, feels more like an app */}
        <div className="shrink-0 w-4 md:w-8" />
        
        {REELS.map((reel) => (
          <div 
            key={reel.id} 
            className="shrink-0 w-[240px] md:w-[280px] aspect-[9/16] relative snap-center group cursor-pointer overflow-hidden rounded-md bg-secondary"
          >
            <img 
              data-strk-img-id={reel.id}
              data-strk-img={reel.query}
              data-strk-img-ratio="9x16"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={reel.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
            
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="font-serif text-white text-lg tracking-wide shadow-sm">
                {reel.title}
              </h3>
              <p className="font-sans text-white/80 text-xs mt-1 underline underline-offset-4 decoration-white/50 hover:decoration-white transition-all w-max inline-block">
                Shop the look
              </p>
            </div>
            
            {/* Insta-style minimal play icon hint top right */}
             <div className="absolute top-4 right-4 bg-black/20 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            </div>
          </div>
        ))}
        
        <div className="shrink-0 w-4 md:w-8" />
      </div>
    </section>
  )
}