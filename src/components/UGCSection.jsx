import React from 'react';
import { ugcPosts } from '../data/products';

export default function UGCSection() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-light mb-4">#VelmoraStyle</h2>
          <p className="text-[#9A8F87] text-sm tracking-wide">Follow us on Instagram</p>
        </div>

        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4">
          {ugcPosts.map((post) => (
            <div
              key={post.id}
              className="flex-shrink-0 w-64 h-96 relative group cursor-pointer"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end p-6">
                <p className="text-white text-sm italic opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {post.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
