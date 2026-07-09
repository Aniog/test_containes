import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductGallery from '../components/product/ProductGallery';
import ProductAccordion from '../components/product/ProductAccordion';
import RelatedProducts from '../components/product/RelatedProducts';

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem, openDrawer } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-velmora-ink mb-4">
            Product Not Found
          </h1>
          <Link to="/shop" className="btn-outline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const accordionItems = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: `${product.materials}\n\n${product.care}` },
    { title: 'Shipping & Returns', content: product.shipping },
  ];

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
    openDrawer();
  };

  return (
    <div className="min-h-screen bg-velmora-cream pt-20">
      <div className="section-padding py-8">
        {/* Breadcrumb */}
        <Link
          to="/shop"
          className="inline-flex items-center gap-1 text-xs text-velmora-stone hover:text-velmora-gold transition-colors mb-8"
        >
          <ChevronLeft size={14} />
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Gallery */}
          <ProductGallery
            images={product.images}
            productName={product.name}
          />

          {/* Product info */}
          <div>
            <h1 className="font-serif text-2xl md:text-3xl tracking-wider uppercase text-velmora-ink leading-tight">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-4">
              <p className="text-xl text-velmora-gold font-medium">
                ${product.price}
              </p>
              <span className="w-px h-4 bg-velmora-sand" />
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={
                      i < Math.floor(product.rating)
                        ? 'fill-velmora-gold text-velmora-gold'
                        : 'text-velmora-sand'
                    }
                  />
                ))}
                <span className="text-xs text-velmora-stone ml-1">
                  ({product.reviewCount} reviews)
                </span>
              </div>
            </div>

            <p className="text-sm text-velmora-stone leading-relaxed mt-6">
              {product.description}
            </p>

            {/* Variants */}
            <div className="mt-8">
              <p className="text-xs tracking-wider uppercase text-velmora-stone mb-3">
                Finish
              </p>
              <div className="flex gap-3">
                {product.variants.map((variant, i) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(i)}
                    className={`px-6 py-2.5 text-sm border transition-all ${
                      i === selectedVariant
                        ? 'border-velmora-gold bg-velmora-gold text-white'
                        : 'border-velmora-sand text-velmora-charcoal hover:border-velmora-gold'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <div className="flex items-center border border-velmora-sand">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 text-velmora-stone hover:text-velmora-ink transition-colors"
                >
                  −
                </button>
                <span className="px-4 py-3 text-sm min-w-[48px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 text-velmora-stone hover:text-velmora-ink transition-colors"
                >
                  +
                </button>
              </div>
              <button onClick={handleAddToCart} className="btn-primary flex-1">
                Add to Cart — ${(product.price * quantity).toFixed(2)}
              </button>
            </div>

            {/* Accordions */}
            <div className="mt-10">
              <ProductAccordion items={accordionItems} />
            </div>
          </div>
        </div>
      </div>

      <div className="hairline" />

      {/* Related products */}
      <RelatedProducts currentId={product.id} />
    </div>
  );
}