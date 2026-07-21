const ToastNotice = ({ message }) => {
  return (
    <div
      className={`pointer-events-none fixed bottom-5 right-5 z-[60] rounded-full border border-white/10 bg-noir px-5 py-3 text-sm text-ivory shadow-card transition duration-300 ${
        message ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
      }`}
      role="status"
      aria-live="polite"
    >
      {message || ' '}
    </div>
  )
}

export default ToastNotice
