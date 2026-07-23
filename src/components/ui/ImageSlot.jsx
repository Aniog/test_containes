import { cn } from '@/lib/utils'
import strkImgConfig from '@/strk-img-config.json'

const getResolvedImageSrc = (slotId) => {
  const slotConfig = strkImgConfig[slotId]

  if (!slotConfig?.results?.length) {
    return ''
  }

  return (
    slotConfig.results.find((result) => result.id === slotConfig.picked)?.url ||
    slotConfig.results[0]?.url ||
    ''
  )
}

export const ImageSlot = ({
  slotId,
  query,
  ratio,
  width,
  alt,
  className,
}) => (
  <img
    src={getResolvedImageSrc(slotId)}
    alt={alt}
    className={cn('h-full w-full object-cover', className)}
    data-strk-img-id={slotId}
    data-strk-img={query}
    data-strk-img-ratio={ratio}
    data-strk-img-width={width}
    loading="lazy"
  />
)
