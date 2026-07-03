import { cn } from '../../lib/utils'

const placeholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

function buildQuery(queryIds) {
  return queryIds.map((queryId) => `[${queryId}]`).join(' ')
}

export function StrkImage({
  id,
  alt,
  queryIds,
  ratio = '4x3',
  width = '800',
  className,
}) {
  return (
    <img
      alt={alt}
      className={cn('h-full w-full object-cover', className)}
      data-strk-img-id={id}
      data-strk-img={buildQuery(queryIds)}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      src={placeholder}
    />
  )
}

export function StrkBackground({
  id,
  queryIds,
  ratio = '16x9',
  width = '1600',
  className,
}) {
  return (
    <div
      className={cn('bg-obsidian/10 bg-cover bg-center', className)}
      data-strk-bg-id={id}
      data-strk-bg={buildQuery(queryIds)}
      data-strk-bg-ratio={ratio}
      data-strk-bg-width={width}
    />
  )
}
