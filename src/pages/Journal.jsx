import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

const Journal = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const posts = [
    {
      id: 1,
      title: "How to Build an Earring Stack",
      date: "October 12, 2026",
      category: "Styling",
      image: "multiple gold earrings styled on ear close up",
      excerpt: "Master the art of the curated ear with our guide to mixing huggies, hoops, and cuffs."
    },
    {
      id: 2,
      title: "Caring for Your Demi-Fine Jewelry",
      date: "September 28, 2026",
      category: "Education",
      image: "cleaning gold jewelry soft cloth aesthetic",
      excerpt: "Extend the life of your favorite pieces with these simple everyday care routines."
    },
    {
      id: 3,
      title: "The Autumn Edit: Warm Tones",
      date: "September 15, 2026",
      category: "Lookbook",
      image: "woman wearing warm gold jewelry autumn lighting outfit",
      excerpt: "As the weather cools, we look to rich, textured gold layers to warm up our wardrobe."
    }
  ];

  return (
    <div className="pt-24 pb-24" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        
        <header className="text-center mb-20 border-b border-border pb-10">
          <h1 className="font-serif text-5xl tracking-widest uppercase mb-6">The Journal</h1>
          <p className="text-muted-foreground font-light text-lg">Stories, styling guides, and musings from the world of Velmora.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="aspect-[4/3] bg-secondary/30 mb-6 overflow-hidden relative rounded">
                <img 
                  data-strk-img-id={`journal-${post.id}`}
                  data-strk-img={post.image}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div>
                <div className="flex items-center justify-between text-xs tracking-widest uppercase text-muted-foreground mb-3 font-semibold">
                  <span>{post.category}</span>
                  <span>{post.date}</span>
                </div>
                <h2 className="font-serif text-2xl uppercase tracking-wider mb-3 group-hover:text-accent transition-colors">{post.title}</h2>
                <p className="font-light text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                <Link to="#" className="text-sm font-semibold uppercase tracking-widest border-b border-foreground pb-0.5 group-hover:border-accent group-hover:text-accent inline-block transition-colors">
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Journal;