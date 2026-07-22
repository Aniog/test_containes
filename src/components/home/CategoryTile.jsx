import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const CategoryTile = ({ category }) => {
  return (
    <Link
      to={`/shop?category=${category.id}`}
      className="group relative aspect-square rounded-lg overflow-hidden shadow-soft-lg"
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        data-strk-bg-id={`category-${category.id}`}
        data-strk-bg={`[category-${category.id}-name]`}
        data-strk-bg-ratio="1x1"
        data-strk-bg-width="800"
        style={{ backgroundImage: 'url(https://placehold.co/800x800/f5f5f5/666666?text=' + encodeURIComponent(category.name) + ')' }}
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h3
            id={`category-${category.id}-name`}
            className="font-serif text-2xl md:text-3xl text-white font-light tracking-wide mb-2"
          >
            {category.name}
          </h3>
          <span className="text-white text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Shop Now
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CategoryTile;
