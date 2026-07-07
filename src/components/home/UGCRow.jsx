const ugcItems = [
  { id: 'ugc1', caption: 'Golden hour with my Vivid Aura stack', imgUrl: 'https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=440&h=780&fit=crop&auto=format' },
  { id: 'ugc2', caption: 'Everyday sparkle. Flora Nectar forever.', imgUrl: 'https://images.unsplash.com/photo-1600721391689-2564bb8055de?w=440&h=780&fit=crop&auto=format' },
  { id: 'ugc3', caption: 'Can\'t stop wearing these huggies', imgUrl: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=440&h=780&fit=crop&auto=format' },
  { id: 'ugc4', caption: 'Amber Lace for date night perfection', imgUrl: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=440&h=780&fit=crop&auto=format' },
  { id: 'ugc5', caption: 'Gifted the Royal Heirloom to my sister', imgUrl: 'https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=440&h=780&fit=crop&auto=format' },
  { id: 'ugc6', caption: 'The perfect gold stack', imgUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=440&h=780&fit=crop&auto=format' },
];

const UGCRow = () => {
  return (
    <section className="py-16 md:py-24 bg-warm-50">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="section-title mb-3">Styled by You</h2>
          <p className="section-subtitle">Tag @velmora to be featured</p>
        </div>
      </div>

      <div className="flex gap-4 md:gap-6 overflow-x-auto px-6 md:px-10 lg:px-16 pb-4 snap-x snap-mandatory scrollbar-hide">
        {ugcItems.map((item) => (
          <div key={item.id} className="flex-shrink-0 w-[180px] md:w-[220px] snap-start">
            <div className="relative aspect-[9/16] bg-charcoal-100 overflow-hidden rounded-sm">
              <img
                src={item.imgUrl}
                alt={item.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <p className="absolute bottom-3 left-3 right-3 font-serif text-cream text-xs italic leading-snug">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCRow;