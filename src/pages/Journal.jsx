import React from 'react';

const Journal = () => {
  const posts = [
    { title: "How to Style Gold Jewelry for Fall", date: "July 12, 2026", excerpt: "Layering, mixing metals, and finding your signature look." },
    { title: "The Art of Gift-Giving", date: "June 28, 2026", excerpt: "Thoughtful presents that last beyond the season." },
    { title: "Behind the Design: Our Signature Huggies", date: "June 15, 2026", excerpt: "From sketch to finished piece—our process revealed." },
  ];

  return (
    <div className="pt-20 max-w-4xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <p className="text-xs tracking-[0.2em] text-accent mb-2">STORIES & INSPIRATION</p>
        <h1 className="font-serif text-5xl">The Journal</h1>
      </div>
      <div className="space-y-12">
        {posts.map((post, i) => (
          <article key={i} className="border-b border-border pb-12 last:border-0">
            <p className="text-xs text-muted-foreground mb-2">{post.date}</p>
            <h2 className="font-serif text-3xl mb-3 hover:text-accent cursor-pointer">{post.title}</h2>
            <p className="text-muted-foreground">{post.excerpt}</p>
            <button className="text-sm tracking-wider mt-4 hover:text-accent">Read More →</button>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Journal;
