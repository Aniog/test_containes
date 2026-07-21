import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const AboutPage = () => {
  return (
    <main className="pt-24 md:pt-28">
      <section className="relative h-[60vh] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1600&q=80"
          alt="Velmora atelier"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex h-full items-center">
          <div className="container-editorial">
            <h1 className="font-serif text-4xl md:text-6xl text-white">Our Story</h1>
            <p className="mt-4 max-w-xl text-sm text-white/80">Quiet luxury, warm gold, and pieces meant to last.</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-editorial grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
          <div>
            <h2 className="section-title">Designed in purpose.</h2>
            <p className="mt-4 text-sm leading-relaxed text-brand-muted">
              Velmora was founded on the idea that fine jewelry should feel accessible without sacrificing quality. We work with skilled artisans to create demi-fine pieces in warm 18K gold plating, using responsibly sourced materials and timeless silhouettes.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-brand-muted">
              Every design begins with a single detail: a curve, a texture, a way light moves across metal. From there, we refine until the piece feels inevitable—like it was always meant to exist.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1000&q=80"
              alt="Jewelry design detail"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-brand-line bg-brand-surface">
        <div className="container-editorial py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="section-title">Crafted with care.</h2>
            <p className="mt-4 text-sm leading-relaxed text-brand-muted">
              We believe in fewer, better pieces. Our collections are intentionally small so we can maintain the highest standards—from material selection to final polish. Each Velmora piece is hypoallergenic, nickel-free, and made to be worn daily.
            </p>
            <Link to="/shop" className="btn-primary mt-8">
              Shop the Collection <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
