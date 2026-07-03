import { Link } from 'react-router-dom';
import JewelryImage from '@/components/JewelryImage';

const posts = [
  {
    id: 'how-to-layer-necklaces',
    title: 'The Art of Layering Necklaces',
    excerpt: 'Three simple rules for creating effortless, elegant necklace stacks that work for any occasion.',
    date: 'June 15, 2026',
  },
  {
    id: 'gold-plated-care',
    title: 'How to Care for Gold-Plated Jewelry',
    excerpt: 'Extend the life of your favorite pieces with these expert care tips and storage tricks.',
    date: 'May 28, 2026',
  },
  {
    id: 'minimal-earring-guide',
    title: 'The Minimal Earring Edit',
    excerpt: 'The five earring styles every modern jewelry box needs — from huggies to statement drops.',
    date: 'May 10, 2026',
  },
];

export default function Journal() {
  return (
    <div className="bg-velmora-cream min-h-screen pt-20 md:pt-24">
      <div className="section-padding py-12 md:py-20">
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl font-light mb-3">The Journal</h1>
          <p className="font-sans text-sm text-velmora-stone">Style tips, care guides, and behind-the-scenes stories</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {posts.map((post, idx) => (
            <article key={post.id} className="group">
              <div className="aspect-[4/3] bg-velmora-ivory overflow-hidden mb-4">
                <JewelryImage
                  id={`journal-${post.id}`}
                  query={`[journal-title-${idx}]`}
                  ratio="4x3"
                  width={600}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="font-sans text-[10px] tracking-widest uppercase text-velmora-stone mb-2">
                {post.date}
              </p>
              <h2 id={`journal-title-${idx}`} className="font-serif text-xl md:text-2xl font-light mb-2 group-hover:text-velmora-golddark transition-colors">
                {post.title}
              </h2>
              <p className="font-sans text-sm text-velmora-stone leading-relaxed mb-3">
                {post.excerpt}
              </p>
              <Link
                to={`/journal/${post.id}`}
                className="font-sans text-xs tracking-widest uppercase text-velmora-espresso border-b border-velmora-sand pb-0.5 hover:border-velmora-espresso transition-colors"
              >
                Read More
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
