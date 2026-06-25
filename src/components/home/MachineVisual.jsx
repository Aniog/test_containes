const accentClasses = {
  amber: 'fill-amber-500 stroke-amber-300',
  slate: 'fill-slate-400 stroke-slate-300',
  white: 'fill-white stroke-white',
}

export default function MachineVisual({ title = 'Metal folding machine illustration', accent = 'amber', compact = false }) {
  const accentClass = accentClasses[accent] || accentClasses.amber

  return (
    <div className="relative overflow-hidden rounded-[1.5rem] bg-slate-900 text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-700/40 via-slate-900 to-slate-950" />
      <div className="absolute left-8 top-8 h-24 w-24 rounded-full bg-amber-500/20 blur-2xl" />
      <div className="absolute bottom-8 right-8 h-32 w-32 rounded-full bg-white/10 blur-3xl" />
      <svg
        className={compact ? 'relative h-64 w-full' : 'relative h-[360px] w-full sm:h-[460px]'}
        viewBox="0 0 720 520"
        role="img"
        aria-label={title}
      >
        <path className="fill-slate-800" d="M88 380h552v46H88z" />
        <path className="fill-slate-700" d="M136 324h436l68 56H88z" />
        <path className="fill-slate-950 stroke-slate-600" strokeWidth="8" d="M176 190h368v146H176z" />
        <path className="fill-slate-800" d="M204 222h252v56H204z" />
        <path className={accentClass} strokeWidth="4" d="M204 302h336v22H204z" />
        <path className="fill-slate-700" d="M142 168h436v42H142z" />
        <path className="fill-slate-600" d="M116 132h488v44H116z" />
        <path className="fill-slate-950" d="M160 426h74v54h-74zM486 426h74v54h-74z" />
        <path className="fill-slate-700" d="M580 238h72v108h-72z" />
        <circle className="fill-amber-400" cx="616" cy="268" r="10" />
        <circle className="fill-emerald-400" cx="616" cy="302" r="10" />
        <path className="stroke-slate-500" strokeWidth="10" strokeLinecap="round" d="M226 248h188M226 276h120M586 210v-68" />
        <path className="stroke-amber-300" strokeWidth="8" strokeLinecap="round" d="M212 348h302" />
      </svg>
    </div>
  )
}
