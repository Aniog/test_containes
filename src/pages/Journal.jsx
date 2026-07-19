import { useRef } from "react";
import StockImage from "@/components/ui/StockImage";
import useImageLoader from "@/lib/useImageLoader";

const posts = [
  {
    id: "j-1",
    title: "How to Layer Necklaces Without the Tangle",
    excerpt:
      "Three lengths, two chains, and a few tricks to make layering feel effortless — never chaotic.",
    read: "4 min read",
    date: "July 14, 2026",
    imgId: "journal-1-7a2b",
  },
  {
    id: "j-2",
    title: "Gold Plated vs. Gold Filled: What's the Difference?",
    excerpt:
      "A plain-English guide to plating, filling, and vermeil — and why we chose 18K gold over brass.",
    read: "6 min read",
    date: "July 02, 2026",
    imgId: "journal-2-3c4d",
  },
  {
    id: "j-3",
    title: "Five Ways to Wear a Single Ear Cuff",
    excerpt:
      "Yes, you can wear a single ear cuff. Here are five ways to style our Vivid Aura.",
    read: "3 min read",
    date: "June 20, 2026",
    imgId: "journal-3-e9f1",
  },
  {
    id: "j-4",
    title: "A Quiet Case for Demi-Fine Jewelry",
    excerpt:
      "Why we're betting on jewelry that lives in your everyday — not your safe.",
    read: "5 min read",
    date: "June 04, 2026",
    imgId: "journal-4-22aa",
  },
];

function PostCard({ post }) {
  return (
    <article className="group">
      <div className="relative aspect-[3/4] overflow-hidden bg-cream-200">
        <StockImage
          imgId={post.imgId}
          query={`[journal-${post.id}-title] [journal-page-title] editorial still life`}
          refTitle={`journal-${post.id}-title`}
          refSection="journal-page-title"
          ratio="3x4"
          width="800"
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-[1200ms] ease-smooth group-hover:scale-[1.04]"
        />
      </div>
      <div className="pt-5">
        <p className="font-sans text-[10px] uppercase tracking-widest2 text-muted">
          {post.date} · {post.read}
        </p>
        <h3
          id={`journal-${post.id}-title`}
          className="mt-2 font-serif text-2xl md:text-[28px] leading-tight text-espresso-300 tracking-tight"
        >
          {post.title}
        </h3>
        <p className="mt-3 text-sm text-muted leading-relaxed">
          {post.excerpt}
        </p>
      </div>
    </article>
  );
}

export default function Journal() {
  const ref = useRef(null);
  useImageLoader(ref);

  return (
    <section ref={ref} className="pt-24 md:pt-28 bg-cream-100">
      <div className="container-wide">
        <div className="max-w-2xl py-12 md:py-20">
          <p className="eyebrow">The Journal</p>
          <h1
            id="journal-page-title"
            className="mt-3 font-serif text-4xl md:text-6xl text-espresso-300 leading-[1.05] tracking-tight"
          >
            Notes on jewelry, styling, and quiet things.
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-14 pb-24">
          {posts.map((p) => (
            <PostCard key={p.id} post={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
