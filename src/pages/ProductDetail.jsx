import { useEffect, useRef, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Minus, Plus, Heart, Truck, RotateCcw, Sparkles } from 'lucide-react';
import { getProductById, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import StarRating from '@/components/product/StarRating';
import Accordion from '@/components/product/Accordion';
import ProductGrid from '@/components/product/ProductGrid';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { placeholderSrc } from '@/lib/images';
import { cn } from '@/lib/utils';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);
  const { addToCart } = useCart();
  const containerRef = useRef(null);

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(
    product?.variants?.[0] || ''
  );
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
      setQuantity(1);
      setSelectedImage(0);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
        <h1 className="font-serif text-3xl text-velmora-charcoal mb-4">
          Product Not Found
        </h1>
        <Link to="/shop" className="btn-primary">
          Back to Shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const accordionItems = [
    {
      title: 'Description',
      content: <p>{product.description}</p>,
    },
    {
      title: 'Materials & Care',
      content: (
        <ul className="list-disc pl-4 space-y-1">
          {product.materialsCare.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      ),
    },
    {
      title: 'Shipping & Returns',
      content: (
        <ul className="list-disc pl-4 space-y-1">
          {product.shippingReturns.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      ),
    },
  ];

  const relatedProducts = getRelatedProducts(product.id, 4);

  return (
    <div ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <button
          onClick={() => navigate(-1)}
          className="text-xs uppercase tracking-[0.15em] text-velmora-taupe hover:text-velmora-gold transition-colors mb-6 md:mb-8"
        >
          ← Back to Shop
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-velmora-sand overflow-hidden">
              <img
                data-strk-img-id={`gallery-${product.id}-${selectedImage}`}
                data-strk-img={`[product-title-${product.id}] [product-desc-${product.id}]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                src={placeholderSrc}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => setSelectedImage(index)}
                  className={cn(
                    'w-20 h-24 bg-velmora-sand overflow-hidden border-2 transition-colors',
                    selectedImage === index
                      ? 'border-velmora-gold'
                      : 'border-transparent hover:border-velmora-hairline'
                  )}
                  aria-label={`View image ${index + 1}`}
                >
                  <img
                    data-strk-img-id={`thumb-${image.id}`}
                    data-strk-img={`[product-title-${product.id}]`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="200"
                    src={placeholderSrc}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:py-8">
            <p className="caption-label mb-2">{product.material}</p>
            <h1
              id={`product-title-${product.id}`}
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-light uppercase tracking-wide text-velmora-charcoal mb-3"
            >
              {product.name}
            </h1>
            <p
              id={`product-desc-${product.id}`}
              className="hidden"
            >
              {product.description}
            </p>

            <div className="flex items-center gap-4 mb-5">
              <span className="font-serif text-2xl md:text-3xl text-velmora-charcoal">
                ${product.price}
              </span>
              <StarRating
                rating={product.rating}
                count={product.reviewCount}
              />
            </div>

            <p className="text-velmora-taupe leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            {product.variants.length > 1 && (
              <div className="mb-6">
                <label className="caption-label block mb-3">
                  Tone: {selectedVariant}
                </label>
                <div className="flex gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={cn(
                        'px-5 py-2.5 text-xs uppercase tracking-[0.15em] font-semibold border transition-colors',
                        selectedVariant === variant
                          ? 'bg-velmora-charcoal text-white border-velmora-charcoal'
                          : 'bg-white text-velmora-charcoal border-velmora-hairline hover:border-velmora-charcoal'
                      )}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <label className="caption-label block mb-3">Quantity</label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 border border-velmora-hairline flex items-center justify-center text-velmora-taupe hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center text-velmora-charcoal font-medium">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 border border-velmora-hairline flex items-center justify-center text-velmora-taupe hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <button
                onClick={handleAddToCart}
                className="btn-primary flex-1"
              >
                Add to Cart — ${(product.price * quantity).toFixed(2)}
              </button>
              <button
                className="w-12 h-12 border border-velmora-hairline flex items-center justify-center text-velmora-charcoal hover:border-velmora-gold hover:text-velmora-gold transition-colors flex-shrink-0"
                aria-label="Add to wishlist"
              >
                <Heart className="w-5 h-5" />
              </button>
            </div>

            {/* Trust mini */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {[
                { icon: Truck, label: 'Free Shipping' },
                { icon: RotateCcw, label: '30-Day Returns' },
                { icon: Sparkles, label: '18K Gold Plated' },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <item.icon className="w-5 h-5 text-velmora-gold mx-auto mb-2" />
                  <span className="text-[10px] uppercase tracking-[0.1em] text-velmora-taupe">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <Accordion items={accordionItems} />
          </div>
        </div>
      </div>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <section className="bg-velmora-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 md:mb-14">
              <p className="caption-label mb-3">Complete the Look</p>
              <h2 className="section-title">You May Also Like</h2>
            </div>
            <ProductGrid products={relatedProducts} />
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;
