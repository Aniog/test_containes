import { Link } from "react-router-dom";
import { productImage } from "@/lib/placeholder";

const values = [
  {
    title: "Designed in-house",
    body: "Every piece starts as a sketch in our studio in Lisbon. We design what we'd want to wear — and wear on repeat.",
  },
  {
    title: "Demi-fine, done right",
    body: "18K gold plate over a brass or sterling silver core. Hypoallergenic, tarnish-resistant, and built for daily wear.",
  },
  {
    title: "Made in small batches",
    body: "We produce in small runs to keep quality high and waste low. When a piece is gone, it may not return.",
  },
  {
    title: "Transparent pricing",
    body: "By selling direct, we cut the middlemen and offer demi-fine at an accessible price. No markups, no mystery.",
  },
];

export default function About() {
  return (
    <div className="bg-ivory-50">
      <header className="pt-32 sm:pt-44 pb-14 sm:pb-20 bg-ivory-100">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 lg:px-12 text-center">
          <div className="text-[10px] sm:text-[11px] tracking-widest2 uppercase text-gold-400 mb-4">
            Our story
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-tight text-espresso-200 leading-[1.05]">
            Quiet pieces,
            <br />
            <span className="italic text-gold-400">made with intention.</span>
          </h1>
        </div>
      </header>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="relative aspect-[4/5] overflow-hidden bg-espresso-200">
              <img
                src={productImage({ scene: "lace", palette: "champagne", w: 1000, h: 1250 })}
                alt="Velmora studio"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="max-w-md">
              <h2 className="font-serif text-3xl sm:text-4xl text-espresso-200 leading-tight">
                Born in a small studio. Worn around the world.
              </h2>
              <p className="mt-5 text-base text-muted leading-relaxed">
                Velmora began as a small studio experiment in 2021 — a desire to design the
                kind of jewelry we'd keep on our vanities for years. Not trends. Not fast
                fashion. Pieces quiet enough to wear every day, and considered enough to pass
                down.
              </p>
              <p className="mt-4 text-base text-muted leading-relaxed">
                Today, we ship from Lisbon to over forty countries — and the question we ask
                with every new design is still the same: would we keep it, and wear it, for
                the next ten years?
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-ivory-100">
        <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="font-serif text-3xl sm:text-4xl text-espresso-200">
              What we believe
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[rgba(168,130,80,0.25)]">
            {values.map((v) => (
              <div key={v.title} className="bg-ivory-100 p-10 sm:p-12">
                <h3 className="font-serif text-2xl text-espresso-200">{v.title}</h3>
                <p className="mt-4 text-sm text-muted leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl text-espresso-200">
          Begin with a quiet piece
        </h2>
        <div className="mt-8">
          <Link to="/shop" className="btn-primary">
            Shop the collection
          </Link>
        </div>
      </section>
    </div>
  );
}
