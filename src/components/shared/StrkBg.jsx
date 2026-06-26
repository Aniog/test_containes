export default function StrkBg({ id, query, ratio = '16x9', width = 1600, className }) {
  return (
    <div
      aria-hidden="true"
      className={className}
      data-strk-bg-id={id}
      data-strk-bg={query}
      data-strk-bg-ratio={ratio}
      data-strk-bg-width={width}
    />
  )
}
