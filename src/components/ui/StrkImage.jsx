import { resolveImgUrl } from '@/lib/utils'

// A content image wired to the strk-img tagging system.
// `imgId` must be globally unique and present in strk-img-config.json.
// The URL is resolved at runtime from the build config so the Vite plugin
// does not need to statically resolve dynamic imgId expressions.
export default function StrkImage({
  imgId,
  ratio = '4x5',
  width = 600,
  alt = '',
  className,
  ...rest
}) {
  return (
    <img
      src={resolveImgUrl(imgId)}
      alt={alt}
      className={className}
      loading="lazy"
      {...rest}
    />
  )
}
