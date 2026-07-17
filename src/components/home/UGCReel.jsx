import React from 'react';

const UGCReel = () => {
  const ugcItems = [
    { id: 1, image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80', caption: 'Everyday Elegance' },
    { id: 2, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80', caption: 'Golden Hour Glow' },
    { id: 3, image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80', caption: 'Stacked & Styled' },
    { id: 4, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80', caption: 'Minimal Moments' },
    { id: 5, image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80', caption: 'Gifted with Love' },
    { id: 6, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80', caption: 'Self-Care Ritual' },
  ];

  return (
    <section className="py-20 lg:py-32 bg-velmora-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
        <h2
          className="font-serif text-4xl lg:text-5xl text-velmora-charcoal text-center"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          #VelmoraMoments
        </h2>
      </div>

      {/* Horizontal Scroll */}
      <div className="flex space-x-4 overflow-x-auto px-6 lg:px-8 pb-8 scrollbar-hide">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-64 sm:w-72 md:w-80 relative group cursor-pointer"
          >
            <div className="aspect-[9/16] bg-velmora-warm overflow-hidden">
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-serif text-xl italic">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCReel;
