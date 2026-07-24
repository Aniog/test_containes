import { Link } from "react-router-dom";
import { ArrowRight, Award, Leaf, Sparkles, Users } from "lucide-react";
import StockImage from "@/components/ui/StockImage";
import Reveal from "@/components/ui/Reveal";
import Newsletter from "@/components/layout/Newsletter";

const VALUES = [
  {
    icon: Award,
    title: "Demi-fine, defined.",
    body: "The look and feel of fine jewelry, at a price you can actually wear daily. 18K gold-plated over a recycled brass core, finished by hand.",
  },
  {
    icon: Leaf,
    title: "Slow by design.",
    body: "Small batch runs. No drops, no seasons. We make pieces that survive trends — and that you'll still want in ten years.",
  },
  {
    icon: Sparkles,
    title: "Skin-first.",
    body: "Nickel-free, hypoallergenic, lead-free. We test every alloy against sensitive skin before it ships.",
  },
  {
    icon: Users,
    title: "Made by women, worn by everyone.",
    body: "A small female-led studio in Stockholm. We design what we want to wear — and then we make it for you.",
  },
];

export default function About() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-40 pb-24 sm:pt-48 sm:pb-32 bg-onyx-900 text-cream-100 overflow-hidden">
        <div className="absolute inset-0">
          <StockImage
            query="Warm editorial close-up of gold jewelry pieces on linen and brass still life atelier"
            ratio="16x9"
            width={1600}
            imgId="about-hero-2c4d8a"
            className="w-full h-full"
            alt="Inside the Velmora studio"
            priority
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(14,13,10,0.55) 0%, rgba(14,13,10,0.25) 50%, rgba(14,13,10,0.7) 100%)",
            }}
          />
        </div>
        <div className="relative container-wide">
          <Reveal>
            <p className="font-sans uppercase tracking-widest-2 text-[11px] text-gold-300 mb-5">
              Our Story
            </p>
            <h1 className="font-display text-[clamp(48px,8vw,112px)] leading-[0.95] text-cream-100 max-w-[18ch]">
              Made to be <span className="italic text-gold-300">treasured.</span>
            </h1>
            <p className="mt-6 text-[17px] text-cream-200/85 max-w-[52ch] leading-relaxed">
              Velmora began as a small Stockholm studio with one stubborn belief:
              fine-feeling jewelry shouldn't require a four-figure receipt. So we
              built the pieces we wanted to wear — and made them for everyone else.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-28 bg-cream-100">
        <div className="container-wide">
          <Reveal>
            <p className="eyebrow mb-3">What we believe</p>
            <h2 className="font-display text-[40px] sm:text-[64px] leading-[1.02] text-onyx-800 max-w-[18ch]">
              Four small ideas,{" "}
              <span className="italic">worn daily.</span>
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title} delay={i * 100}>
                  <article>
                    <Icon size={20} strokeWidth={1.2} className="text-gold-500" />
                    <h3 className="mt-5 font-display text-[26px] text-onyx-800 leading-tight">
                      {v.title}
                    </h3>
                    <p className="mt-3 text-[14px] text-mocha-600 leading-relaxed">
                      {v.body}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Split */}
      <section className="py-20 sm:py-28 bg-cream-200">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal>
              <div className="aspect-[4/5] overflow-hidden">
                <StockImage
                  query="Editorial portrait of a craftsperson working with gold jewelry in a sunlit atelier"
                  ratio="4x5"
                  width={1200}
                  imgId="about-split-7a2b9c"
                  className="w-full h-full"
                  alt="Inside the Velmora atelier"
                />
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="max-w-[44ch]">
                <p className="eyebrow mb-4">The studio</p>
                <h2 className="font-display text-[40px] sm:text-[56px] leading-[1.05] text-onyx-800">
                  A small room in Stockholm.{" "}
                  <span className="italic">A very long table.</span>
                </h2>
                <p className="mt-6 text-[16px] text-mocha-600 leading-[1.75]">
                  We sketch, prototype, and finish every piece under one roof. The
                  room smells faintly of brass shavings and strong coffee. Most
                  days you'll find the four of us at the table, arguing about the
                  exact curve of a clasp.
                </p>
                <p className="mt-4 text-[16px] text-mocha-600 leading-[1.75]">
                  We don't drop "seasons." We don't do hype pricing. We make
                  small batches, and we send them out when they're right.
                </p>
                <Link
                  to="/shop"
                  className="mt-8 inline-flex items-center gap-2 font-sans uppercase tracking-widest-2 text-[12px] text-onyx-800 border-b border-onyx-800 pb-1 hover:text-gold-500 hover:border-gold-500 transition-colors"
                >
                  Shop the collection <ArrowRight size={14} strokeWidth={1.5} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Newsletter variant="dark" />
    </main>
  );
}
