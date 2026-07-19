import React from 'react';
import { Instagram } from 'lucide-react';

const InstagramFeed = () => {
  const posts = [
    {
      id: 1,
      imgId: 'instagram-post-1',
      captionId: 'instagram-caption-1',
      caption: 'Golden hour essentials',
      likes: '2.4k'
    },
    {
      id: 2,
      imgId: 'instagram-post-2',
      captionId: 'instagram-caption-2',
      caption: 'Layered perfection',
      likes: '1.8k'
    },
    {
      id: 3,
      imgId: 'instagram-post-3',
      captionId: 'instagram-caption-3',
      caption: 'Floral dreams',
      likes: '3.1k'
    },
    {
      id: 4,
      imgId: 'instagram-post-4',
      captionId: 'instagram-caption-4',
      caption: 'Chunky hoops season',
      likes: '2.7k'
    },
    {
      id: 5,
      imgId: 'instagram-post-5',
      captionId: 'instagram-caption-5',
      caption: 'Delicate details',
      likes: '1.5k'
    },
    {
      id: 6,
      imgId: 'instagram-post-6',
      captionId: 'instagram-caption-6',
      caption: 'Gift ready',
      likes: '4.2k'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="w-5 h-5 text-brand-accent" />
            <span className="text-sm tracking-widest text-brand-muted uppercase">@velmora</span>
          </div>
          <h2 id="instagram-feed-title" className="font-serif text-3xl md:text-4xl text-brand-foreground mb-4">
            Follow Along
          </h2>
          <p id="instagram-feed-subtitle" className="text-brand-muted max-w-md mx-auto">
            Tag us in your Velmora moments for a chance to be featured
          </p>
        </div>

        {/* Horizontal scroll grid */}
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
          {posts.map((post) => (
            <div
              key={post.id}
              className="flex-shrink-0 w-64 md:w-72 group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-3">
                <img
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[${post.captionId}] [instagram-feed-title] [instagram-feed-subtitle]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  alt={post.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                
                {/* Caption overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p id={post.captionId} className="font-serif text-white text-sm leading-relaxed">
                    {post.caption}
                  </p>
                </div>

                {/* Likes */}
                <div className="absolute top-3 right-3 flex items-center gap-1 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>♥</span>
                  <span>{post.likes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Follow button */}
        <div className="text-center mt-10">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white transition-colors text-sm tracking-widest uppercase"
          >
            <Instagram className="w-4 h-4" />
            Follow Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
