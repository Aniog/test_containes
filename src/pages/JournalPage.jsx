import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const JournalPage = () => {
  const posts = [
    {
      id: 1,
      title: 'How to layer gold jewelry for everyday wear',
      excerpt: 'Start with one statement piece and build outward with smaller accents.',
      image:
        'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1200&q=80',
      date: 'Jul 18, 2026',
    },
    {
      id: 2,
      title: 'The gift guide: jewelry for every personality',
      excerpt: 'From minimalist lovers to maximalist dressers, find the perfect piece.',
      image:
        'https://images.unsplash.com/photo-1608042314453-ae338d80c427?auto=format&fit=crop&w=1200&q=80',
      date: 'Jul 10, 2026',
    },
    {
      id: 3,
      title: 'Behind the design: our new huggie drop',
      excerpt: 'A look at the sketches, samples, and decisions behind the Golden Sphere Huggies.',
      image:
        'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=1200&q=80',
      date: 'Jun 29, 2026',
    },
  ];

  return (
    <main className="pt-24 md:pt-28">
      <section className="section-container py-16 md:py-24">
        <p className="eyebrow">Journal</p>
        <h1 className="mt-2 font-display text-3xl font-semibold md:text-4xl">Stories & guides</h1>
        <p className="mt-2 font-body text-sm text-ink-secondary">
          Styling ideas, behind-the-design notes, and thoughtful gifting inspiration.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="card-surface overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="font-ui text-xs text-ink-muted">{post.date}</p>
                <h2 className="mt-2 font-display text-xl font-semibold">{post.title}</h2>
                <p className="mt-2 font-body text-sm text-ink-secondary leading-relaxed">
                  {post.excerpt}
                </p>
                <Link
                  to="#"
                  className="mt-4 inline-flex items-center gap-1 font-ui text-xs font-semibold uppercase tracking-display text-ink transition-colors hover:text-accent"
                >
                  Read more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default JournalPage;
