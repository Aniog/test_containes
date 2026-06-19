import { ugcPosts } from '../../data/products';

export default function UGCReels() {
  return (
    <section className="py-12 md:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <h2
          className="font-serif text-2xl md:text-3xl text-center"
          style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-espresso)' }}
        >
          Styled by You
        </h2>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="flex gap-4 overflow-x-auto hide-scrollbar px-4 md:px-8 pb-4">
        {ugcPosts.map((post, index) => (
          <div
            key={post.id}
            className="flex-shrink-0 w-40 md:w-52 ugc-card rounded-lg overflow-hidden relative"
            style={{
              backgroundColor: 'var(--color-ivory)',
              animationDelay: `${index * 100}ms`,
            }}
          >
            <img
              src={post.image}
              alt={post.caption}
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to top, rgba(26,24,22,0.6) 0%, transparent 50%)',
              }}
            />
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p
                className="font-serif text-sm text-white"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {post.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* View All CTA */}
      <div className="text-center mt-8">
        <a
          href="#"
          className="text-sm tracking-wider underline underline-offset-4 transition-opacity hover:opacity-70"
          style={{ color: 'var(--color-walnut)' }}
        >
          View all on Instagram
        </a>
      </div>
    </section>
  );
}