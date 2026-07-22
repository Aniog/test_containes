import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Heart, Hammer } from "lucide-react";
import StrkImage from "@/components/ui/StrkImage";

const VALUES = [
  {
    icon: Sparkles,
    title: "Demi-fine, on purpose",
    body: "Heavy 18K gold plating over a hypoallergenic brass core. The look of fine jewelry, the price of an everyday indulgence.",
  },
  {
    icon: Heart,
    title: "Made to be worn",
    body: "Water-resistant finishes, secure closures, and featherweight constructions — designed for real life, not for a display case.",
  },
  {
    icon: Hammer,
    title: "Made slowly",
    body: "Every design is prototyped, worn for weeks, and revised. We work in small batches with a single atelier in Istanbul.",
  },
];

export default function About() {
  const containerRef = useRef(null);

  return (
    <>
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-ivory">
        <div className="container-x max-w-3xl text-center">
          <p className="eyebrow mb-5">Our Story</p>
          <h1 className="font-serif text-h1 md:text-[72px] leading-[1.02]">
            Quiet pieces, made for{" "}
            <em className="italic font-normal text-champagne-deep">everyday</em>{" "}
            wear.
          </h1>
          <p className="mt-6 text-lead text-espresso">
            Velmora began at a kitchen table in Brooklyn. Today, we work with a
            small atelier in Istanbul to make demi-fine gold jewelry that feels
            like a keepsake — and wears like nothing.
          </p>
        </div>
      </section>

      <section className="bg-ivory pb-20 md:pb-32" ref={containerRef}>
        <div className="container-x grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <div className="aspect-[4/3] overflow-hidden bg-blush">
              <StrkImage
                imgId="about-hero-img"
                query="[about-title] a fine jewelry maker working at a wooden bench in a sunlit studio editorial portrait warm light"
                ratio="4x3"
                width={1200}
                alt="The Velmora studio"

              />
            </div>
          </div>
          <div className="md:col-span-5 max-w-md">
            <h2 id="about-title" className="font-serif text-h2 leading-[1.1] mb-5">
              The studio, in Brooklyn.
            </h2>
            <p className="text-body text-espresso leading-relaxed">
              We prototype every piece in-house, wear it for weeks, and only
              produce a piece when we cannot stop reaching for it. The result is
              a slow, intentional catalog — about thirty pieces a year.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="container-x">
          <div className="max-w-xl mb-12">
            <p className="eyebrow mb-4">What We Believe</p>
            <h2 className="font-serif text-h2 leading-[1.05]">
              Three <em className="italic font-normal text-champagne-deep">small</em> ideas.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUES.map((v) => {
              const Icon = v.icon;
              return (
                <article key={v.title} className="bg-bone p-8 md:p-10">
                  <Icon className="w-5 h-5 text-champagne mb-6" strokeWidth={1.5} />
                  <h3 className="font-serif text-2xl mb-3">{v.title}</h3>
                  <p className="text-body text-espresso leading-relaxed">
                    {v.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-charcoal text-bone py-20 md:py-28 text-center">
        <div className="container-x max-w-2xl">
          <h2 className="font-serif text-h2 md:text-[44px] leading-[1.05]">
            Step into the{" "}
            <em className="italic font-normal text-champagne-soft">collection</em>.
          </h2>
          <p className="mt-5 text-body text-bone/70">
            Thirty pieces, designed in Brooklyn, made for the everyday.
          </p>
          <Link
            to="/shop"
            className="mt-8 inline-flex items-center gap-2 btn-primary !bg-bone !text-ink hover:!bg-champagne-soft"
          >
            Shop the Collection
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </Link>
        </div>
      </section>
    </>
  );
}
