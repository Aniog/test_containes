import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { journalPosts } from "@/data/site";
import Container from "@/components/layout/Container";
import Newsletter from "@/components/layout/Newsletter";

export default function JournalPage() {
  const [featured, ...rest] = journalPosts;
  return (
    <main className="bg-bone">
      <div className="pt-28 md:pt-36 pb-12 md:pb-20 bg-cream">
        <Container size="wide">
          <p className="text-label text-muted">Field Notes</p>
          <h1 className="mt-3 font-serif text-5xl md:text-7xl text-espresso leading-[1.05]">
            Journal
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg text-espresso-soft">
            Styling guides, behind-the-scenes from the studio, and the people who wear our pieces.
          </p>
        </Container>
      </div>

      {/* Featured */}
      <section className="py-16 md:py-24">
        <Container size="wide">
          <Link
            to={`/journal/${featured.id}`}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 items-center group"
          >
            <div className="md:col-span-7 relative aspect-[4/3] overflow-hidden bg-taupe">
              <img
                src={featured.image}
                alt={featured.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="md:col-span-5">
              <p className="text-label text-muted">{featured.category} · {featured.readTime}</p>
              <h2 className="mt-4 font-serif text-3xl md:text-5xl text-espresso leading-[1.1]">
                {featured.title}
              </h2>
              <div className="mt-4 w-10 hairline-gold" />
              <p className="mt-6 text-base text-espresso-soft leading-relaxed">
                {featured.excerpt}
              </p>
              <span className="mt-8 inline-flex items-center gap-2 text-label text-espresso link-underline pb-1">
                Read the story
                <ArrowRight strokeWidth={1.25} className="w-4 h-4" />
              </span>
            </div>
          </Link>
        </Container>
      </section>

      {/* Grid */}
      <section className="pb-20 md:pb-28 border-t border-line pt-16 md:pt-24">
        <Container size="wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-14">
            {rest.map((post) => (
              <article key={post.id}>
                <Link to={`/journal/${post.id}`} className="block">
                  <div className="relative aspect-[4/5] overflow-hidden bg-taupe">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <p className="mt-5 text-label text-muted">
                    {post.category} · {post.readTime}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl text-espresso leading-snug">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm text-espresso-soft leading-relaxed">
                    {post.excerpt}
                  </p>
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <Newsletter />
    </main>
  );
}