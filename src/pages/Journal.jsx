import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import StrkImage from "@/components/ui/StrkImage";
import ScrollReveal from "@/components/ui/ScrollReveal";

const posts = [
  {
    id: "stack-without-rules",
    eyebrow: "Styling",
    title: "How to Stack Without Rules",
    excerpt:
      "A short guide to layering necklaces, huggies, and cuffs in a way that still feels like you — not like the internet.",
    query: "gold jewelry layered stack on warm linen",
  },
  {
    id: "demi-fine-explained",
    eyebrow: "The Edit",
    title: "Demi-Fine, Explained",
    excerpt:
      "What \"18K gold plated\" actually means, how long it lasts, and how to make sure you're getting the real thing.",
    query: "gold jewelry close up detail warm",
  },
  {
    id: "care-routine",
    eyebrow: "Care",
    title: "A 30-Second Jewelry Care Routine",
    excerpt:
      "Three small habits to keep your gold plate looking new for years — and the one thing you should never do.",
    query: "gold jewelry care cloth close up warm",
  },
];

export function Journal() {
  useEffect(() => {
    if (typeof window !== "undefined") window.scrollTo({ top: 0 });
  }, []);

  return (
    <div>
      <section
        aria-labelledby="journal-heading"
        className="container-content py-16 text-center md:py-20"
      >
        <p className="eyebrow">The Journal</p>
        <h1
          id="journal-heading"
          className="mt-3 font-serif text-5xl text-ink md:text-6xl"
        >
          Notes from the Bench
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ink-soft md:text-base">
          Styling, care, and the occasional behind-the-scenes look at how our pieces come to life.
        </p>
      </section>

      <StrkImage>
        <section className="container-content pb-24">
          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            {posts.map((post, i) => {
              const titleId = `post-${post.id}-title`;
              const excerptId = `post-${post.id}-excerpt`;
              return (
                <ScrollReveal key={post.id} delay={i * 100}>
                  <article className="group flex flex-col">
                    <div className="aspect-[4/5] overflow-hidden bg-bone">
                      <img
                        data-strk-img-id={post.id}
                        data-strk-img={`[${excerptId}] [${titleId}]`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="700"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-105"
                      />
                    </div>
                    <p className="eyebrow mt-5">{post.eyebrow}</p>
                    <h2
                      id={titleId}
                      className="mt-2 font-serif text-2xl leading-tight text-ink md:text-3xl"
                    >
                      {post.title}
                    </h2>
                    <p
                      id={excerptId}
                      className="mt-3 text-sm leading-relaxed text-ink-soft"
                    >
                      {post.excerpt}
                    </p>
                    <Link
                      to="/journal"
                      className="mt-5 inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-ink transition-colors hover:text-gold-deep"
                    >
                      Read More
                      <ArrowRight
                        className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
                        strokeWidth={1.5}
                      />
                    </Link>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </section>
      </StrkImage>
    </div>
  );
}

export default Journal;
