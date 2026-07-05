import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingBag, ChevronLeft } from 'lucide-react';
import ImageGallery from '@/components/product/ImageGallery';
import AccordionSection from '@/components/product/AccordionSection';
import StarRating from '@/components/ui/StarRating';
import ProductCard from '@/components/home/ProductCard';
import { useCart } from '@/context/CartContext';
import { getProductById, getRelatedProducts } from '@/lib/products';

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addItem, openDrawer } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-velmora-espresso mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-outline">Browse Collection</Link>
        </div>
      </div>
    );
  }

  const related = getRelatedProducts(product);

  const handleAddToCart = () => {
    addItem(product, product.variants[selectedVariant], quantity);
    openDrawer();
  };

  return (
    <div className="pt-20 lg:pt-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Breadcrumb */}
        <Link
          to="/shop"
          className="inline-flex items-center gap-1 text-xs text-velmora-taupe hover:text-velmora-espresso transition-colors font-sans mb-8"
        >
          <ChevronLeft className="w-3 h-3" />
          Back to Shop
        </Link>

        {/* Product detail */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 mb-20">
          <ImageGallery images={product.images} productName={product.name} />

          {/* Product info */}
          <div>
            <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-velmora-taupe mb-2">
              {product.category}
            </p>
            <h1 className="font-serif text-2xl lg:text-3xl tracking-[0.1em] uppercase text-velmora-espresso font-medium mb-4">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-4">
              <span className="font-sans text-xl text-velmora-espresso font-medium">
                ${product.price}
              </span>
              <StarRating rating={product.rating} count={product.reviewCount} size="md" />
            </div>

            <p className="font-sans text-sm text-velmora-stone leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            {product.variants.length > 1 && (
              <div className="mb-6">
                <p className="font-sans text-[11px] tracking-[0.12em] uppercase text-velmora-espresso font-medium mb-3">
                  Finish
                </p>
                <div className="flex gap-3">
                  {product.variants.map((variant, i) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(i)}
                      className={`px-6 py-2.5 border font-sans text-xs tracking-wider uppercase transition-all ${
                        i === selectedVariant
                          ? 'border-velmora-gold bg-velmora-gold text-white'
                          : 'border-black/10 text-velmora-stone hover:border-velmora-gold'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-sans text-[11px] tracking-[0.12em] uppercase text-velmora-espresso font-medium mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-black/10 w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-velmora-stone hover:text-velmora-espresso transition-colors font-sans"
                >
                  -
                </button>
                <span className="w-10 h-10 flex items-center justify-center text-sm font-sans text-velmora-espresso">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-velmora-stone hover:text-velmora-espresso transition-colors font-sans"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button onClick={handleAddToCart} className="btn-primary w-full mb-8">
              <ShoppingBag className="w-4 h-4 mr-2" />
              Add to Cart
            </button>

            {/* Accordions */}
            <div>
              <AccordionSection title="Description" defaultOpen>
                <p>{product.details}</p>
              </AccordionSection>
              <AccordionSection title="Materials &amp; Care">
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-velmora-espresso mb-1">Materials</p>
                    <p>{product.materials}</p>
                  </div>
                  <div>
                    <p className="font-medium text-velmora-espresso mb-1">Care</p>
                    <p>{product.care}</p>
                  </div>
                </div>
              </AccordionSection>
              <AccordionSection title="Shipping &amp; Returns">
                <p>{product.shipping}</p>
              </AccordionSection>
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <section className="py-16 border-t border-black/5">
            <h2 className="font-serif text-2xl text-velmora-espresso font-medium text-center mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
