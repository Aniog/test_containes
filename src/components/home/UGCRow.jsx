import { ugcPosts } from '@/data/products';

const gradients = [
  'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 390"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#C4B499"/><stop offset="100%" stop-color="#8B7355"/></linearGradient></defs><rect fill="url(#g)" width="220" height="390"/></svg>'),
  'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 390"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#D4C9B8"/><stop offset="100%" stop-color="#9B8568"/></linearGradient></defs><rect fill="url(#g)" width="220" height="390"/></svg>'),
  'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 390"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#B8A88A"/><stop offset="100%" stop-color="#7A6450"/></linearGradient></defs><rect fill="url(#g)" width="220" height="390"/></svg>'),
];

export default function UGCRow() {
  return (
    <section className="py-20 md:py-28 bg-velmora-blush">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-10">
        <div className="text-center">
          <p className="section-subhead mb-3">Styled by You</p>
          <h2 className="section-heading">As Seen On</h2>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div className="flex gap-5 overflow-x-auto px-6 lg:px-12 pb-4 snap-x snap-mandatory scrollbar-hide">
        {ugcPosts.map((post, i) => (
          <div
            key={post.id}
            className="flex-shrink-0 w-[180px] md:w-[220px] snap-start group cursor-pointer"
          >
            <div className="relative aspect-[9/16] bg-velmora-sand/40 overflow-hidden">
              <img
                src={gradients[i % gradients.length]}
                alt={post.product}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-charcoal/50 via-transparent to-transparent" />
              {/* Caption */}
              <p className="absolute bottom-3 left-3 right-3 font-serif text-sm text-white italic tracking-wide">
                {post.caption}
              </p>
            </div>
            <p className="mt-2 text-[10px] font-sans text-velmora-taupe tracking-widest uppercase text-center">
              {post.product}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
