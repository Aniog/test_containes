import { Link } from 'react-router-dom';

export default function About() {
  return (
    <main className="pt-20 md:pt-24 min-h-screen">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=1920&h=800&fit=crop"
            alt="Jewelry craftsmanship"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1a1a1a]/50" />
        </div>
        <div className="relative z-10 text-center text-[#faf8f5]">
          <h1 className="font-serif text-4xl md:text-5xl mb-4">Our Story</h1>
          <p className="text-[#faf8f5]/80 max-w-md mx-auto">
            Crafting jewelry that becomes part of your story
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section bg-[#faf8f5]">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-[#6b6b6b] leading-relaxed mb-6">
              Velmora was born from a simple belief: every woman deserves jewelry that makes her feel extraordinary, without compromise.
            </p>
            <p className="text-[#6b6b6b] leading-relaxed mb-6">
              We craft demi-fine pieces that bridge the gap between luxury and accessibility—using premium materials like 18K gold plating and sterling silver, paired with meticulous attention to detail.
            </p>
            <p className="text-[#6b6b6b] leading-relaxed mb-8">
              Each piece in our collection is designed to become a treasured part of your personal story, whether it's a gift for someone special or a treat for yourself.
            </p>
            <Link to="/shop" className="btn-primary">
              Shop the Collection
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
