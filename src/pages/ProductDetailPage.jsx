import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react';
import products from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const { addItem } = useCart();
  const ref = useRef(null);

  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [added, setAdded] = useState(false);
  const [openAccordion, setOpenAccordion] = useState('description');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  useEffect(() => {
    if (added) {
      const t = setTimeout(() => setAdded(false), 2000);
      return () => clearTimeout(t);
    }
  }, [added]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-velmora-charcoal">Product not found</h1>
          <Link to="/shop" className="btn-outline mt-6">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setQuantity(1);
  };

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const accordions = [
    { key: 'description', label: 'Description', content: product.description },
    { key: 'materials', label: 'Materials & Care', content: `${product.details}\n\n${product.care}` },
    { key: 'shipping', label: 'Shipping & Returns', content: product.shipping },
  ];

  return (
    <div ref={ref} className="min-h-screen pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-velmora-stone font-sans mb-8">
          <Link to="/" className="hover:text-velmora-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-velmora-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-velmora-charcoal">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Gallery */}
          <div>
            <div className="aspect-[3/4] bg-velmora-sand rounded-sm overflow-hidden mb-4">
              <img
                alt={product.name}
                data-strk-img-id={`pdp-main-${product.images[activeImage].id}`}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImage(idx)}
                  className={`w-16 h-20 bg-velmora-sand rounded-sm overflow-hidden border-2 transition-all ${
                    activeImage === idx ? 'border-velmora-gold' : 'border-transparent hover:border-velmora-border'
                  }`}
                >
                  <img
                    alt={`${product.name} view ${idx + 1}`}
                    data-strk-img-id={`pdp-thumb-${img.id}`}
                    data-strk-img={`[${product.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="128"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <h1 id={product.titleId} className="font-serif text-2xl md:text-3xl font-semibold tracking-wider uppercase text-velmora-charcoal leading-tight">
              {product.name}
            </h1>
            <p className="font-sans text-2xl font-light text-velmora-charcoal mt-3">
              ${product.price}
            </p>

            <div className="flex items-center gap-1.5 mt-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating)
                      ? 'fill-velmora-gold text-velmora-gold'
                      : 'fill-velmora-border text-velmora-border'
                  }`}
                />
              ))}
              <span className="text-xs text-velmora-stone ml-1.5">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p id={product.descId} className="text-velmora-smoke font-sans text-sm leading-relaxed mt-5">
              {product.description}
            </p>

            <hr className="hairline my-6" />

            {/* Variant selector */}
            <div>
              <p className="font-sans text-xs font-semibold tracking-wider uppercase text-velmora-charcoal mb-3">
                Finish
              </p>
              <div className="flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2.5 font-sans text-sm font-medium tracking-wide rounded-full border transition-all duration-300 ${
                      selectedVariant === v
                        ? 'bg-velmora-charcoal text-velmora-cream border-velmora-charcoal'
                        : 'bg-transparent text-velmora-charcoal border-velmora-border hover:border-velmora-charcoal'
                    }`}
                  >
                    {v === 'Gold' ? '✦ Gold Tone' : '◇ Silver Tone'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="font-sans text-xs font-semibold tracking-wider uppercase text-velmora-charcoal mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-velmora-border w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-velmora-charcoal hover:text-velmora-gold transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-5 font-sans text-sm font-medium text-velmora-charcoal">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-velmora-charcoal hover:text-velmora-gold transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`btn-primary w-full mt-6 transition-all duration-300 ${
                added ? 'bg-green-600 border-green-600 hover:bg-green-600' : ''
              }`}
            >
              <ShoppingBag className="w-4 h-4 mr-2" />
              {added ? 'Added to Bag!' : 'Add to Bag'}
            </button>

            <hr className="hairline my-8" />

            {/* Accordions */}
            <div className="flex flex-col">
              {accordions.map((a) => (
                <div key={a.key} className="border-b border-velmora-border">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === a.key ? '' : a.key)}
                    className="flex items-center justify-between w-full py-4 text-left"
                  >
                    <span className="font-sans text-xs font-semibold tracking-wider uppercase text-velmora-charcoal">
                      {a.label}
                    </span>
                    {openAccordion === a.key ? (
                      <ChevronUp className="w-4 h-4 text-velmora-stone" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-velmora-stone" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === a.key ? 'max-h-96 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-velmora-smoke font-sans text-sm leading-relaxed whitespace-pre-line">
                      {a.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        <section className="mt-20 md:mt-28 mb-20">
          <h2 className="section-title text-center mb-10">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((rp) => (
              <Link key={rp.id} to={`/product/${rp.slug}`} className="group">
                <div className="aspect-[3/4] bg-velmora-sand rounded-sm overflow-hidden mb-3">
                  <img
                    alt={rp.name}
                    data-strk-img-id={`related-${rp.id}`}
                    data-strk-img={`[${rp.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 id={rp.titleId} className="font-serif text-sm font-semibold tracking-wider uppercase text-velmora-charcoal">
                  {rp.name}
                </h3>
                <p className="font-sans text-sm text-velmora-charcoal mt-1">${rp.price}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}