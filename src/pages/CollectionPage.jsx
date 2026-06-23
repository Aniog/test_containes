import { useParams } from 'react-router-dom';
import { products, collections } from '@/data/products';
import ProductGrid from '@/components/shop/ProductGrid';

export default function CollectionPage() {
  const { slug } = useParams();
  const collection = collections.find(c => c.slug === slug);
  const collectionProducts = products.filter(p => p.collection === slug);

  if (!collection) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <p className="font-serif text-2xl text-ink/40" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          Collection not found
        </p>
      </div>
    );
  }

  return (
    <ProductGrid
      products={collectionProducts}
      title={collection.name}
      description={collection.description}
    />
  );
}
