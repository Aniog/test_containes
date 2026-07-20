import { ugcReels } from '@/lib/data'

export default function UgcReels() {
  return (
    <section className="py-16 lg:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl lg:text-4xl text-primary">Worn by You</h2>
          <p className="mt-3 text-muted-foreground text-sm">Real moments, real gold.</p>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4 lg:px-8 pb-4" style={{ minWidth: 'max-content' }}>
          {ugcReels.map(reel => (
            <div key={reel.id} className="relative w-44 md:w-52 flex-shrink-0">
              <div className="aspect-[9/16] bg-muted overflow-hidden relative">
                <img
                  data-strk-img-id={reel.imgId}
                  data-strk-img={`[${reel.captionId}] gold jewelry worn on model`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={reel.caption}
                  className="w-full h-full object-cover"
                />
                {/* Caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/70 to-transparent p-4 pt-12">
                  <p id={reel.captionId} className="font-serif text-sm text-white italic">
                    {reel.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
