import React from 'react';

export default function UGCReel({ posts }) {
  const defaultPosts = [
    { id: 1, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9f8195dd?w=400&q=80', caption: 'Morning light hits different ✨' },
    { id: 2, image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80', caption: 'Everyday elegance 💫' },
    { id: 3, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9f8195dd?w=400&q=80', caption: 'Golden hour glow 🌅' },
    { id: 4, image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80', caption: 'Stacked & styled 💛' },
    { id: 5, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9f8195dd?w=400&q=80', caption: 'Gifted with love 🎁' },
    { id: 6, image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80', caption: 'Self-love era 🌸' },
  ];

  const displayPosts = posts || defaultPosts;

  return (
    <section className="py-20 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h2
          className="text-3xl sm:text-4xl font-light text-center"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          #VelmoraStyle
        </h2>
      </div>

      <div className="ugc-scroll flex space-x-4 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-4">
        {displayPosts.map((post) => (
          <div
            key={post.id}
            className="flex-shrink-0 w-64 sm:w-72 relative group cursor-pointer"
          >
            <div className="aspect-[9/16] max-h-[500px] overflow-hidden rounded bg-velmora-warm">
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
              <p className="text-white text-sm italic">
                {post.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
