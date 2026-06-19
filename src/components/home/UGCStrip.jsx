import { ugcPosts } from '@/data/products';
import { Instagram } from 'lucide-react';

export default function UGCStrip() {
  return (
    <section className="py-12 sm:py-16 bg-warm-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs tracking-ultra-wide uppercase text-gold-600 mb-2">
              Styled by You
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl text-charcoal-800">
              @velmora on Instagram
            </h2>
          </div>
          <a
            href="#"
            className="hidden sm:flex items-center gap-2 text-sm text-charcoal-500 hover:text-charcoal-800 transition-colors"
          >
            <Instagram className="w-5 h-5" />
            Follow Us
          </a>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="ugc-scroll flex gap-4 px-4 sm:px-6 lg:px-8 overflow-x-auto pb-4">
        {ugcPosts.map((post) => (
          <div
            key={post.id}
            className="flex-shrink-0 w-40 sm:w-52 md:w-60 aspect-[9/16] relative rounded-lg overflow-hidden group"
          >
            <img
              src={post.image}
              alt={post.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-charcoal-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p className="font-serif text-cream-50 text-lg italic mb-1">
                "{post.caption}"
              </p>
              <p className="text-xs text-gold-400 tracking-wider">
                {post.tag}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile only: Follow link */}
      <div className="sm:hidden text-center mt-6 px-4">
        <a
          href="#"
          className="inline-flex items-center gap-2 text-sm text-charcoal-500 hover:text-charcoal-800 transition-colors"
        >
          <Instagram className="w-5 h-5" />
          Follow @velmora
        </a>
      </div>
    </section>
  );
}