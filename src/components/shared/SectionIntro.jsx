const SectionIntro = ({ eyebrow, title, description, action }) => {
  return (
    <div className="mb-10 flex flex-col gap-4 md:mb-14 md:max-w-2xl">
      {eyebrow ? (
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-champagne">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-editorial text-4xl leading-none text-velvet sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-xl text-base leading-7 text-truffle md:text-lg">
          {description}
        </p>
      ) : null}
      {action ? <div>{action}</div> : null}
    </div>
  )
}

export default SectionIntro
