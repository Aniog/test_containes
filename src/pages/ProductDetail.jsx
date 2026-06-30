import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ShoppingBag, ArrowLeft } from 'lucide-react';
import { fetchProductBySlug, fetchProducts } from '../api/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

export default function ProductDetail() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [accordions, setAccordions] = useState({ desc: true, materials: false, shipping: false });
  const { addItem } = useCart();

  useEffect(() => {
    setLoading(true);
    setSelectedImage(0);
    setQuantity(1);
    window.scrollTo(0, 0);

    fetchProductBySlug(slug)
      .then((data) => {
        if (data) {
          setProduct(data);
          setSelectedVariant(data.data?.variants?.[0] || 'Gold');
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [slug]);

  useEffect(() => {
    if (!product) return;
    fetchProducts({ limit: 4 }).then((rows) => {
      setRelated(rows.filter((r) => r.id !== product.id).slice(0, 4));
    });
  }, [product]);

  const toggleAccordion = (key) => {
    setAccordions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleAddToCart = () => {
    if (!product) return;
    addItem(product, selectedVariant, quantity);
  };

  if (loading) {
    return (
      <div className="pt-24 md:pt-28 pb-20 max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 animate-pulse">
          <div className="aspect-[3/4] bg-velmora-sand rounded" />
          <div className="space-y-4">
            <div className="h-8 bg-velmora-sand rounded w-3/4" />
            <div className="h-6 bg-velmora-sand rounded w-1/3" />
            <div className="h-24 bg-velmora-sand rounded" />
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="pt-24 md:pt-28 pb-20 max-w-7xl mx-auto px-5 md:px-8 text-center">
        <h1 className="font-serif text-3xl mb-4">Product Not Found</h1>
        <Link to="/shop" className="text-velmora-gold underline text-sm">
          Browse all jewelry
        </Link>
      </div>
    );
  }

  const data = product.data || product;
  const gallery = data.gallery || [data.image_url];

  return (
    <div className="pt-20 md:pt-24 pb-20 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Breadcrumb */}
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-velmora-stone hover:text-velmora-gold transition-colors mb-6 md:mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3 md:gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 md:gap-3 overflow-x-auto md:overflow-visible">
              {gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-16 h-16 md:w-20 md:h-20 flex-shrink-0 border-2 overflow-hidden transition-colors ${
                    selectedImage === idx
                      ? 'border-velmora-gold'
                      : 'border-transparent hover:border-velmora-warm'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${data.name} view ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[3/4] bg-velmora-sand overflow-hidden">
              <img
                src={gallery[selectedImage]}
                alt={data.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Info */}
          <div className="md:py-4">
            <h1 className="font-serif text-2xl md:text-3xl uppercase tracking-widest">
              {data.name}
            </h1>

            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-velmora-gold text-velmora-gold" />
                <span className="text-sm font-medium">{data.rating}</span>
              </div>
              <span className="text-sm text-velmora-stone">
                {data.review_count} reviews
              </span>
            </div>

            <p className="mt-4 font-serif text-2xl md:text-3xl text-velmora-base">
              ${data.price.toFixed(2)}
            </p>

            <p className="mt-5 text-velmora-stone text-sm leading-relaxed">
              {data.description}
            </p>

            {/* Variants */}
            {data.variants && data.variants.length > 0 && (
              <div className="mt-6">
                <span className="text-xs uppercase tracking-widest text-velmora-stone font-medium">
                  Color
                </span>
                <div className="flex gap-3 mt-2.5">
                  {data.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-5 py-2 text-xs uppercase tracking-widest font-medium border transition-colors ${
                        selectedVariant === variant
                          ? 'border-velmora-gold bg-velmora-gold text-white'
                          : 'border-velmora-warm text-velmora-base hover:border-velmora-gold'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-6">
              <span className="text-xs uppercase tracking-widest text-velmora-stone font-medium">
                Quantity
              </span>
              <div className="flex items-center gap-3 mt-2.5">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 border border-velmora-warm flex items-center justify-center hover:border-velmora-gold transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-8 text-center text-sm font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 border border-velmora-warm flex items-center justify-center hover:border-velmora-gold transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full mt-8 bg-velmora-base text-white py-4 text-xs uppercase tracking-widest font-medium hover:bg-velmora-gold transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart — ${(data.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-velmora-warm">
              {/* Description */}
              <div className="border-b border-velmora-warm">
                <button
                  onClick={() => toggleAccordion('desc')}
                  className="w-full flex items-center justify-between py-4 text-left"
                >
                  <span className="text-xs uppercase tracking-widest font-medium">
                    Description
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-velmora-stone transition-transform ${
                      accordions.desc ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {accordions.desc && (
                  <div className="pb-4 text-sm text-velmora-stone leading-relaxed">
                    {data.description}
                  </div>
                )}
              </div>

              {/* Materials */}
              <div className="border-b border-velmora-warm">
                <button
                  onClick={() => toggleAccordion('materials')}
                  className="w-full flex items-center justify-between py-4 text-left"
                >
                  <span className="text-xs uppercase tracking-widest font-medium">
                    Materials & Care
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-velmora-stone transition-transform ${
                      accordions.materials ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {accordions.materials && (
                  <div className="pb-4 text-sm text-velmora-stone leading-relaxed">
                    {data.materials || '18K gold-plated materials. Handle with care to maintain finish.'}
                  </div>
                )}
              </div>

              {/* Shipping */}
              <div className="border-b border-velmora-warm">
                <button
                  onClick={() => toggleAccordion('shipping')}
                  className="w-full flex items-center justify-between py-4 text-left"
                >
                  <span className="text-xs uppercase tracking-widest font-medium">
                    Shipping & Returns
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-velmora-stone transition-transform ${
                      accordions.shipping ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {accordions.shipping && (
                  <div className="pb-4 text-sm text-velmora-stone leading-relaxed">
                    {data.shipping_info || 'Free worldwide shipping on orders over $50. Standard delivery 5-7 business days. 30-day hassle-free returns.'}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-20 md:mt-28">
            <h2 className="font-serif text-2xl md:text-3xl tracking-wide text-center mb-10 md:mb-14">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} showQuickAdd={false} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
