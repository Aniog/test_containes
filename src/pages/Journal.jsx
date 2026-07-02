import { Link } from 'react-router-dom';

const posts = [
  {
    id: 1,
    title: 'The Art of Layering Necklaces',
    excerpt: 'Master the effortless look with our guide to stacking chains of varying lengths and textures.',
    date: 'June 15, 2026',
  },
  {
    id: 2,
    title: 'Why Demi-Fine is the Future',
    excerpt: 'Exploring the rise of accessible luxury and how it is reshaping the jewelry industry.',
    date: 'May 28, 2026',
  },
  {
    id: 3,
    title: 'Caring for Your Gold Plated Pieces',
    excerpt: 'Simple rituals to keep your jewelry shining bright for years to come.',
    date: 'May 10, 2026',
  },
];

export default function Journal() {
  return (
    <div className="pt-20 md:pt-24 min-h-screen">
      <div className="section-padding py-12 md:py-20 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-velmora-gold mb-4">
            Stories & Style
          </p>
          <h1 className="font-serif text-4xl md:text-5xl tracking-wide">The Journal</h1>
        </div>

        <div className="flex flex-col gap-12">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col md:flex-row gap-6 md:gap-10 items-start"
            >
              <div className="w-full md:w-64 aspect-[4/3] bg-velmora-sand flex-shrink-0 overflow-hidden">
                <img
                  data-strk-img-id={`journal-${post.id}`}
                  data-strk-img={`[journal-title-${post.id}] gold jewelry fashion editorial`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex-1 pt-1">
                <p className="font-sans text-[11px] tracking-widest uppercase text-velmora-muted mb-2">
                  {post.date}
                </p>
                <h2
                  id={`journal-title-${post.id}`}
                  className="font-serif text-xl md:text-2xl tracking-wide mb-3 group-hover:text-velmora-gold transition-colors"
                >
                  {post.title}
                </h2>
                <p className="text-sm text-velmora-stone leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <Link
                  to="/journal"
                  className="inline-flex items-center gap-1.5 font-sans text-xs tracking-widest uppercase text-velmora-dark hover:text-velmora-gold transition-colors"
                >
                  Read More
                  <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
