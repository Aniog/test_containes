import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { getImageUrl } from '@/lib/getImageUrl';

const ProductCard = ({ product }) => {
  const { addItem } = useCart();
  const imgSrc = getImageUrl(product.imgId);
  const hoverSrc = getImageUrl(product.imgId2);

  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`} className="block">
        {/* Image container */}
        <div className="relative aspect-[3/4] bg-brand-ivory overflow-hidden mb-3">
          <img
            src={imgSrc}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Hover second image */}
          <img
            src={hoverSrc}
            alt={`${product.name} alternate view`}
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
        </div>

        {/* Info */}
        <h3
          id={product.titleId}
          className="text-[11px] font-sans font-medium tracking-product uppercase text-brand-charcoal"
        >
          {product.name}
        </h3>
        <p id={product.descId} className="sr-only">{product.description}</p>
        <p className="mt-1 text-sm text-brand-muted">${product.price}</p>
      </Link>

      {/* Quick add */}
      <button
        onClick={(e) => {
          e.preventDefault();
          addItem(product);
        }}
        className="absolute bottom-[72px] left-0 right-0 mx-2 bg-brand-charcoal/90 text-white text-xs font-medium tracking-wide-nav uppercase py-2.5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-brand-gold"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
