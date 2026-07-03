import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, Minus, Plus, Heart } from 'lucide-react';
import { getProductById, getRelatedProducts } from '@/data/products';
import { useCart } from '@/lib/cartContext';
import JewelryImage from '@/components/JewelryImage';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-velmora-sand">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-4 text-left"
      >
        <span className="font-sans text-xs tracking-widest uppercase text-velmora-espresso">
          {title}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-velmora-stone transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <div className="font-sans text-sm text-velmora-stone leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const related = getRelatedProducts(id, 4);
  const { addItem } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('gold');
  const [adding, setAdding] = useState(false);
  const [wishlist, setWishlist] = useState(false);

  if (!product) {
    return (
      <div className="section-padding py-24 text-center">
        <h2 className="font-serif text-2xl mb-4">Product not found</h2>
        <Link to="/shop" className="btn-outline">Back to Shop</Link>
      </div>
    );
  }

  const handleAdd = () => {
    setAdding(true);
    addItem(product, quantity, variant);
    setTimeout(() => setAdding(false), 600);
  };

  return (
    <div className="bg-velmora-cream min-h-screen pt-20 md:pt-24">
      <div className="section-padding py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 lg:gap-20">
          {/* Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible scrollbar-hide">
              {product.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 border transition-colors ${
                    selectedImage === idx
                      ? 'border-velmora-espresso'
                      : 'border-velmora-sand hover:border-velmora-stone'
                  }`}
                >
                  <JewelryImage
                    id={`${product.id}-thumb-${idx}`}
                    query={`[pd-title]`}
                    ratio="1x1"
                    width={120}
                    alt={`${product.name} view ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            <div className="flex-1 aspect-[3/4] bg-velmora-ivory">
              <JewelryImage
                id={`${product.id}-main`}
                query={`[pd-title]`}
                ratio="3x4"
                width={800}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-1">
              <span className="font-sans text-[10px] tracking-widest uppercase text-velmora-stone">
                {product.category}
              </span>
            </div>
            <h1 id="pd-title" className="font-serif text-2xl md:text-3xl tracking-widest uppercase font-medium mb-3">
              {product.name}
            </h1>
            <div className="flex items-center gap-3 mb-5">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-velmora-gold text-velmora-gold" />
                <span className="font-sans text-sm text-velmora-espresso">{product.rating}</span>
              </div>
              <span className="font-sans text-sm text-velmora-taupe">
                {product.reviews} reviews
              </span>
            </div>
            <p className="font-serif text-2xl text-velmora-espresso mb-6">
              ${product.price}
            </p>
            <p className="font-sans text-sm text-velmora-stone leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant */}
            <div className="mb-6">
              <span className="font-sans text-xs tracking-widest uppercase text-velmora-stone block mb-3">
                Tone
              </span>
              <div className="flex gap-3">
                {['gold', 'silver'].map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-5 py-2.5 font-sans text-xs tracking-widest uppercase border transition-all ${
                      variant === v
                        ? 'border-velmora-espresso bg-velmora-espresso text-velmora-cream'
                        : 'border-velmora-sand text-velmora-stone hover:border-velmora-stone'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center border border-velmora-sand">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-3 text-velmora-stone hover:text-velmora-espresso transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-3 font-sans text-sm min-w-[2rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 py-3 text-velmora-stone hover:text-velmora-espresso transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button
                onClick={handleAdd}
                disabled={adding}
                className="flex-1 btn-primary disabled:opacity-60"
              >
                {adding ? 'Added!' : 'Add to Cart'}
              </button>
              <button
                onClick={() => setWishlist(!wishlist)}
                className={`p-3 border transition-colors ${
                  wishlist
                    ? 'border-velmora-gold bg-velmora-gold/10 text-velmora-golddark'
                    : 'border-velmora-sand text-velmora-stone hover:border-velmora-stone'
                }`}
                aria-label="Add to wishlist"
              >
                <Heart className={`w-5 h-5 ${wishlist ? 'fill-velmora-gold' : ''}`} />
              </button>
            </div>

            {/* Accordions */}
            <Accordion title="Description" defaultOpen>
              <p>{product.description}</p>
            </Accordion>
            <Accordion title="Materials & Care">
              <p>{product.care}</p>
            </Accordion>
            <Accordion title="Shipping & Returns">
              <p>
                Free worldwide shipping on all orders over $50. Standard delivery takes 5–10 business days.
                Express shipping available at checkout. We accept returns within 30 days of delivery — items must be
                unworn and in original packaging.
              </p>
            </Accordion>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <div className="border-t border-velmora-sand">
          <div className="section-padding py-14 md:py-20">
            <h2 className="font-serif text-2xl md:text-3xl font-light text-center mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p, idx) => (
                <Link key={p.id} to={`/product/${p.id}`} className="group">
                  <div className="aspect-[3/4] bg-velmora-ivory overflow-hidden mb-3">
                    <JewelryImage
                      id={`rel-${p.id}`}
                      query={`[rel-title-${idx}]`}
                      ratio="3x4"
                      width={500}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 id={`rel-title-${idx}`} className="text-product mb-1">
                    {p.name}
                  </h3>
                  <p className="font-sans text-sm text-velmora-stone">${p.price}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
