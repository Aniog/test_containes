import React from 'react';

const UGCReel = () => {
  const ugcItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80",
      caption: "Golden hour essentials ✨",
      author: "@sarahj"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80",
      caption: "Everyday elegance 🤍",
      author: "@emilyr"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80",
      caption: "Stacked & styled 💫",
      author: "@jessicat"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80",
      caption: "Gifted myself today 🎁",
      author: "@aisham"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80",
      caption: "Velmora forever 💍",
      author: "@nicolew"
    }
  ];

  return (
    <section className="py-20 bg-ivory">
      <div className="container-velmora">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="font-serif text-3xl md:text-4xl mb-3">Worn by You</h2>
          <p className="text-warm-gray font-sans">Join the community and share your Velmora moments</p>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="flex gap-6 overflow-x-auto no-scrollbar pb-6">
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-72 md:w-80 relative group cursor-pointer"
            >
              {/* Vertical Card (9:16 aspect) */}
              <div className="relative aspect-[9/16] overflow-hidden bg-sand rounded-sm">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Caption Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-charcoal/80 to-transparent">
                  <p className="text-white font-serif text-lg mb-1">{item.caption}</p>
                  <p className="text-cream/80 text-sm">{item.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGCReel;
