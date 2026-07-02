import React from 'react';

const ugcItems = [
  { id: 1, caption: "Effortless stacking.", img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=600&h=1067" },
  { id: 2, caption: "Golden hour glow.", img: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80&w=600&h=1067" },
  { id: 3, caption: "Everyday essentials.", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=600&h=1067" },
  { id: 4, caption: "Dressed up or down.", img: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&q=80&w=600&h=1067" },
  { id: 5, caption: "A touch of shine.", img: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80&w=600&h=1067" }
];

export function UGCRow() {
  return (
    <section className="py-16 bg-[#faf9f6]">
      <div className="container mx-auto px-4 md:px-8 mb-8 flex justify-between items-end">
        <h2 className="text-2xl md:text-3xl font-serif">As Seen On You</h2>
        <a href="#" className="hidden md:block uppercase tracking-widest text-sm hover:text-primary transition-colors border-b border-foreground">Follow @Velmora</a>
      </div>
      
      <div className="overflow-x-auto no-scrollbar pl-4 md:pl-8 pr-4">
        <div className="flex gap-4 min-w-max pb-8">
          {ugcItems.map((item) => (
            <div key={item.id} className="relative w-[240px] md:w-[280px] aspect-[9/16] rounded-xl overflow-hidden group cursor-pointer shadow-sm">
              <img 
                src={item.img} 
                alt={item.caption} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-serif text-lg leading-snug">"{item.caption}"</p>
                <div className="mt-4 flex items-center gap-2 text-white/80 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <span className="text-xs uppercase tracking-wider font-medium">Shop Look</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
