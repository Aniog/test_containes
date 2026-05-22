import { Clock, User } from 'lucide-react';
import { format, parseISO } from 'date-fns';

const ArticleCard = ({ article }) => {
  const { title, excerpt, category, categoryColor, author, date, readTime, imgId, titleId, subtitleId } = article;

  return (
    <article className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all group flex flex-col">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          data-strk-img-id={imgId}
          data-strk-img={`[${subtitleId}] [${titleId}]`}
          data-strk-img-ratio="3x2"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
        <div className="absolute top-3 left-3">
          <span className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${categoryColor}`}>
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3
          id={titleId}
          className="text-base font-bold text-ink leading-snug mb-2 group-hover:text-leaf transition-colors line-clamp-2"
        >
          {title}
        </h3>
        <p
          id={subtitleId}
          className="text-sm text-stone leading-relaxed mb-4 line-clamp-3 flex-1"
        >
          {excerpt}
        </p>

        <div className="flex items-center justify-between text-xs text-stone border-t border-gray-100 pt-3 mt-auto">
          <span className="flex items-center gap-1">
            <User className="w-3.5 h-3.5" />
            {author}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {readTime}
          </span>
          <span>{format(parseISO(date), 'MMM d')}</span>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
