import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="aspect-[4/5] rounded-lg bg-gradient-to-br from-[#D4B87A]/30 via-[#E8E2D9] to-[#B8965E]/20 flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gold/15 flex items-center justify-center">
                <span className="text-gold-deep font-serif text-3xl">V</span>
              </div>
              <p className="text-taupe text-xs tracking-wider uppercase">Our Craft</p>
            </div>
          </div>

          {/* Text */}
          <div className="lg:pl-0">
            <p className="text-xs text-gold tracking-widest uppercase mb-4 font-sans">
              Our Story
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-espresso tracking-wide leading-[1.15] mb-6">
              Jewelry meant to be<br /> lived in
            </h2>
            <div className="w-12 h-px bg-gold mb-8" />
            <p className="text-taupe leading-relaxed mb-6 max-w-lg">
              At Velmora, we believe fine jewelry shouldn't be reserved for special
              occasions. Our demi-fine pieces are crafted to accompany you through
              every moment — from morning coffee to evening celebrations.
            </p>
            <p className="text-taupe leading-relaxed mb-8 max-w-lg">
              Each design is responsibly made with 18K gold plating over brass,
              ensuring a luxurious look and feel without the luxury markup. Because
              you deserve to shine every day.
            </p>
            <Link
              to="/shop"
              className="inline-block text-sm text-gold hover:text-gold-deep font-medium tracking-wider uppercase border-b border-gold hover:border-gold-deep transition-colors pb-1"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}