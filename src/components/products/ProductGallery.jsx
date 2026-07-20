import { placeholderSrc } from "../../data/storefront.js";

const ProductGallery = ({ product, activeIndex, onChange, idPrefix = "product-gallery" }) => {
  const activeImage = product.gallery[activeIndex] || product.gallery[0];
  const titleId = `${idPrefix}-${product.slug}-title`;
  const descId = `${idPrefix}-${product.slug}-${activeImage.id}-desc`;

  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-[2rem] bg-stone-100">
        <div className="aspect-[4/5] overflow-hidden">
          <img
            key={activeImage.id}
            alt={activeImage.alt}
            className="h-full w-full object-cover"
            data-strk-img-id={`${idPrefix}-${product.slug}-${activeImage.id}-main`}
            data-strk-img={`[${descId}] [${titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="1200"
            src={placeholderSrc}
          />
        </div>
      </div>

      <p id={titleId} className="hidden">
        {product.name}
      </p>
      <p id={descId} className="hidden">
        {activeImage.description}
      </p>

      <div className="grid grid-cols-3 gap-3">
        {product.gallery.map((image, index) => {
          const thumbDescId = `${idPrefix}-${product.slug}-${image.id}-thumb-desc`;
          return (
            <button
              key={image.id}
              type="button"
              className={`overflow-hidden rounded-[1.25rem] border transition ${
                activeIndex === index
                  ? "border-stone-950"
                  : "border-stone-200 hover:border-amber-600"
              }`}
              onClick={() => onChange(index)}
            >
              <img
                alt={image.alt}
                className="aspect-square h-full w-full object-cover"
                data-strk-img-id={`${idPrefix}-${product.slug}-${image.id}-thumb`}
                data-strk-img={`[${thumbDescId}] [${titleId}]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="320"
                src={placeholderSrc}
              />
              <p id={thumbDescId} className="hidden">
                {image.description}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProductGallery;
