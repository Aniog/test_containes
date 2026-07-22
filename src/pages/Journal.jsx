import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionTitle from "@/components/ui/SectionTitle";
import StockImage from "@/components/ui/StockImage";
import Button from "@/components/ui/Button";

const POSTS = [
  {
    id: "care-101",
    title: "Five things no one tells you about caring for gold-plated jewelry",
    excerpt:
      "The everyday habits that keep your pieces luminous for years — without buying a single special product.",
    imageQuery: "gold jewelry on a marble bathroom shelf in soft light",
    category: "Care",
    date: "June 2026",
    read: "4 min",
  },
  {
    id: "stack",
    title: "The art of the ear stack: a quiet case for less",
    excerpt:
      "Three earrings, curated. Why we think the most considered stacks are also the smallest.",
    imageQuery: "woman with three gold earrings stacked, close up side profile",
    category: "Style",
    date: "May 2026",
    read: "6 min",
  },
  {
    id: "behind",
    title: "Behind the bench: how a single huggie hoop gets made",
    excerpt:
      "From CAD to casting to hand-finishing — a day in the studio with the team behind our most-worn earring.",
    imageQuery: "artisan hands holding a small gold hoop, workshop close up",
    category: "Studio",
    date: "April 2026",
    read: "8 min",
  },
  {
    id: "gifts",
    title: "The gift edit: five pieces under $100 that always land",
    excerpt:
      "The pieces our customers keep telling us got the most emotional response — and why we recommend them.",
    imageQuery: "gold jewelry gift wrapped in cream paper on warm neutral background",
    category: "Gifting",
    date: "March 2026",
    read: "5 min",
  },
  {
    id: "founders",
    title: "Maya on quitting her day job (and the spreadsheet that made it possible)",
    excerpt:
      "Our founder on the math of starting a small brand, the fears she pushed through, and what she'd do differently.",
    imageQuery: "woman founder portrait, soft natural light, contemplative",
    category: "Founders",
    date: "February 2026",
    read: "10 min",
  },
  {
    id: "sizing",
    title: "How to size a necklace from across the room (no app required)",
    excerpt:
      "The simple trick stylists use to pick the right chain length for any neckline — and a printable guide.",
    imageQuery: "gold chain necklace measured against soft linen background",
    category: "Style",
    date: "January 2026",
    read: "3 min",
  },
];

export default function Journal() {
  const ref = useRef(null);
  useReveal(ref);
  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, node);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={ref}>
      <section className="bg-cream pt-32 md:pt-40 pb-12 md:pb-16 border-b border-espresso/10">
        <div className="mx-auto max-w-screen-2xl px-5 md:px-8 lg:px-12">
          <Eyebrow>The Velmora Journal</Eyebrow>
          <SectionTitle className="mt-3 max-w-2xl">
            Notes on style, craft, and the small&nbsp;luxuries.
          </SectionTitle>
          <p className="mt-5 text-sm md:text-base text-taupe max-w-xl leading-relaxed">
            Long-form writing from the studio and the people who wear our
            pieces. Published when we have something worth saying.
          </p>
        </div>
      </section>

      <section className="bg-cream py-14 md:py-20">
        <div className="mx-auto max-w-screen-2xl px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-14">
            {POSTS.map((p, i) => (
              <article
                key={p.id}
                className="reveal group"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <Link to="#" className="block">
                  <div className="aspect-[4/3] overflow-hidden bg-cream-deep">
                    <StockImage
                      id={`journal-${p.id}`}
                      query={p.imageQuery}
                      alt={p.title}
                      ratio="4x3"
                      width={800}
                      className="w-full h-full"
                      loading="lazy"
                    />
                  </div>
                  <div className="pt-5 flex items-center gap-3 text-[11px] uppercase tracking-eyebrow text-taupe">
                    <span className="text-champagne">{p.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{p.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{p.read} read</span>
                  </div>
                  <h3 className="mt-3 font-serif text-2xl md:text-[26px] font-light text-espresso leading-snug group-hover:text-champagne-deep transition-colors duration-500 ease-elegant">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm text-espresso-soft leading-relaxed">
                    {p.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs uppercase tracking-label text-espresso">
                    Read
                    <ArrowRight
                      className="h-3.5 w-3.5 transition-transform duration-500 ease-elegant group-hover:translate-x-1"
                      strokeWidth={1.5}
                    />
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 md:py-28 text-center">
        <div className="mx-auto max-w-md px-5 md:px-8">
          <SectionTitle as="h2" className="text-3xl md:text-4xl">
            Letters, not&nbsp;spam.
          </SectionTitle>
          <p className="mt-4 text-sm text-taupe">
            One thoughtful email a month. New collections, restocks, and
            stories from the studio.
          </p>
          <Button as={Link} to="/" variant="ghost" size="lg" className="mt-7">
            Subscribe
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.6} />
          </Button>
        </div>
      </section>
    </div>
  );
}
