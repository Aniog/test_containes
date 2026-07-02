import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ShoppingBag, Check } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import Button from '../components/ui/Button';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-4 text-sm uppercase tracking-wider font-medium"
      >
        {title}
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-80 pb-4' : 'max-h-0'
        }`}
      >
        <div className="text-sm text-stone leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export default function ProductPage() {
  const { id } = useParams();
  const { addItem } = useCart();
  const product = products.find((p) => p.id === Number(id));

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedMaterial, setSelectedMaterial] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const relatedProducts = useMemo(
    () =>
      products
        .filter((p) => p.id !== Number(id) && p.category === product?.category)
        .slice(0, 4),
    [id, product]
  );

  if (!product) {
    return (
      <div className="pt-18 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-foreground">Product Not Found</h1>
          <Link to="/shop" className="text-accent text-sm mt-4 inline-block hover:underline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      material: selectedMaterial,
      quantity,
    });
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="pt-18">
      {/* Breadcrumb */}
      <div className="max-w-8xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center gap-2 text-xs text-stone">
          <Link to="/" className="hover:text-accent transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-accent transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>
      </div>

      {/* Product section */}
      <div className="max-w-8xl mx-auto px-4 md:px-8 pb-20 md:pb-28">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          {/* Left: Image gallery */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="aspect-square bg-ivory rounded-sm overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`w-20 h-20 rounded-sm overflow-hidden border-2 transition-all duration-300 ${
                      selectedImage === i
                        ? 'border-accent'
                        : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product details */}
          <div className="flex flex-col">
            {/* Category label */}
            <span className="text-xs uppercase tracking-[0.15em] text-stone">
              {product.category}
            </span>

            {/* Product name */}
            <h1 className="font-serif text-3xl md:text-4xl uppercase tracking-wider mt-2 text-foreground">
              {product.name}
            </h1>

            {/* Price */}
            <p className="text-2xl font-sans font-medium mt-3">${product.price}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-accent text-accent'
                        : 'text-muted'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-stone">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            {/* Description */}
            <p className="text-sm text-stone leading-relaxed mt-6">
              {product.description}
            </p>

            {/* Material variant */}
            <div className="mt-8">
              <h3 className="text-xs uppercase tracking-[0.15em] font-medium mb-3">Finish</h3>
              <div className="flex gap-3">
                {['gold', 'silver'].map((material) => (
                  <button
                    key={material}
                    onClick={() => setSelectedMaterial(material)}
                    className={`px-6 py-2.5 text-sm rounded-none border transition-all duration-300 ${
                      selectedMaterial === material
                        ? 'border-foreground bg-foreground text-background'
                        : 'border-border text-stone hover:border-foreground'
                    }`}
                  >
                    {material.charAt(0).toUpperCase() + material.slice(1)} Tone
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to cart */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-xs uppercase tracking-[0.15em] font-medium">Qty</span>
                <div className="flex items-center border border-border">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-sm hover:text-accent transition-colors"
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span className="px-4 py-2 text-sm font-medium min-w-[3rem] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(Math.min(10, quantity + 1))}
                    className="px-3 py-2 text-sm hover:text-accent transition-colors"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>

              <Button
                variant="primary"
                size="lg"
                className={`w-full flex items-center justify-center gap-2 transition-all ${
                  addedToCart ? 'bg-green-600 hover:bg-green-700' : ''
                }`}
                onClick={handleAddToCart}
              >
                {addedToCart ? (
                  <>
                    <Check className="w-4 h-4" />
                    Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    Add to Cart — ${(product.price * quantity).toFixed(2)}
                  </>
                )}
              </Button>

              <p className="text-[11px] text-stone text-center uppercase tracking-wider">
                Free Shipping & 30-Day Returns
              </p>
            </div>

            {/* Accordions */}
            <div className="mt-10 border-t border-border">
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <div className="space-y-3">
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-medium text-foreground mb-1">Materials</h4>
                    <p>{product.details.materials}</p>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-medium text-foreground mb-1">Care Instructions</h4>
                    <p>{product.details.care}</p>
                  </div>
                </div>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.details.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 md:mt-28 pt-12 border-t border-border">
            <h2 className="font-serif text-2xl md:text-3xl text-center mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((rp) => (
                <Link
                  key={rp.id}
                  to={`/product/${rp.id}`}
                  className="group bg-card rounded-sm overflow-hidden"
                >
                  <div className="aspect-square overflow-hidden bg-ivory">
                    <img
                      src={rp.images[0]}
                      alt={rp.name}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-3 md:p-4">
                    <h3 className="font-serif text-xs md:text-sm uppercase tracking-wider truncate">
                      {rp.name}
                    </h3>
                    <p className="text-xs md:text-sm text-stone mt-1">${rp.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}