import * as React from "react";
import { Link, useParams } from "react-router-dom";

const POSTS = [
  {
    id: "how-to-layer",
    title: "How to Layer Necklaces Without Overthinking It",
    excerpt:
      "Three rules we use at the studio, and the one combo we'd never break.",
    query: "woman layering three gold necklaces editorial portrait warm",
    date: "March 2026",
    readTime: "4 min read",
    body: [
      "Layering is not a problem to solve. It is a habit, and habits form with repetition more than with rules. That said, three small anchors help.",
      "First, vary chain lengths by roughly two inches each. The eye reads the gaps as breath, not as clutter. A 16, 18, and 20 inch stack almost always works.",
      "Second, choose one focal piece and let it lead. Our Floral Nectar is built for this — its pendant sits where the eye wants to land. Everything else is supporting cast.",
      "Third, mix textures, not colors. A flat chain with a hand-set crystal with a delicate filigree reads richer than three pieces that look alike. The interplay is the point.",
    ],
  },
  {
    id: "care-guide",
    title: "The Care Guide We Send With Every Order",
    excerpt:
      "Five small habits that keep demi-fine gold jewelry looking new for years.",
    query: "gold jewelry care flat lay on linen editorial soft warm light",
    date: "February 2026",
    readTime: "3 min read",
    body: [
      "Demi-fine 18K gold plate is a beautiful middle ground between fine and fashion — but like anything you wear daily, it appreciates a little care.",
      "Take your jewelry off before showering, swimming, and applying lotion or perfume. Water and oils are the two quiet enemies of gold plate.",
      "Store pieces separately in soft pouches so they don't scratch each other. The pouch your order arrived in is exactly right.",
      "Wipe gently with the included polishing cloth after wearing. It takes ten seconds and adds years.",
      "If a piece ever looks tired, write to us. We offer a replating service at cost — because we want your Velmora to last.",
    ],
  },
  {
    id: "studio-notes",
    title: "Studio Notes · The Filigree Drop",
    excerpt:
      "How a single filigree piece moves from sketch to finished drop.",
    query: "gold filigree drop earrings on linen editorial still life detail",
    date: "January 2026",
    readTime: "5 min read",
    body: [
      "Filigree is one of the oldest forms of jewelry making — thin gold threads, twisted and soldered into patterns that look almost lace-like.",
      "Our Amber Lace earrings began as a single sketch on tracing paper, with a question: how do we capture that filigree feeling at our price point, without losing the delicacy?",
      "We worked with a small family workshop in Porto who still practice traditional filigree by hand. Each pair takes roughly two days to finish, start to end.",
      "What you receive is a small piece of that patience. The pattern is not stamped — it is drawn in metal, by a person, one thread at a time.",
    ],
  },
];

function PostList() {
  return (
    <>
      <header className="max-w-[1280px] mx-auto px-6 md:px-10">
        <p className="text-[11px] uppercase tracking-eyebrow font-medium text-gold-deep">
          The Journal
        </p>
        <h1 className="mt-3 font-serif text-4xl md:text-5xl text-ink">
          Notes from the studio
        </h1>
        <p className="mt-4 text-sm text-ink-muted max-w-md">
          Occasional dispatches on the craft, the styling, and the small
          habits that keep demi-fine pieces at their best.
        </p>
        <div className="mt-8 h-px bg-hairline" />
      </header>

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {POSTS.map((post) => (
          <article key={post.id} className="group">
            <Link to={`/journal/${post.id}`} className="block">
              <div className="aspect-[4/5] overflow-hidden bg-cream">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={post.title}
                  data-strk-img-id={`journal-${post.id}`}
                  data-strk-img={post.query}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="700"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>
              <h2 className="mt-6 font-serif text-2xl text-ink group-hover:text-gold-deep transition-colors duration-300 leading-snug">
                {post.title}
              </h2>
              <p className="mt-3 text-sm text-ink-muted leading-relaxed">
                {post.excerpt}
              </p>
              <span className="mt-4 inline-block text-[11px] uppercase tracking-button text-ink underline underline-offset-4">
                Read
              </span>
            </Link>
          </article>
        ))}
      </div>
    </>
  );
}

function PostDetail({ post }) {
  return (
    <article className="max-w-[760px] mx-auto px-6 md:px-10 pt-24 md:pt-28 pb-20 md:pb-28">
      <Link
        to="/journal"
        className="inline-flex items-center text-[11px] uppercase tracking-eyebrow text-ink-muted hover:text-gold-deep transition-colors"
      >
        ← All posts
      </Link>
      <p className="mt-10 text-[11px] uppercase tracking-eyebrow font-medium text-gold-deep">
        {post.date} · {post.readTime}
      </p>
      <h1 className="mt-3 font-serif text-4xl md:text-5xl text-ink leading-tight">
        {post.title}
      </h1>
      <div className="mt-8 h-px bg-hairline" />
      <div className="mt-10 aspect-[16/9] overflow-hidden bg-cream">
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={post.title}
          data-strk-img-id={`journal-hero-${post.id}`}
          data-strk-img={post.query}
          data-strk-img-ratio="16x9"
          data-strk-img-width="1200"
          loading="eager"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mt-10 space-y-6 text-base text-ink-muted leading-relaxed font-sans">
        {post.body.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
      <div className="mt-16 h-px bg-hairline" />
      <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
        <Link
          to="/journal"
          className="text-[11px] uppercase tracking-button text-ink underline underline-offset-4"
        >
          ← Back to all notes
        </Link>
        <Link
          to="/shop"
          className="text-[11px] uppercase tracking-button text-gold-deep underline underline-offset-4"
        >
          Shop the collection →
        </Link>
      </div>
    </article>
  );
}

export default function Journal() {
  const { slug } = useParams();
  const post = slug ? POSTS.find((p) => p.id === slug) : null;

  if (slug && !post) {
    return (
      <main className="bg-ivory pt-24 md:pt-28 pb-20 md:pb-28 min-h-[60vh] text-center px-6">
        <p className="text-[11px] uppercase tracking-eyebrow text-gold-deep">
          The Journal
        </p>
        <h1 className="mt-4 font-serif text-4xl text-ink">
          That note isn't here yet
        </h1>
        <Link
          to="/journal"
          className="mt-8 inline-block text-[11px] uppercase tracking-button text-ink underline underline-offset-4"
        >
          Back to all posts
        </Link>
      </main>
    );
  }

  return (
    <main className="bg-ivory pb-20 md:pb-28">
      {post ? <PostDetail post={post} /> : <PostList />}
    </main>
  );
}
