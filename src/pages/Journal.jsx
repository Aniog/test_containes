import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import StrkImage from "@/components/ui/StrkImage";
import Reveal from "@/components/ui/Reveal";

const ENTRIES = [
  {
    id: "j1",
    tag: "Styling",
    title: "How to Layer Necklaces Without Overdoing It",
    excerpt:
      "Three lengths, one metal, and the quiet rules we always come back to when getting ready.",
    imageQuery:
      "editorial closeup of three layered gold necklaces on warm linen, soft daylight, jewelry styling",
  },
  {
    id: "j2",
    tag: "Materials",
    title: "What 'Demi-Fine' Actually Means",
    excerpt:
      "A short, honest guide to the gold plate we use, what it sits on, and why it lasts.",
    imageQuery:
      "macro detail of 18K gold plated jewelry, warm studio light, soft linen backdrop, editorial",
  },
  {
    id: "j3",
    tag: "Gifting",
    title: "The Edit: Gifts Under $75 She'll Actually Wear",
    excerpt:
      "Our most-asked-for gifting edit — every piece under $75, every piece a forever piece.",
    imageQuery:
      "cream gift box with gold jewelry on linen, candles, soft warm light, editorial still life",
  },
  {
    id: "j4",
    tag: "Behind the Brand",
    title: "Inside the Brooklyn Studio",
    excerpt:
      "A morning at the workbench, from first sketch to finished piece.",
    imageQuery:
      "artisan hands working on gold jewelry at a workbench, warm morning light, editorial",
  },
];

export default function Journal() {
  return (
    <>
      <section className="bg-ivory-soft pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="mx-auto max-w-container px-5 text-center md:px-10 lg:px-16">
          <span className="text-[11px] font-medium uppercase tracking-widest2 text-gold-deep">
            The Velmora Journal
          </span>
          <h1 className="mt-4 font-serif text-5xl font-light leading-[1.05] text-espresso md:text-6xl lg:text-[72px]">
            Stories, slowly
          </h1>
          <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-espresso-soft">
            Styling notes, materials guides, and the occasional behind-the-scenes.
          </p>
        </div>
      </section>

      <section className="bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-container px-5 md:px-10 lg:px-16">
          {/* Lead story */}
          <Reveal className="mb-16 grid grid-cols-1 gap-8 md:mb-20 md:grid-cols-2 md:gap-12">
            <Link to="#" className="group block overflow-hidden bg-cream">
              <StrkImage
                query={ENTRIES[0].imageQuery}
                ratio="3x2"
                width={1200}
                alt={ENTRIES[0].title}
                className="transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </Link>
            <div className="flex flex-col justify-center">
              <span className="text-[11px] font-medium uppercase tracking-widest2 text-gold-deep">
                {ENTRIES[0].tag} · Featured
              </span>
              <h2 className="mt-3 font-serif text-3xl font-light leading-[1.1] text-espresso md:text-5xl">
                {ENTRIES[0].title}
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-espresso-soft md:text-base">
                {ENTRIES[0].excerpt}
              </p>
              <Link
                to="#"
                className="group mt-7 inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-widest2 text-espresso"
              >
                <span className="border-b border-espresso/40 pb-1 transition-colors group-hover:border-gold-deep group-hover:text-gold-deep">
                  Read the story
                </span>
                <ArrowRight
                  size={14}
                  strokeWidth={1.5}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </Reveal>

          <div className="mb-10">
            <SectionTitle eyebrow="More to read" title="From the Journal" italicWord="Journal" />
          </div>

          <ul className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-10">
            {ENTRIES.slice(1).map((entry, i) => (
              <Reveal as="li" key={entry.id} delay={i * 100}>
                <Link to="#" className="group block">
                  <StrkImage
                    query={entry.imageQuery}
                    ratio="3x2"
                    width={700}
                    alt={entry.title}
                    className="bg-cream transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="mt-5">
                    <span className="text-[10.5px] font-medium uppercase tracking-widest2 text-gold-deep">
                      {entry.tag}
                    </span>
                    <h3 className="mt-2 font-serif text-2xl font-light leading-snug text-espresso transition-colors group-hover:text-gold-deep">
                      {entry.title}
                    </h3>
                    <p className="mt-3 text-[14px] leading-relaxed text-espresso-soft">
                      {entry.excerpt}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
