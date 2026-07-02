import { products } from '@/data/products';

const PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

export default function ProductImageRegistry() {
  return (
    <div
      aria-hidden="true"
      className="sr-only"
      style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
    >
      {products.map((product) => (
        <div key={product.id}>
          <img
            data-strk-img-id={product.detailImgIds[0]}
            data-strk-img={product.images.detailQueries[0]}
            data-strk-img-ratio="4x5"
            data-strk-img-width="800"
            src={PLACEHOLDER}
            alt=""
          />
          <img
            data-strk-img-id={product.detailImgIds[1]}
            data-strk-img={product.images.detailQueries[1]}
            data-strk-img-ratio="4x5"
            data-strk-img-width="800"
            src={PLACEHOLDER}
            alt=""
          />
          <img
            data-strk-img-id={product.detailImgIds[2]}
            data-strk-img={product.images.detailQueries[2]}
            data-strk-img-ratio="4x5"
            data-strk-img-width="800"
            src={PLACEHOLDER}
            alt=""
          />
          <img
            data-strk-img-id={`${product.detailImgIds[0]}-thumb`}
            data-strk-img={product.images.detailQueries[0]}
            data-strk-img-ratio="3x4"
            data-strk-img-width="200"
            src={PLACEHOLDER}
            alt=""
          />
          <img
            data-strk-img-id={`${product.detailImgIds[1]}-thumb`}
            data-strk-img={product.images.detailQueries[1]}
            data-strk-img-ratio="3x4"
            data-strk-img-width="200"
            src={PLACEHOLDER}
            alt=""
          />
          <img
            data-strk-img-id={`${product.detailImgIds[2]}-thumb`}
            data-strk-img={product.images.detailQueries[2]}
            data-strk-img-ratio="3x4"
            data-strk-img-width="200"
            src={PLACEHOLDER}
            alt=""
          />
        </div>
      ))}
    </div>
  );
}
