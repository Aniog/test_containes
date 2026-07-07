import React from 'react';
import { ugcPosts } from '@/data/products';

export default function UgcStrip() {
  return (
    <section className="py-16 md:py-24 bg-bronze-50">
      <div className="text-center mb-10 md:mb-14">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-bronze-900 tracking-wide mb-3">
          Worn by You
        </h2>
        <p className="text-sm text-taupe-500 tracking-[0.15em] uppercase">
          Tag @velmora to be featured
        </p>
      </div>

      <div className="flex gap-4 overflow-x-auto px-4 md:px-10 lg:px-16 pb-4 snap-x snap-mandatory scrollbar-hide">
        {ugcPosts.map((post) => (
          <div
            key={post.id}
            className="flex-shrink-0 w-[160px] md:w-[200px] snap-start"
          >
            <div className="aspect-[9/16] bg-bronze-200 overflow-hidden relative group cursor-pointer">
              <div className="absolute inset-0 flex items-center justify-center text-bronze-400">
                <span className="text-[10px] tracking-[0.2em] uppercase text-center px-2">
                  {post.caption}
                </span>
              </div>
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-bronze-950/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Tag */}
              <span className="absolute bottom-3 left-3 text-[10px] tracking-wider text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {post.tag}
              </span>
            </div>
            <p className="mt-2 text-[11px] tracking-wider text-bronze-700 font-serif italic text-center">
              {post.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
