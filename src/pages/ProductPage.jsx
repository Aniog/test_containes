import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { toast } from 'sonner';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm tracking-wider uppercase font-medium">{title}</span>
        {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <div className="text-sm text-muted-foreground leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'gold');
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    setSelectedImage(0);
    setSelectedVariant(product?.variants[0] || 'gold');
    setQuantity(1);
  }, [id, product]);

  useEffect(() => {
    if (containerRef.current) {
      const frameId = requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => cancelAnimationFrame(frameId);
    }
  }, [id, selectedImage]);

  if (!product) {
    return (
      <div className="section-padding py-32 text-center">
        <h1 className="serif-heading text-3xl mb-4">Product Not Found</h1>
        <Link to="/shop" className="btn-outline inline-block">Back to Shop</Link>
      </div>
    );
  }

  const relatedProducts = products.filter(p => product.related?.includes(p.id));

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    toast.success(`${product.shortName} added to cart`);
  };

  return (
    <div ref={containerRef} className="pt-20 lg:pt-24">
      {/* Product Section */}
      <div className="section-padding py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div>
            {/* Hidden text elements for stock image queries */}
            {product.images.map((img) => (
              <span key={img.id} id={`${img.id}-title`} className="sr-only">
                gold {product.category === 'hoop-earrings' ? 'hoop' : product.category} earrings
              </span>
            ))}
            <span id="product-detail" className="sr-only">Velmora Fine Jewelry</span>

            <div className="aspect-[3/4] bg-secondary rounded-sm overflow-hidden mb-4">
              <img
                data-strk-img-id={`product-${product.images[selectedImage].id}`}
                data-strk-img={`[${product.images[selectedImage].id}-title] [product-detail]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.shortName}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setSelectedImage(i)}
                  className={`w-20 h-24 bg-secondary rounded-sm overflow-hidden border-2 transition-colors ${
                    i === selectedImage ? 'border-accent' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`product-thumb-${img.id}`}
                    data-strk-img={`[${img.id}-title] [product-detail]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.shortName}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:py-4">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">{product.category}</p>
            <h1 className="product-name text-3xl lg:text-4xl mb-4">{product.shortName}</h1>

            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1">
                <Star size={16} className="fill-accent text-accent" />
                <span className="text-sm font-medium">{product.rating}</span>
              </div>
              <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
            </div>

            <p className="text-2xl font-light mb-6">${product.price}</p>

            <p className="text-muted-foreground leading-relaxed mb-8">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-6">
              <p className="text-sm tracking-wider uppercase mb-3 font-medium">Finish</p>
              <div className="flex gap-3">
                {product.variants.map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2.5 text-sm tracking-wider capitalize border transition-all duration-200 ${
                      selectedVariant === variant
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-border hover:border-accent'
                    }`}
                  >
                    {variant} tone
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-sm tracking-wider uppercase mb-3 font-medium">Quantity</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center border border-border rounded-sm hover:border-accent transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="text-lg w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center border border-border rounded-sm hover:border-accent transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-accent text-accent-foreground py-4 text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300 mb-4"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            <p className="text-xs text-muted-foreground text-center">
              Free shipping on all orders · 30-day returns
            </p>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
                <p className="mt-3">Each piece is carefully crafted and quality-checked before shipping. Our demi-fine jewelry is designed for everyday wear with lasting beauty.</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2"><strong className="text-foreground">Material:</strong> {product.material} over brass base</p>
                <p className="mb-2"><strong className="text-foreground">Care:</strong> Store in the provided pouch. Avoid contact with water, perfume, and lotions. Clean gently with a soft cloth.</p>
                <p><strong className="text-foreground">Hypoallergenic:</strong> Nickel-free and safe for sensitive skin.</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-2"><strong className="text-foreground">Shipping:</strong> Free worldwide shipping. Orders ship within 1-2 business days. Delivery in 5-10 business days.</p>
                <p className="mb-2"><strong className="text-foreground">Returns:</strong> 30-day hassle-free returns. Items must be unworn and in original packaging.</p>
                <p><strong className="text-foreground">Gift wrapping:</strong> Complimentary gift wrapping available at checkout.</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="bg-card py-16 lg:py-20">
          <div className="section-padding">
            <h2 className="serif-heading text-3xl text-center mb-12">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedProducts.map(rp => (
                <Link key={rp.id} to={`/product/${rp.id}`} className="group">
                  <div className="aspect-[3/4] bg-secondary rounded-sm overflow-hidden mb-4">
                    <img
                      data-strk-img-id={`related-${rp.images[0].id}`}
                      data-strk-img={`[${rp.images[0].id}-title] [related-products]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="400"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={rp.shortName}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="product-name text-xs lg:text-sm mb-1 group-hover:text-accent transition-colors">{rp.shortName}</h3>
                  <p className="text-sm font-medium">${rp.price}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
