import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ slug, title, excerpt, date, readTime, category }) => {
  return (
    <Link to={`/blog/${slug}`} className="group block bg-white border border-slate-200 rounded-xl p-6 hover:border-slate-300 transition-colors h-full flex flex-col">
      <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
        <span className="px-2.5 py-0.5 bg-slate-100 rounded-full text-slate-600">{category}</span>
        <span>•</span>
        <span>{date}</span>
        <span>•</span>
        <span>{readTime}</span>
      </div>
      <h3 className="font-semibold text-lg text-slate-900 group-hover:text-blue-700 transition-colors mb-3 leading-snug">
        {title}
      </h3>
      <p className="text-sm text-slate-600 line-clamp-3 flex-1">{excerpt}</p>
      <div className="mt-4 text-sm font-medium text-blue-700 group-hover:underline">Read article →</div>
    </Link>
  );
};

export default BlogCard;
