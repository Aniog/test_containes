import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, ArrowLeft, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, getProductBySlug, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-ivory-dark">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-xs uppercase tracking-widest text-obsidian font-medium">
          {title}
        </span>
        {open ? (
          <ChevronUp size={16} className="text-taupe flex-shrink-0" />
        ) : (
          <ChevronDown size={16} className="text-taupe flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="pb-5">
          <p className="font-sans text-sm text-text-secondary leading-relaxed">{children}</p>
        </div>
      )}
    </div>
  );
}

export default function ProductPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = getProductBySlug(slug);
  const related = product ? getRelatedProducts(product) : [];
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeThumb, setActiveThumb] = useState(0);
  const [added, setAdded] = useState(false);

  const containerRef = useRef(null);

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
      setActiveThumb(0);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [slug, product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-ivory px-4">
        <p className="font-serif text-2xl text-obsidian mb-4">Product not found</p>
        <button
          onClick={() => navigate('/shop')}
          className="font-sans text-xs uppercase tracking-widest text-gold border border-gold px-6 py-3 hover:bg-gold hover:text-obsidian transition-all duration-300"
        >
          Back to Shop
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const thumbImages = [
    { imgId: `${product.imgId}-t0`, query: `[${product.titleId}]` },
    { imgId: `${product.imgId2}-t1`, query: `[${product.descId}] [${product.titleId}]` },
    { imgId: `${product.imgId}-t2`, query: `[${product.titleId}]` },
  ];

  return (
    <div ref={containerRef} className="bg-ivory min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-6">
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1.5 font-sans text-xs uppercase tracking-widest text-taupe hover:text-gold transition-colors duration-300"
          >
            <ArrowLeft size={13} />
            Back
          </button>
          <span className="text-taupe-light">/</span>
          <Link to="/shop" className="font-sans text-xs uppercase tracking-widest text-taupe hover:text-gold transition-colors">
            Shop
          </Link>
          <span className="text-taupe-light">/</span>
          <span className="font-sans text-xs uppercase tracking-widest text-obsidian">
            {product.name}
          </span>
        </div>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-20">
          {/* Left: Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible hide-scrollbar">
              {thumbImages.map((thumb, i) => (
                <button
                  key={i}
                  onClick={() => setActiveThumb(i)}
                  className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-colors duration-200 ${
                    activeThumb === i ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={thumb.imgId}
                    data-strk-img={thumb.query}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[3/4] bg-ivory-dark overflow-hidden">
              <img
                data-strk-img-id={product.imgId}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className={`w-full h-full object-cover ${activeThumb !== 1 ? 'block' : 'hidden'}`}
              />
              <img
                data-strk-img-id={product.imgId2}
                data-strk-img={`[${product.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={`${product.name} alternate view`}
                className={`w-full h-full object-cover ${activeThumb === 1 ? 'block' : 'hidden'}`}
              />
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            {/* Tags */}
            <div className="flex gap-2 mb-4">
              {product.tags.includes('bestseller') && (
                <span className="bg-gold text-obsidian font-sans text-[9px] uppercase tracking-widest px-2.5 py-1">
                  Bestseller
                </span>
              )}
              {product.tags.includes('gift') && (
                <span className="bg-obsidian text-ivory font-sans text-[9px] uppercase tracking-widest px-2.5 py-1">
                  Gift Ready
                </span>
              )}
            </div>

            {/* Name */}
            <h1 id={product.titleId} className="font-serif text-2xl md:text-3xl uppercase tracking-widest text-obsidian leading-tight">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={13}
                    className={i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-taupe-light'}
                  />
                ))}
              </div>
              <span className="font-sans text-xs text-taupe">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-sans text-2xl font-semibold text-obsidian mt-4">
              ${product.price}
            </p>

            {/* Short description */}
            <p id={product.descId} className="font-sans text-sm text-text-secondary mt-4 leading-relaxed">
              {product.shortDescription}
            </p>

            {/* Divider */}
            <div className="hairline my-6" />

            {/* Variant selector */}
            <div>
              <p className="font-sans text-xs uppercase tracking-widest text-obsidian mb-3">
                Finish: <span className="text-gold">{selectedVariant}</span>
              </p>
              <div className="flex gap-2 flex-wrap">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-sans text-xs uppercase tracking-widest px-4 py-2.5 border transition-all duration-200 ${
                      selectedVariant === v
                        ? 'border-gold bg-gold text-obsidian'
                        : 'border-ivory-dark text-taupe hover:border-taupe'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="font-sans text-xs uppercase tracking-widest text-obsidian mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-ivory-dark w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-taupe hover:text-obsidian transition-colors"
                >
                  −
                </button>
                <span className="w-10 text-center font-sans text-sm text-obsidian">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-taupe hover:text-obsidian transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="mt-6 w-full bg-gold text-obsidian font-sans text-xs uppercase tracking-widest py-4 hover:bg-gold-light transition-colors duration-300 font-semibold flex items-center justify-center gap-2"
            >
              <ShoppingBag size={15} />
              {added ? 'Added to Cart ✓' : 'Add to Cart'}
            </button>

            {/* Trust signals */}
            <div className="mt-4 flex flex-wrap gap-4">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map((t) => (
                <span key={t} className="font-sans text-[10px] uppercase tracking-widest text-taupe flex items-center gap-1">
                  <span className="text-gold">✦</span> {t}
                </span>
              ))}
            </div>

            {/* Divider */}
            <div className="hairline mt-8" />

            {/* Accordions */}
            <div className="mt-2">
              <Accordion title="Description">{product.description}</Accordion>
              <Accordion title="Materials & Care">
                <span>{product.materials}</span>
                <br /><br />
                <span>{product.care}</span>
              </Accordion>
              <Accordion title="Shipping & Returns">{product.shipping}</Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products — rendered from static products array so image IDs are build-time resolvable */}
      {related.length > 0 && (
        <div className="bg-ivory-dark py-16 md:py-20 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-light text-obsidian mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {/* Vivid Aura Jewels */}
              {related.some((p) => p.id === products[0].id) && (
                <Link to={`/product/${products[0].slug}`} className="group block">
                  <div className="aspect-[3/4] bg-ivory overflow-hidden product-img-wrap">
                    <img
                      data-strk-img-id={products[0].imgId}
                      data-strk-img={`[related-desc-0] [related-title-0]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="400"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={products[0].name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-3 px-1">
                    <p id="related-title-0" className="font-serif text-sm uppercase tracking-widest text-obsidian">{products[0].name}</p>
                    <p id="related-desc-0" className="font-sans text-xs text-taupe mt-1 line-clamp-1">{products[0].shortDescription}</p>
                    <p className="font-sans text-sm font-semibold text-obsidian mt-1.5">${products[0].price}</p>
                  </div>
                </Link>
              )}
              {/* Majestic Flora Nectar */}
              {related.some((p) => p.id === products[1].id) && (
                <Link to={`/product/${products[1].slug}`} className="group block">
                  <div className="aspect-[3/4] bg-ivory overflow-hidden product-img-wrap">
                    <img
                      data-strk-img-id={products[1].imgId}
                      data-strk-img={`[related-desc-1] [related-title-1]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="400"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={products[1].name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-3 px-1">
                    <p id="related-title-1" className="font-serif text-sm uppercase tracking-widest text-obsidian">{products[1].name}</p>
                    <p id="related-desc-1" className="font-sans text-xs text-taupe mt-1 line-clamp-1">{products[1].shortDescription}</p>
                    <p className="font-sans text-sm font-semibold text-obsidian mt-1.5">${products[1].price}</p>
                  </div>
                </Link>
              )}
              {/* Golden Sphere Huggies */}
              {related.some((p) => p.id === products[2].id) && (
                <Link to={`/product/${products[2].slug}`} className="group block">
                  <div className="aspect-[3/4] bg-ivory overflow-hidden product-img-wrap">
                    <img
                      data-strk-img-id={products[2].imgId}
                      data-strk-img={`[related-desc-2] [related-title-2]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="400"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={products[2].name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-3 px-1">
                    <p id="related-title-2" className="font-serif text-sm uppercase tracking-widest text-obsidian">{products[2].name}</p>
                    <p id="related-desc-2" className="font-sans text-xs text-taupe mt-1 line-clamp-1">{products[2].shortDescription}</p>
                    <p className="font-sans text-sm font-semibold text-obsidian mt-1.5">${products[2].price}</p>
                  </div>
                </Link>
              )}
              {/* Amber Lace Earrings */}
              {related.some((p) => p.id === products[3].id) && (
                <Link to={`/product/${products[3].slug}`} className="group block">
                  <div className="aspect-[3/4] bg-ivory overflow-hidden product-img-wrap">
                    <img
                      data-strk-img-id={products[3].imgId}
                      data-strk-img={`[related-desc-3] [related-title-3]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="400"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={products[3].name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-3 px-1">
                    <p id="related-title-3" className="font-serif text-sm uppercase tracking-widest text-obsidian">{products[3].name}</p>
                    <p id="related-desc-3" className="font-sans text-xs text-taupe mt-1 line-clamp-1">{products[3].shortDescription}</p>
                    <p className="font-sans text-sm font-semibold text-obsidian mt-1.5">${products[3].price}</p>
                  </div>
                </Link>
              )}
              {/* Royal Heirloom Set */}
              {related.some((p) => p.id === products[4].id) && (
                <Link to={`/product/${products[4].slug}`} className="group block">
                  <div className="aspect-[3/4] bg-ivory overflow-hidden product-img-wrap">
                    <img
                      data-strk-img-id={products[4].imgId}
                      data-strk-img={`[related-desc-4] [related-title-4]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="400"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={products[4].name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-3 px-1">
                    <p id="related-title-4" className="font-serif text-sm uppercase tracking-widest text-obsidian">{products[4].name}</p>
                    <p id="related-desc-4" className="font-sans text-xs text-taupe mt-1 line-clamp-1">{products[4].shortDescription}</p>
                    <p className="font-sans text-sm font-semibold text-obsidian mt-1.5">${products[4].price}</p>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
