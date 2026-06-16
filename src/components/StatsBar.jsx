import { useEffect, useRef, useState } from 'react'
import './StatsBar.css'

const STATS = [
  { label: 'Products', value: 1287 },
  { label: 'Reviews', value: 5786 },
  { label: 'Brands', value: 1440 },
  { label: 'Orders', value: 7110 },
]

function Stat({ value, label }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  const done = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !done.current) {
        done.current = true
        const dur = 1500
        const start = performance.now()
        const tick = (now) => {
          const p = Math.min((now - start) / dur, 1)
          setVal(Math.round(value * (1 - Math.pow(1 - p, 3))))
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.5 })
    io.observe(node)
    return () => io.disconnect()
  }, [value])

  return (
    <div className="stat" ref={ref}>
      <strong>{val.toLocaleString('en-US')}+</strong>
      <span>{label}</span>
    </div>
  )
}

export default function StatsBar() {
  return (
    <div className="statsbar">
      <div className="container statsbar-inner">
        {STATS.map((s) => <Stat key={s.label} {...s} />)}
      </div>
    </div>
  )
}
