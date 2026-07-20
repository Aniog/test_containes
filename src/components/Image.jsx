import { forwardRef } from "react";

const PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

const Image = forwardRef(
  (
    {
      alt = "",
      ratio = "1x1",
      width = 600,
      imgId,
      query,
      className = "",
      ...props
    },
    ref,
  ) => {
    return (
      <img
        ref={ref}
        alt={alt}
        className={className}
        data-strk-img={query}
        data-strk-img-id={imgId}
        data-strk-img-ratio={ratio}
        data-strk-img-width={width}
        src={PLACEHOLDER}
        {...props}
      />
    );
  },
);
Image.displayName = "Image";

export default Image;
