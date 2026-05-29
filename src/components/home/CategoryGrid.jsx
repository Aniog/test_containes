import { Link } from 'react-router-dom';
import { CATEGORIES } from '../../data/dreams';

export default function CategoryGrid() {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="font-dream text-3xl sm:text-4xl font-bold text-white mb-3">
          Dream Categories
        </h2>
        <p className="text-purple-300/60 font-body">Every emotion, every world, every possibility</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.id}
            to={`/marketplace?category=${cat.id}`}
            className="group relative overflow-hidden rounded-2xl glass border border-white/5 p-6 flex flex-col items-center gap-3 hover:border-white/20 transition-all duration-400 dream-card cursor-pointer"
          >
            {/* Glow bg */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl"
              style={{ background: `radial-gradient(circle at center, ${cat.color}22 0%, transparent 70%)` }}
            />

            <span className="text-4xl relative z-10 group-hover:scale-110 transition-transform duration-300">
              {cat.icon}
            </span>
            <span
              className="font-dream text-sm font-semibold relative z-10 transition-colors duration-300"
              style={{ color: cat.color }}
            >
              {cat.label}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
