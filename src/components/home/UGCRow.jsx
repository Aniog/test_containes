import { ugcContent } from '../../data/products';

export default function UGCRow() {
  return (
    <section className="py-12 md:py-16 bg-[#F5F3EF]">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="font-serif text-2xl md:text-3xl text-[#1C1917]">
            Styled by You
          </h2>
        </div>
      </div>

      {/* Scrollable Row - Full Width */}
      <div className="overflow-x-auto scrollbar-hide pb-4">
        <div 
          className="flex gap-4 px-4 md:px-0"
          style={{ 
            width: 'max-content',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          {ugcContent.map(item => (
            <div
              key={item.id}
              className="relative flex-shrink-0 w-40 md:w-48 aspect-[9/16] rounded-lg overflow-hidden group"
            >
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p 
                  className="font-serif text-sm text-white/95 italic leading-snug"
                  style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}
                >
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Instagram CTA */}
      <div className="container mt-6">
        <p className="text-center text-sm text-[#57534E]">
          Share your look with{' '}
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#C4A962] hover:underline"
          >
            @velmora
          </a>
        </p>
      </div>
    </section>
  );
}
