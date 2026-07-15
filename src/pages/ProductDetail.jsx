import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import products from '@/data/products';
import { formatPrice } from '@/lib/utils';
import { useCart } from '@/context/CartContext';
import ProductGallery from '@/components/shop/ProductGallery';

function AccordionSection({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-velmora-muted">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-4 text-left"
      >
        <span className="font-sans text-sm font-medium tracking-wide uppercase">{title}</span>
        {open ? <ChevronUp className="w-4 h-4 text-velmora-base/60" /> : <ChevronDown className="w-4 h-4 text-velmora-base/60" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <div className="body-text text-sm">{children}</div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="heading-md mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-outline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 pb-20">
      <div className="container-site">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 caption mb-6">
          <Link to="/" className="hover:text-velmora-accent transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-velmora-accent transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-velmora-base">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Gallery */}
          <ProductGallery product={product} />

          {/* Product info */}
          <div className="flex flex-col">
            <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl leading-tight tracking-[0.15em] uppercase">
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mt-3 mb-1">
              <span className="text-xl md:text-2xl font-sans font-light">
                {formatPrice(product.price)}
              </span>
            </div>

            <div className="flex items-center gap-1 mb-5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-velmora-accent text-velmora-accent' : 'text-velmora-muted-2'}`}
                />
              ))}
              <span className="caption ml-1">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            <p className="body-text mb-6">{product.summary}</p>

            {/* Variant selector */}
            {product.variants.length > 1 && (
              <div className="mb-6">
                <p className="caption mb-2">Finish</p>
                <div className="flex gap-2">
                  {product.variants.map((v, i) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(i)}
                      className={`px-5 py-2.5 text-sm font-medium tracking-wide border transition-all duration-300 ${
                        selectedVariant === i
                          ? 'border-velmora-base bg-velmora-base text-white'
                          : 'border-velmora-muted-2 hover:border-velmora-base'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <p className="caption mb-2">Quantity</p>
              <div className="flex items-center border border-velmora-muted-2 w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2.5 hover:text-velmora-accent transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-4 text-sm min-w-[3rem] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2.5 hover:text-velmora-accent transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, product.variants[selectedVariant], quantity)}
              className="btn-primary w-full mb-8"
            >
              Add to Cart &mdash; {formatPrice(product.price * quantity)}
            </button>

            {/* Accordions */}
            <div className="mt-auto">
              <AccordionSection title="Description" defaultOpen>
                {product.description}
              </AccordionSection>
              <AccordionSection title="Materials & Care">
                <p className="mb-2"><strong>Materials:</strong> {product.materials}</p>
                <p><strong>Care:</strong> {product.care}</p>
              </AccordionSection>
              <AccordionSection title="Shipping & Returns">
                {product.shipping}
              </AccordionSection>
            </div>
          </div>
        </div>

        {/* Related products */}
        <section className="mt-24">
          <h2 className="heading-sm text-center mb-10">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((item) => (
              <Link key={item.id} to={`/product/${item.id}`} className="group block">
                <div className="aspect-square bg-velmora-muted mb-4 overflow-hidden">
                  <img
                    alt={item.name}
                    data-strk-img-id={`related-${item.id}`}
                    data-strk-img={`[${item.descId}] [${item.titleId}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span id={item.titleId} className="hidden">{item.name}</span>
                  <span id={item.descId} className="hidden">{item.summary}</span>
                </div>
                <p className="product-name group-hover:text-velmora-accent transition-colors">{item.name}</p>
                <p className="text-sm font-medium mt-1">{formatPrice(item.price)}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
