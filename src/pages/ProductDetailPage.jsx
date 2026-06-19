import { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ShoppingBag, Minus, Plus, ChevronLeft } from 'lucide-react';
import { products } from '@/data/products';
import { useCart, useCartDispatch, useCartItem } from '@/context/CartContext';
import ProductGallery from '@/components/product/ProductGallery';
import ProductAccordion from '@/components/product/ProductAccordion';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [variant, setVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const dispatch = useCartDispatch();
  const ref = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="serif-heading text-2xl mb-4">Product not found</h2>
          <Link to="/shop" className="btn-outline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const handleAdd = () => {
    dispatch({ type: 'ADD', productId: product.id, variant, quantity });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  // Related products (same category, exclude current)
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <main ref={ref} className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 pt-24 pb-16">
      {/* Breadcrumb */}
      <div className="mb-8">
        <Link
          to="/shop"
          className="inline-flex items-center gap-1 text-xs tracking-[0.1em] uppercase text-velvet-500 hover:text-velvet-700 transition-colors"
        >
          <ChevronLeft className="w-3 h-3" />
          Back to Shop
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
        {/* Gallery */}
        <ProductGallery product={product} />

        {/* Info */}
        <div className="flex flex-col">
          <h1
            id={`gallery-title-${product.id}`}
            className="font-serif text-2xl md:text-3xl tracking-[0.15em] uppercase font-medium leading-tight"
          >
            {product.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-1.5 mt-3 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-gold-500 text-gold-500' : 'text-velvet-300'}`}
              />
            ))}
            <span className="text-xs text-velvet-500 ml-1">({product.reviewCount} reviews)</span>
          </div>

          {/* Price */}
          <p className="font-serif text-xl tracking-wide mt-3">${product.price}</p>

          {/* Description */}
          <p className="text-sm text-velvet-500 leading-relaxed mt-5">{product.description}</p>

          {/* Variant */}
          <div className="mt-8">
            <p className="text-xs tracking-[0.1em] uppercase text-velvet-600 font-medium mb-3">
              Metal Tone
            </p>
            <div className="flex gap-3">
              {['gold', 'silver'].map((v) => (
                <button
                  key={v}
                  onClick={() => setVariant(v)}
                  className={`px-6 py-2.5 text-xs tracking-[0.08em] uppercase font-medium rounded-sm border transition-all duration-200
                    ${variant === v
                      ? 'border-velvet-900 bg-velvet-900 text-velvet-50'
                      : 'border-velvet-200 text-velvet-600 hover:border-velvet-400'}`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-6">
            <p className="text-xs tracking-[0.1em] uppercase text-velvet-600 font-medium mb-3">
              Quantity
            </p>
            <div className="flex items-center border border-velvet-200 rounded-sm w-fit">
              <button
                className="p-3 hover:bg-velvet-100 transition-colors"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="w-12 text-center text-sm font-medium">{quantity}</span>
              <button
                className="p-3 hover:bg-velvet-100 transition-colors"
                onClick={() => setQuantity(quantity + 1)}
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <button onClick={handleAdd} className="btn-primary w-full mt-8">
            <ShoppingBag className="w-4 h-4 mr-2" />
            {added ? 'Added to Cart' : 'Add to Cart'}
          </button>

          {/* Trust snippet */}
          <p className="mt-4 text-xs text-velvet-400 text-center tracking-wide">
            Free Shipping · 30-Day Returns · 18K Gold Plated
          </p>

          {/* Accordions */}
          <ProductAccordion product={product} />
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <section className="mt-20 pt-16 border-t border-velvet-200">
          <h2 className="serif-heading text-2xl md:text-3xl mb-10 text-center">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
            {related.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-[3/4] bg-velvet-100 rounded-sm overflow-hidden mb-3">
                  <div
                    data-strk-img-id={`related-${p.id}`}
                    data-strk-img={`[related-title-${p.id}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <h3 id={`related-title-${p.id}`} className="product-name text-xs group-hover:text-gold-600 transition-colors">
                  {p.name}
                </h3>
                <p className="text-sm text-velvet-800 mt-1">${p.price}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
