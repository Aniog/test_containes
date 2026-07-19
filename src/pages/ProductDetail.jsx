import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronLeft } from 'lucide-react';
import { products } from '@/data/products';
import { useCartActions } from '@/context/CartContext';
import ProductGallery from '@/components/product/ProductGallery';
import Accordion from '@/components/ui/Accordion';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.id === slug);
  const { addItem } = useCartActions();
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const containerRef = useRef(null);

  const related = products.filter((p) => p.id !== slug).slice(0, 4);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setQuantity(1);
    setAdded(false);
    setSelectedVariant(0);
  }, [slug]);

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="font-serif text-3xl mb-4">Product Not Found</h1>
        <Link to="/shop" className="btn-outline">Back to Shop</Link>
      </div>
    );
  }

  const handleAdd = () => {
    addItem(product, product.variants[selectedVariant], quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <div ref={containerRef} className="pt-20 lg:pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link to="/shop" className="inline-flex items-center gap-1 text-xs tracking-wider uppercase text-velvet-500 hover:text-velvet-900 transition-colors">
            <ChevronLeft className="w-3.5 h-3.5" />
            Back to Shop
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Gallery */}
          <ProductGallery product={product} />

          {/* Details */}
          <div className="flex flex-col">
            <div>
              <p className="text-xs tracking-super uppercase text-sand-600 font-medium mb-2">{product.type}</p>
              <h1 className="font-serif text-2xl md:text-3xl tracking-wider uppercase text-velvet-900 mb-3">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < Math.floor(product.rating) ? 'text-sand-500 fill-sand-500' : 'text-velvet-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs text-velvet-500">({product.reviewCount} reviews)</span>
              </div>

              {/* Price */}
              <p className="text-xl font-medium text-velvet-900 mb-6">${product.price}</p>

              {/* Description */}
              <p className="text-sm text-velvet-600 leading-relaxed mb-8">{product.description}</p>
            </div>

            {/* Variants */}
            {product.variants.length > 1 && (
              <div className="mb-6">
                <p className="text-xs tracking-wider uppercase text-velvet-700 mb-3 font-medium">
                  Finish: <span className="text-velvet-900">{product.variants[selectedVariant]}</span>
                </p>
                <div className="flex gap-3">
                  {product.variants.map((variant, idx) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(idx)}
                      className={`px-6 py-2.5 text-sm border transition-all duration-300 ${
                        selectedVariant === idx
                          ? 'border-velvet-900 bg-velvet-900 text-velvet-50'
                          : 'border-velvet-300 text-velvet-700 hover:border-velvet-600'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs tracking-wider uppercase text-velvet-700 mb-3 font-medium">Quantity</p>
              <div className="inline-flex items-center border border-velvet-300">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2.5 hover:bg-velvet-100 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-6 py-2.5 text-sm font-medium min-w-[3rem] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2.5 hover:bg-velvet-100 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button onClick={handleAdd} className="btn-primary w-full mb-4 py-4">
              {added ? 'Added to Bag!' : 'Add to Bag — $' + (product.price * quantity)}
            </button>

            <p className="text-center text-xs text-velvet-500">Free worldwide shipping · 30-day returns</p>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-3"><strong className="text-velvet-800">Materials:</strong> {product.materials}</p>
                <p><strong className="text-velvet-800">Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* You may also like */}
        <div className="mt-24 pt-16 border-t border-velvet-200">
          <h2 className="font-serif text-2xl md:text-3xl text-velvet-900 font-light text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group block">
                <div className="aspect-[3/4] bg-velvet-100 overflow-hidden mb-3">
                  <img
                    alt={p.name}
                    data-strk-img-id={`related-${p.id}`}
                    data-strk-img={`gold jewelry ${p.name} editorial`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="font-serif text-xs tracking-wider uppercase text-velvet-900 mb-1">{p.name}</p>
                <p className="text-sm font-medium text-velvet-700">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
