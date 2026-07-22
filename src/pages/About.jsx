import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import StrkImage from "@/components/ui/StrkImage";

const VALUES = [
  {
    title: "Demi-fine, by design",
    body: "We sit in the sweet spot between fine and fashion — a thick, lasting gold plate over a solid brass core, finished by hand.",
  },
  {
    title: "Made for the everyday",
    body: "Tarnish-resistant, hypoallergenic, and gentle enough to wear from morning coffee to late dinner.",
  },
  {
    title: "Slow and small",
    body: "Each piece is produced in small batches with a small team. We never overstock, never overproduce.",
  },
];

export default function About() {
  return (
    <>
      <section className="bg-ivory-soft pt-32 md:pt-40">
        <div className="mx-auto max-w-container px-5 text-center md:px-10 lg:px-16">
          <span className="text-[11px] font-medium uppercase tracking-widest2 text-gold-deep">
            Our Story
          </span>
          <h1 className="mt-4 font-serif text-5xl font-light leading-[1.05] text-espresso md:text-6xl lg:text-[80px]">
            The Velmora <em className="italic text-gold-deep">Edit</em>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-espresso-soft md:text-base">
            A small Brooklyn studio making demi-fine gold jewelry designed for
            the way you actually live — every day, layered, gifted, treasured.
          </p>
        </div>
      </section>

      <section className="bg-ivory py-20 md:py-28">
        <div className="mx-auto grid max-w-container grid-cols-1 items-center gap-10 px-5 md:grid-cols-2 md:gap-16 md:px-10 lg:px-16">
          <Reveal className="relative aspect-[4/5] overflow-hidden bg-espresso">
            <StrkImage
              query="artisan polishing gold jewelry at a warm lit workbench, hands closeup, editorial"
              ratio="4x5"
              width={900}
              alt="Crafting Velmora jewelry"
              className="h-full w-full"
              imgClassName="h-full w-full object-cover"
            />
          </Reveal>
          <Reveal delay={120}>
            <SectionTitle
              eyebrow="The Beginning"
              title="A workbench, a question"
              italicWord="question"
              align="left"
            />
            <p className="mt-6 text-[15px] leading-relaxed text-espresso-soft md:text-base">
              Velmora began in 2019 with a single question: why does fine
              jewelry feel so untouchable, and fashion jewelry so disposable?
              We wanted both — pieces that felt considered and lasting, but
              accessible enough to live in.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-espresso-soft md:text-base">
              The first piece was a pair of huggies, made in a Brooklyn
              apartment and tested on every friend we had. They sold out in
              two days.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory-soft py-20 md:py-28">
        <div className="mx-auto max-w-container px-5 md:px-10 lg:px-16">
          <div className="mb-12 md:mb-16">
            <SectionTitle
              eyebrow="What we believe"
              title="Quietly made, lovingly worn"
              italicWord="lovingly"
              align="center"
            />
          </div>
          <ul className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
            {VALUES.map((v, i) => (
              <Reveal as="li" key={v.title} delay={i * 100}>
                <h3 className="font-serif text-2xl text-espresso md:text-[28px]">
                  {v.title}
                </h3>
                <p className="mt-4 text-[14.5px] leading-relaxed text-espresso-soft">
                  {v.body}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-container px-5 md:px-10 lg:px-16">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <p className="font-serif text-3xl font-light leading-snug text-espresso sm:text-4xl md:text-[44px]">
              "A piece of jewelry should feel like a small celebration of
              yourself — quiet, personal, and entirely yours."
            </p>
            <span className="mt-6 text-[11px] uppercase tracking-widest2 text-muted">
              — Camille, Founder
            </span>
            <Link
              to="/shop"
              className="group mt-10 inline-flex items-center gap-3 border-b border-espresso/40 pb-2 text-[11px] font-medium uppercase tracking-widest2 text-espresso transition-colors hover:border-gold-deep hover:text-gold-deep"
            >
              Shop the Collection
              <ArrowRight
                size={14}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
