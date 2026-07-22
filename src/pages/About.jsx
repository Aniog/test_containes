import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import Reveal from "@/components/Reveal";

const VALUES = [
  {
    title: "Honest Materials",
    text: "A generous layer of 18K gold over recycled brass — the same finish as fine jewelry, without the markup.",
  },
  {
    title: "Made by Hand",
    text: "Every stone is set and every surface polished by hand in small batches, so quality never scales away.",
  },
  {
    title: "Kind to Skin",
    text: "Hypoallergenic and nickel-free, always. Designed for sensitive ears and everyday wear.",
  },
];

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef} className="pb-24">
      <header className="relative flex min-h-[52vh] items-center justify-center overflow-hidden bg-espresso">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          data-strk-bg-id="about-hero-bg"
          data-strk-bg="jeweler's atelier workbench with gold jewelry tools and warm lamp light, cinematic editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 to-espresso/30" />
        <div className="relative px-5 py-24 text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-gold-light">
            Since the Atelier
          </p>
          <h1 className="mt-4 font-serif text-5xl font-medium text-ivory md:text-6xl">
            Our Story
          </h1>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-5 pt-16 md:pt-24">
        <Reveal>
          <p className="font-serif text-2xl italic leading-relaxed text-espresso md:text-3xl">
            &ldquo;We started Velmora because beautiful jewelry shouldn&rsquo;t
            require an occasion — or an apology to your bank account.&rdquo;
          </p>
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-cocoa">
            <p>
              Velmora was founded at a single workbench, between a jeweler who
              believed everyday pieces deserved fine-jewelry standards and a
              designer tired of choosing between quality and price. Every
              piece is still designed in-house, plated in 18K gold, and
              finished by hand.
            </p>
            <p>
              We sell directly to you — no department stores, no middlemen —
              which is how a $38 pair of huggies can carry the same finish as
              pieces four times the price. Quiet luxury, made honestly.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-8 border-t border-hairline pt-12 sm:grid-cols-3">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 100}>
              <h3 className="font-serif text-xl uppercase tracking-[0.12em] text-espresso">
                {v.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-taupe">
                {v.text}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 text-center">
          <Link
            to="/shop"
            className="inline-block bg-gold px-10 py-4 text-xs font-semibold tracking-[0.3em] uppercase text-ivory transition-colors duration-300 hover:bg-gold-deep"
          >
            Shop the Collection
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
