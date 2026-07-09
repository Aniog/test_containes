import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Star, ShoppingBag } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductGallery from '@/components/product/ProductGallery';
import VariantSelector from '@/components/product/VariantSelector';
import QuantitySelector from '@/components/product/QuantitySelector';
import ProductAccordions from '@/components/product/ProductAccordions';
import RelatedProducts from '@/components/product/RelatedProducts';

export default function ProductDetail() {
  const { slug } = useParams();
  const { addItem } = useCart();

  const product = products.find((p) => p.slug === slug);

  const [variant, setVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (product) {
      setVariant(product.variants[0]);
      setQuantity(1);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <p className="font-sans text-sm text-text-secondary">Product not found.</p>
        <Link to="/shop" className="mt-4 inline-block font-sans text-xs tracking-[0.2em] uppercase text-gold hover:text-gold-dark transition-colors">
          Back to Shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, variant, quantity);
  };

  return (
    <div className="pt-24 md:pt-32 pb-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 font-sans text-xs text-text-secondary">
            <li>
              <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            </li>
            <li>/</li>
            <li>
              <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
            </li>
            <li>/</li>
            <li className="text-text-primary">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Gallery */}
          <ProductGallery product={product} />

          {/* Product info */}
          <div>
            <h1
              id={product.titleId}
              className="font-serif text-2xl md:text-3xl tracking-[0.15em] uppercase text-text-primary"
            >
              {product.name}
            </h1>
            <p
              id={product.descId}
              className="sr-only"
            >
              {product.description}
            </p>

            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-border'}`}
                  />
                ))}
              </div>
              <span className="font-sans text-xs text-text-secondary">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="font-serif text-2xl text-text-primary mt-4">${product.price}</p>

            <p className="font-sans text-sm text-text-secondary leading-relaxed mt-4">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-6">
              <VariantSelector
                variants={product.variants}
                selected={variant}
                onChange={setVariant}
              />
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <QuantitySelector quantity={quantity} onChange={setQuantity} />
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full mt-6 bg-gold hover:bg-gold-dark text-white font-sans text-xs tracking-[0.2em] uppercase py-4 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Bag
            </button>

            {/* Accordions */}
            <div className="mt-8">
              <ProductAccordions product={product} />
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20">
          <RelatedProducts currentProductId={product.id} />
        </div>
      </div>
    </div>
  );
}
