import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
          {/* Image side */}
          <div className="aspect-[4/5] lg:aspect-[3/4] bg-stone-warm flex items-center justify-center">
            <div className="text-center px-10">
              <span className="product-name text-sm text-taupe/40 tracking-[0.3em]">
                Brand Image
              </span>
              <p className="mt-4 text-xs text-taupe/30 tracking-wider">
                Warm editorial of gold jewelry being crafted
              </p>
            </div>
          </div>

          {/* Text side */}
          <div className="py-14 lg:py-0 lg:px-16 xl:px-24">
            <p className="text-[11px] tracking-[0.25em] uppercase text-gold mb-5 font-medium">
              Our Philosophy
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-light tracking-wide leading-[1.15] mb-6">
              Jewelry that lives<br />in your story
            </h2>
            <div className="w-12 h-px bg-gold mb-6" />
            <p className="text-taupe leading-relaxed mb-4 text-sm lg:text-base">
              Velmora was born from a simple belief: that the jewelry you wear every day should carry the same weight and beauty as the moments you live in it.
            </p>
            <p className="text-taupe leading-relaxed mb-8 text-sm lg:text-base">
              Each piece is crafted in Italy using 18K gold plate over brass, with an obsessive attention to finish and feel. The result is demi-fine jewelry that looks, wears, and moves like heirloom gold — at a price that makes it yours.
            </p>
            <Link to="#" className="btn-outline">
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
