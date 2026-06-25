import React from 'react';
import { Clock, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
       title: "How to Verify a China Supplier's Business License",
       excerpt: "Don't take a PDF at face value. Learn how to use official government databases to check the status of any manufacturer.",
       date: "June 15, 2026",
       author: "Li Wei",
       category: "Compliance",
       img: "official chinese business license document stamp verification"
    },
    {
       title: "Understanding QC Standard AQL 2.5/4.0",
       excerpt: "The most common quality standard in global trade explained for small and medium enterprises.",
       date: "June 10, 2026",
       author: "Steven Yang",
       category: "Quality Control",
       img: "factory quality control inspector measuring product tolerance"
    },
    {
       title: "Shipping from China: Sea vs Air vs Rail in 2026",
       excerpt: "A comparison of cost and transit times for the three major logistics routes from China to Europe and the USA.",
       date: "June 05, 2026",
       author: "Emma Zhang",
       category: "Logistics",
       img: "container ship sea freight logistics port aerial view"
    }
  ];

  return (
    <div className="bg-white">
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 underline decoration-yellow-500 decoration-4 underline-offset-8">
            Expert Sourcing <span className="text-yellow-600">Insights</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto italic">
            Stay informed with the latest trends, tips, and compliance updates for international trade with China.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {posts.map((post, i) => (
              <article key={i} className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all">
                 <div className="h-60 overflow-hidden relative">
                    <img 
                      data-strk-img-id={`blog-img-${i}`}
                      data-strk-img={post.img}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-900">
                       {post.category}
                    </div>
                 </div>
                 <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
                       <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.date}</span>
                       <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-yellow-600 transition-colors leading-tight">{post.title}</h2>
                    <p className="text-slate-500 text-sm leading-relaxed mb-8 italic">{post.excerpt}</p>
                    <div className="mt-auto pt-4 flex items-center text-slate-900 font-bold text-sm gap-2 group-hover:translate-x-2 transition-transform">
                       Read Article <ArrowRight className="w-4 h-4 text-yellow-500" />
                    </div>
                 </div>
              </article>
            ))}
         </div>
      </section>
    </div>
  );
};

export default Blog;