import strkImgConfig from "@/strk-img-config.json";

/**
 * Resolve a real image URL by id from the build-time strk-img-config.
 * Called at render time; the returned URL is rendered directly as the
 * <img src>, so the browser has a real URL on first paint — no
 * placeholder "pop" and no runtime resolution pass.
 */
function imgUrl(imgId) {
  if (!imgId) return "";
  const entry = strkImgConfig[imgId];
  const results = entry?.results;
  if (!Array.isArray(results) || results.length === 0) return "";
  const picked = entry.picked
    ? results.find((r) => String(r.id) === String(entry.picked))
    : null;
  return picked?.url || results[0]?.url || "";
}

/**
 * Direct, first-paint-ready <img> element.
 *
 * The src is resolved at render time from the bundled strk-img-config.
 * `data-strk-img-id` is preserved so external tooling that inspects
 * the DOM (and the build-time image inliner) can still see it.
 */
export default function InlineImage({
  imgId,
  query,
  ratio = "4x3",
  width = 800,
  alt = "",
  className = "",
  objectFit = "object-cover",
  eager = false,
}) {
  return (
    <img
      alt={alt}
      data-strk-img-id={imgId}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={String(width)}
      src={imgUrl(imgId)}
      loading={eager ? "eager" : "lazy"}
      className={`block w-full h-full ${objectFit} ${className}`}
    />
  );
}

/**
 * Background-image variant. Resolves the URL at render time and applies
 * it as a CSS background-image style.
 */
export function InlineBackground({
  id,
  query,
  ratio = "16x9",
  width = 1600,
  className = "",
  style,
}) {
  const url = imgUrl(id);
  const mergedStyle = {
    backgroundImage: url ? `url(${url})` : undefined,
    backgroundSize: "cover",
    backgroundPosition: "center",
    ...style,
  };
  return (
    <div
      data-strk-bg-id={id}
      data-strk-bg={query}
      data-strk-bg-ratio={ratio}
      data-strk-bg-width={String(width)}
      className={`absolute inset-0 bg-no-repeat ${className}`}
      style={mergedStyle}
      aria-hidden="true"
    />
  );
}
