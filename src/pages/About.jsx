export default function About() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[1100px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-14">
          <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-gold mb-3">Our Story</p>
          <h1 className="font-serif text-3xl md:text-5xl font-light text-espresso tracking-wide mb-6">
            About Velmora
          </h1>
          <div className="w-12 h-px bg-gold mx-auto mb-8" />
          <p className="text-taupe leading-relaxed max-w-[700px] mx-auto">
            Founded with a simple belief: that fine jewelry should be lived in, not locked away. Velmora creates demi-fine pieces that bridge the gap between fast fashion and traditional fine jewelry — thoughtfully designed, responsibly made, and priced to be part of your everyday.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mt-16">
          <div>
            <h2 className="font-serif text-2xl font-light text-espresso tracking-wide mb-4">Our Craft</h2>
            <p className="text-taupe text-sm leading-relaxed mb-4">
              Every Velmora piece is crafted with 18K gold plating over brass, using ethically sourced materials and rigorous quality standards. We work with skilled artisans who bring decades of expertise to each design.
            </p>
            <p className="text-taupe text-sm leading-relaxed">
              From the initial sketch to the final polish, every step is intentional. We believe you can feel the difference when a piece has been made with care.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl font-light text-espresso tracking-wide mb-4">Our Promise</h2>
            <p className="text-taupe text-sm leading-relaxed mb-4">
              We promise jewelry that's safe for sensitive skin — every piece is hypoallergenic and nickel-free. We promise quality that lasts — our plating is designed to withstand daily wear.
            </p>
            <p className="text-taupe text-sm leading-relaxed">
              And we promise to keep our prices accessible, because luxury shouldn't be a privilege. It should be a feeling you get to experience every day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}