import { Link } from 'react-router-dom';
import StrkImage from '@/components/ui/StrkImage';

const posts = [
  {
    id: 1,
    title: 'How to Build a Capsule Jewelry Collection',
    excerpt:
      'Five versatile pieces that take you from desk to dinner — without ever feeling overdone.',
    category: 'Style Guide',
  },
  {
    id: 2,
    title: 'The Difference Between Gold-Plated and Gold-Filled',
    excerpt:
      'A simple guide to demi-fine finishes, so you can shop with confidence.',
    category: 'Materials',
  },
  {
    id: 3,
    title: 'Jewelry Care: Make It Last',
    excerpt:
      'Easy habits to keep your pieces shining for years, from storage to cleaning.',
    category: 'Care',
  },
];

export default function Journal() {
  return (
    <div className="min-h-screen bg-cream pb-20 pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
            The Journal
          </p>
          <h1 className="mt-3 font-serif text-4xl font-light text-charcoal md:text-5xl">
            Style, Care & Stories
          </h1>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden bg-cream">
                <StrkImage
                  id={`journal-${post.id}`}
                  query={`[journal-title-${post.id}]`}
                  ratio="4x3"
                  width={600}
                  alt={post.title}
                  className="transition-transform duration-700 ease-premium group-hover:scale-105"
                />
              </div>
              <div className="mt-5">
                <span className="text-[10px] font-medium uppercase tracking-widest text-gold">
                  {post.category}
                </span>
                <h2
                  id={`journal-title-${post.id}`}
                  className="mt-2 font-serif text-xl font-light text-charcoal group-hover:text-gold-dark transition-colors"
                >
                  {post.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-warm-gray">
                  {post.excerpt}
                </p>
                <Link
                  to="#"
                  className="mt-4 inline-block text-xs font-medium uppercase tracking-widest text-charcoal hover:text-gold-dark"
                >
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
