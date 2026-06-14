import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';

const BlogCard = ({ slug, title, excerpt, date, readTime, category }) => {
  return (
    <Link to={`/blog/${slug}`} className="block blog-card">
      <div className="card h-full flex flex-col">
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
          <span className="px-2 py-0.5 bg-slate-100 rounded text-slate-600">{category}</span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" /> {date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> {readTime}
          </span>
        </div>
        <h3 className="font-semibold text-lg text-slate-900 mb-2 leading-snug">{title}</h3>
        <p className="text-sm text-slate-600 line-clamp-3 flex-1">{excerpt}</p>
        <div className="text-sm text-slate-900 font-medium mt-4 inline-flex items-center gap-1">
          Read article <span aria-hidden="true">→</span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;