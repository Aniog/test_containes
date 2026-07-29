const BulletList = ({
  items,
  className = '',
  itemClassName = 'text-slate-700',
  dotClassName = 'bg-sky-700',
}) => {
  return (
    <ul className={`space-y-3 ${className}`.trim()}>
      {items.map((item) => (
        <li key={item} className={`flex gap-3 text-base leading-7 ${itemClassName}`.trim()}>
          <span className={`mt-2 h-2.5 w-2.5 rounded-full ${dotClassName}`.trim()} aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default BulletList
