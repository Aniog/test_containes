import { Footer } from "@/components/Footer";

export function About() {
  return (
    <div className="bg-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-4 md:px-8 pt-32 pb-20 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-gold mb-4">About Velmora</p>
        <h1 className="font-serif text-4xl md:text-5xl text-espresso mb-8">
          Crafted to be Treasured
        </h1>
        <p className="text-lg text-stone leading-relaxed mb-6">
          Velmora Fine Jewelry creates demi-fine pieces for the modern woman. We believe
          jewelry should feel personal, luxurious, and wearable every day.
        </p>
        <p className="text-lg text-stone leading-relaxed">
          Every piece is designed in-house using 18k gold-plated, hypoallergenic materials
          and finished with care. From our studio to your jewelry box, we aim to make
          everyday elegance effortless.
        </p>
      </div>
      <Footer />
    </div>
  );
}
