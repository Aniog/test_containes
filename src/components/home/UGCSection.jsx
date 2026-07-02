import React from 'react';
import { Instagram } from 'lucide-react';

const UGCSection = () => {
  const posts = [
    { id: 1, caption: 'Everyday shine with the Aura cuffs' },
    { id: 2, caption: 'Golden hour in Golden Sphere' },
    { id: 3, caption: 'Layered perfection' },
    { id: 4, caption: 'Timeless heirlooms' },
    { id: 5, caption: 'Velmora Vibe' },
    { id: 6, caption: 'Effortless elegance' },
  ];

  return (
    <section className="py-24 bg-[#F4F1ED]">
      <div className="container mx-auto px-4 mb-12 flex items-center justify-between">
        <div>
          <h2 className="text-3xl md:text-4xl font-serif mb-2 text-foreground">As Seen on You</h2>
          <p className="text-sm text-muted-foreground uppercase-spaced tracking-widest">Tag #VelmoraFine to be featured</p>
        </div>
        <a href="#" className="flex items-center gap-2 hover:text-accent transition-colors uppercase-spaced text-[10px] font-bold">
          <Instagram className="w-4 h-4" />
          Follow Us
        </a>
      </div>

      <div className="flex overflow-x-auto pb-4 gap-4 px-4 no-scrollbar">
        {posts.map((post) => (
          <div key={post.id} className="min-w-[200px] md:min-w-[280px] aspect-[9/16] relative overflow-hidden group">
            <img
              data-strk-img-id={`ugc-img-${post.id}`}
              data-strk-img={`[ugc-caption-${post.id}] woman wearing jewelry jewelry instagram reel style`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              className="w-full h-full object-cover grayscale-[0.2] transition-luxury group-hover:scale-105 group-hover:grayscale-0"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
              alt="UGC"
            />
            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
              <p id={`ugc-caption-${post.id}`} className="text-white font-serif text-lg leading-snug">
                {post.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCSection;
