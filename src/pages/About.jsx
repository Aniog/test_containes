import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { JewelryImage } from "@/components/ui/JewelryImage";
import Newsletter from "@/components/layout/Newsletter";

const values = [
  {
    title: "Slow Made",
    body: "Each piece is hand-finished by a small family atelier in Jaipur. No mass production, no shortcuts.",
  },
  {
    title: "Honest Materials",
    body: "Hypoallergenic brass, nickel-free, plated in 18K gold over a palladium barrier. We tell you exactly what is in every piece.",
  },
  {
    title: "Priced for Real Life",
    body: "We work directly with our atelier and sell directly to you. The result: demi-fine quality at a price that lets you wear it on a Wednesday.",
  },
  {
    title: "Made to be Treasured",
    body: "Designed to last. Designed to be layered, gifted, and one day, handed down.",
  },
];

export default function About() {
  return (
    <main className="bg-canvas pt-24 md:pt-28">
      <section className="container-editorial pb-16 pt-6 md:pb-24">
        <div className="max-w-3xl">
          <p className="eyebrow">Our Story</p>
          <h1 className="mt-3 font-serif text-5xl leading-[1.05] md:text-6xl">
            Quiet luxury,
            <br />
            <span className="italic font-light">made honestly.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-secondary">
            Velmora began in 2021 at a kitchen table in Brooklyn, with a single
            brass ear cuff and a question: why should beautiful jewelry cost a
            small fortune? Today we work with a small family atelier in Jaipur,
            hand-finishing every piece in 18K gold plating, and selling directly
            to the women who wear them.
          </p>
        </div>
      </section>

      <section className="container-editorial">
        <div className="grid items-center gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <div className="aspect-[4/5] overflow-hidden">
              <JewelryImage
                art="story"
                palette="amber"
                ratio="4/5"
                className="h-full w-full"
                alt="Atelier in Jaipur"
              />
            </div>
          </div>
          <div className="md:col-span-5">
            <p className="eyebrow">The Atelier</p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">
              Three generations. One craft.
            </h2>
            <p className="mt-5 text-ink-secondary leading-relaxed">
              We partner with a third-generation atelier in Jaipur, where every
              piece is cast, plated, and inspected by hand. Our partners are
              paid fairly, work reasonable hours, and are part of every
              decision we make about quality.
            </p>
            <p className="mt-4 text-ink-secondary leading-relaxed">
              The result is demi-fine jewelry that is built to be worn — every
              day, in the shower, on the train, at the dinner table — and that
              still looks like a keepsake years from now.
            </p>
          </div>
        </div>
      </section>

      <section className="container-editorial py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow">What we believe</p>
          <h2 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">
            Four quiet promises
          </h2>
        </div>
        <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <div key={v.title} className="border-t border-line pt-6">
              <span className="text-[10px] uppercase tracking-wider3 text-gold">
                0{i + 1}
              </span>
              <h3 className="mt-3 font-serif text-2xl text-ink">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-canvas-soft">
        <div className="container-editorial py-20 md:py-28 text-center">
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">
            Begin with a quiet piece.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-ink-secondary leading-relaxed">
            The Huggies. The Flora Pendant. The Heirloom Set. A few pieces that
            have earned a place on every Velmora dresser.
          </p>
          <Link
            to="/shop"
            className="mt-9 inline-flex items-center gap-2 btn-primary"
          >
            Shop the Collection
            <ArrowRight size={14} strokeWidth={1.6} />
          </Link>
        </div>
      </section>

      <Newsletter />
    </main>
  );
}
