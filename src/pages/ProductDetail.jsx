import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import strkImgConfig from '@/strk-img-config.json';

function getConfigImageUrl(imgId) {
  const entry = strkImgConfig[imgId];
  if (entry?.results?.length > 0) {
    const pickedId = entry.picked;
    const found = entry.results.find(r => String(r.id) === String(pickedId));
    return found?.url || entry.results[0]?.url || '';
  }
  return '';
}

const productImgIdMap = {
  "vivid-aura-jewels": "bestseller-vivid-aura-jewels-1",
  "majestic-flora-nectar": "bestseller-majestic-flora-nectar-1",
  "golden-sphere-huggies": "bestseller-golden-sphere-huggies-1",
  "amber-lace-earrings": "bestseller-amber-lace-earrings-1",
  "royal-heirloom-set": "bestseller-royal-heirloom-set-1",
};

function ProductImg({ productId, alt, ratio, width, className }) {
  const imgId = productImgIdMap[productId];
  const url = getConfigImageUrl(imgId);
  return (
    <img
      alt={alt}
      src={url || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"}
      className={className}
    />
  );
}

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-charcoal-100/40">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-sm font-medium tracking-wide text-charcoal-800 uppercase">{title}</span>
        {open ? <ChevronUp size={16} className="text-charcoal-400" /> : <ChevronDown size={16} className="text-charcoal-400" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-5' : 'max-h-0'}`}>
        <div className="text-sm text-charcoal-500 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const { addItem } = useCart();
  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const found = products.find((p) => p.id === id);
    setProduct(found);
    setActiveImage(0);
    setQuantity(1);
    setSelectedVariant('Gold');
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <p className="text-charcoal-400">Product not found</p>
      </div>
    );
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <main className="pt-20 md:pt-24 bg-ivory-50">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-2 text-xs text-charcoal-400">
          <Link to="/" className="hover:text-charcoal-700 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-charcoal-700 transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-charcoal-600">{product.name}</span>
        </div>
      </div>

      {/* Product */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Images */}
          <div>
            <div className="aspect-[4/5] bg-ivory-200 mb-4 overflow-hidden">
              <ProductImg
                productId={product.id}
                alt={product.name}
                ratio="4x5"
                width={800}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-20 h-24 bg-ivory-200 overflow-hidden transition-all duration-200 ${
                    activeImage === i ? 'ring-2 ring-gold-400' : 'ring-1 ring-charcoal-100/30 opacity-60 hover:opacity-100'
                  }`}
                >
                  <ProductImg
                    productId={product.id}
                    alt={`${product.name} view ${i + 1}`}
                    ratio="4x5"
                    width={100}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="py-2">
            {product.badge && (
              <span className="inline-block text-[10px] tracking-widest uppercase text-gold-600 bg-gold-50 px-3 py-1 font-semibold mb-4">
                {product.badge}
              </span>
            )}

            <h1 className="font-serif text-2xl md:text-3xl tracking-wider text-charcoal-900 mb-3 uppercase">
              {product.name}
            </h1>

            <p className="font-serif text-xl md:text-2xl text-charcoal-800 mb-4">
              ${product.price}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.floor(product.rating) ? 'text-gold-400 fill-gold-400' : 'text-charcoal-200'}
                  />
                ))}
              </div>
              <span className="text-xs text-charcoal-400">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="text-sm text-charcoal-500 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs tracking-wider uppercase text-charcoal-600 font-medium mb-3">
                Tone: {selectedVariant}
              </p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2.5 text-xs tracking-wider uppercase font-medium transition-all duration-200 border ${
                      selectedVariant === variant
                        ? 'border-charcoal-900 bg-charcoal-900 text-ivory-50'
                        : 'border-charcoal-200 text-charcoal-600 hover:border-charcoal-400'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs tracking-wider uppercase text-charcoal-600 font-medium mb-3">Quantity</p>
              <div className="inline-flex items-center border border-charcoal-200">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-charcoal-500 hover:text-charcoal-800 transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="w-12 text-center text-sm font-medium text-charcoal-800">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-charcoal-500 hover:text-charcoal-800 transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="w-full flex items-center justify-center gap-3 py-4 bg-gold-500 text-white text-xs tracking-widest uppercase font-semibold 
                hover:bg-gold-600 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/20"
            >
              <ShoppingBag size={16} strokeWidth={1.5} />
              Add to Bag — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Trust badges */}
            <div className="flex items-center justify-center gap-6 mt-6 py-4 border-t border-b border-charcoal-100/30">
              <span className="text-[10px] text-charcoal-400 uppercase tracking-wider">Free Shipping</span>
              <span className="text-[10px] text-charcoal-300">|</span>
              <span className="text-[10px] text-charcoal-400 uppercase tracking-wider">30-Day Returns</span>
              <span className="text-[10px] text-charcoal-300">|</span>
              <span className="text-[10px] text-charcoal-400 uppercase tracking-wider">Hypoallergenic</span>
            </div>

            {/* Accordions */}
            <div className="mt-4">
              <Accordion title="Description" defaultOpen>
                <p>{product.fullDescription}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2"><strong>Materials:</strong> {product.materials}</p>
                <p><strong>Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="border-t border-charcoal-100/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal-900 font-light text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-[4/5] bg-ivory-200 mb-3 overflow-hidden">
                  <ProductImg
                    productId={p.id}
                    alt={p.name}
                    ratio="4x5"
                    width={400}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-xs tracking-ultra-wide text-charcoal-800 mb-1 group-hover:text-gold-600 transition-colors">
                  {p.name}
                </h3>
                <p className="text-sm font-semibold text-charcoal-900">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
