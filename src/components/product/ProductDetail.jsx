import { useState } from 'react';
import { Star, Minus, Plus, ChevronDown } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

function Accordion({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-border/50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm tracking-widest uppercase">{title}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <div className="text-sm text-muted-foreground leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'gold');
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="serif-heading text-3xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-outline inline-block">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="pt-16 md:pt-24">
      <div className="container-wide py-6 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="flex flex-col gap-3">
            {/* Main Image */}
            <div className="aspect-[3/4] rounded overflow-hidden bg-secondary">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails - horizontal on mobile */}
            <div className="flex gap-2 overflow-x-auto pb-1">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-16 h-20 rounded overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-accent' : 'border-transparent hover:border-border'
                  }`}
                >
                  <img src={img} alt={`${product.name} view ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:py-4">
            {product.badge && (
              <span className="inline-block bg-accent/10 text-accent text-[10px] md:text-xs tracking-widest uppercase px-3 py-1 mb-3 md:mb-4">
                {product.badge}
              </span>
            )}
            <h1 className="product-name text-2xl md:text-3xl lg:text-4xl mb-2 md:mb-3">{product.name}</h1>

            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 md:w-4 md:h-4 ${i < Math.floor(product.rating) ? 'fill-accent text-accent' : 'text-muted'}`}
                  />
                ))}
              </div>
              <span className="text-xs md:text-sm text-muted-foreground">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="serif-heading text-xl md:text-2xl mb-4 md:mb-6">${product.price}</p>

            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6 md:mb-8">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-5 md:mb-6">
              <p className="text-xs md:text-sm tracking-widest uppercase mb-2 md:mb-3">Finish</p>
              <div className="flex gap-2 md:gap-3 flex-wrap">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-4 md:px-6 py-2 md:py-2.5 text-xs md:text-sm tracking-wider capitalize rounded-full border transition-all ${
                      selectedVariant === variant
                        ? 'border-accent bg-accent/10 text-accent'
                        : 'border-border/50 text-muted-foreground hover:border-foreground/30'
                    }`}
                  >
                    {variant} tone
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6 md:mb-8">
              <p className="text-xs md:text-sm tracking-widest uppercase mb-2 md:mb-3">Quantity</p>
              <div className="flex items-center border border-border/50 rounded w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2.5 md:p-3 hover:text-accent transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5 md:w-4 md:h-4" />
                </button>
                <span className="px-4 md:px-6 text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2.5 md:p-3 hover:text-accent transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5 md:w-4 md:h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button onClick={handleAddToCart} className="w-full btn-accent mb-3 md:mb-4 py-3 md:py-3.5">
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            <p className="text-xs text-muted-foreground text-center">
              Free shipping on all orders · 30-day returns
            </p>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
                <p className="mt-3">Each piece is carefully crafted and quality-checked before shipping. Our demi-fine jewelry is designed to be worn daily while maintaining its luster and beauty.</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>18K gold plated over sterling silver base. Hypoallergenic and nickel-free.</p>
                <p className="mt-3">To maintain the finish, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing. Gently polish with a soft cloth.</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>Free worldwide shipping on all orders. Standard delivery takes 5-10 business days. Express shipping available at checkout.</p>
                <p className="mt-3">30-day hassle-free returns. Items must be unworn and in original packaging. Gift sets are final sale.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20 pt-12 border-t border-border/50">
          <h2 className="serif-heading text-3xl md:text-4xl text-center mb-10">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products
              .filter(p => p.id !== product.id)
              .slice(0, 4)
              .map((related) => (
                <Link key={related.id} to={`/product/${related.id}`} className="group">
                  <div className="aspect-[3/4] bg-secondary rounded overflow-hidden mb-3">
                    <img
                      src={related.images[0]}
                      alt={related.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="product-name text-sm group-hover:text-accent transition-colors">{related.name}</h3>
                  <p className="text-sm text-muted-foreground">${related.price}</p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
