import React from 'react';
import { ugcContent } from '../../data/products';

export default function UGCReelRow() {
  return (
    <section className="bg-[#1A1A1A] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="font-serif text-3xl md:text-4xl text-white text-center mb-4">
          #VelmoraStyle
        </h2>
        <p className="text-center text-[#8A8580] text-sm tracking-wider uppercase">
          Follow us on Instagram
        </p>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="flex space-x-4 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-4 scrollbar-hide">
        {ugcContent.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-64 h-80 relative group cursor-pointer"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.caption}
              className="w-full h-full object-cover"
            />

            {/* Overlay with Caption */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end p-4">
              <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-light">
                {item.caption}
              </p>
            </div>
          </div>
        ))}

        {/* View All Card */}
        <div className="flex-shrink-0 w-64 h-80 bg-[#2D2D2D] flex items-center justify-center">
          <div className="text-center">
            <svg className="w-12 h-12 mx-auto text-[#C9A96E] mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919C8.333.014 8.741 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            <p className="text-white font-serif text-lg">@velmora</p>
            <p className="text-[#8A8580] text-sm mt-2">Follow for more</p>
          </div>
        </div>
      </div>
    </section>
  );
}
