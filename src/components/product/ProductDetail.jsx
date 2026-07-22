import { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '@/data/products';
import { Star, Minus, Plus, ChevronDown, ChevronUp, Truck, Shield, RotateCcw } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/Button';
import { toast } from 'sonner';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);
  const { addToCart } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

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

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
    toast.success(`${product.name} added to cart`);
  };

  const accordionItems = [
    {
      title: 'Description',
      content: product.description,
    },
    {
      title: 'Materials & Care',
      content: 'Crafted with a brass base and finished with 18K gold plating. To maintain the luster, avoid contact with water, perfumes, and lotions. Store in the provided velvet pouch when not wearing. Clean gently with a soft, dry cloth.',
    },
    {
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. Standard delivery takes 5-10 business days. Express shipping available at checkout. We offer hassle-free 30-day returns for unworn items in original packaging.',
    },
  ];

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="text-xs text-muted-foreground mb-8 tracking-wide">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-primary transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[3/4] bg-secondary rounded-sm overflow-hidden mb-4">
              <img
                data-strk-img-id={`${product.id}-detail-${selectedImage}`}
                data-strk-img={`[${product.id}-desc] [${product.id}-title] [product-detail-title]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square w-20 bg-secondary rounded-sm overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-primary' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`${product.id}-thumb-${index}`}
                    data-strk-img={`[${product.id}-desc] [${product.id}-title] [product-detail-title]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:py-4">
            {product.badge && (
              <span className="inline-block bg-primary/10 text-primary text-xs tracking-widest uppercase px-3 py-1 mb-4">
                {product.badge}
              </span>
            )}
            <h1 id={`${product.id}-title`} className="product-name text-2xl md:text-3xl mb-3">{product.name}</h1>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-primary text-primary" />
                <span className="text-sm font-medium">{product.rating}</span>
              </div>
              <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
            </div>

            <p className="serif-heading text-2xl md:text-3xl mb-6">${product.price}</p>

            <p id={`${product.id}-desc`} className="text-sm text-muted-foreground leading-relaxed mb-8">{product.shortDescription}</p>

            {/* Variant Selector */}
            <div className="mb-6">
              <p className="text-sm tracking-wide uppercase mb-3">Color</p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2 text-sm tracking-wider capitalize border transition-all duration-300 ${
                      selectedVariant === variant
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-border/50 hover:border-primary'
                    }`}
                  >
                    {variant} tone
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-sm tracking-wide uppercase mb-3">Quantity</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="h-10 w-10 border border-border/50 flex items-center justify-center hover:border-primary transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="text-lg w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="h-10 w-10 border border-border/50 flex items-center justify-center hover:border-primary transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <Button onClick={handleAddToCart} className="w-full mb-6">
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </Button>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-4 py-6 border-t border-b border-border/50 mb-8">
              <div className="text-center">
                <Truck className="h-5 w-5 mx-auto mb-2 text-primary" />
                <p className="text-xs text-muted-foreground">Free Shipping</p>
              </div>
              <div className="text-center">
                <Shield className="h-5 w-5 mx-auto mb-2 text-primary" />
                <p className="text-xs text-muted-foreground">18K Gold Plated</p>
              </div>
              <div className="text-center">
                <RotateCcw className="h-5 w-5 mx-auto mb-2 text-primary" />
                <p className="text-xs text-muted-foreground">30-Day Returns</p>
              </div>
            </div>

            {/* Accordions */}
            <div className="divide-y divide-border/50">
              {accordionItems.map((item, index) => (
                <div key={index} className="py-4">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                    className="flex w-full items-center justify-between text-left"
                  >
                    <span className="serif-heading text-lg">{item.title}</span>
                    {openAccordion === index ? (
                      <ChevronUp className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === index ? 'max-h-96 pt-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20">
          <h2 className="serif-heading text-3xl text-center mb-10">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((related) => (
              <Link key={related.id} to={`/product/${related.id}`} className="group">
                <div className="aspect-[3/4] bg-secondary rounded-sm overflow-hidden mb-3">
                  <img
                    data-strk-img-id={`${related.id}-related`}
                    data-strk-img={`[${related.id}-desc] [${related.id}-title] [related-products-title]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    alt={related.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="product-name text-xs md:text-sm mb-1">{related.name}</h3>
                <p className="text-sm font-medium">${related.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
