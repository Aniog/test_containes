import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Heart, Share2, Truck, ShieldCheck } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/hooks/useCart';
import StarRating from '@/components/ui/StarRating';
import QuantitySelector from '@/components/ui/QuantitySelector';
import ProductCard from '@/components/ui/ProductCard';
import Accordion from '@/components/product/Accordion';
import { toast } from 'sonner';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();

  const product = products.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [variant, setVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6">
        <h1 className="font-serif text-3xl text-velmora-espresso mb-4">
          Product Not Found
        </h1>
        <Link
          to="/shop"
          className="bg-velmora-espresso text-velmora-cream px-8 py-3 text-xs uppercase tracking-widest"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const accordionItems = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: product.details + ' ' + product.care },
    { title: 'Shipping & Returns', content: product.shipping },
  ];

  const handleAddToCart = () => {
    setIsAdding(true);
    addItem(product, quantity, variant);
    toast.success(`${product.name} added to cart`);
    setTimeout(() => setIsAdding(false), 800);
  };

  return (
    <main className="pt-16 md:pt-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-8 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-velmora-sand overflow-hidden">
              <img
                src={product.gallery[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3 overflow-x-auto hide-scrollbar">
              {product.gallery.map((image, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-20 md:w-24 md:h-24 overflow-hidden border-2 transition-colors ${
                    selectedImage === index
                      ? 'border-velmora-gold'
                      : 'border-transparent'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:py-6">
            <div className="mb-6">
              <StarRating rating={product.rating} showValue />
            </div>

            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl uppercase tracking-widest text-velmora-espresso mb-4">
              {product.name}
            </h1>

            <p className="text-2xl md:text-3xl font-light text-velmora-coffee mb-6">
              ${product.price.toFixed(2)}
            </p>

            <p className="text-velmora-coffee leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-widest text-velmora-warm-gray mb-3">
                Metal Tone
              </p>
              <div className="flex gap-3">
                {['gold', 'silver'].map((tone) => (
                  <button
                    key={tone}
                    type="button"
                    onClick={() => setVariant(tone)}
                    className={`px-6 py-2.5 text-xs uppercase tracking-widest border transition-all ${
                      variant === tone
                        ? 'border-velmora-espresso bg-velmora-espresso text-velmora-cream'
                        : 'border-velmora-taupe text-velmora-coffee hover:border-velmora-espresso'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <QuantitySelector value={quantity} onChange={setQuantity} />
              <button
                type="button"
                onClick={handleAddToCart}
                disabled={isAdding}
                className="flex-1 bg-velmora-espresso text-velmora-cream py-4 text-xs uppercase tracking-widest font-semibold hover:bg-velmora-gold hover:text-velmora-espresso transition-colors disabled:opacity-70"
              >
                {isAdding ? 'Added' : 'Add to Cart'}
              </button>
            </div>

            <div className="flex gap-3 mb-8">
              <button
                type="button"
                className="flex-1 border border-velmora-taupe py-3 flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-velmora-coffee hover:border-velmora-espresso hover:text-velmora-espresso transition-colors"
              >
                <Heart size={16} />
                Wishlist
              </button>
              <button
                type="button"
                className="flex-1 border border-velmora-taupe py-3 flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-velmora-coffee hover:border-velmora-espresso hover:text-velmora-espresso transition-colors"
              >
                <Share2 size={16} />
                Share
              </button>
            </div>

            <div className="flex flex-col gap-3 mb-10 text-sm text-velmora-warm-gray">
              <div className="flex items-center gap-2">
                <Truck size={16} className="text-velmora-gold" />
                <span>Free worldwide shipping over $50</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-velmora-gold" />
                <span>30-day hassle-free returns</span>
              </div>
            </div>

            <Accordion items={accordionItems} />
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="bg-velmora-sand py-16 md:py-24">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
            <h2 className="font-serif text-2xl md:text-3xl text-velmora-espresso mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
