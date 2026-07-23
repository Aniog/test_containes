import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronDown, Minus, Plus } from 'lucide-react';
import { getProductById, products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import StarRating from '@/components/ui/StarRating';
import ProductCard from '@/components/ui/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(
    product?.variants?.[0] || ''
  );
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) {
    return (
      <div className="pt-32 text-center">
        <h1 className="font-serif text-2xl text-text-primary">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-accent underline text-sm">
          Back to Shop
        </Link>
      </div>
    );
  }

  const related = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  const handleAdd = () => {
    addItem(product, selectedVariant, quantity);
  };

  return (
    <div className="pt-20 md:pt-24 bg-surface min-h-screen">
      <div className="max-w-container mx-auto px-6 md:px-12 py-8 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[3/4] bg-surface-alt border border-hairline overflow-hidden">
              <img
                data-strk-img-id={`pdp-${product.id}-${selectedImage}`}
                data-strk-img={`[pdp-${product.id}-name]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3 mt-4">
              {Array.from({ length: product.images }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-16 h-20 md:w-20 md:h-24 border overflow-hidden ${
                    selectedImage === i ? 'border-text-primary' : 'border-hairline'
                  }`}
                >
                  <img
                    data-strk-img-id={`pdp-thumb-${product.id}-${i}`}
                    data-strk-img={`[pdp-${product.id}-name]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="md:py-4">
            <p className="font-sans text-xs uppercase tracking-label text-text-secondary">
              {product.category}
            </p>
            <h1
              id={`pdp-${product.id}-name`}
              className="font-serif text-2xl md:text-3xl lg:text-4xl uppercase tracking-widest text-text-primary font-normal mt-2"
            >
              {product.name}
            </h1>
            <div className="mt-3 flex items-center gap-3">
              <StarRating rating={product.rating} size={14} />
              <span className="text-xs text-text-secondary">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>
            <p className="mt-4 font-sans text-xl md:text-2xl font-medium text-text-primary">
              ${product.price}
            </p>
            <p className="mt-5 font-sans text-sm text-text-secondary leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selector */}
            {product.variants.length > 1 && (
              <div className="mt-6">
                <p className="font-sans text-xs uppercase tracking-label text-text-secondary mb-2">
                  Tone
                </p>
                <div className="flex gap-2">
                  {product.variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-5 py-2 border text-xs font-sans uppercase tracking-label transition-colors ${
                        selectedVariant === v
                          ? 'border-text-primary bg-text-primary text-white'
                          : 'border-hairline text-text-primary hover:border-text-primary'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-6">
              <p className="font-sans text-xs uppercase tracking-label text-text-secondary mb-2">
                Quantity
              </p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-hairline flex items-center justify-center text-text-primary hover:bg-surface-alt"
                >
                  <Minus size={14} />
                </button>
                <span className="font-sans text-sm text-text-primary w-6 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-hairline flex items-center justify-center text-text-primary hover:bg-surface-alt"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAdd}
              className="mt-8 w-full bg-accent text-white py-4 uppercase text-xs font-sans font-medium tracking-label hover:bg-accent-dark transition-colors"
            >
              Add to Cart — ${product.price * quantity}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-hairline">
              {[
                { key: 'description', title: 'Description', content: product.description },
                { key: 'materials', title: 'Materials & Care', content: `${product.materials} ${product.care}` },
                { key: 'shipping', title: 'Shipping & Returns', content: `${product.shipping} ${product.returns}` },
              ].map((section) => (
                <div key={section.key} className="border-b border-hairline">
                  <button
                    onClick={() => toggleAccordion(section.key)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="font-sans text-xs uppercase tracking-label text-text-primary">
                      {section.title}
                    </span>
                    <ChevronDown
                      size={16}
                      className={`text-text-secondary transition-transform ${
                        openAccordion === section.key ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openAccordion === section.key && (
                    <div className="pb-4 font-sans text-sm text-text-secondary leading-relaxed">
                      {section.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <div className="bg-surface-alt border-t border-hairline">
          <div className="max-w-container mx-auto px-6 md:px-12 py-14 md:py-20">
            <h2 className="font-serif text-2xl md:text-3xl text-text-primary font-normal text-center mb-8 md:mb-12">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
