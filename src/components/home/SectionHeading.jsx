export default function SectionHeading({ eyebrow, title, children, align = 'center' }) {
  return (
    <div className={align === 'left' ? 'max-w-2xl' : 'mx-auto max-w-2xl text-center'}>
      <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#B9853B]">{eyebrow}</p>
      <h2 className="mt-3 font-serif text-4xl leading-tight tracking-tight text-[#17110D] md:text-5xl">{title}</h2>
      {children && <p className="mt-4 text-sm leading-7 text-[#8D7463] md:text-base">{children}</p>}
    </div>
  )
}
