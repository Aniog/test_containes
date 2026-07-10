import { Link } from 'react-router-dom';
import { categories } from '../../data/products';
import './CategoryTiles.css';

export default function CategoryTiles() {
  return (
    <section className="category-tiles section">
      <div className="container">
        <div className="category-tiles__header">
          <h2 className="category-tiles__title">Shop by Category</h2>
        </div>

        <div className="category-tiles__grid">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="category-tile"
            >
              <div className="category-tile__image">
                <img src={category.image} alt={category.name} />
                <div className="category-tile__overlay" />
              </div>
              <h3 className="category-tile__name">{category.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}