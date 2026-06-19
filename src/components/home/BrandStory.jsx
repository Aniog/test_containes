import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="section bg-[#FDFCFA]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden bg-[#F5F0E8]">
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=1000&fit=crop"
              alt="Jewelry artisan at work"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <span className="text-[#C9A962] text-xs tracking-[0.2em] uppercase mb-4 block">
              Our Story
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-wide mb-6">
              Crafted with Intention
            </h2>
            <div className="space-y-4 text-[#6B6B6B] leading-relaxed">
              <p>
                Velmora was born from a simple belief: beautiful jewelry should feel effortless, not extravagant. We create pieces that become part of your everyday — the subtle sparkle that makes you feel put-together, the quality you can feel against your skin.
              </p>
              <p>
                Each piece in our collection is designed in our studio and crafted with care. We use 18K gold plating over sterling silver, ensuring longevity without the premium price tag. Our commitment to hypoallergenic materials means you can wear our jewelry from morning to night, without worry.
              </p>
              <p>
                We believe in jewelry that tells a story — yours. Whether it's a gift for someone you love or a treat for yourself, every Velmora piece is meant to be treasured.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-sm tracking-wider uppercase border-b border-[#1A1A1A] pb-1 hover:text-[#C9A962] hover:border-[#C9A962] transition-colors"
            >
              Learn More
              <span className="text-lg">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}