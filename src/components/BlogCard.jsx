import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ slug, title, excerpt, date, readTime, category }) => {
  return (
    <Link to={`/blog/${slug}`} className="group block bg-white border border-slate-200 rounded-xl p-6 hover:border-slate-300 transition-colors">
      <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
        <span className="uppercase tracking-widest">{category}</span>
        <span>•</span>
        <span>{date}</span>
        <span>•</span>
        <span>{readTime}</span>
      </div>
      <h3 className="font-semibold text-lg text-slate-900 mb-2 group-hover:text-sky-700 transition-colors">{title}</h3>
      <p className="text-sm text-slate-600 line-clamp-3">{excerpt}</p>
      <div className="mt-4 text-sm font-medium text-sky-700 group-hover:underline">Read article →</div>
    </Link>
  );
};

export default BlogCard;
