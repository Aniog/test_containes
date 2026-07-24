import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { StockImage } from "@/components/ui/StockImage";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { aboutPage } from "@/data/about";

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <div ref={ref} className="bg-ivory pt-24 md:pt-28">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[440px] max-h-[640px] overflow-hidden bg-cocoa text-ivory">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-bg-91ac"
          data-strk-bg="[about-hero-title] [about-hero-subtitle] [about-hero-eyebrow]"
          data-strk-bg-ratio="21x9"
          data-strk-bg-width="2000"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(26,19,14,0.3) 0%, rgba(26,19,14,0.55) 70%, rgba(26,19,14,0.7) 100%)",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-cocoa" />
        <div className="relative z-10 h-full flex items-end pb-14">
          <Container className="w-full">
            <div className="max-w-2xl">
              <p id="about-hero-eyebrow" className="text-[11px] uppercase tracking-ui text-gold-soft/90">
                Our Story
              </p>
              <h1
                id="about-hero-title"
                className="mt-3 font-serif text-4xl md:text-7xl font-light leading-[1.02] text-ivory"
              >
                <em className="italic">Slow</em> made. Often worn.
              </h1>
              <p
                id="about-hero-subtitle"
                className="mt-5 text-[15px] text-ivory/80 max-w-md"
              >
                Velmora is a small jewelry house based between Brooklyn and
                Jaipur. We make demi-fine pieces, by hand, in small batches.
              </p>
            </div>
          </Container>
        </div>
      </section>

      {/* Body */}
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 py-20 md:py-28">
          <div className="md:col-span-5">
            <div className="sticky top-32">
              <p className="eyebrow">Founders</p>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl font-light text-ink leading-[1.1]">
                Two women, one table, very small batches.
              </h2>
            </div>
          </div>
          <div className="md:col-span-7 space-y-6 text-[16px] leading-relaxed text-ink-soft max-w-prose-luxe">
            {aboutPage.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <Link
              to="/journal"
              className="inline-flex items-center gap-2 mt-6 text-[12px] uppercase tracking-ui text-ink hover:text-gold-deep transition-colors"
            >
              Read the Journal
              <ArrowRight size={14} strokeWidth={1.4} />
            </Link>
          </div>
        </div>
      </Container>

      {/* Pillars */}
      <section className="bg-paper py-20 md:py-28 border-y border-hairline">
        <Container>
          <div className="text-center mb-12">
            <p className="eyebrow">What we believe</p>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl font-light text-ink">
              The four pillars.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10">
            {aboutPage.pillars.map((p, i) => (
              <article key={i} className="text-center md:text-left">
                <div className="inline-flex h-10 w-10 items-center justify-center border border-gold text-gold font-serif text-lg mb-5">
                  0{i + 1}
                </div>
                <h3 className="font-serif text-xl text-ink">{p.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-taupe">
                  {p.body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Image + Quote */}
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center py-20 md:py-28">
          <div className="md:col-span-6 aspect-[4/5] bg-cocoa overflow-hidden">
            <StockImage
              id="about-portrait-2d8a"
              query="jewelry designer portrait natural light editorial [about-hero-title]"
              ratio="4x5"
              width={900}
              alt="A founder of Velmora, photographed in editorial light"
            />
          </div>
          <div className="md:col-span-6">
            <blockquote className="font-serif text-3xl md:text-4xl italic text-ink leading-snug text-balance">
              “We wanted demi-fine that didn’t feel like a placeholder. So we made it ourselves.”
            </blockquote>
            <p className="mt-6 text-[12px] uppercase tracking-ui text-taupe">
              — Mira & Léa, Founders
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
