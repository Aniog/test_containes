export default function UGCReels() {
  const reels = [
    { id: 1, image: 'https://images.unsplash.com/photo-1535632787350-4e68e4c70bb2?q=80&w=1968&auto=format&fit=crop', caption: 'Everyday elegance.' },
    { id: 2, image: 'https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?q=80&w=1972&auto=format&fit=crop', caption: 'The perfect stack.' },
    { id: 3, image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=1974&auto=format&fit=crop', caption: 'Golden details.' },
    { id: 4, image: 'https://images.unsplash.com/photo-1596822830873-195b00c6d59b?q=80&w=1964&auto=format&fit=crop', caption: 'Effortlessly chic.' },
    { id: 5, image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1974&auto=format&fit=crop', caption: 'Layered perfection.' },
  ];

  return (
    <section className="py-24 bg-background overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6 mb-12 flex justify-between items-end">
        <h2 className="font-heading text-3xl md:text-4xl tracking-wide uppercase">As Seen On You</h2>
        <a href="#" className="hidden md:inline-block border-b border-foreground pb-1 text-sm tracking-widest uppercase hover:text-accent hover:border-accent transition-colors">
          @velmorajewelry
        </a>
      </div>
      
      <div className="flex gap-4 px-4 md:px-6 overflow-x-auto pb-8 snap-x hide-scrollbar scroll-smooth">
        {reels.map((reel) => (
          <div key={reel.id} className="relative min-w-[280px] sm:min-w-[320px] aspect-[9/16] shrink-0 snap-center group cursor-pointer">
            <img 
              src={reel.image} 
              alt="UGC" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <p className="font-heading text-white text-xl tracking-wide font-medium italic">{reel.caption}</p>
            </div>
            {/* Instagram Icon simulation */}
            <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm rounded-full p-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round" className="text-white"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}