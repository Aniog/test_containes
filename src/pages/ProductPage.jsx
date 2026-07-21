import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import products from '@/lib/products';
import { useCart } from '@/context/CartContext';
import ImageGallery from '@/components/product/ImageGallery';
import ProductAccordion from '@/components/product/ProductAccordion';
import ProductCard from '@/components/home/ProductCard';

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-warm-50">Product Not Found</h1>
          <Link to="/shop" className="btn-outline mt-6">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3.5 h-3.5 ${
          i < Math.floor(rating)
            ? 'text-gold-400 fill-gold-400'
            : 'text-warm-700'
        }`}
      />
    ));
  };

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="pt-24 md:pt-32 pb-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Breadcrumb */}
        <nav className="text-xs text-warm-500 mb-8">
          <Link to="/" className="hover:text-gold-400 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-gold-400 transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-warm-300">{product.name}</span>
        </nav>

        {/* Product detail */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Gallery */}
          <ImageGallery images={product.images} />

          {/* Right: Info */}
          <div className="space-y-6">
            <div>
              <h1 className="font-serif text-2xl md:text-3xl tracking-[0.12em] uppercase text-warm-50 leading-tight">
                {product.name}
              </h1>
              <p className="text-xl text-gold-400 font-medium mt-3">
                ${product.price}
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1.5">
              {renderStars(product.rating)}
              <span className="text-xs text-warm-400 ml-1">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-warm-400 leading-relaxed">
              {product.description}
            </p>

            {/* Color variant */}
            <div>
              <p className="text-xs tracking-wider uppercase text-warm-300 mb-3">
                Finish: <span className="text-warm-100">{selectedColor}</span>
              </p>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-5 py-2 text-xs tracking-wider uppercase rounded-sm transition-all duration-300 ${
                      selectedColor === color
                        ? 'bg-gold-500/15 border border-gold-400 text-gold-300'
                        : 'bg-transparent border border-warm-600/40 text-warm-400 hover:border-warm-400'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <p className="text-xs tracking-wider uppercase text-warm-300 mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-warm-600/40 rounded-sm w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-warm-400 hover:text-gold-400 transition-colors"
                >
                  −
                </button>
                <span className="w-10 h-10 flex items-center justify-center text-sm text-warm-200">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-warm-400 hover:text-gold-400 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => {
                for (let i = 0; i < quantity; i++) {
                  addItem(product, selectedColor);
                }
              }}
              className="btn-primary w-full py-4"
            >
              Add to Cart — ${product.price * quantity}
            </button>

            {/* Accordions */}
            <div className="pt-4 space-y-0">
              <ProductAccordion title="Description">
                {product.details}
              </ProductAccordion>
              <ProductAccordion title="Materials & Care">
                {product.care}
              </ProductAccordion>
              <ProductAccordion title="Shipping & Returns">
                {product.shipping}
              </ProductAccordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <hr className="hairline-divider mt-20 mb-14" />
        <div className="text-center mb-10">
          <p className="text-xs tracking-[0.2em] uppercase text-gold-400 mb-3">
            Complete the Look
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-warm-50 tracking-wide">
            You May Also Like
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10">
          {relatedProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
