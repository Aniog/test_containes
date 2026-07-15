import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import SmartImage from "@/components/ui/SmartImage";
import Reveal from "@/components/ui/Reveal";
import Newsletter from "@/components/layout/Newsletter";

const VALUES = [
  {
    title: "Slow by design",
    body: "We design in small runs and never rush a piece to market. Less noise, more intention.",
  },
  {
    title: "Honest materials",
    body: "18K gold plating over a hypoallergenic base. Sterling silver where silver belongs. Always labeled.",
  },
  {
    title: "Made to wear",
    body: "Jewelry isn't precious because it sits in a box. Ours is made for the everyday, the wedding, the messy Tuesday morning.",
  },
  {
    title: "Considered packaging",
    body: "Recyclable, reusable, and quiet. The box should feel as considered as what's inside it.",
  },
];

const STATS = [
  { value: "2024", label: "Founded" },
  { value: "18K", label: "Gold plating" },
  { value: "120+", label: "Pieces in catalog" },
  { value: "30 days", label: "Free returns" },
];

export default function About() {
  const containerRef = useRef(null);
  useEffect(() => {
    const node = containerRef.current;
    if (!node) return undefined;
    return ImageHelper.loadImages(strkImgConfig, node);
  }, []);

  return (
    <div className="bg-cream" ref={containerRef}>
      <section className="bg-ivory border-b border-tan/40">
        <div className="container-editorial py-16 md:py-24 text-center max-w-3xl mx-auto">
          <Reveal>
            <p className="eyebrow text-gold-deep">Our Story</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-4 font-serif text-5xl md:text-7xl text-ink leading-[1.05]">
              We make{" "}
              <em className="italic font-normal text-mauve">jewelry</em> for
              the everyday and the once-in-a-lifetime.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-mauve text-[16px] leading-relaxed">
              Velmora is a small studio obsessed with quiet quality. We
              started with a single sketch of an ear cuff and a question:{" "}
              <em>why is real gold only ever far away?</em>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Editorial split */}
      <section className="container-editorial py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          <Reveal className="md:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden bg-ivory">
              <SmartImage
                alt="Studio desk with sketches and gold samples"
                query="artisan jeweler at workbench with gold tools and sketches editorial warm light"
                ratio="4x3"
                width={1200}
                imgId="about-studio"
                className="w-full h-full"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
          </Reveal>
          <div className="md:col-span-6">
            <Reveal>
              <p className="eyebrow text-gold-deep">From the studio</p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 font-serif text-3xl md:text-4xl text-ink leading-tight">
                A studio of three, a lot of patience.
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-5 text-mauve text-[16px] leading-relaxed">
                We're a small, slow team based between Lisbon and Brooklyn. We
                design each piece on paper first — usually while a kettle is
                on — and we send every prototype through weeks of wear
                testing before it ever reaches you.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <p className="mt-4 text-mauve text-[16px] leading-relaxed">
                When you wear Velmora, you're wearing what we'd choose for
                ourselves. That's the entire brief.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-ivory py-20 md:py-24 border-y border-tan/40">
        <div className="container-editorial">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="eyebrow text-gold-deep">What we believe</p>
              <h2 className="mt-4 font-serif text-3xl md:text-5xl text-ink">
                Four things, kept simple.
              </h2>
            </div>
          </Reveal>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <li className="border-t border-tan/60 pt-6">
                  <h3 className="font-serif text-xl md:text-2xl text-ink">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-mauve text-[15px] leading-relaxed">
                    {v.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Stats strip */}
      <section className="container-editorial py-16 md:py-20">
        <Reveal>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {STATS.map((s) => (
              <li key={s.label}>
                <p className="font-serif text-3xl md:text-4xl text-ink price">
                  {s.value}
                </p>
                <p className="mt-2 eyebrow text-mauve">{s.label}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* Care / Contact blocks */}
      <section className="bg-ivory py-20 md:py-24 border-t border-tan/40">
        <div className="container-editorial grid grid-cols-1 md:grid-cols-2 gap-12">
          <Reveal>
            <div id="care">
              <h2 className="font-serif text-3xl text-ink">Care guide</h2>
              <p className="mt-5 text-mauve leading-relaxed">
                Keep your pieces dry, store them flat in the pouch they came
                in, and avoid applying lotion or perfume directly onto
                metal. To refresh the finish, gently buff with the soft
                polishing cloth included in your order.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div id="contact">
              <h2 className="font-serif text-3xl text-ink">Say hello</h2>
              <p className="mt-5 text-mauve leading-relaxed">
                Questions about an order, a piece, or a custom idea? Write to{" "}
                <a
                  href="mailto:hello@velmora.com"
                  className="text-ink underline underline-offset-4 hover:text-gold-deep"
                >
                  hello@velmora.com
                </a>{" "}
                — we answer everything ourselves, usually within a day.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-editorial py-16 md:py-20 text-center">
        <Reveal>
          <Link to="/shop" className="btn-primary">
            Shop the Collection
          </Link>
        </Reveal>
      </section>

      <Newsletter variant="ink" />
    </div>
  );
}
