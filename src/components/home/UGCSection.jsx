// Velmora Fine Jewelry - UGC (User Generated Content) Section
import React from 'react';
import { ugcItems } from '../../data/products';

const UGCSection = () => {
  return (
    <section className="py-12 bg-[#F5F2EE] overflow-hidden">
      <div className="container-custom mb-8">
        <div className="text-center">
          <p
            className="text-xs uppercase tracking-[0.3em] text-[#B8860B] mb-3"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            @VelmoraJewelry
          </p>
          <h2
            className="text-2xl md:text-3xl text-[#1A1A1A] font-normal"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Styled by You
          </h2>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative">
        <div
          className="flex gap-4 px-4 md:px-0 overflow-x-auto hide-scrollbar pb-4 snap-x snap-mandatory"
          style={{ scrollPaddingLeft: '1rem' }}
        >
          {/* Left fade gradient */}
          <div className="absolute left-0 top-0 bottom-4 w-8 bg-gradient-to-r from-[#F5F2EE] to-transparent z-10 pointer-events-none md:hidden" />
          
          {/* Right fade gradient */}
          <div className="absolute right-0 top-0 bottom-4 w-8 bg-gradient-to-l from-[#F5F2EE] to-transparent z-10 pointer-events-none md:hidden" />

          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-40 md:w-52 snap-start"
            >
              <div className="relative aspect-[9/16] overflow-hidden group">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p
                    className="text-white text-sm italic"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                  >
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* See More Card */}
          <div className="flex-shrink-0 w-40 md:w-52 snap-start">
            <div className="aspect-[9/16] bg-[#1A1A1A] flex flex-col items-center justify-center p-6 text-center">
              <div className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-2xl">+</span>
              </div>
              <p
                className="text-white text-xs uppercase tracking-widest"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                See More
              </p>
              <p
                className="text-white/60 text-xs mt-1"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                @VelmoraJewelry
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UGCSection;
