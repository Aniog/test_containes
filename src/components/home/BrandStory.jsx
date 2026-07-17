import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-[#F2EDE7]">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=700&h=875&fit=crop&q=80"
              alt="Jewelry artisan at work"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:py-8">
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#C5A572] mb-4">Our Story</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] mb-6 leading-tight">
              Jewelry That Feels Like You
            </h2>
            <div className="w-12 h-px bg-[#C5A572] mb-6" />
            <p className="font-sans text-sm md:text-base text-[#6B6560] leading-relaxed mb-4">
              Velmora was born from a simple belief: everyone deserves to wear beautiful, high-quality jewelry without the luxury markup. Each piece is crafted with 18K gold plating over surgical-grade stainless steel — designed to last, priced to be accessible.
            </p>
            <p className="font-sans text-sm md:text-base text-[#6B6560] leading-relaxed mb-8">
              We work directly with artisan workshops, cutting out the middlemen that inflate prices in traditional jewelry retail. The result? Premium demi-fine jewelry at a fraction of what you'd pay at a department store.
            </p>
            <Link to="/about" className="inline-flex items-center justify-center border border-[#1A1A1A] text-[#1A1A1A] font-sans text-sm font-medium tracking-[0.2em] uppercase px-8 py-3.5 transition-all duration-300 hover:bg-[#1A1A1A] hover:text-[#FAF8F5]">
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
