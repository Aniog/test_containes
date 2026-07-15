import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import products from '@/data/products';
import ImageGallery from '@/components/product/ImageGallery';
import ProductAccordions from '@/components/product/ProductAccordions';
import { useCart } from '@/context/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedVariant(0);
    setQuantity(1);
    setAdded(false);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-velvet-muted">Product not found.</p>
      </div>
    );
  }

  const variant = product.variants[selectedVariant];

  const handleAddToCart = () => {
    addItem(product.id, variant.id, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="pt-20 md:pt-28 bg-velvet-card">
      <div className="container-wide">
        {/* Breadcrumb */}
        <div className="mb-6 text-xs text-velvet-muted tracking-wide">
          <Link to="/" className="hover:text-velvet-accent transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-velvet-accent transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-velvet-base">{product.name}</span>
        </div>

        {/* Product layout */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <ImageGallery product={product} />

          {/* Product info */}
          <div>
            <h1 id={product.titleId} className="font-serif text-2xl md:text-3xl uppercase tracking-[.12em] text-velvet-base leading-tight">
              {product.name}
            </h1>

            {/* Price + rating */}
            <div className="flex items-center gap-4 mt-3 mb-5">
              <span className="text-xl font-medium tabular-nums">${product.price}</span>
              <div className="flex items-center gap-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-velvet-accent text-velvet-accent'
                          : 'fill-velvet-border text-velvet-border'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs text-velvet-muted">({product.reviewCount} reviews)</span>
              </div>
            </div>

            {/* Short description */}
            <p id={product.descId} className="text-sm text-velvet-muted leading-relaxed mb-6">
              {product.description.slice(0, 120)}&hellip;
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-widest text-velvet-base mb-3">Finish</p>
              <div className="flex gap-3">
                {product.variants.map((v, i) => (
                  <button
                    key={v.id}
                    onClick={() => setSelectedVariant(i)}
                    className={`flex items-center gap-2 px-5 py-2.5 border text-sm transition-all ${
                      i === selectedVariant
                        ? 'border-velvet-accent bg-velvet-accent/5 text-velvet-base'
                        : 'border-velvet-border text-velvet-muted hover:border-velvet-muted'
                    }`}
                  >
                    <span
                      className="w-3 h-3 rounded-full border border-velvet-border"
                      style={{ backgroundColor: v.color }}
                    />
                    {v.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-widest text-velvet-base mb-3">Quantity</p>
              <div className="flex items-center border border-velvet-border w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2.5 hover:text-velvet-accent transition-colors"
                >
                  −
                </button>
                <span className="px-5 py-2.5 text-sm tabular-nums border-x border-velvet-border">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2.5 hover:text-velvet-accent transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`btn-primary w-full text-center justify-center flex mb-3 transition-all ${
                added ? 'bg-velvet-success hover:bg-velvet-success' : ''
              }`}
            >
              {added ? 'Added to Bag' : 'Add to Bag'}
            </button>

            <p className="text-xs text-center text-velvet-muted">
              Free worldwide shipping &middot; 30-day returns
            </p>

            {/* Accordions */}
            <ProductAccordions product={product} />
          </div>
        </div>
      </div>

      {/* Related products */}
      <div className="section-padding bg-velvet-surface">
        <div className="container-wide">
          <h2 className="font-serif text-2xl md:text-3xl font-light text-velvet-base mb-10 text-center">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
            {relatedProducts.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group block">
                <div className="aspect-[3/4] overflow-hidden bg-velvet-border/20 mb-4">
                  <img
                    data-strk-img-id={`related-${p.id}`}
                    data-strk-img={`[${p.descId}] [${p.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-xs uppercase tracking-[.12em] text-velvet-base mb-1">{p.name}</h3>
                <p className="text-sm font-medium tabular-nums">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
