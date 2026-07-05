const HomeReels = () => {
    const reels = [
      { id: 'reel-1', caption: 'Everyday elegance', query: 'woman wearing gold earrings lifestyle editorial' },
      { id: 'reel-2', caption: 'Stack your style', query: 'layered gold necklaces close up aesthetic' },
      { id: 'reel-3', caption: 'The wedding edit', query: 'gold jewelry set luxury lifestyle' },
      { id: 'reel-4', caption: 'Golden hour glow', query: 'woman neck jewelry warm lighting golden hour' },
      { id: 'reel-5', caption: 'Details matter', query: 'gold rings hands aesthetic jewelry editorial' },
      { id: 'reel-6', caption: 'Quiet luxury', query: 'minimalist gold jewelry lifestyle editorial' }
    ];
  
    return (
      <section className="py-24 bg-velmora-stone border-y border-velmora-black/5 overflow-hidden">
        <div className="px-6 md:px-12 mb-12">
            <h2 className="text-2xl md:text-3xl font-serif text-center uppercase tracking-widest">Worn by You</h2>
        </div>
        
        <div className="flex gap-4 overflow-x-auto px-6 md:px-12 thin-scrollbar pb-8">
          {reels.map((reel) => (
            <div key={reel.id} className="min-w-[280px] md:min-w-[320px] aspect-[9/16] relative bg-velmora-cream overflow-hidden group cursor-pointer">
              <img
                data-strk-img-id={reel.id}
                data-strk-img={reel.query}
                data-strk-img-ratio="9x16"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
                alt={reel.caption}
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <p className="text-white font-serif text-xl italic tracking-wide">{reel.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default HomeReels;