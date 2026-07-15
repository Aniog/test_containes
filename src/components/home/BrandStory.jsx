import { Link } from "react-router-dom";

export default function BrandStory() {
  return (
    <section className="bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="aspect-[4/5] md:aspect-auto md:h-full bg-cream-dark overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1000&q=80"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex items-center px-8 md:px-16 py-16 md:py-24">
            <div className="max-w-md">
              <p className="text-[11px] uppercase tracking-widest text-accent-gold font-medium mb-4">
                Our Story
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-text-primary leading-[1.15] mb-6">
                Jewelry That
                <br />
                <span className="italic font-light">Lasts a Lifetime</span>
              </h2>
              <div className="w-10 h-[1px] bg-accent-gold mb-6" />
              <p className="text-text-body text-sm md:text-base leading-relaxed font-light mb-3">
                At Velmora, we believe jewelry should be both beautiful and enduring. 
                Every piece is crafted with 18K gold plating over premium brass, 
                designed to withstand the rhythm of your daily life.
              </p>
              <p className="text-text-body text-sm md:text-base leading-relaxed font-light mb-8">
                From our hands to yours — ethically sourced, hypoallergenic, and 
                made with the kind of care that turns a simple accessory into a 
                cherished companion.
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-accent-gold 
                           transition-all duration-300 hover:text-accent-gold-hover no-underline"
              >
                Learn More
                <span className="w-6 h-[1px] bg-accent-gold inline-block" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}