import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchProductBySlug, fetchProducts } from "@/api/products";
import { useCart } from "@/context/CartContext";
import StarRating from "@/components/StarRating";
import ProductCard from "@/components/ProductCard";
import { ChevronDown, Minus, Plus, Truck, RotateCcw, ShieldCheck } from "lucide-react";
import { toast } from "sonner";

export default function ProductDetail() {
  const { slug } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [allProducts, setAllProducts] = useState([]);
  const [status, setStatus] = useState("loading");
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState("gold");
  const [openAccordion, setOpenAccordion] = useState(null);
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    setStatus("loading");
    setQuantity(1);
    setVariant("gold");
    setOpenAccordion(null);
    fetchProductBySlug(slug)
      .then((data) => {
        setProduct(data);
        setMainImage(data?.data?.image_url || data?.image_url || "");
        setStatus("ready");
      })
      .catch(() => setStatus("error"));
    fetchProducts().then((data) => setAllProducts(data));
  }, [slug]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (status === "error" || !product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <p className="serif text-xl mb-4">Product not found</p>
          <Link to="/shop" className="text-accent hover:underline text-sm uppercase tracking-widest">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const data = product.data || product;
  const thumbnails = [data.image_url, data.hover_image_url].filter(Boolean);
  const related = allProducts.filter((p) => (p.data?.slug || p.slug) !== data.slug).slice(0, 4);

  const handleAdd = () => {
    addToCart(product, quantity, variant);
    toast.success("Added to cart");
  };

  const accordions = [
    {
      key: "desc",
      title: "Description",
      content: data.long_description || data.description,
    },
    {
      key: "care",
      title: "Materials & Care",
      content: data.materials_care || "18K gold plated. Lead-free, nickel-free, hypoallergenic. Wipe clean with a soft cloth and store in a dry pouch.",
    },
    {
      key: "ship",
      title: "Shipping & Returns",
      content: "Free worldwide shipping on all orders. Orders ship within 1-2 business days. 30-day hassle-free returns on unworn items in original packaging.",
    },
  ];

  return (
    <div className="bg-cream min-h-screen pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-warm-gray mb-8 uppercase tracking-wider">
          <Link to="/" className="hover:text-accent">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-accent">Shop</Link>
          <span>/</span>
          <span className="text-charcoal">{data.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Images */}
          <div className="space-y-3">
            <div className="aspect-square bg-cream-dark rounded-sm overflow-hidden">
              <img src={mainImage} alt={data.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex gap-3">
              {thumbnails.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setMainImage(src)}
                  className={`w-20 h-20 md:w-24 md:h-24 rounded-sm overflow-hidden border-2 transition-colors ${mainImage === src ? "border-accent" : "border-transparent"}`}
                >
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="md:py-4">
            <div className="flex items-center gap-2 mb-3">
              <StarRating rating={data.rating || 0} size={14} />
              <span className="text-xs text-warm-gray">({data.review_count || 0} reviews)</span>
            </div>
            <h1 className="serif text-2xl md:text-3xl font-medium uppercase tracking-[0.15em] mb-3">{data.name}</h1>
            <p className="text-xl font-medium mb-6">${data.price}</p>
            <p className="text-sm text-warm-gray leading-relaxed mb-6">{data.description}</p>

            {/* Variant */}
            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-widest mb-3">Tone</p>
              <div className="flex gap-3">
                {["gold", "silver"].map((t) => (
                  <button
                    key={t}
                    onClick={() => setVariant(t)}
                    className={`px-5 py-2 text-xs font-medium uppercase tracking-widest border rounded-full transition-all ${variant === t ? "border-charcoal bg-charcoal text-cream" : "border-divider hover:border-warm-gray"}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-widest mb-3">Quantity</p>
              <div className="inline-flex items-center border border-divider rounded-sm">
                <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="w-10 h-10 flex items-center justify-center hover:bg-cream-dark transition-colors">
                  <Minus size={14} />
                </button>
                <span className="w-10 text-center text-sm">{quantity}</span>
                <button onClick={() => setQuantity((q) => q + 1)} className="w-10 h-10 flex items-center justify-center hover:bg-cream-dark transition-colors">
                  <Plus size={14} />
                </button>
              </div>
            </div>

            <button
              onClick={handleAdd}
              className="w-full bg-accent text-cream py-4 text-xs font-semibold uppercase tracking-[0.2em] hover:bg-accent-hover transition-colors mb-6"
            >
              Add to Cart
            </button>

            <div className="grid grid-cols-3 gap-3 mb-8">
              <div className="flex flex-col items-center text-center gap-2 p-3 border border-divider rounded-sm">
                <Truck size={18} className="text-accent" />
                <span className="text-[10px] uppercase tracking-wider text-warm-gray">Free Shipping</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2 p-3 border border-divider rounded-sm">
                <RotateCcw size={18} className="text-accent" />
                <span className="text-[10px] uppercase tracking-wider text-warm-gray">30-Day Returns</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2 p-3 border border-divider rounded-sm">
                <ShieldCheck size={18} className="text-accent" />
                <span className="text-[10px] uppercase tracking-wider text-warm-gray">Hypoallergenic</span>
              </div>
            </div>

            {/* Accordions */}
            <div className="border-t border-divider">
              {accordions.map((acc) => (
                <div key={acc.key} className="border-b border-divider">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === acc.key ? null : acc.key)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm font-medium uppercase tracking-widest">{acc.title}</span>
                    <ChevronDown size={16} className={`transition-transform ${openAccordion === acc.key ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`overflow-hidden transition-all ${openAccordion === acc.key ? "max-h-96 pb-4" : "max-h-0"}`}>
                    <p className="text-sm text-warm-gray leading-relaxed">{acc.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <div className="border-t border-divider">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
            <h2 className="serif text-2xl md:text-3xl font-light text-center mb-10">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
