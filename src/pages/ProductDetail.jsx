import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus } from 'lucide-react';
import products from '../data/products';
import ProductGallery from '../components/product/ProductGallery';
import ProductAccordion from '../components/product/ProductAccordion';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-velvet-500 mb-4">Product not found</p>
          <Link to="/shop" className="btn-outline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <main className="pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs tracking-wider uppercase text-velvet-500">
            <Link to="/" className="hover:text-velvet-950 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-velvet-950 transition-colors">Shop</Link>
            <span>/</span>
            <span className="text-velvet-950">{product.name}</span>
          </div>
        </div>

        {/* Product details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Gallery */}
          <ProductGallery product={product} />

          {/* Info */}
          <div>
            <p id={`pdp-${product.id}-name`} className="font-serif text-2xl md:text-3xl tracking-widest uppercase mb-4">
              {product.name}
            </p>

            <p className="font-serif text-2xl text-gold mb-4">${product.price}</p>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating)
                      ? 'fill-gold text-gold'
                      : 'text-velvet-300'
                  }`}
                />
              ))}
              <span className="text-xs text-velvet-500 ml-2">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="text-sm text-velvet-700 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs tracking-widest uppercase text-velvet-700 mb-3">Finish</p>
              <div className="flex gap-3">
                {product.variants.map((variant, idx) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(idx)}
                    className={`px-6 py-2.5 text-xs tracking-wider uppercase border transition-all duration-300 ${
                      idx === selectedVariant
                        ? 'border-velvet-950 bg-velvet-950 text-white'
                        : 'border-velvet-950/20 text-velvet-700 hover:border-velvet-950'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs tracking-widest uppercase text-velvet-700 mb-3">Quantity</p>
              <div className="flex items-center border border-velvet-950/20 w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2.5 hover:text-gold transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-5 text-sm font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2.5 hover:text-gold transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => {
                for (let i = 0; i < quantity; i++) {
                  addItem(product, product.variants[selectedVariant]);
                }
                setQuantity(1);
              }}
              className="btn-primary w-full mb-10"
            >
              Add to Bag — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <ProductAccordion product={product} />
          </div>
        </div>

        {/* Related products */}
        <div className="mt-24 pt-16 border-t border-velvet-950/10">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Complete the Look</p>
            <h2 className="font-serif text-3xl tracking-wider">YOU MAY ALSO LIKE</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-[3/4] bg-velvet-100 overflow-hidden mb-4">
                  <img
                    data-strk-img-id={`related-${p.id}`}
                    data-strk-img={`[related-${p.id}-name]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p
                  id={`related-${p.id}-name`}
                  className="text-xs tracking-widest uppercase font-medium text-velvet-950 mb-1"
                >
                  {p.name}
                </p>
                <p className="text-sm text-velvet-700">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}