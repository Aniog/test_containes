import { products } from '../../data/products';
import ProductCard from '../products/ProductCard';
import { useCart } from '../../context/CartContext';

export default function Bestsellers({ onQuickAdd }) {
  const bestsellers = products.filter((p) => p.badge === 'Bestseller' || p.reviewCount > 100).slice(0, 5);
  const { addItem } = useCart();

  const handleQuickAdd = (product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      variant: product.variants[0],
      image: product.images[0],
    });
    onQuickAdd?.(product);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-velmora-pearl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-velmora-charcoal tracking-wide">
            Bestsellers
          </h2>
          <p className="mt-3 text-sm text-velmora-muted max-w-lg mx-auto">
            The pieces our community wears most. Timeless designs that earn their place in your everyday rotation.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} onQuickAdd={handleQuickAdd} />
          ))}
        </div>
      </div>
    </section>
  );
}
