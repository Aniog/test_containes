import React from 'react';

const Journal = () => {
  const posts = [
    { title: "The Art of Layering", date: "July 12, 2026", category: "Styling" },
    { title: "Summer in the City", date: "June 28, 2026", category: "Editorial" },
    { title: "The Meaning of Gold", date: "June 15, 2026", category: "Craft" },
  ];

  return (
    <div className="pt-40 pb-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif mb-16 text-center">The Journal</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {posts.map((post, idx) => (
            <div key={idx} className="space-y-6 group cursor-pointer">
              <div className="aspect-[3/4] bg-secondary overflow-hidden">
                <img
                  data-strk-img-id={`journal-${idx}`}
                  data-strk-img={`[journal-title-${idx}] editorial woman fine jewelry lifestyle`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="space-y-2">
                <p className="uppercase-spaced text-[10px] text-zinc-400">{post.category} · {post.date}</p>
                <h3 id={`journal-title-${idx}`} className="text-2xl font-serif group-hover:text-primary transition-soft">{post.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journal;
