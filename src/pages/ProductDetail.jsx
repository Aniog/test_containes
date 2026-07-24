import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/product/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const containerRef = useRef(null);
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [openAccordion, setOpenAccordion] = useState('description');

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  useEffect(() => {
    setSelectedImage(0);
    setSelectedVariant(0);
    setQuantity(1);
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <div className="max-w-[1400px] mx-auto px-4">
          <h1 className="font-serif text-3xl text-espresso mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-accent">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, product.variants[selectedVariant], quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div ref={containerRef}>
      <div className="pt-24 md:pt-32 pb-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-taupe mb-8 tracking-wider uppercase">
            <Link to="/" className="hover:text-espresso transition-colors">Home</Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-espresso transition-colors">Shop</Link>
            <span>/</span>
            <span className="text-espresso">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {/* Left: Image Gallery */}
            <div>
              <div className="aspect-square bg-gradient-to-br from-gold-light/20 via-warmgray to-taupe/10 mb-4 overflow-hidden flex items-center justify-center">
                <span className="font-serif text-8xl text-gold/20">{product.name.charAt(0)}</span>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`w-16 md:w-20 aspect-square bg-warmgray overflow-hidden transition-all duration-300 flex items-center justify-center ${
                      selectedImage === i ? 'ring-1 ring-gold' : 'opacity-60 hover:opacity-100'
                    }`}
                  >
                    <span className="font-serif text-xl text-gold/30">{i + 1}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Product Info */}
            <div>
              <h1 id={`pdp-name-${product.id}`} className="font-serif text-2xl md:text-3xl tracking-[0.15em] uppercase text-espresso mb-3">
                {product.name}
              </h1>
              <p className="font-serif text-2xl text-espresso mb-4">${product.price}</p>

              {/* Rating */}
              <div className="flex items-center gap-1.5 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'fill-borderline text-borderline'}
                  />
                ))}
                <span className="text-xs text-taupe ml-1">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              <p className="text-taupe text-sm leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Variant Selector */}
              {product.variants.length > 1 && (
                <div className="mb-8">
                  <p className="text-xs tracking-[0.15em] uppercase text-espresso mb-3">
                    Finish: <span className="font-medium">{product.variants[selectedVariant]}</span>
                  </p>
                  <div className="flex gap-3">
                    {product.variants.map((v, i) => (
                      <button
                        key={v}
                        onClick={() => setSelectedVariant(i)}
                        className={`px-6 py-2.5 text-xs tracking-wider uppercase border transition-all duration-300 ${
                          selectedVariant === i
                            ? 'border-espresso bg-espresso text-cream'
                            : 'border-borderline text-taupe hover:border-espresso'
                        }`}
                      >
                        <span
                          className="inline-block w-3 h-3 rounded-full mr-2 align-middle"
                          style={{ backgroundColor: product.colors[i] }}
                        />
                        {v}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="mb-8">
                <p className="text-xs tracking-[0.15em] uppercase text-espresso mb-3">Quantity</p>
                <div className="flex items-center border border-borderline w-fit">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:text-gold transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-12 text-center text-sm">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:text-gold transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                className={`btn-accent w-full mb-6 transition-all duration-300 ${
                  added ? 'bg-green-600 hover:bg-green-600' : ''
                }`}
              >
                <ShoppingBag size={16} className="mr-2" />
                {added ? 'Added to Bag' : 'Add to Cart'}
              </button>

              {/* Accordions */}
              <div className="border-t border-borderline">
                {[
                  { key: 'description', label: 'Description', content: product.description },
                  { key: 'materials', label: 'Materials & Care', content: `${product.materials}\n\n${product.care}` },
                  { key: 'shipping', label: 'Shipping & Returns', content: `${product.shipping}\n\n${product.returns}` },
                ].map((acc) => (
                  <div key={acc.key} className="border-b border-borderline">
                    <button
                      onClick={() => setOpenAccordion(openAccordion === acc.key ? '' : acc.key)}
                      className="w-full flex items-center justify-between py-4 text-sm tracking-wider uppercase text-espresso hover:text-gold transition-colors"
                    >
                      {acc.label}
                      {openAccordion === acc.key ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openAccordion === acc.key ? 'max-h-96 pb-4' : 'max-h-0'
                      }`}
                    >
                      <p className="text-taupe text-sm leading-relaxed whitespace-pre-line">
                        {acc.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="py-16 md:py-20 bg-warmgray">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
          <h2 className="font-serif text-2xl md:text-3xl font-light text-espresso tracking-wide text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}