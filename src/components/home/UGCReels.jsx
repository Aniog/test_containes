import { Play } from 'lucide-react';
import { ugcPosts } from '@/data/products';

export default function UGCReels() {
  return (
    <section className="py-12 bg-cream overflow-hidden">
      <div className="container-narrow mb-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm tracking-widest text-gold mb-2">COMMUNITY</p>
            <h2 className="font-serif text-2xl md:text-3xl text-charcoal">As Seen On You</h2>
          </div>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-sm text-warmGray hover:text-gold transition-colors"
          >
            <span>Follow @velmorajewelry</span>
          </a>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="flex gap-4 px-4 md:px-8 overflow-x-auto hide-scrollbar">
        {ugcPosts.map((post) => (
          <div
            key={post.id}
            className="flex-shrink-0 w-48 md:w-56 relative group cursor-pointer"
          >
            {/* Image */}
            <div className="aspect-[9/16] rounded-lg overflow-hidden bg-charcoal/10">
              <img
                src={post.image}
                alt={`${post.author}'s styling`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
              
              {/* Play Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                </div>
              </div>
              
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-serif text-white text-sm italic">"{post.caption}"</p>
                <p className="text-white/60 text-xs mt-1">— {post.author}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View All Link */}
      <div className="md:hidden text-center mt-6">
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm text-warmGray hover:text-gold transition-colors"
        >
          @velmorajewelry
        </a>
      </div>
    </section>
  );
}
