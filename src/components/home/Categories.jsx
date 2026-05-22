import { categories } from '@/data/articles';

const Categories = () => {
  return (
    <section id="categories" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-1 h-8 bg-leaf rounded-full" />
          <h2 className="text-2xl md:text-3xl font-bold text-ink">Browse by Topic</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="group flex flex-col items-center gap-3 p-5 rounded-2xl border-2 border-gray-100 hover:border-sage hover:shadow-md transition-all text-center"
            >
              <span className="text-3xl">{cat.icon}</span>
              <span className="text-sm font-semibold text-ink group-hover:text-leaf transition-colors">
                {cat.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
