import { ugcPosts } from '@/data/products';

export default function UGCReelStrip() {
  return (
    <section className="py-16 bg-charcoal-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="text-center">
          <p className="eyebrow text-gold-400 mb-3">Real Moments</p>
          <h2 className="section-title text-white">Styled by You</h2>
        </div>
      </div>
      
      {/* Scrolling Container */}
      <div className="relative">
        <div className="flex gap-4 px-4 sm:px-6 lg:px-8 overflow-x-auto hide-scrollbar pb-4">
          {/* First set */}
          {ugcPosts.map((post) => (
            <div
              key={post.id}
              className="flex-shrink-0 w-40 sm:w-48 md:w-56 relative group cursor-pointer"
            >
              <div className="aspect-[9/16] rounded-lg overflow-hidden relative">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-transparent to-transparent" />
                
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-serif text-white text-sm italic mb-1">
                    "{post.caption}"
                  </p>
                  <p className="text-charcoal-400 text-xs">
                    {post.handle}
                  </p>
                </div>
              </div>
            </div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {ugcPosts.map((post) => (
            <div
              key={`dup-${post.id}`}
              className="flex-shrink-0 w-40 sm:w-48 md:w-56 relative group cursor-pointer hidden md:block"
            >
              <div className="aspect-[9/16] rounded-lg overflow-hidden relative">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-transparent to-transparent" />
                
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-serif text-white text-sm italic mb-1">
                    "{post.caption}"
                  </p>
                  <p className="text-charcoal-400 text-xs">
                    {post.handle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Fade Edges */}
        <div className="absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-charcoal-800 to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-charcoal-800 to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
