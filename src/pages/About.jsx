import { Link } from 'react-router-dom';

export default function About() {
  return (
    <main className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=1920&h=800&fit=crop"
            alt="Velmora jewelry"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1A1A1A]/50" />
        </div>
        <div className="relative z-10 text-center text-[#FAF8F5] px-4">
          <h1 className="font-serif text-5xl md:text-6xl mb-4">Our Story</h1>
          <p className="text-[#FAF8F5]/80 max-w-xl mx-auto">
            Crafting jewelry that becomes part of your story
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-28 bg-[#FAF8F5]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <p className="text-[#8B8580] leading-relaxed mb-6">
              Velmora was born from a simple belief: that beautiful jewelry should be accessible, 
              not reserved for special occasions alone. We set out to create pieces that seamlessly 
              blend into everyday life while adding that touch of elegance that makes moments memorable.
            </p>
            <p className="text-[#8B8580] leading-relaxed mb-6">
              Our name, derived from the Latin for "to be desired," reflects our mission: to create 
              jewelry that you reach for again and again, pieces that become extensions of your personal style.
            </p>
            <p className="text-[#8B8580] leading-relaxed mb-6">
              Each piece in our collection is thoughtfully designed in our studio, where we balance 
              contemporary aesthetics with timeless elegance. We work with skilled artisans who share 
              our commitment to quality, ensuring every detail meets our exacting standards.
            </p>
            <p className="text-[#8B8580] leading-relaxed">
              We believe in jewelry that tells a story — whether it's the piece you wear every day 
              or the one you save for life's special moments. Welcome to Velmora.
            </p>
          </div>

          <div className="text-center mt-12">
            <Link to="/shop" className="btn-gold inline-block">
              Explore Our Collection
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}