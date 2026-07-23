import { Link } from 'react-router-dom';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function BrandStory() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
      {/* Image side */}
      <div className="relative min-h-[350px] md:min-h-[600px] bg-espresso overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-espresso via-espresso/90 to-gold-dark/80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto rounded-full border border-gold-pale/30 flex items-center justify-center mb-4">
              <span className="text-gold-pale text-2xl">✦</span>
            </div>
            <p className="text-cream/50 text-sm tracking-[0.2em] uppercase">Since 2019</p>
          </div>
        </div>
      </div>

      {/* Text side */}
      <div className="flex items-center bg-warm-white px-8 md:px-16 lg:px-24 py-16 md:py-20">
        <ScrollReveal>
          <div className="max-w-lg">
            <p className="text-[11px] tracking-[0.2em] uppercase text-taupe mb-4">Our Story</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso tracking-wider mb-6 leading-tight">
              Jewelry That Lives<br />With You
            </h2>
            <p className="text-taupe leading-relaxed mb-4 text-sm">
              Velmora was born from the belief that luxury shouldn't be locked away for special
              occasions. Our pieces are crafted to be worn every day — at the office, on a date,
              or simply because it's Tuesday.
            </p>
            <p className="text-taupe leading-relaxed mb-8 text-sm">
              Each design begins with the finest 18K gold plating, ethically sourced materials,
              and a commitment to quality that ensures your Velmora piece remains a staple
              in your collection for years to come.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-espresso border-b border-espresso pb-1.5 hover:text-taupe hover:border-taupe transition-colors"
            >
              Read Our Story
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}