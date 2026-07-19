import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronDown, Plus, Minus } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import StarRating from '@/components/product/StarRating';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const [variant, setVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [mainImg, setMainImg] = useState(0);
  const [accOpen, setAccOpen] = useState({ desc: true, materials: false, shipping: false });
  const sectionRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (!sectionRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, sectionRef.current);
  }, [id]);

  if (!product) {
    return (
      <div className="pt-32 text-center">
        <p className="text-warm-gray">Product not found.</p>
        <Link to="/shop" className="text-bronze underline mt-2 inline-block">Back to Shop</Link>
      </div>
    );
  }

  const related = products.filter((p) => p.id !== id).slice(0, 4);

  return (
    <div className="pt-20 md:pt-24 bg-cream min-h-screen" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 md:py-14">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-warm-gray mb-8">
          <Link to="/" className="hover:text-espresso">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-espresso">Shop</Link>
          <span>/</span>
          <span className="text-espresso">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible">
              {[0, 1, 2].map((idx) => (
                <button
                  key={idx}
                  onClick={() => setMainImg(idx)}
                  className={`w-16 h-16 md:w-20 md:h-20 flex-shrink-0 border transition-colors overflow-hidden ${
                    mainImg === idx ? 'border-espresso' : 'border-divider hover:border-warm-gray'
                  }`}
                >
                  <img
                    data-strk-img-id={`product-${product.id}-thumb-${idx}`}
                    data-strk-img={`[product-${product.id}-title]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            <div className="flex-1 aspect-[4/5] bg-white overflow-hidden">
              <img
                data-strk-img-id={`product-${product.id}-main`}
                data-strk-img={`[product-${product.id}-title]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Info */}
          <div className="md:pt-4">
            <h1 className="font-serif text-2xl md:text-3xl uppercase tracking-widest-xl">
              {product.name}
            </h1>
            <div className="mt-3">
              <StarRating rating={product.rating} count={product.reviews} />
            </div>
            <p className="font-serif text-2xl mt-4">${product.price}</p>
            <p className="mt-5 text-sm text-warm-gray leading-relaxed">
              {product.description}
            </p>

            {/* Variant */}
            <div className="mt-6">
              <p className="text-[11px] uppercase tracking-widest font-medium mb-2">
                Metal Tone
              </p>
              <div className="flex gap-3">
                {['Gold', 'Silver'].map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-5 py-2.5 text-xs uppercase tracking-wider border transition-all duration-300 ${
                      variant === v
                        ? 'border-espresso bg-espresso text-white'
                        : 'border-divider hover:border-warm-gray'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-[11px] uppercase tracking-widest font-medium mb-2">
                Quantity
              </p>
              <div className="flex items-center border border-divider w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center hover:bg-white transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 text-center text-sm font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center hover:bg-white transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <button
              onClick={() => addItem(product, variant, quantity)}
              className="mt-8 w-full bg-bronze text-white text-xs uppercase tracking-widest py-4 hover:bg-bronze-dark transition-colors duration-300"
            >
              Add to Cart — ${product.price * quantity}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-divider">
              {[
                { key: 'desc', title: 'Description', content: product.description },
                { key: 'materials', title: 'Materials & Care', content: `${product.materials} ${product.care}` },
                { key: 'shipping', title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders over $50. 30-day hassle-free returns. Items must be unworn and in original packaging.' },
              ].map((acc) => (
                <div key={acc.key} className="border-b border-divider">
                  <button
                    onClick={() =>
                      setAccOpen((prev) => ({ ...prev, [acc.key]: !prev[acc.key] }))
                    }
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-xs uppercase tracking-widest font-medium">
                      {acc.title}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        accOpen[acc.key] ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      accOpen[acc.key] ? 'max-h-40 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-sm text-warm-gray leading-relaxed pr-6">
                      {acc.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related */}
        <div className="mt-20 md:mt-28">
          <h2 className="font-serif text-2xl md:text-3xl tracking-wide text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <Link
                key={p.id}
                to={`/product/${p.id}`}
                className="group bg-white shadow-soft hover:shadow-soft-hover transition-shadow duration-300"
              >
                <div className="aspect-[3/4] relative overflow-hidden bg-cream">
                  <img
                    data-strk-img-id={`related-${p.id}`}
                    data-strk-img={`[related-${p.id}-name]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-3 md:p-4">
                  <h3 id={`related-${p.id}-name`} className="font-serif text-xs uppercase tracking-widest-xl truncate">
                    {p.name}
                  </h3>
                  <p className="text-sm font-medium mt-1">${p.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
