import { Newsletter } from "@/components/home/Newsletter";

export default function About() {
  return (
    <div className="min-h-screen bg-cream pt-24">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-gold">
          About Velmora
        </p>
        <h1 className="font-serif text-4xl font-light sm:text-5xl">
          Designed to Be Worn, Loved, and Kept
        </h1>
        <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-mocha">
          Velmora Fine Jewelry creates demi-fine pieces for modern women who
          value quality, simplicity, and intention. We believe that jewelry
          should feel personal — never costume, never intimidating.
        </p>
      </div>

      <div className="grid md:grid-cols-3">
        <div className="aspect-square bg-parchment">
          <img
            src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=800&q=80"
            alt="Jewelry design"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex aspect-square flex-col items-center justify-center bg-espresso p-8 text-center text-cream">
          <h3 className="font-serif text-2xl font-light">Our Promise</h3>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-parchment/80">
            18K gold-plated finishes, nickel-free materials, and thoughtful
            packaging — because details matter.
          </p>
        </div>
        <div className="aspect-square bg-parchment">
          <img
            src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=800&q=80"
            alt="Jewelry on model"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <Newsletter />
    </div>
  );
}
