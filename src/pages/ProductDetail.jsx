import { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/components/cart/CartContext';
import ProductGallery from '@/components/product/ProductGallery';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-sand">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-xs tracking-widest uppercase text-espresso">{title}</span>
        {open ? <ChevronUp className="w-4 h-4 text-stone" /> : <ChevronDown className="w-4 h-4 text-stone" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <p className="text-sm text-espresso-light leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [productId]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-2xl text-espresso mb-4">Product Not Found</h2>
          <Link to="/shop" className="btn-outline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  useEffect(() => {
    setSelectedVariant(product.variants[0]);
    setQuantity(1);
    setAdded(false);
  }, [productId]);

  const handleAdd = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <main ref={containerRef} className="pt-24 pb-16">
      <div className="container-max section-padding">
        {/* Breadcrumb */}
        <div className="text-xs tracking-wide text-stone mb-8">
          <Link to="/" className="hover:text-espresso transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-espresso transition-colors">{product.category}</Link>
          <span className="mx-2">/</span>
          <span id={`pdp-name-${product.id}`} className="text-espresso">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Gallery */}
          <ProductGallery productId={product.id} productName={product.name} images={product.images} />

          {/* Details */}
          <div className="flex flex-col">
            <h1 className="font-serif text-3xl md:text-4xl tracking-wider uppercase text-espresso leading-tight mb-2">
              {product.name}
            </h1>
            <p className="text-2xl font-light text-espresso mb-3">${product.price}</p>
            <div className="flex items-center gap-1.5 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-sand'}`} />
                ))}
              </div>
              <span className="text-xs text-stone">({product.reviewCount} reviews)</span>
            </div>
            <p className="text-espresso-light leading-relaxed text-sm md:text-base mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-widest uppercase text-stone mb-3">Tone</p>
              <div className="flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-6 py-2 text-sm tracking-wide border transition-all ${
                      selectedVariant === v
                        ? 'border-espresso bg-espresso text-warmwhite'
                        : 'border-sand text-espresso hover:border-stone'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-sans text-xs tracking-widest uppercase text-stone mb-3">Quantity</p>
              <div className="flex items-center gap-0 border border-sand w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-espresso hover:bg-sand-light transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 text-center text-sm font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-espresso hover:bg-sand-light transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAdd}
              className={`w-full py-4 text-sm tracking-widest uppercase font-medium transition-all duration-300 mb-8 ${
                added
                  ? 'bg-gold text-espresso'
                  : 'bg-espresso text-warmwhite hover:bg-bronze'
              }`}
            >
              {added ? 'Added to Bag' : 'Add to Bag'} — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div>
              <Accordion title="Description" defaultOpen>{product.description}</Accordion>
              <Accordion title="Materials & Care">
                <strong>Materials:</strong> {product.materials}<br /><br />
                <strong>Care:</strong> {product.care}
              </Accordion>
              <Accordion title="Shipping & Returns">{product.shipping}</Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-24">
          <div className="hairline-divider mb-12" />
          <h2 className="font-serif text-2xl md:text-3xl tracking-wide text-espresso text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((rp) => (
              <Link key={rp.id} to={`/product/${rp.id}`} className="group block">
                <div
                  className="aspect-[3/4] bg-sand-light overflow-hidden mb-4"
                  data-strk-bg-id={`related-${rp.id}`}
                  data-strk-bg={`[related-name-${rp.id}] gold jewelry`}
                  data-strk-bg-ratio="3x4"
                  data-strk-bg-width="400"
                />
                <h3 id={`related-name-${rp.id}`} className="font-serif text-sm tracking-wider uppercase text-espresso mb-1">
                  {rp.name}
                </h3>
                <p className="text-sm text-espresso">${rp.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
