import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 100000, suffix: '+', label: '注册用户', desc: '来自全球各地的信任' },
  { value: 50, suffix: '+', label: '覆盖国家', desc: '全球化服务网络' },
  { value: 99.9, suffix: '%', label: '正常运行时间', desc: '稳定可靠的保障' },
  { value: 500, suffix: 'M+', label: '处理交易', desc: '安全高效每一笔' },
]

const useCountUp = (target, duration = 2000, start = false) => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(progress * target)
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, start])
  return count
}

const StatItem = ({ value, suffix, label, desc, started }) => {
  const count = useCountUp(value, 1800, started)
  const display = value % 1 !== 0
    ? count.toFixed(1)
    : Math.floor(count).toLocaleString()

  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-extrabold text-yellow-900 mb-1">
        {display}{suffix}
      </div>
      <div className="text-yellow-800 font-semibold text-lg mb-1">{label}</div>
      <div className="text-yellow-600 text-sm">{desc}</div>
    </div>
  )
}

const Stats = () => {
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="bg-gradient-to-r from-yellow-400 to-amber-400 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-900">
            数字见证实力
          </h2>
          <p className="text-yellow-800 mt-3 text-lg">每一个数字背后，都是我们对用户的承诺</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((s) => (
            <StatItem key={s.label} {...s} started={started} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
