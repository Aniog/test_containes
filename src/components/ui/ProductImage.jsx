import productImageSearchMap from '@/data/imageSearchMap';

export default function ProductImage({ imageKey, alt, className = '', ratio = '4x5', width = 600, ...props }) {
  const searchQuery = productImageSearchMap[imageKey] || imageKey;

  return (
    <img
      alt={alt}
      className={className}
      data-strk-img-id={imageKey}
      data-strk-img={searchQuery}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
      {...props}
    />
  );
}
