import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categories } from '@/data/products';

const CategoryTile = ({ category }) => {
  return (
    <Link
      to={`/collection?category=${category.id}`}
      className="group relative aspect-[3/4] rounded overflow-hidden block"
    >
      {/* Background Image */}
      <img
        src={category.image}
        alt={category.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-velvet/70 via-velvet/20 to-transparent transition-opacity group-hover:opacity-80" />
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
        <h3 className="font-serif text-ivory text-subsection mb-2 transform transition-transform duration-300 group-hover:-translate-y-2">
          {category.name}
        </h3>
        <p className="text-ivory/70 text-sm mb-4 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          {category.description}
        </p>
        <div className="flex items-center gap-2 text-ivory/80 text-sm tracking-wide opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <span>Shop Now</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};

const ShopByCategory = () => {
  return (
    <section className="section-padding bg-ivory">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-champagne text-sm tracking-[0.3em] uppercase mb-4">
            Curated Collections
          </p>
          <h2 className="font-serif text-section text-velvet mb-4">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-champagne mx-auto" />
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryTile key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
