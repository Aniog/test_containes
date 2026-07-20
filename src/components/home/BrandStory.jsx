import React from 'react'
import { Link } from 'react-router-dom'

const BrandStory = () => {
  return (
    <section className="bg-background py-24 px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
      <div className="w-full lg:w-1/2 aspect-square lg:aspect-[4/5] overflow-hidden">
         <img
            data-strk-img-id="brand-story-img"
            data-strk-img="editorial model wearing gold jewelry warm golden hour"
            data-strk-img-ratio="4x5"
            data-strk-img-width="1000"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
            alt="Velmora Storefront"
            className="w-full h-full object-cover grayscale-[0.1]"
         />
      </div>

      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-10">
         <div className="space-y-4">
            <h2 className="text-[10px] uppercase tracking-[0.4em] opacity-40">Our Story</h2>
            <h3 className="text-4xl md:text-5xl font-serif leading-tight">
               Elegance for the <br /> Modern Curator
            </h3>
         </div>
         <p className="text-sm md:text-base text-base/70 leading-relaxed max-w-lg">
            Founded on the belief that luxury should be felt every day, not just on special occasions. 
            Velmora brings together Italian design sensibilities with 18K gold-plated craftsmanship 
            to create pieces that are as resilient as they are radiant.
         </p>
         <Link 
            to="/shop" 
            className="px-10 py-4 border border-base text-xs uppercase tracking-widest hover:bg-base hover:text-white transition-all duration-500"
         >
            Read Our Journal
         </Link>
      </div>
    </section>
  )
}

export default BrandStory
