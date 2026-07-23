import { Footer } from "@/components/Footer";

export function Journal() {
  return (
    <div className="bg-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-4 md:px-8 pt-32 pb-20 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-gold mb-4">Journal</p>
        <h1 className="font-serif text-4xl md:text-5xl text-espresso mb-8">
          Stories of Style
        </h1>
        <p className="text-lg text-stone leading-relaxed">
          Coming soon — styling tips, behind-the-scenes design notes, and the art of building a jewelry wardrobe.
        </p>
      </div>
      <Footer />
    </div>
  );
}
