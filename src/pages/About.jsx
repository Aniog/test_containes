import { useEffect } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const VALUES = [
  {
    title: "Quiet, not loud",
    body: "We design jewelry meant to whisper, not shout. The kind of piece a friend notices after the third coffee.",
  },
  {
    title: "Made by hand",
    body: "Each piece is hand-finished in our atelier — drawn in wax, cast in recycled brass, plated in 18K gold, and polished until it feels like it has always been yours.",
  },
  {
    title: "Worn daily",
    body: "Demi-fine by design. Hypoallergenic, tarnish-resistant, made to be lived in — through showers, travels, and quiet Sundays.",
  },
];

const TIMELINE = [
  { year: "2019", text: "Founded at a kitchen table in Lisbon by Mariana Vasquez." },
  { year: "2021", text: "First atelier opens; pieces begin shipping worldwide." },
  { year: "2023", text: "Carbon-neutral operations and 100% recycled brass." },
  { year: "2024", text: "The Heirloom Collection launches to a waiting list of 12,000." },
];

export default function About() {
  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const root = document.getElementById("about-root");
      if (root) ImageHelper.loadImages(strkImgConfig, root);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <div id="about-root" className="bg-cream pt-24 md:pt-28">
      {/* Hero */}
      <section className="border-b border-ink/10">
        <div className="container-shell py-16 md:py-24 text-center max-w-3xl mx-auto">
          <span className="eyebrow">Our Atelier</span>
          <h1 className="font-display text-5xl md:text-7xl mt-4 text-ink leading-[1.05]">
            Quiet luxury, made to be
            <br />
            <span className="italic text-champagne-deep">worn daily</span>.
          </h1>
          <p className="mt-8 text-ink-soft text-lg leading-relaxed">
            We are a small studio making demi-fine jewelry for the everyday
            rituals worth remembering.
          </p>
        </div>
      </section>

      {/* Editorial split */}
      <section className="container-shell py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-6 aspect-[4/5] bg-blush overflow-hidden">
            <div
              className="absolute inset-0"
              data-strk-bg-id="about-portrait"
              data-strk-bg="founder portrait studio warm light editorial jewelry"
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="1000"
            />
          </div>
          <div className="md:col-span-6">
            <span className="eyebrow">A Letter From the Founder</span>
            <p className="mt-6 font-display text-2xl md:text-3xl text-ink leading-snug">
              "I wanted the kind of jewelry that makes you feel a little more
              like yourself — without a ceremony, and without a safe deposit
              box."
            </p>
            <p className="mt-6 text-ink-soft leading-relaxed">
              Velmora began as a small atelier in 2019. The idea was simple:
              that demi-fine jewelry should feel as considered as fine, but live
              in the world with you. We draw every piece by hand, cast in
              recycled brass, and plate in 18K gold. The result is jewelry you
              can wear in the shower — and that you will still want to wear
              ten years from now.
            </p>
            <p className="mt-4 text-ink-soft leading-relaxed">
              Thank you for being part of this story.
            </p>
            <p className="mt-8 text-[10px] tracking-wider-3 uppercase text-ink">
              Mariana Vasquez · Founder
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="container-shell">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="eyebrow">Our Values</span>
            <h2 className="font-display text-4xl md:text-5xl mt-3 text-ink">
              What we believe
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {VALUES.map((v) => (
              <article
                key={v.title}
                className="border-t border-ink/20 pt-8"
              >
                <h3 className="font-display text-2xl md:text-3xl text-ink">
                  {v.title}
                </h3>
                <p className="mt-4 text-ink-soft leading-relaxed">{v.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="container-shell py-20 md:py-28">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-14">
            <span className="eyebrow">A Short Timeline</span>
            <h2 className="font-display text-4xl md:text-5xl mt-3 text-ink">
              The story so far
            </h2>
          </div>
          <ol className="space-y-8">
            {TIMELINE.map((t) => (
              <li
                key={t.year}
                className="grid grid-cols-[80px_1fr] gap-6 items-baseline border-b border-ink/10 pb-6"
              >
                <span className="font-display text-2xl text-champagne-deep">
                  {t.year}
                </span>
                <p className="text-ink-soft leading-relaxed">{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-espresso text-bone py-20 md:py-28">
        <div className="container-shell text-center max-w-2xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl text-bone">
            Wear a little story
          </h2>
          <p className="mt-5 text-bone-soft leading-relaxed">
            Begin with one of our hand-finished pieces.
          </p>
          <Link to="/shop" className="btn-accent mt-10 inline-flex">
            Shop the Collection
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </Link>
        </div>
      </section>
    </div>
  );
}
