import { useEffect, useState } from 'react'

const stats = [
  { label: 'Happy Students', value: 420 },
  { label: 'Annual Activities', value: 28 },
  { label: 'Awards Won', value: 14 },
  { label: 'Trusted Parents', value: 180 }
]

function Achievements() {
  const [counts, setCounts] = useState(stats.map(() => 0))

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((current, index) => {
          const target = stats[index].value
          if (current >= target) return target
          return Math.min(target, current + Math.ceil(target / 20))
        })
      )
    }, 80)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="achievements" className="section-block reveal">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-label">Achievements</div>
          <h2 className="section-title">Small milestones that add up to big confidence.</h2>
        </div>
        <div className="row g-4 mt-4">
          {stats.map((item, index) => (
            <div className="col-sm-6 col-lg-3" key={item.label}>
              <div className="achievement-card card border-0 shadow-sm p-4 h-100 text-center">
                <div className="achievement-count">{counts[index]}</div>
                <div className="achievement-label">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
