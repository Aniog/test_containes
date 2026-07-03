import { ugcPosts } from '../../data/products';
import { Heart } from 'lucide-react';

const UGCStrip = () => {
  return (
    <section className="py-16 bg-cream">
      <div className="container mb-8">
        <div className="text-center">
          <h2 className="mb-2">Seen on You</h2>
          <p className="text-slate text-sm">Real people, real jewelry</p>
        </div>
      </div>

      <div className="overflow-x-auto scrollbar-hide pb-4">
        <div className="flex gap-4 px-6 md:px-12" style={{ minWidth: 'max-content' }}>
          {ugcPosts.map((post) => (
            <div
              key={post.id}
              className="relative w-[200px] md:w-[240px] flex-shrink-0 rounded overflow-hidden group cursor-pointer"
            >
              <div className="aspect-[9/16] relative">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
                
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <p className="font-serif text-white text-sm italic mb-1 leading-snug">
                    "{post.caption}"
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-white/70 text-xs">{post.username}</span>
                    <div className="flex items-center gap-1 text-white/70">
                      <Heart className="w-4 h-4" />
                      <span className="text-xs">{Math.floor(Math.random() * 500 + 100)}</span>
                    </div>
                  </div>
                </div>

                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mt-6 text-center">
        <p className="text-xs text-stone">
          Tag us <span className="text-gold">@velmorajewelry</span> to be featured
        </p>
      </div>
    </section>
  );
};

export default UGCStrip;
