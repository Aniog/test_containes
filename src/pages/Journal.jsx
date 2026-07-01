import { Link } from "react-router-dom";
import { productImage } from "@/lib/placeholder";

const posts = [
  {
    id: "stack-the-ear",
    title: "How to stack the ear, the quiet way",
    excerpt: "A considered guide to layering huggies, cuffs and studs — without overdoing it.",
    palette: "noir",
    scene: "earring",
  },
  {
    id: "care-guide",
    title: "The five-minute care guide",
    excerpt: "Small habits that keep demi-fine gold plate looking new, season after season.",
    palette: "champagne",
    scene: "lace",
  },
  {
    id: "gifting",
    title: "Gifting, without the guesswork",
    excerpt: "Our most-loved pieces for the people you love — gift-boxed and ready to send.",
    palette: "cocoa",
    scene: "set",
  },
  {
    id: "behind-the-gold",
    title: "Behind the gold",
    excerpt: "What 18K gold plate really means, and why we chose it for every Velmora piece.",
    palette: "sand",
    scene: "huggie",
  },
  {
    id: "worn-in",
    title: "Worn in: Maya R.",
    excerpt: "A reader's daily stack, from the studio to dinner — and the huggies she never takes off.",
    palette: "noir",
    scene: "necklace",
  },
  {
    id: "small-batches",
    title: "On small batches",
    excerpt: "Why we make in small runs, and what it means for the pieces that do make it to you.",
    palette: "champagne",
    scene: "lace",
  },
];

export default function Journal() {
  return (
    <div className="bg-ivory-50">
      <header className="pt-32 sm:pt-40 pb-12 sm:pb-16 bg-ivory-100">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 lg:px-12 text-center">
          <div className="text-[10px] sm:text-[11px] tracking-widest2 uppercase text-gold-400 mb-4">
            Journal
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-tight text-espresso-200">
            Notes from the studio
          </h1>
          <p className="mt-5 text-sm sm:text-base text-muted max-w-xl mx-auto">
            Care guides, gifting ideas, and the occasional behind-the-scenes look at how a
            Velmora piece comes to life.
          </p>
        </div>
      </header>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            {posts.map((p) => (
              <article key={p.id} className="group">
                <Link to="#" className="block">
                  <div className="relative aspect-[4/5] overflow-hidden bg-espresso-200">
                    <img
                      src={productImage({ scene: p.scene, palette: p.palette, w: 800, h: 1000 })}
                      alt={p.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-editorial group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="pt-5">
                    <div className="text-[10px] tracking-widest2 uppercase text-gold-400 mb-2">
                      {p.id === "care-guide" ? "Care" : p.id === "gifting" ? "Gifting" : p.id === "worn-in" ? "Worn in" : "Studio"}
                    </div>
                    <h2 className="font-serif text-2xl text-espresso-200 group-hover:text-gold-400 transition-colors leading-snug">
                      {p.title}
                    </h2>
                    <p className="mt-3 text-sm text-muted leading-relaxed">
                      {p.excerpt}
                    </p>
                    <span className="mt-4 inline-block text-[11px] tracking-widest2 uppercase text-espresso-200 link-underline">
                      Read note
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
