import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="pt-24 md:pt-28 pb-20">
      {/* Hero */}
      <section className="container-page mb-20">
        <p className="text-stone text-xs tracking-widest uppercase mb-4">Our Story</p>
        <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-charcoal font-medium leading-tight mb-6 max-w-[700px]">
          Jewelry designed to become part of your story
        </h1>
        <div className="w-16 h-[1px] bg-warm-400 mb-8" />
        <p className="text-stone leading-relaxed max-w-[600px] text-lg">
          Velmora was founded in 2024 with a singular vision: to make fine jewelry
          an everyday luxury, not a locked-away treasure.
        </p>
      </section>

      {/* Split sections */}
      <div className="space-y-0">
        <section className="grid grid-cols-1 md:grid-cols-2 min-h-[400px]">
          <div className="bg-warm-100 min-h-[300px] flex items-center justify-center">
            <div className="text-stone/20 text-xs tracking-widest uppercase">Atelier Image</div>
          </div>
          <div className="bg-warm-50 flex items-center px-8 py-16 md:px-16 lg:px-20">
            <div className="max-w-[460px]">
              <p className="text-stone text-xs tracking-widest uppercase mb-4">Craftsmanship</p>
              <h2 className="font-serif text-2xl md:text-3xl text-charcoal font-medium mb-6">
                Designed in Paris, crafted with care
              </h2>
              <p className="text-stone leading-relaxed">
                Each Velmora piece begins as a sketch in our Paris design studio,
                then travels to family-run workshops in Italy and India where
                master artisans bring it to life. We use 18K gold plating over
                brass — thick enough to last for years, not months.
              </p>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 min-h-[400px]">
          <div className="bg-warm-50 flex items-center px-8 py-16 md:px-16 lg:px-20 order-2 md:order-1">
            <div className="max-w-[460px] ml-auto">
              <p className="text-stone text-xs tracking-widest uppercase mb-4">Sustainability</p>
              <h2 className="font-serif text-2xl md:text-3xl text-charcoal font-medium mb-6">
                Ethical from the start
              </h2>
              <p className="text-stone leading-relaxed">
                We partner exclusively with workshops that ensure fair wages,
                safe conditions, and no child labor. Our packaging is plastic-free
                and our shipping carbon-offset. Beautiful jewelry shouldn't come
                at a hidden cost.
              </p>
            </div>
          </div>
          <div className="bg-warm-100 min-h-[300px] flex items-center justify-center order-1 md:order-2">
            <div className="text-stone/20 text-xs tracking-widest uppercase">Workshop Image</div>
          </div>
        </section>
      </div>

      {/* CTA */}
      <section className="container-page mt-20 text-center">
        <div className="max-w-[500px] mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal font-medium mb-4">
            Discover the collection
          </h2>
          <p className="text-stone mb-8">Browse our full range of earrings, necklaces, and huggies.</p>
          <Link to="/shop" className="btn-outline group">
            Shop Now
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
          </Link>
        </div>
      </section>
    </div>
  );
}
