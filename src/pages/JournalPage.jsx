import { Link } from "react-router-dom";
import ImageFrame from "@/components/ui/ImageFrame";

const ENTRIES = [
  {
    id: "journal-1",
    title: "How to layer necklaces without trying",
    excerpt:
      "Three lengths, two metals, one rule. The Velmora guide to considered stacking.",
    ratio: "4x5",
    img: "journal-1",
  },
  {
    id: "journal-2",
    title: "Gold-plated vs. solid gold: what you're really buying",
    excerpt:
      "A clear-eyed guide to plating thickness, longevity, and what 18K-plated means for daily wear.",
    ratio: "4x5",
    img: "journal-2",
  },
  {
    id: "journal-3",
    title: "The case for buying one beautiful thing",
    excerpt:
      "On slow gifting, fewer pieces, and the joy of reaching for the same earrings for a decade.",
    ratio: "4x5",
    img: "journal-3",
  },
];

export default function JournalPage() {
  return (
    <main className="bg-cream">
      <section className="border-b border-mist bg-ivory">
        <div className="container-editorial py-14 md:py-20">
          <p className="eyebrow">Journal</p>
          <h1 className="mt-3 max-w-2xl font-serif text-4xl leading-[1.05] text-charcoal md:text-6xl">
            Notes from the bench.
          </h1>
        </div>
      </section>
      <section className="container-editorial py-12 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
          {ENTRIES.map((e) => (
            <article key={e.id}>
              <ImageFrame
                id={`${e.img}-img`}
                query={`[${e.id}-title] [journal-title]`}
                ratio={e.ratio}
                width={700}
                tone="warm"
                alt={e.title}
              />
              <div className="mt-5">
                <p className="eyebrow">Read</p>
                <h2
                  id={`${e.id}-title`}
                  className="mt-2 font-serif text-2xl text-charcoal"
                >
                  {e.title}
                </h2>
                <p className="mt-2 font-sans text-[14px] leading-relaxed text-mocha">
                  {e.excerpt}
                </p>
                <Link to="/about" className="btn-ghost mt-4">
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
