import React from 'react';
import { Link, useParams } from 'react-router-dom';

const journalPosts = [
  {
    id: 1,
    title: "How to Style Gold Jewelry for Every Season",
    excerpt: "From delicate layers in spring to bold statements in winter, discover how to wear your favorite pieces year-round.",
    date: "July 12, 2026",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    readTime: "6 min",
    content: "Gold jewelry is a timeless investment that can be styled for any season. In spring, layer delicate chains with fresh florals. Summer calls for lightweight pieces that catch the light. Fall brings warmth with textured gold and amber tones. Winter is the season for bold statements and layered looks that sparkle against dark fabrics.",
  },
  {
    id: 2,
    title: "The Art of Gifting Jewelry",
    excerpt: "A thoughtful guide to choosing pieces that will be cherished, from selecting the right tone to presentation.",
    date: "June 28, 2026",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
    readTime: "5 min",
    content: "Choosing the perfect piece of jewelry is an intimate act. Consider the recipient's style, the occasion, and the message you want to convey. Presentation matters—our signature keepsake boxes transform every gift into a moment. A handwritten note adds a personal touch that will be remembered for years.",
  },
  {
    id: 3,
    title: "Caring for Your Demi-Fine Pieces",
    excerpt: "Simple rituals to keep your gold jewelry looking luminous for years to come.",
    date: "June 15, 2026",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    readTime: "4 min",
    content: "Demi-fine jewelry requires gentle care to maintain its beauty. Remove pieces before swimming, showering, or applying lotions. Store in the provided pouch away from direct sunlight. Clean with a soft, dry cloth—never harsh chemicals. With proper care, your Velmora pieces will remain luminous for years.",
  },
  {
    id: 4,
    title: "Behind the Design: The Flora Necklace",
    excerpt: "The story of how a walk through a summer garden inspired one of our most beloved pieces.",
    date: "May 30, 2026",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    readTime: "7 min",
    content: "The Flora Necklace was born on a golden afternoon in Provence. Walking through a garden bursting with late-summer blooms, our founder was struck by the way light danced across petals. That moment became the inspiration for a cascade of hand-selected crystals in warm, romantic tones—each one a memory of that perfect day.",
  },
];

const Journal = () => {
  const { id } = useParams();
  
  // If an ID is present, show the individual post
  if (id) {
    const post = journalPosts.find(p => p.id === parseInt(id));
    
    if (!post) {
      return (
        <div className="pt-20 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <p className="text-xl mb-4">Article not found</p>
            <Link to="/journal" className="btn btn-outline">Back to Journal</Link>
          </div>
        </div>
      );
    }

    return (
      <div className="pt-20">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <Link to="/journal" className="inline-flex items-center text-sm tracking-widest mb-8 hover:text-velmora-accent">
            ← BACK TO JOURNAL
          </Link>
          
          <article>
            <div className="mb-8">
              <div className="flex items-center gap-3 text-xs text-velmora-text-light tracking-widest mb-4">
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime} READ</span>
              </div>
              <h1 className="serif text-4xl md:text-5xl tracking-[0.03em] mb-6">{post.title}</h1>
            </div>

            <div className="aspect-[16/9] overflow-hidden bg-velmora-bg mb-10">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-velmora-text mb-6">
                {post.content}
              </p>
              <p className="text-lg leading-relaxed text-velmora-text mb-6">
                Every piece in our collection tells a story. We believe that jewelry should be more than an accessory—it should be a companion through life's most meaningful moments. From the quiet confidence of a morning routine to the celebration of milestones, our designs are crafted to be treasured.
              </p>
              <p className="text-lg leading-relaxed text-velmora-text">
                Thank you for being part of the Velmora story. We look forward to creating more beautiful moments together.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-velmora-border">
              <p className="text-sm text-velmora-text-light mb-4">Share this story</p>
              <div className="flex gap-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-sm tracking-widest hover:text-velmora-accent">INSTAGRAM</a>
                <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-sm tracking-widest hover:text-velmora-accent">PINTEREST</a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-sm tracking-widest hover:text-velmora-accent">FACEBOOK</a>
              </div>
            </div>
          </article>

          <div className="mt-16 pt-8 border-t border-velmora-border text-center">
            <Link to="/journal" className="btn btn-outline">
              EXPLORE MORE STORIES
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Default: show the list of posts
  return (
    <div className="pt-20">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.15em] text-velmora-text-light mb-2">STORIES & INSPIRATION</p>
          <h1 className="serif text-5xl tracking-[0.05em]">The Journal</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {journalPosts.map((post) => (
            <article key={post.id} className="group">
              <Link to={`/journal/${post.id}`} className="block">
                <div className="aspect-[16/10] overflow-hidden bg-velmora-bg mb-6">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-3 text-xs text-velmora-text-light tracking-widest mb-3">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime} READ</span>
                  </div>
                  <h2 className="serif text-2xl tracking-[0.03em] mb-3 group-hover:text-velmora-accent transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-velmora-text-light leading-relaxed">
                    {post.excerpt}
                  </p>
                  <span className="inline-block mt-4 text-sm tracking-widest border-b border-velmora-text pb-px group-hover:border-velmora-accent group-hover:text-velmora-accent">
                    READ MORE →
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-sm text-velmora-text-light mb-4">Follow along for more inspiration</p>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            @VELMORA ON INSTAGRAM
          </a>
        </div>
      </div>
    </div>
  );
};

export default Journal;