import React from 'react';
import { motion } from 'framer-motion';

const Journal = () => {
  const posts = [
    { title: "The Art of Layering: A Guide to Gold", date: "June 15, 2026", img: "woman wearing multiple gold necklaces layered aesthetic" },
    { title: "Summer Evening Essentials", date: "June 02, 2026", img: "gold jewelry evening look editorial cocktail" },
    { title: "Behind the Craft: The Roman Collection", date: "May 20, 2026", img: "jewelry design sketches and gold pieces on desk" }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 px-6 md:px-12 min-h-screen bg-white"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-24">
           <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-gold mb-6 block font-bold">The Journal</span>
           <h1 className="font-serif text-5xl md:text-6xl tracking-wide">Reflections on <br/> Style & Craft</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {posts.map((post, idx) => (
            <article key={idx} className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden bg-muted mb-8 relative rounded-sm">
                 <img 
                    data-strk-img-id={`journal-img-${idx}`}
                    data-strk-img={post.img}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    alt={post.title}
                 />
              </div>
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-black/40 mb-4 block">{post.date}</span>
              <h2 className="font-serif text-2xl tracking-wide group-hover:text-gold transition-colors mb-6 leading-tight">
                {post.title}
              </h2>
              <a href="#" className="font-sans text-[10px] uppercase tracking-widest border-b border-black/10 pb-1 hover:border-gold transition-all">
                Read Article
              </a>
            </article>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Journal;
