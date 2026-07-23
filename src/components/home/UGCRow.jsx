import React from 'react';
import { ugcPosts } from '../../data/products';

const UGCRow = () => {
  return (
    <section className="py-16 md:py-20 bg-[#F5EDDA]/30">
      <div className="container-padding">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">As Worn By You</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light">The Velmora Edit</h2>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
          {ugcPosts.map((post) => (
            <div
              key={post.id}
              className="flex-shrink-0 w-48 md:w-56 snap-start"
            >
              <div className="relative aspect-[9/16] bg-[#E8E2D9] rounded-sm overflow-hidden mb-3">
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4CFC7] to-[#C4BFB7] flex items-center justify-center">
                  <span className="text-muted-foreground text-xs tracking-wider">UGC</span>
                </div>
                {/* Caption overlay */}
                <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white text-xs font-light">{post.caption}</p>
                  <p className="text-white/70 text-[10px] mt-1">{post.handle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGCRow;
