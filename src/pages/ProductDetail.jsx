import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, Heart, Share2 } from 'lucide-react';
import { products } from '@/data/products';
import useCartStore from '@/store/cartStore';
import ProductGallery from '@/components/product/ProductGallery';
import VariantSelector from '@/components/product/VariantSelector';
import Accordion from '@/components/product/Accordion';
import ProductCard from '@/components/product/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((s) => s.addItem);
  const relatedRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (relatedRef.current) {
      return ImageHelper.loadImages(strkImgConfig, relatedRef.current);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-deep-base mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-primary inline-block">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  const accordionItems = [
    {
      title: 'Description',
      content: product.longDescription,
    },
    {
      title: 'Materials & Care',
      content: (
        <>
          <strong>Materials:</strong> {product.materials}
          <br /><br />
          <strong>Care:</strong> {product.care}
        </>
      ),
    },
    {
      title: 'Shipping & Returns',
      content: product.shipping,
    },
  ];

  return (
    <main className="pt-20 md:pt-24">
      <div className="container-wide py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 font-sans text-xs text-warm-gray">
            <li><Link to="/" className="hover:text-gold-accent transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-gold-accent transition-colors">Shop</Link></li>
            <li>/</li>
            <li className="text-deep-base">{product.name}</li>
          </ol>
        </nav>

        {/* Product layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Gallery */}
          <ProductGallery product={product} />

          {/* Product info */}
          <div className="lg:py-4">
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold-accent mb-3">
              {product.category}
            </p>

            <h1 className="font-serif text-3xl md:text-4xl uppercase tracking-product text-deep-base mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.floor(product.rating) ? 'fill-gold-accent text-gold-accent' : 'text-warm-border'}
                  />
                ))}
              </div>
              <span className="font-sans text-sm text-warm-gray">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-sans text-2xl font-medium text-deep-base mb-6">
              ${product.price.toFixed(2)}
            </p>

            {/* Description */}
            <p className="font-sans text-sm text-warm-gray leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-8">
              <VariantSelector
                variants={product.variants}
                selected={selectedVariant}
                onChange={setSelectedVariant}
              />
            </div>

            {/* Quantity + Add to cart */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex items-center border border-warm-border">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-warm-gray hover:text-deep-base transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="px-4 py-3 font-sans text-sm font-medium text-deep-base min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-warm-gray hover:text-deep-base transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>

              <button
                onClick={() => addItem(product, selectedVariant, quantity)}
                className="btn-primary flex-1 flex items-center justify-center gap-2"
              >
                Add to Cart — ${(product.price * quantity).toFixed(2)}
              </button>
            </div>

            {/* Wishlist + Share */}
            <div className="flex gap-4 mb-10">
              <button className="flex items-center gap-2 font-sans text-xs uppercase tracking-wider text-warm-gray hover:text-gold-accent transition-colors">
                <Heart size={16} strokeWidth={1.5} />
                Add to Wishlist
              </button>
              <button className="flex items-center gap-2 font-sans text-xs uppercase tracking-wider text-warm-gray hover:text-gold-accent transition-colors">
                <Share2 size={16} strokeWidth={1.5} />
                Share
              </button>
            </div>

            {/* Divider */}
            <div className="hairline-divider mb-8" />

            {/* Accordions */}
            <Accordion items={accordionItems} />
          </div>
        </div>

        {/* Related products */}
        <div ref={relatedRef} className="mt-20 md:mt-28">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-light text-deep-base">
              You May Also Like
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
