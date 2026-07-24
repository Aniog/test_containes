import { cn } from '@/lib/utils'
import { getStrkImgUrl } from '@/lib/strk-img-url'

export default function StrkImg({
  imgId,
  query,
  ratio = '3x4',
  width = 800,
  alt = '',
  className,
  ...rest
}) {
  return (
    <img
      data-strk-img-id={imgId}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={String(width)}
      src={getStrkImgUrl(imgId)}
      alt={alt}
      loading="lazy"
      className={cn('object-cover w-full h-full bg-sand', className)}
      {...rest}
    />
  )
}
