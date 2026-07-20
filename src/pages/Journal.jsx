import { Link } from 'react-router-dom';

const posts = [
  {
    id: 1,
    title: 'How to Layer Gold Necklaces Like a Pro',
    excerpt: 'Master the art of necklace layering with our simple guide to mixing lengths, textures, and pendants.',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80',
    date: 'July 15, 2026',
  },
  {
    id: 2,
    title: 'The Difference Between Gold Plated & Gold Filled',
    excerpt: 'Understanding quality in demi-fine jewelry so you can make informed, lasting choices.',
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80',
    date: 'June 28, 2026',
  },
  {
    id: 3,
    title: 'Caring for Your Gold Jewelry',
    excerpt: 'Simple steps to keep your Velmora pieces looking brilliant for years to come.',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&q=80',
    date: 'June 10, 2026',
  },
];

export default function Journal() {
  return (
    <div className="pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-light text-warm-charcoal">Journal</h1>
          <p className="mt-3 text-sm text-warm-gray max-w-md mx-auto">
            Stories, guides, and inspiration from the world of Velmora.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="group">
              <div className="aspect-[4/5] overflow-hidden bg-cream-dark">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-4">
                <time className="text-[10px] uppercase tracking-widest text-warm-gray">{post.date}</time>
                <h2 className="font-serif text-lg md:text-xl font-medium text-warm-charcoal mt-1 group-hover:text-gold transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-warm-gray mt-2 leading-relaxed">{post.excerpt}</p>
                <span className="inline-block mt-3 text-xs uppercase tracking-widest text-gold hover:text-warm-charcoal transition-colors border-b border-gold pb-0.5 cursor-pointer">
                  Read More
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}