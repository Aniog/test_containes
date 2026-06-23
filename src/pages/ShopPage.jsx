import { products } from '@/data/products';
import ProductGrid from '@/components/shop/ProductGrid';

export default function ShopPage() {
  return (
    <ProductGrid
      products={products}
      title="All Pieces"
      description="Every piece made slowly. Every piece worn often. Crafted for the hours nobody sees."
    />
  );
}
