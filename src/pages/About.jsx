import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';

export default function About() {
  return (
    <div className="min-h-screen bg-[#FBF9F6]">
      <Navbar />
      <CartDrawer />
      <main className="pt-20">
        <section className="py-20 md:py-32">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-semibold text-[#1A1A1A] tracking-wide mb-8">
              Our Story
            </h1>
            <div className="space-y-6 text-[#78716C] leading-relaxed">
              <p>
                Velmora was born from a simple belief: that fine jewelry should be accessible, 
                ethical, and designed for the modern woman who values both beauty and intention.
              </p>
              <p>
                Each piece is thoughtfully crafted in small batches using 18K gold-plated 
                recycled brass and ethically sourced crystals. We partner with artisans who 
                share our commitment to quality and sustainability.
              </p>
              <p>
                From our studio to your jewelry box, every Velmora piece is made to be 
                treasured — for yourself, or someone you love.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
