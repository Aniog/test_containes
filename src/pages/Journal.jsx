import { Link } from 'react-router-dom';

const posts = [
  {
    id: 1,
    title: 'How to Build an Ear Stack You Will Actually Wear',
    excerpt:
      'Start with one statement piece, then add delicate huggies and studs for a look that feels effortless.',
    image:
      'https://placehold.co/800x600/2A2420/CBAF87?text=Ear+Stack+Guide',
  },
  {
    id: 2,
    title: 'The Art of Layering Necklaces',
    excerpt:
      'Mix weights, lengths, and textures to create a personal necklace story that works from day to night.',
    image:
      'https://placehold.co/800x600/1E1A17/CBAF87?text=Necklace+Layers',
  },
  {
    id: 3,
    title: 'Caring for Your Demi-Fine Jewelry',
    excerpt:
      'A few simple habits — storing flat, avoiding water, and occasional gentle cleaning — keep gold plate glowing.',
    image:
      'https://placehold.co/800x600/2A2420/CBAF87?text=Jewelry+Care',
  },
];

export default function Journal() {
  return (
    <div className="animate-fadeIn">
      <div className="bg-velmora-cream border-b border-velmora-border py-16 md:py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-velmora-accent mb-4">
            Journal
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-velmora-ink">
            Stories & Style Notes
          </h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden bg-velmora-cream mb-5">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h2 className="font-serif text-xl md:text-2xl text-velmora-ink group-hover:text-velmora-accent transition-colors">
                {post.title}
              </h2>
              <p className="mt-3 text-sm text-velmora-taupe leading-relaxed">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
