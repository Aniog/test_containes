import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <main className="pt-24 pb-20">
      <section className="section bg-[#F5F2ED]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl mb-6">Our Story</h1>
            <p className="text-[#6B6B6B] leading-relaxed text-lg mb-8">
              Velmora was born from a simple belief: beautiful jewelry should be accessible to everyone. 
              We craft demi-fine pieces that bridge the gap between fashion and fine jewelry, 
              creating timeless accessories that don't break the bank.
            </p>
            <p className="text-[#6B6B6B] leading-relaxed text-lg mb-8">
              Each piece is designed with intention in our studio, using quality materials like 18K gold plating 
              and sterling silver. We believe in jewelry that tells your story — whether it's a gift for someone 
              special or a treat for yourself.
            </p>
            <p className="text-[#6B6B6B] leading-relaxed text-lg">
              Our commitment to quality means every piece is crafted to last, with careful attention to detail 
              and a finish that stands the test of time.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-[#FAF8F5]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-serif text-3xl mb-2">18K Gold</h3>
              <p className="text-[#6B6B6B]">Premium gold plating that lasts</p>
            </div>
            <div>
              <h3 className="font-serif text-3xl mb-2">Hypoallergenic</h3>
              <p className="text-[#6B6B6B]">Safe for sensitive skin</p>
            </div>
            <div>
              <h3 className="font-serif text-3xl mb-2">30-Day Returns</h3>
              <p className="text-[#6B6B6B]">Love it or return it</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-[#1A1A1A] text-white">
        <div className="container text-center">
          <h2 className="font-serif text-3xl mb-6">Ready to Explore?</h2>
          <Link to="/shop" className="btn-accent">
            Shop the Collection
          </Link>
        </div>
      </section>
    </main>
  );
}
