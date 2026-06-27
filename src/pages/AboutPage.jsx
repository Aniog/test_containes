import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { aboutContent } from "@/data/site";
import Container from "@/components/layout/Container";
import Newsletter from "@/components/layout/Newsletter";

export default function AboutPage() {
  return (
    <main className="bg-bone">
      <section className="relative h-[70vh] min-h-[440px] overflow-hidden bg-espresso">
        <img
          src={aboutContent.hero.image}
          alt={aboutContent.hero.imageAlt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/30 to-espresso/40" />
        <Container size="wide" className="relative z-10 h-full flex flex-col justify-end pb-16">
          <p className="text-label text-champagne mb-4">{aboutContent.hero.eyebrow}</p>
          <h1 className="font-serif text-5xl md:text-7xl text-bone leading-[1.05] max-w-3xl">
            {aboutContent.hero.headline}
          </h1>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container size="narrow">
          <p className="text-label text-muted text-center">{aboutContent.story.eyebrow}</p>
          <div className="mt-8 font-serif text-xl md:text-2xl text-espresso leading-relaxed text-center space-y-6">
            {aboutContent.story.paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-cream">
        <Container size="wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
            {aboutContent.values.map((v) => (
              <article key={v.id} className="text-center md:text-left">
                <div className="hairline-gold w-10 mx-auto md:mx-0 mb-6" />
                <h3 className="font-serif text-2xl md:text-3xl text-espresso">
                  {v.title}
                </h3>
                <p className="mt-4 text-sm md:text-base text-espresso-soft leading-relaxed">
                  {v.body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container size="wide">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
            <div className="md:col-span-6 relative aspect-[4/5] overflow-hidden bg-taupe">
              <img
                src={aboutContent.studio.image}
                alt={aboutContent.studio.imageAlt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="md:col-span-6">
              <p className="text-label text-muted">{aboutContent.studio.eyebrow}</p>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl text-espresso leading-[1.1]">
                {aboutContent.studio.headline}
              </h2>
              <div className="mt-6 w-12 hairline-gold" />
              <p className="mt-8 text-base md:text-lg text-espresso-soft leading-relaxed max-w-lg">
                {aboutContent.studio.body}
              </p>
              <Link
                to="/shop"
                className="mt-10 inline-flex items-center gap-2 text-label text-espresso link-underline pb-1"
              >
                Shop the collection
                <ArrowRight strokeWidth={1.25} className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <Newsletter />
    </main>
  );
}