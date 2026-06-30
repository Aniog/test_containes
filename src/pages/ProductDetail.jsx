import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Plus, Minus, ChevronDown, Heart, Truck, Shield } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { useCart } from '../contexts/CartContext';
import { fetchProductBySlug, fetchRelatedProducts } from '../api/products';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-t border-hairline">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 font-sans text-xs uppercase tracking-widest font-medium text-base"
      >
        {title}
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-[600px] pb-5' : 'max-h-0'
        }`}
      >
        <div className="font-sans text-sm text-text-secondary leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const { addItem } = useCart();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    setLoading(true);
    setSelectedImage(0);
    setQuantity(1);
    setAdded(false);

    fetchProductBySlug(slug)
      .then((data) => {
        const fields = data.data || data;
        setProduct(data);
        setSelectedVariant(fields.variants?.[0] || 'gold');
        if (fields.category) {
          fetchRelatedProducts(fields.category, fields.slug).then(setRelated);
        }
      })
      .finally(() => setLoading(false));
  }, [slug]);

  const handleAddToCart = () => {
    if (!product) return;
    const fields = product.data || product;
    addItem(
      {
        id: product.id,
        name: fields.name,
        price: fields.price,
        image_url: fields.image_url,
      },
      selectedVariant,
      quantity
    );
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-surface pt-20 md:pt-24">
        <div className="container-main py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <div className="aspect-[3/4] bg-hairline animate-pulse" />
            <div className="space-y-4">
              <div className="h-8 bg-hairline w-2/3 animate-pulse" />
              <div className="h-6 bg-hairline w-1/3 animate-pulse" />
              <div className="h-4 bg-hairline w-full animate-pulse" />
              <div className="h-4 bg-hairline w-5/6 animate-pulse" />
              <div className="h-12 bg-hairline w-full animate-pulse mt-6" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-surface pt-20 md:pt-24 flex items-center justify-center">
        <div className="text-center">
          <p className="font-serif text-2xl text-base mb-2">
            Product not found
          </p>
          <Link
            to="/shop"
            className="font-sans text-sm text-gold hover:underline"
          >
            Back to shop
          </Link>
        </div>
      </div>
    );
  }

  const fields = product.data || product;
  const gallery =
    fields.gallery_images && fields.gallery_images.length > 0
      ? fields.gallery_images
      : [fields.image_url];

  return (
    <div className="min-h-screen bg-surface pt-20 md:pt-24">
      <div className="container-main py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="relative aspect-[3/4] bg-hairline overflow-hidden mb-3">
              <img
                src={gallery[selectedImage]}
                alt={fields.name}
                className="w-full h-full object-cover"
              />
            </div>
            {gallery.length > 1 && (
              <div className="flex gap-2 overflow-x-auto">
                {gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-colors ${
                      selectedImage === idx
                        ? 'border-gold'
                        : 'border-transparent'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${fields.name} ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="md:py-4">
            <h1 className="font-sans text-sm uppercase tracking-[0.15em] font-medium text-base">
              {fields.name}
            </h1>

            <div className="flex items-center gap-3 mt-3 mb-4">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.round(fields.rating || 0)
                        ? 'text-gold fill-gold'
                        : 'text-hairline fill-hairline'
                    }`}
                  />
                ))}
              </div>
              <span className="font-sans text-xs text-text-muted">
                {fields.rating} ({fields.review_count} reviews)
              </span>
            </div>

            <p className="font-sans text-xl font-medium text-base mb-6">
              ${fields.price}
            </p>

            <p className="font-sans text-sm text-text-secondary leading-relaxed mb-6">
              {fields.description}
            </p>

            {/* Variants */}
            {fields.variants && fields.variants.length > 0 && (
              <div className="mb-6">
                <p className="font-sans text-xs uppercase tracking-widest font-medium text-base mb-3">
                  Color
                </p>
                <div className="flex gap-2">
                  {fields.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-5 py-2.5 font-sans text-xs uppercase tracking-widest font-medium border transition-all duration-300 ${
                        selectedVariant === variant
                          ? 'bg-base text-surface border-base'
                          : 'bg-transparent text-base border-hairline hover:border-base'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-sans text-xs uppercase tracking-widest font-medium text-base mb-3">
                Quantity
              </p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 border border-hairline flex items-center justify-center text-base hover:border-base transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-sans text-base w-6 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 border border-hairline flex items-center justify-center text-base hover:border-base transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mb-8">
              <button
                onClick={handleAddToCart}
                className={`flex-1 font-sans text-xs uppercase tracking-widest font-medium py-4 transition-colors duration-300 ${
                  added
                    ? 'bg-base text-surface'
                    : 'bg-gold text-base hover:bg-gold-dark'
                }`}
              >
                {added ? 'Added to Bag' : 'Add to Bag'}
              </button>
              <button
                className="w-14 h-14 border border-hairline flex items-center justify-center text-base hover:border-base transition-colors"
                aria-label="Add to wishlist"
              >
                <Heart className="w-5 h-5" />
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-col gap-3 mb-8">
              <div className="flex items-center gap-2 text-text-secondary">
                <Truck className="w-4 h-4 text-gold" />
                <span className="font-sans text-xs">
                  Free worldwide shipping
                </span>
              </div>
              <div className="flex items-center gap-2 text-text-secondary">
                <Shield className="w-4 h-4 text-gold" />
                <span className="font-sans text-xs">
                  30-day hassle-free returns
                </span>
              </div>
            </div>

            {/* Accordions */}
            <Accordion title="Description" defaultOpen>
              <p>{fields.description}</p>
            </Accordion>
            <Accordion title="Materials & Care">
              <p>{fields.materials}</p>
            </Accordion>
            <Accordion title="Shipping & Returns">
              <p>{fields.shipping_info}</p>
            </Accordion>
            <div className="border-t border-hairline" />
          </div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <div className="border-t border-hairline">
          <div className="container-main py-16 md:py-20">
            <h2 className="font-serif text-3xl md:text-4xl text-base text-center mb-12">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
