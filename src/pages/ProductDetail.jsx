import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getProductById, getRelatedProducts, formatPrice } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/Button';
import { Accordion } from '@/components/ui/Accordion';
import { StarRating } from '@/components/ui/StarRating';
import { ProductCard } from '@/components/ui/ProductCard';
import { getImageSrc } from '@/lib/images';
import { Minus, Plus, ChevronLeft } from 'lucide-react';

const tones = ['gold', 'silver'];

export default function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = getProductById(productId);
  const [selectedTone, setSelectedTone] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState('main');
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-32 text-center">
        <h1 className="font-serif text-4xl text-ink mb-4">Product Not Found</h1>
        <Button variant="primary" size="md" asChild>
          <Link to="/shop">Back to Shop</Link>
        </Button>
      </div>
    );
  }

  const related = getRelatedProducts(product.id);

  const handleAdd = () => {
    addToCart(product, quantity, selectedTone);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const accordionItems = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: `Materials:\n${product.materials.join('\n')}\n\nCare:\n${product.care}` },
    { title: 'Shipping & Returns', content: `${product.shipping}\n\n${product.returns}` },
  ];

  return (
    <div className="bg-cream min-h-screen pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-sm font-sans text-taupe hover:text-ink transition-colors mb-6 md:mb-8"
        >
          <ChevronLeft size={16} />
          Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-[4/5] bg-sand overflow-hidden">
              <img
                src={getImageSrc(activeImage === 'main' ? product.imgId : product.hoverImgId)}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setActiveImage('main')}
                className={`relative w-20 h-24 md:w-24 md:h-28 bg-sand overflow-hidden border-2 transition-colors ${
                  activeImage === 'main' ? 'border-gold' : 'border-transparent'
                }`}
              >
                <img
                  src={getImageSrc(`${product.imgId}-thumb`)}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </button>
              <button
                onClick={() => setActiveImage('hover')}
                className={`relative w-20 h-24 md:w-24 md:h-28 bg-sand overflow-hidden border-2 transition-colors ${
                  activeImage === 'hover' ? 'border-gold' : 'border-transparent'
                }`}
              >
                <img
                  src={getImageSrc(`${product.hoverImgId}-thumb`)}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </button>
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <p className="text-xs uppercase tracking-brand text-gold-dark font-sans mb-2">
              {product.category}
            </p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl uppercase tracking-brand text-ink mb-3">
              {product.name}
            </h1>
            <div className="flex items-center gap-4 mb-5">
              <span className="font-sans text-xl md:text-2xl font-medium text-ink">
                {formatPrice(product.price)}
              </span>
              <StarRating rating={product.rating} reviews={product.reviews} size={14} />
            </div>

            <p className="font-sans text-ink/70 leading-relaxed mb-8 max-w-lg">
              {product.shortDescription}
            </p>

            <div className="mb-6">
              <span className="text-xs uppercase tracking-brand text-taupe font-sans mb-3 block">
                Metal Tone
              </span>
              <div className="flex gap-3">
                {tones.map((tone) => (
                  <button
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={`px-5 py-2 text-sm font-sans capitalize border transition-colors ${
                      selectedTone === tone
                        ? 'border-ink bg-ink text-cream'
                        : 'border-sand bg-transparent text-ink hover:border-ink'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <span className="text-xs uppercase tracking-brand text-taupe font-sans mb-3 block">
                Quantity
              </span>
              <div className="inline-flex items-center border border-sand">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-3 hover:bg-sand text-ink"
                  aria-label="Decrease"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center font-sans text-ink">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-3 hover:bg-sand text-ink"
                  aria-label="Increase"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            <Button
              variant="primary"
              size="lg"
              className="w-full mb-4"
              onClick={handleAdd}
            >
              {added ? 'Added to Cart' : 'Add to Cart'}
            </Button>
            <p className="text-xs text-center text-taupe font-sans mb-10">
              Free shipping on orders over $50. 30-day returns.
            </p>

            <div className="mt-auto">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-24 md:mt-32">
            <h2 className="font-serif text-3xl md:text-4xl text-ink mb-10 text-center">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
