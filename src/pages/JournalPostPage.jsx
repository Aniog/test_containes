import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Container from "@/components/layout/Container";
import Newsletter from "@/components/layout/Newsletter";
import { journalPosts } from "@/data/site";
import { cn } from "@/lib/utils";

const bodyCopy = [
  "There is a particular kind of confidence that comes from wearing jewelry you forgot you put on — the way a perfectly weighted huggie sits at the lobe, the way a fine gold chain catches the light just before you reach for your coffee.",
  "This is the quiet luxury we keep returning to at Velmora. Not the loud kind. Not the red-carpet kind. The kind that lives in your daily rotation and still feels like a small celebration every time you catch it in the mirror.",
  "Below, the notes, rituals, and small decisions that shape the way we make — and the way we wear — every piece.",
];

export default function JournalPostPage() {
  const { id } = useParams();
  const post = journalPosts.find((p) => p.id === id) || journalPosts[0];

  useEffect(() => {
    const original = document.title;
    document.title = `${post.title} — Velmora Journal`;
    return () => {
      document.title = original;
    };
  }, [post.title]);

  return (
    <main className="bg-bone">
      {/* Editorial hero */}
      <section className="relative w-full">
        <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-espresso">
          <img
            src={post.image}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover opacity-90"
            loading="eager"
            decoding="async"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(31,24,20,0.15) 0%, rgba(31,24,20,0.6) 100%)",
            }}
          />
          <Container className="relative h-full flex items-end pb-12 md:pb-20">
            <div className="max-w-3xl">
              <p className="text-label text-bone/80 mb-4">
                {post.category || "Field Notes"} · {post.readTime}
              </p>
              <h1 className="text-display text-bone text-3xl md:text-5xl lg:text-6xl leading-[1.05]">
                {post.title}
              </h1>
            </div>
          </Container>
        </div>
      </section>

      {/* Article body */}
      <section className="py-16 md:py-24">
        <Container>
          <Link
            to="/journal"
            className="inline-flex items-center gap-2 text-label text-muted hover:text-espresso transition-colors mb-10"
          >
            <ArrowLeft className="w-3.5 h-3.5" strokeWidth={1.5} />
            Back to Journal
          </Link>

          <article className="max-w-2xl mx-auto">
            <p className="text-lg md:text-xl leading-relaxed text-espresso font-serif mb-8">
              {post.excerpt}
            </p>
            {bodyCopy.map((p, i) => (
              <p
                key={i}
                className={cn(
                  "text-base leading-[1.8] text-espresso-soft mb-6"
                )}
              >
                {p}
              </p>
            ))}

            <div className="mt-12 hairline" />

            <div className="mt-10 flex items-center justify-between">
              <p className="text-label text-muted">Written by the Velmora studio</p>
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 text-label text-espresso link-underline"
              >
                Shop the collection
                <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
              </Link>
            </div>
          </article>

          {/* Other posts */}
          <div className="mt-24">
            <div className="hairline mb-10" />
            <p className="text-label text-muted mb-8">Keep reading</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {journalPosts
                .filter((p) => p.id !== post.id)
                .slice(0, 3)
                .map((p) => (
                  <Link
                    key={p.id}
                    to={`/journal/${p.id}`}
                    className="group block"
                  >
                    <div className="aspect-[4/5] overflow-hidden bg-taupe mb-4">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <p className="text-label text-muted mb-2">
                      {p.category} · {p.readTime}
                    </p>
                    <h3 className="text-product text-espresso text-base md:text-lg leading-snug group-hover:text-espresso-soft transition-colors">
                      {p.title}
                    </h3>
                  </Link>
                ))}
            </div>
          </div>
        </Container>
      </section>

      <Newsletter />
    </main>
  );
}