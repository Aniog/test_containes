import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Minus, Plus, ArrowLeft, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Rating } from '@/components/ui/Rating';
import { Accordion } from '@/components/ui/Accordion';
import { getProductBySlug, getRelatedProducts } from '@/data/products';

function RelatedProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <Link to={`/product/${product.slug}`} className="group block">
      <div className="product-card bg-white">
        <div className="relative aspect-[4/5] overflow-hidden bg-warmStone/30">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <button
            type="button"
            onClick={(e) => { e.preventDefault(); addItem(product, 'gold', 1); }}
            className="absolute bottom-3 right-3 w-9 h-9 bg-ivory rounded-full flex items-center justify-center
                       shadow-md opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0
                       transition-all duration-300 hover:bg-gold hover:text-charcoal text-charcoal"
            aria-label="Quick add"
          >
            <ShoppingBag size={15} />
          </button>
        </div>
        <div className="p-4">
          <h3 className="product-name text-[11px] text-charcoal leading-snug mb-1">
            {product.name}
          </h3>
          <Rating value={product.rating} count={product.reviews} size={11} />
          <p className="mt-2 font-serif text-base text-charcoal">${product.price}</p>
        </div>
      </div>
    </Link>
  );
}

export function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addItem } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(
    product?.variants?.[0]?.value || 'gold'
  );
  const [quantity, setQuantity] = useState(1);
  const [addedFeedback, setAddedFeedback] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-charcoal mb-4">Product not found</h1>
          <Link to="/collection" className="btn-secondary">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const related = getRelatedProducts(product.id, 4);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAddedFeedback(true);
    setTimeout(() => setAddedFeedback(false), 2000);
  };

  const accordions = [
    { title: 'Description', content: product.description },
    {
      title: 'Materials & Care',
      content: (
        <div className="space-y-3">
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-wide text-charcoal mb-1">Materials</p>
            <p className="font-sans text-sm text-warmGray-600">{product.material}</p>
          </div>
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-wide text-charcoal mb-1">Care</p>
            <p className="font-sans text-sm text-warmGray-600">{product.care}</p>
          </div>
        </div>
      ),
    },
    { title: 'Shipping & Returns', content: product.shipping },
  ];

  return (
    <div className="min-h-screen bg-ivory">
      {/* Back link */}
      <div className="section-container pt-28 pb-4">
        <Link
          to="/collection"
          className="inline-flex items-center gap-2 font-sans text-xs text-warmGray-500 hover:text-charcoal transition-colors"
        >
          <ArrowLeft size={14} />
          Back to Shop
        </Link>
      </div>

      {/* Product layout */}
      <div className="section-container pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left: Gallery */}
          <div className="space-y-3">
            {/* Main image */}
            <div className="aspect-square overflow-hidden bg-warmStone/20">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setSelectedImage(i)}
                    className={`w-20 h-20 overflow-hidden border-2 transition-colors duration-200
                      ${selectedImage === i ? 'border-charcoal' : 'border-transparent hover:border-warmGray-300'}`}
                    aria-label={`View image ${i + 1}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Info */}
          <div className="lg:pt-4">
            {/* Category label */}
            <p className="font-sans text-xs font-medium uppercase tracking-extra-wide text-gold mb-3">
              {product.category}
            </p>

            {/* Name */}
            <h1 className="font-serif text-3xl lg:text-4xl font-light text-charcoal uppercase tracking-ultra-wide mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="mb-4">
              <Rating value={product.rating} count={product.reviews} size={15} />
            </div>

            {/* Price */}
            <p className="font-serif text-2xl text-charcoal mb-6">
              ${product.price}
            </p>

            {/* Description */}
            <p className="font-sans text-sm text-warmGray-600 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            {product.variants?.length > 1 && (
              <div className="mb-6">
                <p className="font-sans text-xs font-semibold uppercase tracking-extra-wide text-charcoal mb-3">
                  Finish: <span className="font-normal capitalize">{selectedVariant}</span>
                </p>
                <div className="flex gap-3">
                  {product.variants.map((v) => (
                    <button
                      key={v.value}
                      type="button"
                      onClick={() => setSelectedVariant(v.value)}
                      className={`px-4 py-2 border transition-all duration-200 font-sans text-xs uppercase tracking-wide
                        ${selectedVariant === v.value
                          ? 'border-charcoal bg-charcoal text-ivory'
                          : 'border-warmGray-300 text-charcoal hover:border-charcoal'
                        }`}
                    >
                      {v.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity + Add to cart */}
            <div className="flex items-center gap-4 mb-8">
              {/* Quantity */}
              <div className="flex items-center border border-warmGray-300">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-warmGray-500 hover:text-charcoal transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="w-12 text-center font-sans text-sm text-charcoal">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-warmGray-500 hover:text-charcoal transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>

              {/* Add to cart */}
              <button
                type="button"
                onClick={handleAddToCart}
                className={`flex-1 btn-gold transition-all duration-300 ${
                  addedFeedback ? 'bg-emerald-600 hover:bg-emerald-700' : ''
                }`}
              >
                {addedFeedback ? 'Added to Bag!' : 'Add to Bag'}
              </button>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                'Free Worldwide Shipping',
                '30-Day Returns',
                '18K Gold Plated',
                'Hypoallergenic',
              ].map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                  <span className="font-sans text-xs text-warmGray-600">{badge}</span>
                </div>
              ))}
            </div>

            <div className="hairline" />

            {/* Accordions */}
            <div className="mt-6">
              <Accordion items={accordions} />
            </div>
          </div>
        </div>
      </div>

      {/* You may also like */}
      {related.length > 0 && (
        <section className="py-16 lg:py-24 bg-cream">
          <div className="section-container">
            <h2 className="font-serif text-2xl lg:text-3xl font-light text-charcoal text-center mb-12">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
              {related.map((p) => (
                <RelatedProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
