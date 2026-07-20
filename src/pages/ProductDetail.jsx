import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Heart, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import Stars from '@/components/ui/Stars';
import Price from '@/components/ui/Price';
import QuantitySelector from '@/components/ui/QuantitySelector';
import Accordion from '@/components/ui/Accordion';
import ProductCard from '@/components/ProductCard';
import { getProductById, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';

const toneLabels = {
  gold: 'Gold',
  silver: 'Silver',
};

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const product = getProductById(id);

  const [selectedTone, setSelectedTone] = useState(product?.tone[0] || 'gold');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id, selectedTone]);

  useEffect(() => {
    if (product) {
      setSelectedTone(product.tone[0]);
      setQuantity(1);
      setAdded(false);
      window.scrollTo(0, 0);
    }
  }, [product?.id]);

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center max-w-7xl mx-auto px-5">
        <p className="font-serif text-2xl text-stone-900 mb-4">Product not found</p>
        <Link
          to="/shop"
          className="inline-block px-8 py-3 bg-gold-500 text-white font-sans text-xs uppercase tracking-widest"
        >
          Back to Shop
        </Link>
      </div>
    );
  }

  const related = getRelatedProducts(product.id);
  const titleId = `product-detail-title-${product.id}`;
  const descId = `product-detail-desc-${product.id}`;

  const handleAddToCart = () => {
    addItem(product, { tone: selectedTone, quantity });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const accordionItems = [
    {
      title: 'Description',
      content: product.description,
    },
    {
      title: 'Materials & Care',
      content: (
        <div>
          <p className="mb-3">{product.material}</p>
          <ul className="list-disc pl-5 space-y-1">
            {product.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      title: 'Shipping & Returns',
      content:
        'Free worldwide shipping on orders over $50. Standard delivery takes 5–10 business days. Express options available at checkout. Returns accepted within 30 days of delivery; items must be unworn and in original packaging.',
    },
  ];

  return (
    <div ref={containerRef} className="bg-cream pt-20 md:pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="hidden md:inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-stone-500 hover:text-stone-900 mb-8 transition-colors"
        >
          <ArrowLeft size={16} />
          Back
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 lg:gap-20">
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-champagne overflow-hidden">
              <img
                data-strk-img-id={`detail-main-${product.imageIds[selectedTone]}`}
                data-strk-img={`[${descId}] [${titleId}]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {product.tone.map((tone) => (
                <button
                  key={tone}
                  type="button"
                  onClick={() => setSelectedTone(tone)}
                  className={`aspect-square bg-champagne overflow-hidden border-2 transition-colors ${
                    selectedTone === tone ? 'border-gold-500' : 'border-transparent'
                  }`}
                  aria-label={`Select ${toneLabels[tone]} tone`}
                >
                  <img
                    data-strk-img-id={`detail-thumb-${product.imageIds[tone]}`}
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} ${toneLabels[tone]}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="md:py-6 lg:py-10">
            <Stars rating={product.rating} size={16} />
            <p className="font-sans text-xs text-stone-500 mt-2">
              {product.reviewCount} reviews
            </p>
            <h1
              id={titleId}
              className="font-serif text-3xl md:text-5xl text-stone-900 uppercase tracking-widest mt-4 mb-3"
            >
              {product.name}
            </h1>
            <Price amount={product.price} className="text-2xl md:text-3xl mb-6" />
            <p id={descId} className="font-sans text-stone-600 leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="mb-6">
              <span className="font-sans text-xs uppercase tracking-widest text-stone-500 block mb-3">
                Tone
              </span>
              <div className="flex flex-wrap gap-3">
                {product.tone.map((tone) => (
                  <button
                    key={tone}
                    type="button"
                    onClick={() => setSelectedTone(tone)}
                    className={`px-6 py-3 font-sans text-xs uppercase tracking-widest border transition-colors ${
                      selectedTone === tone
                        ? 'border-stone-900 bg-stone-900 text-white'
                        : 'border-stone-300 text-stone-700 hover:border-stone-900'
                    }`}
                  >
                    {toneLabels[tone]}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <span className="font-sans text-xs uppercase tracking-widest text-stone-500 block mb-3">
                Quantity
              </span>
              <QuantitySelector value={quantity} onChange={setQuantity} />
            </div>

            <div className="flex gap-3 mb-10">
              <button
                type="button"
                onClick={handleAddToCart}
                className={`flex-1 py-4 font-sans text-xs uppercase tracking-widest transition-colors ${
                  added
                    ? 'bg-stone-900 text-white'
                    : 'bg-gold-500 text-white hover:bg-gold-600'
                }`}
              >
                {added ? 'Added to Cart' : 'Add to Cart'}
              </button>
              <button
                type="button"
                className="h-14 w-14 flex items-center justify-center border border-stone-300 text-stone-700 hover:border-stone-900 hover:text-stone-900 transition-colors"
                aria-label="Add to wishlist"
              >
                <Heart size={20} />
              </button>
            </div>

            <Accordion items={accordionItems} />
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-20 md:mt-28">
            <h2 className="font-serif text-2xl md:text-4xl text-stone-900 mb-8 md:mb-12">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6">
              {related.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
